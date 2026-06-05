'use client'

import { CASE_STATUS_LABELS, CASE_TYPE_LABELS } from '@/lib/constants'
import { Eye, Edit } from 'lucide-react'
import Link from 'next/link'

export default function AssistantCasesPage() {
  const cases = [
    { id: '1', caseNumber: 'LA-2026-0001', title: 'Property Boundary Dispute - Velachery', client: 'Rajesh Kumar', caseType: 'PROPERTY_DISPUTE', status: 'HEARING_SCHEDULED', nextHearing: '2026-06-15' },
    { id: '2', caseNumber: 'LA-2026-0012', title: 'Consumer Complaint - Electronics', client: 'Priya Lakshmi', caseType: 'CONSUMER_PROTECTION', status: 'IN_PROGRESS', nextHearing: null },
    { id: '3', caseNumber: 'LA-2026-0015', title: 'Rent Control Petition', client: 'Venkatesh Rao', caseType: 'LANDLORD_TENANT', status: 'DOCUMENTS_PENDING', nextHearing: null },
    { id: '4', caseNumber: 'LA-2026-0009', title: 'Divorce Petition - Mutual', client: 'Meena Devi', caseType: 'FAMILY_LAW', status: 'IN_PROGRESS', nextHearing: '2026-06-20' },
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
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Cases</h1>
          <p className="text-gray-600 text-sm mt-1">Assigned cases and their current status</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Case</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Client</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Next Hearing</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cases.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-gray-900">{c.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{c.caseNumber}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">{c.client}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{CASE_TYPE_LABELS[c.caseType]}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[c.status]}`}>
                    {CASE_STATUS_LABELS[c.status]}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {c.nextHearing ? new Date(c.nextHearing).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-'}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <Link href={`/dashboard/assistant/cases/${c.id}`} className="p-1 text-gray-400 hover:text-amber-700" title="View">
                      <Eye className="h-4 w-4" />
                    </Link>
                    <button className="p-1 text-gray-400 hover:text-amber-700" title="Edit">
                      <Edit className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
