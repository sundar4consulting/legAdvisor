'use client'

import { Briefcase, Users, Calendar, IndianRupee, TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react'

export default function AdvisorDashboard() {
  const stats = [
    { label: 'Active Cases', value: '24', icon: Briefcase, change: '+3 this month', color: 'bg-blue-500' },
    { label: 'Total Clients', value: '67', icon: Users, change: '+5 this month', color: 'bg-green-500' },
    { label: 'Upcoming Hearings', value: '8', icon: Calendar, change: 'Next 7 days', color: 'bg-amber-500' },
    { label: 'Revenue (MTD)', value: '₹4,85,000', icon: IndianRupee, change: '+12% vs last month', color: 'bg-purple-500' },
  ]

  const upcomingHearings = [
    { case: 'Raman vs State Bank', court: 'Madras High Court', date: '07 Jun 2026', time: '10:30 AM', type: 'Arguments' },
    { case: 'Lakshmi Property Dispute', court: 'Chennai City Civil Court', date: '08 Jun 2026', time: '11:00 AM', type: 'Evidence' },
    { case: 'Kumar vs Krishnan', court: 'Dist. Court Coimbatore', date: '09 Jun 2026', time: '02:00 PM', type: 'Final Hearing' },
    { case: 'Sundaram Succession', court: 'Madras High Court', date: '10 Jun 2026', time: '10:00 AM', type: 'Petition' },
  ]

  const recentActivity = [
    { action: 'Case accepted', detail: 'Meenakshi vs Tamil Nadu Housing Board', time: '2 hours ago', status: 'success' },
    { action: 'Document approved', detail: 'Legal notice draft - Kumar case', time: '4 hours ago', status: 'success' },
    { action: 'Payment received', detail: '₹25,000 - Lakshmi Property Dispute', time: '6 hours ago', status: 'success' },
    { action: 'Hearing adjourned', detail: 'Raman vs State Bank - Next: 07 Jun', time: '1 day ago', status: 'warning' },
    { action: 'New client inquiry', detail: 'Land dispute in Madurai', time: '1 day ago', status: 'info' },
  ]

  const teamWorkload = [
    { name: 'Priya (Assistant)', activeTasks: 12, completed: 45, pending: 3 },
    { name: 'Karthik (Assistant)', activeTasks: 8, completed: 38, pending: 5 },
    { name: 'Deepa (Junior)', activeTasks: 6, completed: 22, pending: 2 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Advisor Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Advocate Rajesh Kumar</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Thursday, 5 June 2026</span>
          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700">
            + New Case
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Hearings */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-amber-600" />
              Upcoming Hearings
            </h2>
          </div>
          <div className="p-5">
            <div className="space-y-3">
              {upcomingHearings.map((hearing, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{hearing.case}</p>
                    <p className="text-xs text-gray-500">{hearing.court}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{hearing.date}</p>
                    <p className="text-xs text-gray-500">{hearing.time} · {hearing.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Workload */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-600" />
              Team Workload
            </h2>
          </div>
          <div className="p-5 space-y-4">
            {teamWorkload.map((member, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{member.name}</p>
                  <span className="text-xs text-gray-500">{member.activeTasks} active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: `${(member.activeTasks / 15) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{member.completed} completed</span>
                  <span>{member.pending} pending review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            Recent Activity
          </h2>
        </div>
        <div className="p-5">
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                {item.status === 'success' && <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />}
                {item.status === 'warning' && <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0" />}
                {item.status === 'info' && <Clock className="h-5 w-5 text-blue-500 flex-shrink-0" />}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
