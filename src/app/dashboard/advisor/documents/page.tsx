'use client'

import { useState } from 'react'
import { FileText, Download, Eye, CheckCircle, XCircle, Clock, Search, Filter } from 'lucide-react'

interface Document {
  id: string
  fileName: string
  caseName: string
  caseNumber: string
  uploadedBy: string
  uploadDate: string
  type: string
  status: 'approved' | 'pending' | 'rejected'
  size: string
}

export default function AdvisorDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const documents: Document[] = [
    { id: '1', fileName: 'Plaint_PropertyDispute_v2.pdf', caseName: 'Raman vs State Bank', caseNumber: 'LA-2026-0001', uploadedBy: 'Priya', uploadDate: '2026-06-04', type: 'Petition', status: 'pending', size: '2.4 MB' },
    { id: '2', fileName: 'Legal_Notice_ConsumerCase.docx', caseName: 'Kumar Consumer Case', caseNumber: 'LA-2026-0012', uploadedBy: 'Karthik', uploadDate: '2026-06-03', type: 'Legal Notice', status: 'pending', size: '180 KB' },
    { id: '3', fileName: 'Vakalatnama_Signed.pdf', caseName: 'Lakshmi Property Dispute', caseNumber: 'LA-2026-0003', uploadedBy: 'Priya', uploadDate: '2026-06-02', type: 'Vakalatnama', status: 'approved', size: '520 KB' },
    { id: '4', fileName: 'Encumbrance_Certificate.pdf', caseName: 'Lakshmi Property Dispute', caseNumber: 'LA-2026-0003', uploadedBy: 'Client', uploadDate: '2026-06-01', type: 'Evidence', status: 'approved', size: '1.8 MB' },
    { id: '5', fileName: 'Affidavit_Draft.pdf', caseName: 'Sundaram Succession', caseNumber: 'LA-2026-0009', uploadedBy: 'Deepa', uploadDate: '2026-05-30', type: 'Affidavit', status: 'rejected', size: '340 KB' },
    { id: '6', fileName: 'Settlement_Agreement.docx', caseName: 'Kumar vs Krishnan', caseNumber: 'LA-2026-0005', uploadedBy: 'Karthik', uploadDate: '2026-05-28', type: 'Agreement', status: 'approved', size: '420 KB' },
  ]

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.caseName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || doc.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const statusConfig = {
    approved: { label: 'Approved', icon: CheckCircle, color: 'text-green-600 bg-green-50' },
    pending: { label: 'Pending Review', icon: Clock, color: 'text-yellow-600 bg-yellow-50' },
    rejected: { label: 'Needs Revision', icon: XCircle, color: 'text-red-600 bg-red-50' },
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 text-sm mt-1">Review and approve documents prepared by your team</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-100">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-800">Pending Review</span>
          </div>
          <p className="text-2xl font-bold text-yellow-900 mt-1">{documents.filter(d => d.status === 'pending').length}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-4 border border-green-100">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Approved</span>
          </div>
          <p className="text-2xl font-bold text-green-900 mt-1">{documents.filter(d => d.status === 'approved').length}</p>
        </div>
        <div className="bg-red-50 rounded-xl p-4 border border-red-100">
          <div className="flex items-center space-x-2">
            <XCircle className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-red-800">Needs Revision</span>
          </div>
          <p className="text-2xl font-bold text-red-900 mt-1">{documents.filter(d => d.status === 'rejected').length}</p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents or cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-400" />
          {['all', 'pending', 'approved', 'rejected'].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                statusFilter === s ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {s === 'all' ? 'All' : statusConfig[s as keyof typeof statusConfig].label}
            </button>
          ))}
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Document</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Case</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Uploaded By</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredDocs.map((doc) => {
              const config = statusConfig[doc.status]
              return (
                <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-amber-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{doc.fileName}</p>
                        <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-sm text-gray-700">{doc.caseName}</p>
                    <p className="text-xs text-gray-500 font-mono">{doc.caseNumber}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-700">{doc.uploadedBy}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm text-gray-700">{new Date(doc.uploadDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full font-medium ${config.color}`}>
                      <config.icon className="h-3.5 w-3.5" />
                      <span>{config.label}</span>
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-colors" title="View">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-green-600 transition-colors" title="Download">
                        <Download className="h-4 w-4" />
                      </button>
                      {doc.status === 'pending' && (
                        <>
                          <button className="p-1.5 text-gray-400 hover:text-green-600 transition-colors" title="Approve">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-red-600 transition-colors" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
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
