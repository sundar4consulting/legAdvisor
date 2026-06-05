import { NextRequest, NextResponse } from 'next/server'
import { authenticateRequest } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const unreadOnly = searchParams.get('unread') === 'true'

  const where = unreadOnly
    ? { userId: payload.userId, isRead: false }
    : { userId: payload.userId }

  const notifications = await prisma.notification.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    take: 50,
  })

  const unreadCount = await prisma.notification.count({
    where: { userId: payload.userId, isRead: false },
  })

  return NextResponse.json({ notifications, unreadCount })
}

export async function PATCH(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { notificationId, markAllRead } = body

  if (markAllRead) {
    await prisma.notification.updateMany({
      where: { userId: payload.userId, isRead: false },
      data: { isRead: true },
    })
    return NextResponse.json({ success: true })
  }

  if (notificationId) {
    await prisma.notification.update({
      where: { id: notificationId, userId: payload.userId },
      data: { isRead: true },
    })
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'notificationId or markAllRead is required' }, { status: 400 })
}
