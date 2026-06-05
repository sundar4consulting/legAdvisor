import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateOTP } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
    }

    // Generate OTP
    const code = generateOTP()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    // Find user if exists
    const user = await prisma.user.findUnique({ where: { phone } })

    // Store OTP in database
    await prisma.otpCode.create({
      data: {
        phone,
        code,
        expiresAt,
        userId: user?.id,
      },
    })

    // In production, send OTP via SMS (MSG91/Twilio)
    // For development, log it
    console.log(`[DEV] OTP for ${phone}: ${code}`)

    return NextResponse.json({
      message: 'OTP sent successfully',
      // Remove in production - only for development
      ...(process.env.NODE_ENV === 'development' && { otp: code }),
    })
  } catch (error) {
    console.error('Send OTP error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
