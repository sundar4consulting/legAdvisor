'use client'

import { Calendar, Plus } from 'lucide-react'

export default function ClientAppointmentsPage() {
  const appointments = [
    {
      id: '1',
      date: '2026-06-10',
      time: '10:00 AM',
      type: 'In-Person',
      status: 'CONFIRMED',
      purpose: 'Case Review - Property Dispute',
      with: 'Adv. Suresh Ramanathan',
    },
    {
      id: '2',
      date: '2026-06-18',
      time: '03:00 PM',
      type: 'Video Call',
      status: 'PENDING',
      purpose: 'Document Verification',
      with: 'Assistant - Priya',
    },
    {
      id: '3',
      date: '2026-05-25',
      time: '11:00 AM',
      type: 'In-Person',
      status: 'COMPLETED',
      purpose: 'Initial Consultation',
      with: 'Adv. Suresh Ramanathan',
    },
  ]

  const statusColors: Record<string, string> = {
    PENDING: 'bg-yellow-100 text-yellow-700',
    CONFIRMED: 'bg-green-100 text-green-700',
    COMPLETED: 'bg-gray-100 text-gray-600',
    CANCELLED: 'bg-red-100 text-red-700',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 text-sm mt-1">Manage your consultations and meetings</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
          <Plus className="h-4 w-4" />
          <span>Book Appointment</span>
        </button>
      </div>

      <div className="space-y-4">
        {appointments.map((apt) => (
          <div key={apt.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-50 p-3 rounded-lg">
                  <Calendar className="h-6 w-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{apt.purpose}</h3>
                  <p className="text-sm text-gray-600 mt-1">With: {apt.with}</p>
                  <div className="flex items-center space-x-3 mt-2 text-sm text-gray-500">
                    <span>{new Date(apt.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    <span>•</span>
                    <span>{apt.time}</span>
                    <span>•</span>
                    <span>{apt.type}</span>
                  </div>
                </div>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[apt.status]}`}>
                {apt.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
