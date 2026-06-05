'use client'

import { useState } from 'react'
import { Briefcase, Search, Filter, Plus, Eye, CheckCircle, Clock, AlertTriangle, XCircle } from 'lucide-react'

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-700',
  PENDING: 'bg-amber-100 text-amber-700',
  HEARING: 'bg-blue-100 text-blue-700',
  RESOLVED: 'bg-gray-100 text-gray-700',
  CLOSED: 'bg-red-100 text-red-700',
}

const statusIcons: Record<string, React.ElementType> = {
  ACTIVE: CheckCircle,
  PENDING: Clock,
  HEARING: AlertTriangle,
  RESOLVED: CheckCircle,
  CLOSED: XCircle,
}

export default function AdvisorCasesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('ALL')

  const cases = [
    { id: 'CIV-2026-001', title: 'Raman vs State Bank of India', client: 'S. Raman', type: 'Debt Recovery', status: 'ACTIVE', court: 'Madras High Court', nextHearing: '07 Jun 2026', assistant: 'Priya' },
    { id: 'CIV-2026-002', title: 'Lakshmi Property Dispute', client: 'K. Lakshmi', type: 'Property', status: 'HEARING', court: 'Chennai City Civil Court', nextHearing: '08 Jun 2026', assistant: 'Priya' },
    { id: 'CIV-2026-003', title: 'Kumar vs Krishnan - Land Title', client: 'R. Kumar', type: 'Land Dispute', status: 'ACTIVE', court: 'Dist. Court Coimbatore', nextHearing: '09 Jun 2026', assistant: 'Karthik' },
    { id: 'CIV-2026-004', title: 'Sundaram Family Succession', client: 'M. Sundaram', type: 'Succession', status: 'PENDING', court: 'Madras High Court', nextHearing: '10 Jun 2026', assistant: 'Karthik' },
    { id: 'CIV-2026-005', title: 'Meenakshi vs TN Housing Board', client: 'P. Meenakshi', type: 'Consumer', status: 'ACTIVE', court: 'State Consumer Forum', nextHearing: '12 Jun 2026', assistant: 'Deepa' },
    { id: 'CIV-2026-006', title: 'Vijay Landlord-Tenant Dispute', client: 'A. Vijay', type: 'Tenant', status: 'HEARING', court: 'Rent Controller Chennai', nextHearing: '14 Jun 2026', assistant: 'Deepa' },
    { id: 'CIV-2026-007', title: 'Anitha Divorce Petition', client: 'S. Anitha', type: 'Family', status: 'ACTIVE', court: 'Family Court Chennai', nextHearing: '15 Jun 2026', assistant: 'Priya' },
    { id: 'CIV-2026-008', title: 'Balasubramanian Cheque Bounce', client: 'T. Bala', type: 'NI Act', status: 'RESOLVED', court: 'Magistrate Court', nextHearing: '-', assistant: 'Karthik' },
  ]

  const filteredCases = cases.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'ALL' || c.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Briefcase className="h-6 w-6 mr-2 text-amber-600" />
            Case Management
          </h1>
          <p className="text-gray-600 mt-1">Manage and oversee all client cases</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-amber-700">
          <Plus className="h-4 w-4" />
          <span>New Case</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by case ID, title, or client name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            {['ALL', 'ACTIVE', 'HEARING', 'PENDING', 'RESOLVED', 'CLOSED'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Case ID</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Title / Client</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Court</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Next Hearing</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Assigned To</th>
              <th className="px-5 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredCases.map((caseItem) => {
              const StatusIcon = statusIcons[caseItem.status] || Clock
              return (
                <tr key={caseItem.id} className="hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-mono text-gray-700">{caseItem.id}</td>
                  <td className="px-5 py-4">
                    <p className="text-sm font-medium text-gray-900">{caseItem.title}</p>
                    <p className="text-xs text-gray-500">{caseItem.client}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{caseItem.type}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[caseItem.status]}`}>
                      <StatusIcon className="h-3 w-3" />
                      <span>{caseItem.status}</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{caseItem.court}</td>
                  <td className="px-5 py-4 text-sm text-gray-700 font-medium">{caseItem.nextHearing}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{caseItem.assistant}</td>
                  <td className="px-5 py-4">
                    <button className="text-amber-600 hover:text-amber-800">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
