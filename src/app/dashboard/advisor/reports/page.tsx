'use client'

import { BarChart3, TrendingUp, Users, Briefcase, CheckCircle, Clock, Scale } from 'lucide-react'

export default function AdvisorReportsPage() {
  const caseMetrics = [
    { label: 'Total Cases (FY)', value: '42', icon: Briefcase, color: 'bg-blue-500' },
    { label: 'Cases Won', value: '28', icon: CheckCircle, color: 'bg-green-500' },
    { label: 'Active Cases', value: '24', icon: Clock, color: 'bg-amber-500' },
    { label: 'New Clients', value: '15', icon: Users, color: 'bg-purple-500' },
  ]

  const casesByType = [
    { type: 'Property Disputes', count: 12, percentage: 29 },
    { type: 'Family Law', count: 8, percentage: 19 },
    { type: 'Consumer Protection', count: 6, percentage: 14 },
    { type: 'Contract Disputes', count: 5, percentage: 12 },
    { type: 'Succession/Inheritance', count: 4, percentage: 10 },
    { type: 'Landlord-Tenant', count: 4, percentage: 10 },
    { type: 'Debt Recovery', count: 2, percentage: 5 },
    { type: 'Other', count: 1, percentage: 2 },
  ]

  const casesByStatus = [
    { status: 'Resolved', count: 18, color: 'bg-green-500' },
    { status: 'In Progress', count: 12, color: 'bg-blue-500' },
    { status: 'Hearing Scheduled', count: 5, color: 'bg-amber-500' },
    { status: 'Documents Pending', count: 4, color: 'bg-yellow-500' },
    { status: 'New Inquiry', count: 3, color: 'bg-gray-400' },
  ]

  const courtDistribution = [
    { court: 'Chennai City Civil Court', cases: 10 },
    { court: 'Madras High Court', cases: 8 },
    { court: 'District Court, Coimbatore', cases: 5 },
    { court: 'District Court, Madurai', cases: 4 },
    { court: 'Consumer Forum, Chennai', cases: 6 },
    { court: 'Family Court, Chennai', cases: 5 },
    { court: 'Karnataka High Court', cases: 2 },
    { court: 'Kerala High Court', cases: 2 },
  ]

  const monthlyPerformance = [
    { month: 'Jan', newCases: 4, resolved: 2, revenue: 3.2 },
    { month: 'Feb', newCases: 5, resolved: 3, revenue: 3.8 },
    { month: 'Mar', newCases: 6, resolved: 4, revenue: 4.1 },
    { month: 'Apr', newCases: 3, resolved: 5, revenue: 3.9 },
    { month: 'May', newCases: 7, resolved: 4, revenue: 4.3 },
    { month: 'Jun', newCases: 4, resolved: 3, revenue: 4.8 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600 text-sm mt-1">Firm performance metrics and insights</p>
        </div>
        <select className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500">
          <option>FY 2025-26</option>
          <option>FY 2024-25</option>
          <option>FY 2023-24</option>
        </select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {caseMetrics.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cases by Type */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Scale className="h-5 w-5 mr-2 text-amber-600" />
              Cases by Practice Area
            </h2>
          </div>
          <div className="p-5 space-y-3">
            {casesByType.map((item) => (
              <div key={item.type} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">{item.type}</span>
                    <span className="text-sm font-medium text-gray-900">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cases by Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-amber-600" />
              Case Status Distribution
            </h2>
          </div>
          <div className="p-5 space-y-4">
            {casesByStatus.map((item) => (
              <div key={item.status} className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-sm text-gray-700">{item.status}</span>
                  <span className="text-sm font-bold text-gray-900">{item.count}</span>
                </div>
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Success Rate</span>
                <span className="text-lg font-bold text-green-600">67%</span>
              </div>
            </div>
          </div>

          {/* Court Distribution */}
          <div className="p-5 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Court Distribution</h3>
            <div className="space-y-2">
              {courtDistribution.map((item) => (
                <div key={item.court} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{item.court}</span>
                  <span className="font-medium text-gray-900">{item.cases}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Monthly Performance Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-amber-600" />
            Monthly Performance (2026)
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Month</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">New Cases</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Resolved</th>
                <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Revenue (₹ Lakhs)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {monthlyPerformance.map((row) => (
                <tr key={row.month} className="hover:bg-gray-50">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{row.month}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{row.newCases}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{row.resolved}</td>
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">₹{row.revenue}L</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
