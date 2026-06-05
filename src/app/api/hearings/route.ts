import { NextRequest, NextResponse } from 'next/server'
import { authenticateRequest } from '@/lib/utils'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const caseId = searchParams.get('caseId')

  if (!caseId) {
    return NextResponse.json({ error: 'caseId is required' }, { status: 400 })
  }

  const hearings = await prisma.hearing.findMany({
    where: { caseId },
    orderBy: { hearingDate: 'desc' },
  })

  return NextResponse.json({ hearings })
}

export async function POST(request: NextRequest) {
  const payload = authenticateRequest(request)
  if (!payload) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (payload.role === 'CLIENT') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  try {
    const body = await request.json()
    const { caseId, hearingDate, courtName, purpose, outcome, nextDate, notes } = body

    if (!caseId || !hearingDate || !courtName || !purpose) {
      return NextResponse.json(
        { error: 'caseId, hearingDate, courtName, and purpose are required' },
        { status: 400 }
      )
    }

    const hearing = await prisma.hearing.create({
      data: {
        caseId,
        hearingDate: new Date(hearingDate),
        courtName,
        purpose,
        outcome: outcome || null,
        nextDate: nextDate ? new Date(nextDate) : null,
        notes: notes || null,
      },
    })

    // Update the case's nextHearing field
    if (nextDate) {
      await prisma.case.update({
        where: { id: caseId },
        data: { nextHearing: new Date(nextDate) },
      })
    }

    return NextResponse.json({ hearing }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create hearing' }, { status: 500 })
  }
}
