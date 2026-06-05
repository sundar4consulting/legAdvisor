import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/messages - Get messages
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const caseId = searchParams.get('caseId')
  const contactId = searchParams.get('contactId')

  const where: Record<string, unknown> = {
    OR: [
      { senderId: auth.userId },
      { receiverId: auth.userId },
    ],
  }
  if (caseId) where.caseId = caseId
  if (contactId) {
    where.OR = [
      { senderId: auth.userId, receiverId: contactId },
      { senderId: contactId, receiverId: auth.userId },
    ]
  }

  const messages = await prisma.message.findMany({
    where,
    include: {
      sender: { select: { id: true, name: true, role: true } },
      receiver: { select: { id: true, name: true, role: true } },
    },
    orderBy: { createdAt: 'asc' },
    take: 100,
  })

  return NextResponse.json(messages)
}

// POST /api/messages - Send message
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { receiverId, content, caseId } = body

    if (!receiverId || !content) {
      return NextResponse.json({ error: 'Receiver and content are required' }, { status: 400 })
    }

    const message = await prisma.message.create({
      data: {
        senderId: auth.userId,
        receiverId,
        content,
        caseId,
      },
      include: {
        sender: { select: { name: true, role: true } },
      },
    })

    return NextResponse.json(message, { status: 201 })
  } catch (error) {
    console.error('Send message error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
