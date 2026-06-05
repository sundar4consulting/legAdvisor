import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { generateToken, comparePassword } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { phone, otp, password } = body

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({ where: { phone } })
    if (!user) {
      return NextResponse.json({ error: 'User not found. Please register first.' }, { status: 404 })
    }

    if (!user.isActive) {
      return NextResponse.json({ error: 'Account is deactivated. Contact support.' }, { status: 403 })
    }

    // OTP-based login
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

      // Mark OTP as verified
      await prisma.otpCode.update({
        where: { id: otpRecord.id },
        data: { verified: true },
      })
    }
    // Password-based login
    else if (password) {
      if (!user.passwordHash) {
        return NextResponse.json({ error: 'Password not set. Use OTP login.' }, { status: 401 })
      }
      const isValid = await comparePassword(password, user.passwordHash)
      if (!isValid) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
      }
    } else {
      return NextResponse.json({ error: 'OTP or password is required' }, { status: 400 })
    }

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
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
