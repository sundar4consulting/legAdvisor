import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/tasks - List tasks
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth || auth.role === 'CLIENT') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status')
  const caseId = searchParams.get('caseId')

  const where: Record<string, unknown> = {}

  if (auth.role === 'ASSISTANT') {
    where.assignedToId = auth.userId
  }
  if (status) where.status = status
  if (caseId) where.caseId = caseId

  const tasks = await prisma.task.findMany({
    where,
    include: {
      assignedTo: { select: { name: true } },
      createdBy: { select: { name: true } },
      case: { select: { caseNumber: true, title: true } },
    },
    orderBy: [{ priority: 'desc' }, { dueDate: 'asc' }],
  })

  return NextResponse.json(tasks)
}

// POST /api/tasks - Create task
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth || auth.role === 'CLIENT') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, assignedToId, caseId, dueDate, priority } = body

    if (!title || !assignedToId) {
      return NextResponse.json({ error: 'Title and assignee are required' }, { status: 400 })
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        assignedToId,
        createdById: auth.userId,
        caseId,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        priority: priority || 0,
      },
      include: {
        assignedTo: { select: { name: true } },
      },
    })

    return NextResponse.json(task, { status: 201 })
  } catch (error) {
    console.error('Create task error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
