import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/cases - List cases for the authenticated user
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')

  const where: Record<string, unknown> = {}

  if (auth.role === 'CLIENT') {
    where.clientId = auth.userId
  } else if (auth.role === 'ASSISTANT') {
    where.assistantId = auth.userId
  } else if (auth.role === 'ADVISOR') {
    where.advisorId = auth.userId
  }

  if (status) {
    where.status = status
  }

  const [cases, total] = await Promise.all([
    prisma.case.findMany({
      where,
      include: {
        client: { select: { id: true, name: true, phone: true } },
        advisor: { select: { id: true, name: true } },
        assistant: { select: { id: true, name: true } },
      },
      orderBy: { updatedAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.case.count({ where }),
  ])

  return NextResponse.json({ cases, total, page, limit })
}

// POST /api/cases - Create a new case (Advisor/Assistant only)
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (auth.role === 'CLIENT') {
    return NextResponse.json({ error: 'Clients cannot create cases directly' }, { status: 403 })
  }

  try {
    const body = await request.json()
    const { title, description, caseType, clientId, jurisdiction, state, fee } = body

    if (!title || !description || !caseType || !clientId) {
      return NextResponse.json({ error: 'Title, description, case type, and client are required' }, { status: 400 })
    }

    // Generate case number
    const year = new Date().getFullYear()
    const count = await prisma.case.count()
    const caseNumber = `LA-${year}-${String(count + 1).padStart(4, '0')}`

    const newCase = await prisma.case.create({
      data: {
        caseNumber,
        title,
        description,
        caseType,
        clientId,
        advisorId: auth.role === 'ADVISOR' ? auth.userId : undefined,
        assistantId: auth.role === 'ASSISTANT' ? auth.userId : undefined,
        jurisdiction,
        state,
        fee,
        status: 'CONSULTATION_SCHEDULED',
      },
      include: {
        client: { select: { id: true, name: true, phone: true } },
      },
    })

    return NextResponse.json(newCase, { status: 201 })
  } catch (error) {
    console.error('Create case error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
