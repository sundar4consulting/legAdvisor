'use client'

import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react'

export default function AdvisorCalendarPage() {
  const [currentMonth] = useState('June 2026')

  const hearings = [
    { date: '07', day: 'Sat', title: 'Raman vs State Bank', time: '10:30 AM', court: 'Madras High Court', type: 'Arguments' },
    { date: '08', day: 'Sun', title: 'Lakshmi Property Dispute', time: '11:00 AM', court: 'Chennai City Civil Court', type: 'Evidence' },
    { date: '09', day: 'Mon', title: 'Kumar vs Krishnan', time: '02:00 PM', court: 'Dist. Court Coimbatore', type: 'Final Hearing' },
    { date: '10', day: 'Tue', title: 'Sundaram Succession', time: '10:00 AM', court: 'Madras High Court', type: 'Petition' },
    { date: '12', day: 'Thu', title: 'Meenakshi vs TN Housing', time: '11:30 AM', court: 'State Consumer Forum', type: 'Arguments' },
    { date: '14', day: 'Sat', title: 'Vijay Tenant Dispute', time: '02:30 PM', court: 'Rent Controller Chennai', type: 'Order' },
    { date: '15', day: 'Sun', title: 'Anitha Divorce', time: '10:00 AM', court: 'Family Court Chennai', type: 'Mediation' },
    { date: '18', day: 'Wed', title: 'Client Consultation - New', time: '03:00 PM', court: 'Office', type: 'Consultation' },
  ]

  const consultations = [
    { time: '09:00 AM', client: 'Walk-in Slot', type: 'Available' },
    { time: '10:30 AM', client: 'S. Raman - Follow-up', type: 'Confirmed' },
    { time: '02:00 PM', client: 'New Client - Property', type: 'Pending' },
    { time: '04:00 PM', client: 'K. Lakshmi - Review', type: 'Confirmed' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-amber-600" />
            Calendar & Schedule
          </h1>
          <p className="text-gray-600 mt-1">Court hearings, consultations, and appointments</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeft className="h-5 w-5" /></button>
          <span className="font-semibold text-gray-900">{currentMonth}</span>
          <button className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight className="h-5 w-5" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hearing Schedule */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Court Hearings - {currentMonth}</h2>
          </div>
          <div className="p-5 space-y-3">
            {hearings.map((h, i) => (
              <div key={i} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:border-amber-200 hover:bg-amber-50/30 transition-colors">
                <div className="text-center bg-amber-100 rounded-lg p-2 min-w-[56px]">
                  <p className="text-lg font-bold text-amber-700">{h.date}</p>
                  <p className="text-xs text-amber-600">{h.day}</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{h.title}</p>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />{h.time}
                    </span>
                    <span className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />{h.court}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  {h.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Consultations */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Today&apos;s Consultations</h2>
            <p className="text-sm text-gray-500 mt-1">5 June 2026</p>
          </div>
          <div className="p-5 space-y-3">
            {consultations.map((c, i) => (
              <div key={i} className="p-3 rounded-lg border border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">{c.time}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    c.type === 'Confirmed' ? 'bg-green-100 text-green-700' :
                    c.type === 'Available' ? 'bg-gray-100 text-gray-600' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {c.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{c.client}</p>
              </div>
            ))}
          </div>
          <div className="p-5 border-t border-gray-100">
            <button className="w-full bg-amber-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-amber-700">
              Block Time Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
