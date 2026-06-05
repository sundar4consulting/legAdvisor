'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, FileText, User, Clock, Plus, CheckCircle, Upload } from 'lucide-react'
import Link from 'next/link'

export default function AssistantCaseDetailPage() {
  const params = useParams()

  const caseData = {
    id: params.id as string,
    caseNumber: 'LA-2026-0003',
    title: 'Lakshmi Devi vs Ramachandran - Property Dispute',
    caseType: 'Property Dispute',
    status: 'IN_PROGRESS',
    courtName: 'Chennai City Civil Court',
    courtCaseNo: 'OS/2026/1234',
    nextHearing: '2026-06-08',
    client: { name: 'Lakshmi Devi', phone: '+91 98765 11111' },
    advisor: 'Adv. Rajesh Kumar',
  }

  const myTasks = [
    { title: 'File application for handwriting expert', due: '06 Jun', status: 'TODO', priority: 'High' },
    { title: 'Prepare document index for evidence stage', due: '07 Jun', status: 'IN_PROGRESS', priority: 'High' },
    { title: 'Get certified copies from Sub-Registrar', due: '09 Jun', status: 'TODO', priority: 'Medium' },
    { title: 'Draft affidavit for document marking', due: '10 Jun', status: 'TODO', priority: 'Medium' },
  ]

  const documents = [
    { name: 'Plaint (Filed)', date: '15 Mar 2026', status: 'Filed' },
    { name: 'Encumbrance Certificate', date: '05 Mar 2026', status: 'Verified' },
    { name: 'Sale Deed (Client)', date: '05 Mar 2026', status: 'Verified' },
    { name: 'Opposite Party Counter', date: '15 May 2026', status: 'Received' },
    { name: 'Patta & Chitta', date: '05 Mar 2026', status: 'Verified' },
  ]

  const hearings = [
    { date: '08 Jun 2026', purpose: 'Evidence - Document marking', prep: 'Prepare document index, carry originals', status: 'upcoming' },
    { date: '15 May 2026', purpose: 'Counter filing', outcome: 'Counter filed by opposite party', status: 'done' },
    { date: '10 Apr 2026', purpose: 'Notice issuance', outcome: 'Summons issued', status: 'done' },
  ]

  const notes = [
    { content: 'Advisor noted: Challenge sale deed authenticity using handwriting expert. Priority task.', date: '02 Jun', from: 'Advisor' },
    { content: 'EC obtained from Sub-Registrar - no encumbrance except disputed deed.', date: '20 May', from: 'Self' },
    { content: 'Client confirmed no family member sold the property.', date: '15 May', from: 'Advisor' },
  ]

  const priorityColors: Record<string, string> = {
    High: 'text-red-600',
    Medium: 'text-yellow-600',
    Low: 'text-green-600',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Link href="/dashboard/assistant/cases" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900">{caseData.title}</h1>
          <p className="text-sm text-gray-500 mt-0.5">{caseData.caseNumber} • {caseData.courtCaseNo} • {caseData.courtName}</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-amber-100 text-amber-700">
          {caseData.status.replace(/_/g, ' ')}
        </span>
      </div>

      {/* Next Hearing */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3">
        <Calendar className="h-5 w-5 text-red-600 shrink-0" />
        <div>
          <p className="text-sm font-medium text-red-800">Next Hearing: {new Date(caseData.nextHearing).toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</p>
          <p className="text-xs text-red-700 mt-0.5">Preparation: Prepare document index, carry all originals for marking</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* My Tasks for this Case */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                {myTasks.filter(t => t.status !== 'DONE').length} pending
              </span>
            </div>
            <div className="divide-y divide-gray-50">
              {myTasks.map((task, i) => (
                <div key={i} className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.status === 'DONE'}
                      readOnly
                      className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <p className="text-sm text-gray-900">{task.title}</p>
                      <p className="text-xs text-gray-500">Due: {task.due} • <span className={priorityColors[task.priority]}>{task.priority}</span></p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                  }`}>{task.status.replace(/_/g, ' ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Case Documents</h2>
              <button className="flex items-center space-x-1 text-sm text-amber-700 font-medium">
                <Upload className="h-3.5 w-3.5" />
                <span>Upload</span>
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {documents.map((doc, i) => (
                <div key={i} className="p-3 px-5 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-amber-600" />
                    <div>
                      <p className="text-sm text-gray-900">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{doc.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hearings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Hearing History</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {hearings.map((h, i) => (
                <div key={i} className="p-4 flex items-start space-x-3">
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${h.status === 'upcoming' ? 'bg-amber-500 animate-pulse' : 'bg-green-500'}`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{h.purpose}</p>
                    <p className="text-xs text-gray-500">{h.date}</p>
                    {h.outcome && <p className="text-xs text-gray-600 mt-0.5">{h.outcome}</p>}
                    {h.prep && <p className="text-xs text-amber-700 mt-0.5 font-medium">📋 {h.prep}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Case Team</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{caseData.advisor}</p>
                  <p className="text-xs text-gray-500">Advisor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-green-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{caseData.client.name}</p>
                  <p className="text-xs text-gray-500">Client • {caseData.client.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notes from Advisor */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Notes & Instructions</h3>
            <div className="space-y-3">
              {notes.map((note, i) => (
                <div key={i} className="p-2.5 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-700">{note.content}</p>
                  <p className="text-xs text-gray-400 mt-1">{note.from} • {note.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
