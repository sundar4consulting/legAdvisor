'use client'

import { CASE_STATUS_LABELS, CASE_TYPE_LABELS } from '@/lib/constants'
import { Eye, Filter } from 'lucide-react'
import Link from 'next/link'

export default function ClientCasesPage() {
  // In production, fetch from /api/cases
  const cases = [
    {
      id: '1',
      caseNumber: 'LA-2026-0001',
      title: 'Property Boundary Dispute - Velachery Plot',
      caseType: 'PROPERTY_DISPUTE',
      status: 'HEARING_SCHEDULED',
      nextHearing: '2026-06-15',
      courtName: 'District Court, Chennai',
      advisor: 'Adv. Suresh Ramanathan',
    },
    {
      id: '2',
      caseNumber: 'LA-2026-0012',
      title: 'Consumer Complaint - Faulty Electronics',
      caseType: 'CONSUMER_PROTECTION',
      status: 'IN_PROGRESS',
      nextHearing: null,
      courtName: 'Consumer Forum, Chennai',
      advisor: 'Adv. Kavitha Nair',
    },
  ]

  const statusColors: Record<string, string> = {
    INQUIRY: 'bg-gray-100 text-gray-700',
    CONSULTATION_SCHEDULED: 'bg-blue-100 text-blue-700',
    ACCEPTED: 'bg-indigo-100 text-indigo-700',
    DOCUMENTS_PENDING: 'bg-orange-100 text-orange-700',
    IN_PROGRESS: 'bg-cyan-100 text-cyan-700',
    HEARING_SCHEDULED: 'bg-purple-100 text-purple-700',
    AWAITING_JUDGMENT: 'bg-yellow-100 text-yellow-700',
    RESOLVED: 'bg-green-100 text-green-700',
    CLOSED: 'bg-gray-100 text-gray-700',
    REJECTED: 'bg-red-100 text-red-700',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Cases</h1>
          <p className="text-gray-600 text-sm mt-1">Track the progress of your legal matters</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </button>
      </div>

      <div className="space-y-4">
        {cases.map((c) => (
          <div key={c.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-gray-500">{c.caseNumber}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[c.status]}`}>
                    {CASE_STATUS_LABELS[c.status]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2">{c.title}</h3>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                  <span>Type: {CASE_TYPE_LABELS[c.caseType]}</span>
                  <span>Court: {c.courtName}</span>
                  <span>Advocate: {c.advisor}</span>
                </div>
                {c.nextHearing && (
                  <p className="mt-2 text-sm text-purple-700 font-medium">
                    Next Hearing: {new Date(c.nextHearing).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                )}
              </div>
              <Link
                href={`/dashboard/client/cases/${c.id}`}
                className="flex items-center space-x-1 text-amber-700 hover:text-amber-800 text-sm font-medium"
              >
                <Eye className="h-4 w-4" />
                <span>View</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
