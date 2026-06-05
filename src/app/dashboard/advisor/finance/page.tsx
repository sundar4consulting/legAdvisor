'use client'

import { IndianRupee, TrendingUp, TrendingDown, Clock, CheckCircle, AlertCircle, Download } from 'lucide-react'

export default function AdvisorFinancePage() {
  const stats = [
    { label: 'Total Revenue (FY 2025-26)', value: '₹42,50,000', icon: IndianRupee, color: 'bg-green-500', change: '+18% from last FY' },
    { label: 'Pending Collections', value: '₹8,75,000', icon: Clock, color: 'bg-yellow-500', change: '12 invoices pending' },
    { label: 'This Month', value: '₹4,85,000', icon: TrendingUp, color: 'bg-blue-500', change: '+12% vs last month' },
  ]

  const recentPayments = [
    { client: 'Lakshmi Devi', case: 'Property Dispute', amount: '₹25,000', date: '04 Jun 2026', status: 'completed', method: 'UPI' },
    { client: 'Kumar S.', case: 'Consumer Protection', amount: '₹15,000', date: '03 Jun 2026', status: 'completed', method: 'Net Banking' },
    { client: 'Meenakshi R.', case: 'Succession Matter', amount: '₹35,000', date: '01 Jun 2026', status: 'completed', method: 'UPI' },
    { client: 'Sundaram K.', case: 'Contract Dispute', amount: '₹20,000', date: '28 May 2026', status: 'pending', method: '-' },
    { client: 'Raman V.', case: 'Debt Recovery', amount: '₹50,000', date: '25 May 2026', status: 'pending', method: '-' },
    { client: 'Anitha P.', case: 'Landlord-Tenant', amount: '₹10,000', date: '22 May 2026', status: 'completed', method: 'Card' },
  ]

  const feeStructure = [
    { type: 'Initial Consultation', fee: '₹1,000 - ₹2,500' },
    { type: 'Property Disputes', fee: '₹25,000 - ₹2,00,000' },
    { type: 'Family Law', fee: '₹20,000 - ₹1,50,000' },
    { type: 'Consumer Cases', fee: '₹10,000 - ₹50,000' },
    { type: 'Legal Notice Drafting', fee: '₹3,000 - ₹10,000' },
    { type: 'Document Drafting', fee: '₹2,000 - ₹15,000' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finance & Payments</h1>
          <p className="text-gray-600 text-sm mt-1">Track revenue, pending payments, and fee management</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
          <Download className="h-4 w-4" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        {/* Recent Payments */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Payments</h2>
            <button className="text-sm text-amber-700 hover:text-amber-800 font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Client</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Case</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {recentPayments.map((payment, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-5 py-3 text-sm text-gray-900">{payment.client}</td>
                    <td className="px-5 py-3 text-sm text-gray-600">{payment.case}</td>
                    <td className="px-5 py-3 text-sm font-medium text-gray-900">{payment.amount}</td>
                    <td className="px-5 py-3 text-sm text-gray-600">{payment.date}</td>
                    <td className="px-5 py-3">
                      <span className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full font-medium ${
                        payment.status === 'completed'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-yellow-50 text-yellow-700'
                      }`}>
                        {payment.status === 'completed' ? <CheckCircle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                        <span>{payment.status === 'completed' ? 'Paid' : 'Pending'}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Fee Structure</h2>
          </div>
          <div className="p-5 space-y-3">
            {feeStructure.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <span className="text-sm text-gray-700">{item.type}</span>
                <span className="text-sm font-medium text-gray-900">{item.fee}</span>
              </div>
            ))}
            <button className="w-full mt-3 text-sm text-amber-700 hover:text-amber-800 font-medium text-center py-2 border border-amber-200 rounded-lg hover:bg-amber-50">
              Edit Fee Structure
            </button>
          </div>
        </div>
      </div>

      {/* Monthly Trend */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue (Last 6 Months)</h2>
        <div className="grid grid-cols-6 gap-3">
          {[
            { month: 'Jan', amount: '₹3.2L' },
            { month: 'Feb', amount: '₹3.8L' },
            { month: 'Mar', amount: '₹4.1L' },
            { month: 'Apr', amount: '₹3.9L' },
            { month: 'May', amount: '₹4.3L' },
            { month: 'Jun', amount: '₹4.8L' },
          ].map((m, i) => (
            <div key={i} className="text-center">
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="text-sm font-bold text-amber-800">{m.amount}</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">{m.month}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
