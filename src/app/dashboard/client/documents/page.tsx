'use client'

import { FileText, Upload, Download, Eye } from 'lucide-react'

export default function ClientDocumentsPage() {
  const documents = [
    { id: '1', name: 'Sale Deed - Plot No. 45', type: 'PROPERTY_DOCUMENT', case: 'LA-2026-0001', date: '2026-05-20', size: '2.4 MB', status: 'Approved' },
    { id: '2', name: 'Aadhaar Card', type: 'AADHAAR', case: 'LA-2026-0001', date: '2026-05-18', size: '1.1 MB', status: 'Approved' },
    { id: '3', name: 'Purchase Invoice - Electronics', type: 'EVIDENCE', case: 'LA-2026-0012', date: '2026-05-15', size: '0.8 MB', status: 'Approved' },
    { id: '4', name: 'Encumbrance Certificate', type: 'PROPERTY_DOCUMENT', case: 'LA-2026-0001', date: '2026-05-10', size: '1.5 MB', status: 'Pending Review' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 text-sm mt-1">Upload and manage your case documents securely</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Upload Area */}
      <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 text-center mb-6">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-600">Drag and drop files here, or click to browse</p>
        <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG up to 10MB. Documents are encrypted and stored securely.</p>
      </div>

      {/* Documents Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Document</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Case</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-amber-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{doc.case}</td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(doc.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-6 py-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${doc.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {doc.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-amber-700" title="View">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-gray-400 hover:text-amber-700" title="Download">
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
