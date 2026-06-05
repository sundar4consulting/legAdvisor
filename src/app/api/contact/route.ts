import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required' },
        { status: 400 }
      )
    }

    // Validate phone format (Indian mobile number)
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(phone.replace(/[\s+\-]/g, '').replace(/^91/, ''))) {
      return NextResponse.json(
        { error: 'Please provide a valid Indian mobile number' },
        { status: 400 }
      )
    }

    // In production, send email notification to the firm
    // and/or store in database
    // await sendEmail({ to: 'info@legadv.in', subject: `Contact Form: ${subject}`, ... })

    console.log('Contact form submission:', { name, email, phone, subject, message })

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us. We will get back to you within 24 hours.',
    })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
