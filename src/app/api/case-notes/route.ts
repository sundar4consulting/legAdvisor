import { NextRequest, NextResponse } from 'next/server'
import { authenticateRequest } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const caseId = searchParams.get('caseId')

  if (!caseId) {
    return NextResponse.json({ error: 'caseId is required' }, { status: 400 })
  }

  // Clients can only see non-private notes
  const where = payload.role === 'CLIENT'
    ? { caseId, isPrivate: false }
    : { caseId }

  const notes = await prisma.caseNote.findMany({
    where,
    include: {
      author: { select: { id: true, name: true, role: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ notes })
}

export async function POST(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (payload.role === 'CLIENT') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const body = await request.json()
    const { caseId, content, isPrivate } = body

    if (!caseId || !content) {
      return NextResponse.json(
        { error: 'caseId and content are required' },
        { status: 400 }
      )
    }

    const note = await prisma.caseNote.create({
      data: {
        caseId,
        authorId: payload.userId,
        content,
        isPrivate: isPrivate || false,
      },
      include: {
        author: { select: { id: true, name: true, role: true } },
      },
    })

    return NextResponse.json({ note }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 })
  }
}
