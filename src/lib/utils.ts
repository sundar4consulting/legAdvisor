import { NextRequest } from 'next/server'
import { verifyToken, JWTPayload } from './auth'

export function getTokenFromRequest(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization')
  if (authHeader?.startsWith('Bearer ')) {
    return authHeader.slice(7)
  }
  return request.cookies.get('token')?.value || null
}

export function authenticateRequest(request: NextRequest): JWTPayload | null {
  const token = getTokenFromRequest(request)
  if (!token) return null
  return verifyToken(token)
}

export function generateCaseNumber(): string {
  const year = new Date().getFullYear()
  const random = Math.floor(1000 + Math.random() * 9000)
  return `SLA-${year}-${random}`
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
