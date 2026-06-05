import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/payments - List payments
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const where: Record<string, unknown> = {}
  if (auth.role === 'CLIENT') {
    where.clientId = auth.userId
  }

  const payments = await prisma.payment.findMany({
    where,
    include: {
      client: { select: { name: true, phone: true } },
      case: { select: { caseNumber: true, title: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(payments)
}

// POST /api/payments - Create payment (initiate Razorpay order)
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { caseId, amount, description } = body

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Valid amount is required' }, { status: 400 })
    }

    // In production, create Razorpay order
    // const Razorpay = require('razorpay')
    // const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
    // const order = await instance.orders.create({ amount: amount * 100, currency: 'INR' })

    const payment = await prisma.payment.create({
      data: {
        clientId: auth.role === 'CLIENT' ? auth.userId : body.clientId,
        caseId,
        amount,
        description: description || 'Legal service fee',
        status: 'PENDING',
        // razorpayOrderId: order.id,
      },
    })

    return NextResponse.json({
      payment,
      // razorpayOrderId: order.id,
      // razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    }, { status: 201 })
  } catch (error) {
    console.error('Create payment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
