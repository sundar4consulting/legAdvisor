'use client'

import { CreditCard, Download, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

export default function ClientPaymentsPage() {
  const payments = [
    { id: '1', description: 'Consultation Fee - Property Dispute', amount: 5000, status: 'COMPLETED', date: '2026-05-20', case: 'LA-2026-0001' },
    { id: '2', description: 'Filing Fee - District Court', amount: 10000, status: 'PENDING', date: '2026-06-01', case: 'LA-2026-0001' },
    { id: '3', description: 'Consultation Fee - Consumer Case', amount: 5000, status: 'COMPLETED', date: '2026-05-15', case: 'LA-2026-0012' },
  ]

  const totalPaid = payments.filter(p => p.status === 'COMPLETED').reduce((sum, p) => sum + p.amount, 0)
  const totalPending = payments.filter(p => p.status === 'PENDING').reduce((sum, p) => sum + p.amount, 0)

  const statusIcons: Record<string, typeof CheckCircle2> = {
    COMPLETED: CheckCircle2,
    PENDING: Clock,
    FAILED: AlertCircle,
  }
  const statusColors: Record<string, string> = {
    COMPLETED: 'text-green-600',
    PENDING: 'text-yellow-600',
    FAILED: 'text-red-600',
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Payments</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-600">Total Paid</p>
          <p className="text-2xl font-bold text-green-700 mt-1">₹{totalPaid.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-700 mt-1">₹{totalPending.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-center">
          <button className="flex items-center space-x-2 bg-amber-700 text-white px-6 py-2.5 rounded-lg hover:bg-amber-800 text-sm font-medium">
            <CreditCard className="h-4 w-4" />
            <span>Make Payment</span>
          </button>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Payment History</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Description</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Case</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Receipt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => {
              const StatusIcon = statusIcons[payment.status]
              return (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{payment.description}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{payment.case}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{payment.amount.toLocaleString('en-IN')}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(payment.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center space-x-1 text-sm ${statusColors[payment.status]}`}>
                      <StatusIcon className="h-4 w-4" />
                      <span>{payment.status === 'COMPLETED' ? 'Paid' : payment.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {payment.status === 'COMPLETED' ? (
                      <button className="text-amber-700 hover:text-amber-800">
                        <Download className="h-4 w-4" />
                      </button>
                    ) : payment.status === 'PENDING' ? (
                      <button className="text-xs bg-amber-700 text-white px-3 py-1 rounded hover:bg-amber-800">
                        Pay Now
                      </button>
                    ) : null}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-500 mt-4">
        Payments are processed securely via Razorpay. Accepts UPI, Net Banking, Credit/Debit Cards.
      </p>
    </div>
  )
}
