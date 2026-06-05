'use client'

import { Bell, CheckCircle2 } from 'lucide-react'

export default function ClientNotificationsPage() {
  const notifications = [
    { id: '1', title: 'Hearing Date Confirmed', message: 'Your property dispute case hearing is scheduled for 15 Jun 2026 at District Court, Chennai.', time: '2 hours ago', read: false, type: 'hearing' },
    { id: '2', title: 'Document Approved', message: 'Your Sale Deed document has been reviewed and approved by the advisor.', time: '1 day ago', read: false, type: 'document' },
    { id: '3', title: 'Payment Received', message: 'Payment of ₹5,000 for consultation fee has been received successfully.', time: '3 days ago', read: true, type: 'payment' },
    { id: '4', title: 'New Message', message: 'Adv. Suresh Ramanathan sent you a message regarding case LA-2026-0001.', time: '3 days ago', read: true, type: 'message' },
    { id: '5', title: 'Case Status Updated', message: 'Your property dispute case status has been updated to "In Progress".', time: '5 days ago', read: true, type: 'status' },
    { id: '6', title: 'Document Required', message: 'Please upload the Encumbrance Certificate for case LA-2026-0001.', time: '1 week ago', read: true, type: 'document' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 text-sm mt-1">Stay updated on your case progress</p>
        </div>
        <button className="text-sm text-amber-700 hover:text-amber-800 font-medium">
          Mark all as read
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`bg-white rounded-xl shadow-sm border p-5 flex items-start space-x-4 ${notification.read ? 'border-gray-100' : 'border-amber-200 bg-amber-50/30'}`}
          >
            <div className={`p-2 rounded-lg ${notification.read ? 'bg-gray-100' : 'bg-amber-100'}`}>
              <Bell className={`h-5 w-5 ${notification.read ? 'text-gray-500' : 'text-amber-700'}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <h3 className={`text-sm font-medium ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                  {notification.title}
                </h3>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{notification.time}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            </div>
            {!notification.read && (
              <button className="text-gray-400 hover:text-green-600" title="Mark as read">
                <CheckCircle2 className="h-5 w-5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
