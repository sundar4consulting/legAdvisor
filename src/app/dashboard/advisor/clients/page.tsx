'use client'

import { useState } from 'react'
import { Users, Search, Phone, Mail, Briefcase, MoreVertical } from 'lucide-react'

export default function AdvisorClientsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const clients = [
    { id: 1, name: 'S. Raman', phone: '+91 98765 43210', email: 'raman@email.com', cases: 2, activeCases: 1, totalPaid: '₹1,25,000', pending: '₹35,000', joinedDate: 'Jan 2025', location: 'Chennai' },
    { id: 2, name: 'K. Lakshmi', phone: '+91 87654 32109', email: 'lakshmi@email.com', cases: 1, activeCases: 1, totalPaid: '₹85,000', pending: '₹20,000', joinedDate: 'Mar 2025', location: 'Chennai' },
    { id: 3, name: 'R. Kumar', phone: '+91 76543 21098', email: 'kumar@email.com', cases: 1, activeCases: 1, totalPaid: '₹60,000', pending: '₹40,000', joinedDate: 'Jun 2025', location: 'Coimbatore' },
    { id: 4, name: 'M. Sundaram', phone: '+91 65432 10987', email: 'sundaram@email.com', cases: 3, activeCases: 1, totalPaid: '₹2,10,000', pending: '₹0', joinedDate: 'Aug 2024', location: 'Madurai' },
    { id: 5, name: 'P. Meenakshi', phone: '+91 54321 09876', email: 'meena@email.com', cases: 1, activeCases: 1, totalPaid: '₹15,000', pending: '₹25,000', joinedDate: 'May 2026', location: 'Chennai' },
    { id: 6, name: 'A. Vijay', phone: '+91 43210 98765', email: 'vijay@email.com', cases: 1, activeCases: 1, totalPaid: '₹30,000', pending: '₹15,000', joinedDate: 'Apr 2026', location: 'Chennai' },
    { id: 7, name: 'S. Anitha', phone: '+91 32109 87654', email: 'anitha@email.com', cases: 1, activeCases: 1, totalPaid: '₹45,000', pending: '₹30,000', joinedDate: 'Feb 2026', location: 'Trichy' },
    { id: 8, name: 'T. Balasubramanian', phone: '+91 21098 76543', email: 'bala@email.com', cases: 2, activeCases: 0, totalPaid: '₹1,50,000', pending: '₹0', joinedDate: 'Nov 2024', location: 'Salem' },
  ]

  const filtered = clients.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Users className="h-6 w-6 mr-2 text-amber-600" />
            Client Directory
          </h1>
          <p className="text-gray-600 mt-1">{clients.length} registered clients</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search clients by name or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Client Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((client) => (
          <div key={client.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:border-amber-200 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-amber-700">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-xs text-gray-500">{client.location} · Since {client.joinedDate}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-lg font-bold text-gray-900">{client.cases}</p>
                <p className="text-xs text-gray-500">Total Cases</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-lg font-bold text-green-600">{client.totalPaid}</p>
                <p className="text-xs text-gray-500">Paid</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-lg font-bold text-amber-600">{client.pending}</p>
                <p className="text-xs text-gray-500">Pending</p>
              </div>
            </div>

            <div className="mt-4 flex items-center space-x-4 pt-3 border-t border-gray-100">
              <a href={`tel:${client.phone}`} className="flex items-center text-xs text-gray-600 hover:text-amber-600">
                <Phone className="h-3 w-3 mr-1" />{client.phone}
              </a>
              <a href={`mailto:${client.email}`} className="flex items-center text-xs text-gray-600 hover:text-amber-600">
                <Mail className="h-3 w-3 mr-1" />{client.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
