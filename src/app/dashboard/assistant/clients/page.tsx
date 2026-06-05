'use client'

import { Users, Phone, Mail, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function AssistantClientsPage() {
  const clients = [
    { id: '1', name: 'Rajesh Kumar', phone: '+91 98765 43210', email: 'rajesh@email.com', activeCases: 2, lastContact: '2026-06-03' },
    { id: '2', name: 'Priya Lakshmi', phone: '+91 87654 32109', email: 'priya@email.com', activeCases: 1, lastContact: '2026-06-01' },
    { id: '3', name: 'Venkatesh Rao', phone: '+91 76543 21098', email: null, activeCases: 1, lastContact: '2026-05-28' },
    { id: '4', name: 'Meena Devi', phone: '+91 65432 10987', email: 'meena@email.com', activeCases: 1, lastContact: '2026-05-25' },
    { id: '5', name: 'Arun Prasad', phone: '+91 54321 09876', email: null, activeCases: 1, lastContact: '2026-05-20' },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 text-sm mt-1">Manage assigned client accounts</p>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            placeholder="Search clients..."
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Client</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Active Cases</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Last Contact</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4 text-amber-700" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{client.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="space-y-1">
                    <p className="flex items-center space-x-1 text-sm text-gray-600">
                      <Phone className="h-3 w-3" />
                      <span>{client.phone}</span>
                    </p>
                    {client.email && (
                      <p className="flex items-center space-x-1 text-sm text-gray-500">
                        <Mail className="h-3 w-3" />
                        <span>{client.email}</span>
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="flex items-center space-x-1 text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <span>{client.activeCases}</span>
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(client.lastContact).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                </td>
                <td className="px-6 py-4">
                  <Link href={`/dashboard/assistant/messages`} className="text-sm text-amber-700 hover:text-amber-800 font-medium">
                    Message
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
