'use client'

import { useState } from 'react'
import { User, Phone, Mail, Globe, Lock, Save } from 'lucide-react'
import { LANGUAGES } from '@/lib/constants'

export default function ClientSettingsPage() {
  const [profile, setProfile] = useState({
    name: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    email: 'rajesh@email.com',
    language: 'en',
  })

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>

      <div className="max-w-2xl space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  value={profile.phone}
                  disabled
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Phone number cannot be changed. Contact support for assistance.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={profile.language}
                  onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-amber-700 text-white px-6 py-2.5 rounded-lg hover:bg-amber-800 text-sm font-medium">
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Enter current password" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Enter new password" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent" placeholder="Confirm new password" />
              </div>
            </div>
            <button className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-2.5 rounded-lg hover:bg-gray-900 text-sm font-medium">
              <Lock className="h-4 w-4" />
              <span>Update Password</span>
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          <div className="space-y-3">
            {[
              { label: 'SMS notifications for hearing dates', defaultChecked: true },
              { label: 'Email notifications for case updates', defaultChecked: true },
              { label: 'WhatsApp notifications', defaultChecked: false },
              { label: 'Payment reminders', defaultChecked: true },
            ].map((pref) => (
              <label key={pref.label} className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700">{pref.label}</span>
                <input
                  type="checkbox"
                  defaultChecked={pref.defaultChecked}
                  className="w-4 h-4 text-amber-700 rounded focus:ring-amber-500"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
