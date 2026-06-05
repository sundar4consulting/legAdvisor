'use client'

import { useState } from 'react'
import { User, Lock, Bell, Globe, Save } from 'lucide-react'

export default function AssistantSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { key: 'profile', label: 'Profile', icon: User },
    { key: 'security', label: 'Security', icon: Lock },
    { key: 'notifications', label: 'Notifications', icon: Bell },
    { key: 'preferences', label: 'Preferences', icon: Globe },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 text-sm mt-1">Manage your account preferences</p>
      </div>

      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {activeTab === 'profile' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" defaultValue="Priya Kumari" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
              <input type="text" defaultValue="LA-ASST-001" disabled className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" defaultValue="priya@legadv.in" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" defaultValue="+91 87654 32109" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
              <input type="text" defaultValue="Legal Assistant" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Joined</label>
              <input type="text" defaultValue="March 2022" disabled className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-500" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="flex items-center space-x-2 bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 text-sm font-medium">
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      )}

      {activeTab === 'security' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <input type="password" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <button className="flex items-center space-x-2 bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 text-sm font-medium">
              <Lock className="h-4 w-4" />
              <span>Update Password</span>
            </button>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: 'New task assigned', description: 'Get notified when advisor assigns a new task', defaultChecked: true },
              { label: 'Hearing reminders', description: 'Reminder 1 day before scheduled hearings', defaultChecked: true },
              { label: 'Client messages', description: 'Alert when a client sends a message', defaultChecked: true },
              { label: 'Document review updates', description: 'Notify when documents are approved or rejected', defaultChecked: true },
              { label: 'Appointment changes', description: 'Alert on booking/rescheduling', defaultChecked: false },
              { label: 'SMS notifications', description: 'Receive alerts via SMS', defaultChecked: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked={item.defaultChecked} className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:ring-2 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-600" />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'preferences' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500">
                <option value="en">English</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="kn">ಕನ್ನಡ (Kannada)</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="ml">മലയാളം (Malayalam)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Task View Default</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500">
                <option>Kanban Board</option>
                <option>List View</option>
                <option>Calendar View</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 text-sm font-medium mt-4">
              <Save className="h-4 w-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
