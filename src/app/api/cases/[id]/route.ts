import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/cases/[id] - Get case details
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params

  const caseData = await prisma.case.findUnique({
    where: { id },
    include: {
      client: { select: { id: true, name: true, phone: true, email: true } },
      advisor: { select: { id: true, name: true } },
      assistant: { select: { id: true, name: true } },
      hearings: { orderBy: { hearingDate: 'desc' } },
      documents: { orderBy: { createdAt: 'desc' } },
      payments: { orderBy: { createdAt: 'desc' } },
      tasks: { orderBy: { createdAt: 'desc' } },
      notes: {
        where: auth.role === 'CLIENT' ? { isPrivate: false } : {},
        orderBy: { createdAt: 'desc' },
        include: { author: { select: { name: true, role: true } } },
      },
    },
  })

  if (!caseData) {
    return NextResponse.json({ error: 'Case not found' }, { status: 404 })
  }

  // Verify access
  if (
    auth.role === 'CLIENT' && caseData.clientId !== auth.userId ||
    auth.role === 'ASSISTANT' && caseData.assistantId !== auth.userId ||
    auth.role === 'ADVISOR' && caseData.advisorId !== auth.userId
  ) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 })
  }

  return NextResponse.json(caseData)
}

// PATCH /api/cases/[id] - Update case
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = authenticateRequest(request)
  if (!auth || auth.role === 'CLIENT') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()

  const allowedFields = ['title', 'description', 'status', 'courtName', 'courtCaseNo', 'jurisdiction', 'state', 'nextHearing', 'fee', 'feeAgreed', 'priority', 'assistantId']
  const updateData: Record<string, unknown> = {}

  for (const field of allowedFields) {
    if (body[field] !== undefined) {
      updateData[field] = body[field]
    }
  }

  try {
    const updated = await prisma.case.update({
      where: { id },
      data: updateData,
      include: {
        client: { select: { id: true, name: true } },
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('Update case error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
