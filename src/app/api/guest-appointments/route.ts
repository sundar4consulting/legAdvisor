import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateOTP } from '@/lib/auth'

// POST /api/guest-appointments - Book appointment without login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, caseType, description, preferredDate, preferredTime, consultationType, otp } = body

    if (!name || !phone || !caseType || !preferredDate || !preferredTime) {
      return NextResponse.json({ error: 'Name, phone, case type, date, and time are required' }, { status: 400 })
    }

    // If OTP provided, verify it
    if (otp) {
      const otpRecord = await prisma.otpCode.findFirst({
        where: {
          phone,
          code: otp,
          verified: false,
          expiresAt: { gt: new Date() },
        },
        orderBy: { createdAt: 'desc' },
      })

      if (!otpRecord) {
        return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 401 })
      }

      await prisma.otpCode.update({
        where: { id: otpRecord.id },
        data: { verified: true },
      })

      // Create guest appointment
      const appointment = await prisma.guestAppointment.create({
        data: {
          name,
          phone,
          email,
          caseType,
          message: description || null,
          preferredDate: new Date(preferredDate),
        },
      })

      return NextResponse.json(appointment, { status: 201 })
    }

    // If no OTP, send one
    const code = generateOTP()
    await prisma.otpCode.create({
      data: {
        phone,
        code,
        expiresAt: new Date(Date.now() + 10 * 60 * 1000),
      },
    })

    console.log(`[DEV] OTP for ${phone}: ${code}`)

    return NextResponse.json({
      message: 'OTP sent for verification',
      ...(process.env.NODE_ENV === 'development' && { otp: code }),
    })
  } catch (error) {
    console.error('Guest appointment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
