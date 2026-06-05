import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { authenticateRequest } from '@/lib/utils'

// GET /api/documents - List documents
export async function GET(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const caseId = searchParams.get('caseId')

  const where: Record<string, unknown> = {}

  if (caseId) {
    where.caseId = caseId
  } else if (auth.role === 'CLIENT') {
    where.uploadedById = auth.userId
  }

  const documents = await prisma.document.findMany({
    where,
    include: {
      uploadedBy: { select: { name: true, role: true } },
      case: { select: { caseNumber: true, title: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(documents)
}

// POST /api/documents - Upload document metadata
export async function POST(request: NextRequest) {
  const auth = authenticateRequest(request)
  if (!auth) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { caseId, fileName, fileUrl, fileSize, mimeType, docType, description } = body

    if (!fileName || !fileUrl) {
      return NextResponse.json({ error: 'File name and URL are required' }, { status: 400 })
    }

    const document = await prisma.document.create({
      data: {
        caseId,
        uploadedById: auth.userId,
        fileName,
        fileUrl,
        fileSize: fileSize || 0,
        mimeType: mimeType || 'application/octet-stream',
        docType: docType || 'OTHER',
        description,
        isApproved: auth.role !== 'CLIENT',
      },
    })

    return NextResponse.json(document, { status: 201 })
  } catch (error) {
    console.error('Upload document error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
