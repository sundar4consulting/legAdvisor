import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/appointments - List appointments
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const where: Record<string, unknown> = {}

  if (auth.role === 'CLIENT') {
    where.clientId = auth.userId
  } else if (auth.role === 'ASSISTANT') {
    where.managedById = auth.userId
  }

  const appointments = await prisma.appointment.findMany({
    where,
    include: {
      client: { select: { id: true, name: true, phone: true } },
      case: { select: { id: true, caseNumber: true, title: true } },
      managedBy: { select: { id: true, name: true } },
    },
    orderBy: { date: 'desc' },
  })

  return NextResponse.json(appointments)
}

// POST /api/appointments - Create appointment
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { clientId, caseId, date, duration, type, notes } = body

    if (!date) {
      return NextResponse.json({ error: 'Date is required' }, { status: 400 })
    }

    const appointment = await prisma.appointment.create({
      data: {
        clientId: clientId || auth.userId,
        caseId,
        date: new Date(date),
        duration: duration || 30,
        type: type || 'in-person',
        notes,
        managedById: auth.role !== 'CLIENT' ? auth.userId : undefined,
        status: auth.role === 'CLIENT' ? 'PENDING' : 'CONFIRMED',
      },
      include: {
        client: { select: { name: true, phone: true } },
      },
    })

    return NextResponse.json(appointment, { status: 201 })
  } catch (error) {
    console.error('Create appointment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
