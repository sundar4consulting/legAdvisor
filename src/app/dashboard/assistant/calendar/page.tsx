'use client'

import { Calendar, Clock, User, MapPin } from 'lucide-react'

export default function AssistantCalendarPage() {
  const today = new Date('2026-06-05')
  const currentMonth = today.toLocaleString('en-IN', { month: 'long', year: 'numeric' })

  const todaySchedule = [
    { time: '09:30 AM', client: 'Lakshmi Devi', type: 'Document Collection', location: 'Office', duration: '30 min' },
    { time: '10:30 AM', client: 'Kumar S.', type: 'Client Consultation (with Advisor)', location: 'Office', duration: '45 min' },
    { time: '02:00 PM', client: 'Meenakshi R.', type: 'Phone Follow-up', location: 'Phone', duration: '15 min' },
    { time: '03:30 PM', client: 'Sundaram K.', type: 'Document Review', location: 'Office', duration: '30 min' },
  ]

  const upcomingHearings = [
    { date: '07 Jun', case: 'Raman vs State Bank', court: 'Madras High Court', time: '10:30 AM', task: 'Prepare case file' },
    { date: '08 Jun', case: 'Lakshmi Property Dispute', court: 'Chennai City Civil Court', time: '11:00 AM', task: 'Carry EC & sale deed' },
    { date: '09 Jun', case: 'Kumar vs Krishnan', court: 'Dist. Court, Coimbatore', time: '02:00 PM', task: 'File counter-affidavit' },
    { date: '10 Jun', case: 'Sundaram Succession', court: 'Madras High Court', time: '10:00 AM', task: 'Prepare petition copies' },
    { date: '12 Jun', case: 'Anitha Tenant Case', court: 'District Court, Chennai', time: '11:30 AM', task: 'Witness list submission' },
  ]

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1)
  const hearingDates = [7, 8, 9, 10, 12, 15, 18, 22, 25]
  const appointmentDates = [5, 6, 11, 13, 16, 19, 23]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <p className="text-gray-600 text-sm mt-1">Manage appointments and track hearing dates</p>
        </div>
        <button className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm font-medium">
          + Add Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mini Calendar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{currentMonth}</h2>
          <div className="grid grid-cols-7 gap-1 text-center">
            {weekDays.map((day) => (
              <div key={day} className="text-xs font-medium text-gray-500 py-1">{day}</div>
            ))}
            {/* Offset for June 2026 starting on Monday */}
            {calendarDays.map((day) => (
              <div
                key={day}
                className={`text-sm py-1.5 rounded-md ${
                  day === 5 ? 'bg-amber-600 text-white font-bold' :
                  hearingDates.includes(day) ? 'bg-red-100 text-red-700 font-medium' :
                  appointmentDates.includes(day) ? 'bg-blue-100 text-blue-700 font-medium' :
                  'text-gray-700 hover:bg-gray-100'
                } cursor-pointer`}
              >
                {day}
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-600 rounded" />
              <span className="text-gray-600">Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-100 border border-red-300 rounded" />
              <span className="text-gray-600">Court Hearings</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded" />
              <span className="text-gray-600">Appointments</span>
            </div>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-amber-600" />
                Today&apos;s Schedule — 5 June 2026
              </h2>
            </div>
            <div className="p-5 space-y-3">
              {todaySchedule.map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-amber-700 w-20 shrink-0">{item.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.type}</p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className="text-xs text-gray-500 flex items-center">
                        <User className="h-3 w-3 mr-1" />{item.client}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />{item.location}
                      </span>
                      <span className="text-xs text-gray-400">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Hearings */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-red-500" />
                Upcoming Court Hearings
              </h2>
            </div>
            <div className="divide-y divide-gray-50">
              {upcomingHearings.map((hearing, i) => (
                <div key={i} className="p-4 flex items-start space-x-4 hover:bg-gray-50">
                  <div className="bg-red-50 text-red-700 px-3 py-1.5 rounded-lg text-center shrink-0">
                    <p className="text-xs font-medium">{hearing.date}</p>
                    <p className="text-xs">{hearing.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{hearing.case}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{hearing.court}</p>
                    <p className="text-xs text-amber-700 mt-1 font-medium">📋 {hearing.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
