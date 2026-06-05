'use client'

import { Users, Briefcase, ClipboardList, Calendar, AlertTriangle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function AssistantDashboard() {
  const stats = [
    { label: 'Assigned Clients', value: '12', icon: Users, href: '/dashboard/assistant/clients', color: 'text-blue-600 bg-blue-50' },
    { label: 'Active Cases', value: '8', icon: Briefcase, href: '/dashboard/assistant/cases', color: 'text-purple-600 bg-purple-50' },
    { label: 'Pending Tasks', value: '5', icon: ClipboardList, href: '/dashboard/assistant/tasks', color: 'text-orange-600 bg-orange-50' },
    { label: 'Today\'s Appointments', value: '3', icon: Calendar, href: '/dashboard/assistant/calendar', color: 'text-green-600 bg-green-50' },
  ]

  const urgentTasks = [
    { title: 'Prepare plaint for LA-2026-0001', dueDate: '06 Jun 2026', priority: 'High', case: 'Property Dispute - Rajesh Kumar' },
    { title: 'Upload court fee receipt', dueDate: '07 Jun 2026', priority: 'Medium', case: 'Consumer Case - Priya' },
    { title: 'Send reminder for EC document', dueDate: '08 Jun 2026', priority: 'Low', case: 'Property Dispute - Rajesh Kumar' },
  ]

  const todaySchedule = [
    { time: '10:00 AM', client: 'Rajesh Kumar', purpose: 'Case Review', type: 'In-Person' },
    { time: '12:00 PM', client: 'Meena Devi', purpose: 'Document Collection', type: 'In-Person' },
    { time: '03:00 PM', client: 'Arun Prasad', purpose: 'Initial Consultation', type: 'Video Call' },
  ]

  const priorityColors: Record<string, string> = {
    High: 'text-red-700 bg-red-50',
    Medium: 'text-yellow-700 bg-yellow-50',
    Low: 'text-green-700 bg-green-50',
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Assistant Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage clients, cases, and daily tasks</p>
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
        {/* Urgent Tasks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Urgent Tasks</h2>
            <Link href="/dashboard/assistant/tasks" className="text-sm text-amber-700 hover:text-amber-800">View all</Link>
          </div>
          <div className="space-y-3">
            {urgentTasks.map((task, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{task.case}</p>
                  <div className="flex items-center space-x-3 mt-1.5">
                    <span className="text-xs text-gray-400">Due: {task.dueDate}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Today&apos;s Schedule</h2>
            <Link href="/dashboard/assistant/calendar" className="text-sm text-amber-700 hover:text-amber-800">Full calendar</Link>
          </div>
          <div className="space-y-3">
            {todaySchedule.map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-amber-700 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.client} - {item.purpose}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.time} • {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
