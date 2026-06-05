'use client'

import { Briefcase, Calendar, FileText, CreditCard, Bell, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ClientDashboard() {
  // In production, fetch from API
  const stats = [
    { label: 'Active Cases', value: '2', icon: Briefcase, href: '/dashboard/client/cases', color: 'text-blue-600 bg-blue-50' },
    { label: 'Upcoming Hearings', value: '1', icon: Calendar, href: '/dashboard/client/cases', color: 'text-purple-600 bg-purple-50' },
    { label: 'Pending Documents', value: '3', icon: FileText, href: '/dashboard/client/documents', color: 'text-orange-600 bg-orange-50' },
    { label: 'Due Payments', value: '₹15,000', icon: CreditCard, href: '/dashboard/client/payments', color: 'text-red-600 bg-red-50' },
  ]

  const recentActivity = [
    { text: 'Hearing scheduled for Property Dispute - 15 Jun 2026', time: '2 hours ago', type: 'hearing' },
    { text: 'Document uploaded: Sale Deed Copy', time: '1 day ago', type: 'document' },
    { text: 'Payment of ₹5,000 received', time: '3 days ago', type: 'payment' },
    { text: 'Case status updated: In Progress', time: '5 days ago', type: 'status' },
  ]

  const upcomingAppointments = [
    { date: '10 Jun 2026', time: '10:00 AM', type: 'In-Person', purpose: 'Case Review - Property Dispute' },
    { date: '18 Jun 2026', time: '03:00 PM', type: 'Video Call', purpose: 'Document Verification' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Client</h1>
        <p className="text-gray-600 mt-1">Here&apos;s an overview of your legal matters</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Bell className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2" />
                <div className="flex-1">
                  <p className="text-sm text-gray-700">{item.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
            <Link href="/dashboard/client/appointments" className="text-sm text-amber-700 hover:text-amber-800">View all</Link>
          </div>
          <div className="space-y-4">
            {upcomingAppointments.map((apt, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-amber-700 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{apt.purpose}</p>
                  <p className="text-xs text-gray-500 mt-1">{apt.date} at {apt.time} • {apt.type}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/dashboard/client/appointments"
            className="block mt-4 text-center text-sm bg-amber-50 text-amber-700 py-2 rounded-lg hover:bg-amber-100 transition-colors"
          >
            Book New Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
