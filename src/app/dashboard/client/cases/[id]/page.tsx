'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, FileText, MessageSquare, IndianRupee, Clock, MapPin, User, AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface CaseDetail {
  id: string
  caseNumber: string
  title: string
  description: string
  caseType: string
  status: string
  courtName: string
  courtCaseNo: string
  jurisdiction: string
  state: string
  filingDate: string
  nextHearing: string
  fee: number
  advisor: string
  assistant: string
  createdAt: string
}

export default function ClientCaseDetailPage() {
  const params = useParams()
  const [caseData] = useState<CaseDetail>({
    id: params.id as string,
    caseNumber: 'LA-2026-0003',
    title: 'Property Dispute - Adyar Land',
    description: 'Dispute regarding ownership of ancestral property at Adyar, Chennai. Opposite party claims ownership based on forged sale deed dated 2018. We need to prove the title through succession and original documents.',
    caseType: 'Property Dispute',
    status: 'IN_PROGRESS',
    courtName: 'Chennai City Civil Court',
    courtCaseNo: 'OS/2026/1234',
    jurisdiction: 'Chennai',
    state: 'Tamil Nadu',
    filingDate: '2026-03-15',
    nextHearing: '2026-06-08',
    fee: 75000,
    advisor: 'Adv. Rajesh Kumar',
    assistant: 'Priya',
    createdAt: '2026-02-20',
  })

  const timeline = [
    { date: '20 Feb 2026', event: 'Case inquiry submitted', type: 'info' },
    { date: '25 Feb 2026', event: 'Initial consultation with Adv. Rajesh Kumar', type: 'success' },
    { date: '01 Mar 2026', event: 'Case accepted, fee agreed - ₹75,000', type: 'success' },
    { date: '05 Mar 2026', event: 'Documents collected - Sale deed, EC, Patta', type: 'info' },
    { date: '15 Mar 2026', event: 'Suit filed at Chennai City Civil Court', type: 'success' },
    { date: '10 Apr 2026', event: 'First hearing - Court notice issued to opposite party', type: 'info' },
    { date: '15 May 2026', event: 'Second hearing - Opposite party filed counter', type: 'warning' },
    { date: '08 Jun 2026', event: 'Next hearing - Evidence stage', type: 'upcoming' },
  ]

  const documents = [
    { name: 'Sale Deed (Original)', date: '05 Mar 2026', status: 'Verified' },
    { name: 'Encumbrance Certificate', date: '05 Mar 2026', status: 'Verified' },
    { name: 'Patta & Chitta', date: '05 Mar 2026', status: 'Verified' },
    { name: 'Filed Plaint', date: '15 Mar 2026', status: 'Filed' },
    { name: 'Opposite Party Counter', date: '15 May 2026', status: 'Received' },
  ]

  const statusColors: Record<string, string> = {
    INQUIRY: 'bg-gray-100 text-gray-700',
    ACCEPTED: 'bg-blue-100 text-blue-700',
    IN_PROGRESS: 'bg-amber-100 text-amber-700',
    HEARING_SCHEDULED: 'bg-purple-100 text-purple-700',
    RESOLVED: 'bg-green-100 text-green-700',
    CLOSED: 'bg-gray-100 text-gray-700',
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Link href="/dashboard/client/cases" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-gray-900">{caseData.title}</h1>
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusColors[caseData.status] || 'bg-gray-100 text-gray-700'}`}>
              {caseData.status.replace(/_/g, ' ')}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Case No: {caseData.caseNumber} • Court: {caseData.courtCaseNo}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Case Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Case Summary</h2>
            <p className="text-sm text-gray-700 leading-relaxed">{caseData.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500">Case Type</p>
                <p className="text-sm font-medium text-gray-900">{caseData.caseType}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Court</p>
                <p className="text-sm font-medium text-gray-900">{caseData.courtName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Filing Date</p>
                <p className="text-sm font-medium text-gray-900">{new Date(caseData.filingDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Jurisdiction</p>
                <p className="text-sm font-medium text-gray-900">{caseData.jurisdiction}, {caseData.state}</p>
              </div>
            </div>
          </div>

          {/* Next Hearing Alert */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle className="h-5 w-5 text-amber-600 shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-800">Next Hearing: {new Date(caseData.nextHearing).toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}</p>
              <p className="text-xs text-amber-700 mt-0.5">{caseData.courtName} • Evidence Stage</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Timeline</h2>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                    item.type === 'success' ? 'bg-green-500' :
                    item.type === 'warning' ? 'bg-yellow-500' :
                    item.type === 'upcoming' ? 'bg-amber-500 animate-pulse' :
                    'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{item.event}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
              <Link href="/dashboard/client/documents" className="text-sm text-amber-700 hover:text-amber-800 font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-2">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-amber-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.date}</p>
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">{doc.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">Case Team</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-amber-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{caseData.advisor}</p>
                  <p className="text-xs text-gray-500">Lead Advisor</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-700" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{caseData.assistant}</p>
                  <p className="text-xs text-gray-500">Assistant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Fee Details</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Fee</span>
                <span className="text-sm font-bold text-gray-900">₹{caseData.fee.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Paid</span>
                <span className="text-sm font-medium text-green-600">₹50,000</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-sm text-gray-600">Balance</span>
                <span className="text-sm font-bold text-amber-700">₹25,000</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-amber-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-amber-800">
              Make Payment
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link href="/dashboard/client/messages" className="flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                <MessageSquare className="h-4 w-4 text-amber-600" />
                <span>Message Advisor</span>
              </Link>
              <Link href="/dashboard/client/appointments" className="flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                <Calendar className="h-4 w-4 text-amber-600" />
                <span>Book Consultation</span>
              </Link>
              <Link href="/dashboard/client/documents" className="flex items-center space-x-2 p-2.5 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                <FileText className="h-4 w-4 text-amber-600" />
                <span>Upload Document</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
