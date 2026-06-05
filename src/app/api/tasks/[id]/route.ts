import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// PATCH /api/tasks/[id] - Update task status
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
  const { status, title, description, dueDate, priority } = body

  const updateData: Record<string, unknown> = {}
  if (status) updateData.status = status
  if (title) updateData.title = title
  if (description !== undefined) updateData.description = description
  if (dueDate) updateData.dueDate = new Date(dueDate)
  if (priority !== undefined) updateData.priority = priority

  try {
    const task = await prisma.task.update({
      where: { id },
      data: updateData,
    })
    return NextResponse.json(task)
  } catch (error) {
    console.error('Update task error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
