'use client'

import { useState } from 'react'
import { User, Lock, Bell, Globe, Save } from 'lucide-react'

export default function AdvisorSettingsPage() {
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
        <p className="text-gray-600 text-sm mt-1">Manage your account and firm preferences</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" defaultValue="Adv. Rajesh Kumar" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bar Council Reg. No.</label>
              <input type="text" defaultValue="TN/1234/2008" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" defaultValue="rajesh.kumar@legadv.in" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" defaultValue="+91 98765 43210" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
              <textarea rows={2} defaultValue="No. 15, Anna Salai, High Court Campus, Chennai - 600104" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
              <input type="text" defaultValue="Civil Law, Property Disputes, Family Law" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <input type="text" defaultValue="18 years" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent" />
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
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h2>
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
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Two-Factor Authentication</h3>
            <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account.</p>
            <button className="px-4 py-2 border border-amber-200 text-amber-700 rounded-lg text-sm font-medium hover:bg-amber-50">
              Enable 2FA
            </button>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { label: 'Hearing reminders', description: 'Get notified 1 day before scheduled hearings', defaultChecked: true },
              { label: 'New client inquiries', description: 'Alert when a new client books an appointment', defaultChecked: true },
              { label: 'Document uploads', description: 'Notify when team uploads documents for review', defaultChecked: true },
              { label: 'Payment received', description: 'Get notified when a client makes a payment', defaultChecked: true },
              { label: 'Task completion', description: 'Alert when assigned tasks are marked done', defaultChecked: false },
              { label: 'SMS notifications', description: 'Receive important alerts via SMS', defaultChecked: true },
              { label: 'Email digest', description: 'Daily summary of all activities', defaultChecked: false },
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Court Jurisdiction</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500">
                <option>Tamil Nadu - Madras High Court</option>
                <option>Karnataka - Karnataka High Court</option>
                <option>Kerala - Kerala High Court</option>
                <option>Andhra Pradesh - AP High Court</option>
                <option>Telangana - Telangana High Court</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Working Hours</label>
              <div className="flex items-center space-x-2">
                <input type="time" defaultValue="09:30" className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500" />
                <span className="text-gray-500">to</span>
                <input type="time" defaultValue="18:00" className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Duration (minutes)</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500">
                <option>30</option>
                <option>45</option>
                <option>60</option>
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
