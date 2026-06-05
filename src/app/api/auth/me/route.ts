import { NextRequest, NextResponse } from 'next/server'
import { authenticateRequest } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      role: true,
      language: true,
      avatarUrl: true,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ user })
}
