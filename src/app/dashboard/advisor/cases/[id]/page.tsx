'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, FileText, MessageSquare, User, Clock, Plus, CheckCircle, Edit } from 'lucide-react'
import Link from 'next/link'

export default function AdvisorCaseDetailPage() {
  const params = useParams()
  const [newNote, setNewNote] = useState('')

  const caseData = {
    id: params.id as string,
    caseNumber: 'LA-2026-0003',
    title: 'Lakshmi Devi vs Ramachandran - Property Dispute',
    description: 'Dispute over ancestral property in Adyar, Chennai. Client claims ownership through succession. Opposite party produced allegedly forged sale deed (2018). Strategy: Challenge sale deed authenticity, prove succession through family tree and revenue records.',
    caseType: 'Property Dispute',
    status: 'IN_PROGRESS',
    courtName: 'Chennai City Civil Court',
    courtCaseNo: 'OS/2026/1234',
    jurisdiction: 'Chennai',
    state: 'Tamil Nadu',
    filingDate: '2026-03-15',
    nextHearing: '2026-06-08',
    fee: 75000,
    client: { name: 'Lakshmi Devi', phone: '+91 98765 11111', email: 'lakshmi@email.com' },
    assistant: 'Priya',
    priority: 'High',
  }

  const notes = [
    { author: 'Adv. Rajesh Kumar', content: 'Reviewed counter-affidavit from opposite party. Their sale deed has discrepancy in witness signatures. Need to file application for handwriting expert opinion.', date: '02 Jun 2026', isPrivate: true },
    { author: 'Adv. Rajesh Kumar', content: 'Discussed strategy with client. She confirmed no family members sold the property. Will produce succession certificate.', date: '25 May 2026', isPrivate: false },
    { author: 'Priya', content: 'Obtained EC from Sub-Registrar office. No encumbrance from 2000-2026 except the disputed deed.', date: '20 May 2026', isPrivate: false },
  ]

  const hearings = [
    { date: '08 Jun 2026', purpose: 'Evidence - Document marking', status: 'upcoming' },
    { date: '15 May 2026', purpose: 'Counter filing by opposite party', outcome: 'Counter filed, next date for evidence', status: 'completed' },
    { date: '10 Apr 2026', purpose: 'Court notice issuance', outcome: 'Summons issued to defendant', status: 'completed' },
    { date: '15 Mar 2026', purpose: 'Suit filing', outcome: 'Suit admitted, notice ordered', status: 'completed' },
  ]

  const tasks = [
    { title: 'File application for handwriting expert', assignee: 'Priya', due: '06 Jun', status: 'TODO' },
    { title: 'Prepare document index for evidence', assignee: 'Priya', due: '07 Jun', status: 'IN_PROGRESS' },
    { title: 'Get succession certificate', assignee: 'Client', due: '07 Jun', status: 'TODO' },
  ]

  const statusColors: Record<string, string> = {
    IN_PROGRESS: 'bg-amber-100 text-amber-700',
    HEARING_SCHEDULED: 'bg-purple-100 text-purple-700',
    RESOLVED: 'bg-green-100 text-green-700',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Link href="/dashboard/advisor/cases" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-bold text-gray-900">{caseData.title}</h1>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[caseData.status] || 'bg-gray-100 text-gray-700'}`}>
              {caseData.status.replace(/_/g, ' ')}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">{caseData.caseNumber} • {caseData.courtCaseNo} • {caseData.courtName}</p>
        </div>
        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 border border-gray-200 px-3 py-1.5 rounded-lg">
          <Edit className="h-3.5 w-3.5" />
          <span>Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Strategy & Description */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Case Strategy</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{caseData.description}</p>
          </div>

          {/* Hearings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-amber-600" />
                Hearings
              </h2>
            </div>
            <div className="divide-y divide-gray-50">
              {hearings.map((h, i) => (
                <div key={i} className="p-4 flex items-start space-x-3">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${h.status === 'upcoming' ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{h.purpose}</p>
                      <span className="text-xs text-gray-500">{h.date}</span>
                    </div>
                    {h.outcome && <p className="text-xs text-gray-600 mt-0.5">Outcome: {h.outcome}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Notes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Advisory Notes</h2>
            </div>
            <div className="p-5 space-y-4">
              {notes.map((note, i) => (
                <div key={i} className={`p-3 rounded-lg ${note.isPrivate ? 'bg-yellow-50 border border-yellow-100' : 'bg-gray-50'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-gray-900">{note.author}</span>
                    <div className="flex items-center space-x-2">
                      {note.isPrivate && <span className="text-xs px-1.5 py-0.5 bg-yellow-200 text-yellow-800 rounded">Private</span>}
                      <span className="text-xs text-gray-500">{note.date}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">{note.content}</p>
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note..."
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <div className="flex items-center justify-between mt-2">
                  <label className="flex items-center space-x-2 text-xs text-gray-600">
                    <input type="checkbox" className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                    <span>Mark as private (only visible to advisor)</span>
                  </label>
                  <button className="bg-amber-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-amber-800">
                    Add Note
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Pending Tasks</h2>
              <button className="text-sm text-amber-700 hover:text-amber-800 font-medium flex items-center space-x-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Assign Task</span>
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {tasks.map((task, i) => (
                <div key={i} className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className={`h-4 w-4 ${task.status === 'IN_PROGRESS' ? 'text-blue-500' : 'text-gray-300'}`} />
                    <div>
                      <p className="text-sm text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500">Assigned to: {task.assignee} • Due: {task.due}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                  }`}>{task.status.replace(/_/g, ' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Client Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Client</h3>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{caseData.client.name}</p>
                <p className="text-xs text-gray-500">{caseData.client.phone}</p>
              </div>
            </div>
          </div>

          {/* Case Meta */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Case Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Type</span>
                <span className="font-medium text-gray-900">{caseData.caseType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Priority</span>
                <span className="font-medium text-red-600">{caseData.priority}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Filed</span>
                <span className="text-gray-900">{new Date(caseData.filingDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Next Hearing</span>
                <span className="font-medium text-amber-700">{new Date(caseData.nextHearing).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Assistant</span>
                <span className="text-gray-900">{caseData.assistant}</span>
              </div>
            </div>
          </div>

          {/* Fee */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Financials</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Agreed Fee</span>
                <span className="font-bold text-gray-900">₹{caseData.fee.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Received</span>
                <span className="text-green-600">₹50,000</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-100">
                <span className="text-gray-500">Pending</span>
                <span className="font-bold text-amber-700">₹25,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
