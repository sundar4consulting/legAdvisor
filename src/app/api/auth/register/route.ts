import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateToken, hashPassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, password, language, otp } = body

    if (!name || !phone || !password || !otp) {
      return NextResponse.json({ error: 'Name, phone, password, and OTP are required' }, { status: 400 })
    }

    // Verify OTP
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

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { phone } })
    if (existingUser) {
      return NextResponse.json({ error: 'Phone number already registered. Please login.' }, { status: 409 })
    }

    if (email) {
      const emailExists = await prisma.user.findUnique({ where: { email } })
      if (emailExists) {
        return NextResponse.json({ error: 'Email already registered.' }, { status: 409 })
      }
    }

    // Hash password
    const passwordHash = await hashPassword(password)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        phone,
        email: email || null,
        passwordHash,
        role: 'CLIENT',
        language: language || 'en',
      },
    })

    // Mark OTP as verified
    await prisma.otpCode.update({
      where: { id: otpRecord.id },
      data: { verified: true },
    })

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      role: user.role,
      phone: user.phone,
    })

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        role: user.role,
      },
    }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
