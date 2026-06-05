'use client'

import { useState } from 'react'
import { FileText, Upload, Download, Eye, Search, Plus } from 'lucide-react'

export default function AssistantDocumentsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const documents = [
    { id: '1', fileName: 'Plaint_PropertyDispute_v2.pdf', caseName: 'Lakshmi Property Dispute', caseNumber: 'LA-2026-0003', type: 'Petition', uploadDate: '2026-06-04', status: 'Sent for Review', size: '2.4 MB' },
    { id: '2', fileName: 'Legal_Notice_ConsumerCase.docx', caseName: 'Kumar Consumer Case', caseNumber: 'LA-2026-0012', type: 'Legal Notice', uploadDate: '2026-06-03', status: 'Sent for Review', size: '180 KB' },
    { id: '3', fileName: 'Vakalatnama_Lakshmi.pdf', caseName: 'Lakshmi Property Dispute', caseNumber: 'LA-2026-0003', type: 'Vakalatnama', uploadDate: '2026-06-02', status: 'Approved', size: '520 KB' },
    { id: '4', fileName: 'EC_Certificate.pdf', caseName: 'Lakshmi Property Dispute', caseNumber: 'LA-2026-0003', type: 'Evidence', uploadDate: '2026-06-01', status: 'Received from Client', size: '1.8 MB' },
    { id: '5', fileName: 'Affidavit_Sundaram.pdf', caseName: 'Sundaram Succession', caseNumber: 'LA-2026-0009', type: 'Affidavit', uploadDate: '2026-05-30', status: 'Needs Revision', size: '340 KB' },
    { id: '6', fileName: 'Counter_Affidavit_Kumar.pdf', caseName: 'Kumar vs Krishnan', caseNumber: 'LA-2026-0005', type: 'Court Filing', uploadDate: '2026-05-28', status: 'Filed', size: '420 KB' },
    { id: '7', fileName: 'Rent_Agreement_Anitha.pdf', caseName: 'Anitha Tenant Case', caseNumber: 'LA-2026-0015', type: 'Agreement', uploadDate: '2026-05-25', status: 'Under Preparation', size: '280 KB' },
  ]

  const docTypes = ['all', 'Petition', 'Legal Notice', 'Vakalatnama', 'Evidence', 'Affidavit', 'Court Filing', 'Agreement']

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.fileName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.caseName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === 'all' || doc.type === typeFilter
    return matchesSearch && matchesType
  })

  const statusColors: Record<string, string> = {
    'Sent for Review': 'bg-yellow-100 text-yellow-700',
    'Approved': 'bg-green-100 text-green-700',
    'Received from Client': 'bg-blue-100 text-blue-700',
    'Needs Revision': 'bg-red-100 text-red-700',
    'Filed': 'bg-purple-100 text-purple-700',
    'Under Preparation': 'bg-gray-100 text-gray-700',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 text-sm mt-1">Prepare, manage, and track all case documents</p>
        </div>
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 text-sm">
            <Upload className="h-4 w-4" />
            <span>Upload</span>
          </button>
          <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
            <Plus className="h-4 w-4" />
            <span>New Draft</span>
          </button>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
        <div className="flex-1 relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500"
        >
          {docTypes.map((t) => (
            <option key={t} value={t}>{t === 'all' ? 'All Types' : t}</option>
          ))}
        </select>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Document</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Case</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredDocs.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc.fileName}</p>
                      <p className="text-xs text-gray-500">{doc.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm text-gray-700">{doc.caseName}</p>
                  <p className="text-xs text-gray-500 font-mono">{doc.caseNumber}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-700">{doc.type}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600">{new Date(doc.uploadDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[doc.status] || 'bg-gray-100 text-gray-700'}`}>
                    {doc.status}
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
