'use client'

import { useState } from 'react'
import { Send, User, Search } from 'lucide-react'

export default function AssistantMessagesPage() {
  const [message, setMessage] = useState('')
  const [activeContact, setActiveContact] = useState('1')

  const contacts = [
    { id: '1', name: 'Lakshmi Devi', role: 'Client', lastMessage: 'I will bring the EC tomorrow morning.', time: '30m ago', unread: 1 },
    { id: '2', name: 'Adv. Rajesh Kumar', role: 'Advisor', lastMessage: 'Review the plaint and send for filing.', time: '1h ago', unread: 1 },
    { id: '3', name: 'Kumar S.', role: 'Client', lastMessage: 'What documents do I need for the hearing?', time: '3h ago', unread: 0 },
    { id: '4', name: 'Meenakshi R.', role: 'Client', lastMessage: 'Thank you for the update.', time: '1d ago', unread: 0 },
    { id: '5', name: 'Karthik', role: 'Assistant', lastMessage: 'Can you share the Kumar case file?', time: '2d ago', unread: 0 },
  ]

  const messagesByContact: Record<string, Array<{ id: string; sender: string; content: string; time: string; isMine: boolean }>> = {
    '1': [
      { id: '1', sender: 'You', content: 'Good morning Lakshmi madam. This is regarding your property case.', time: '09:00 AM', isMine: true },
      { id: '2', sender: 'Lakshmi Devi', content: 'Good morning. Yes, tell me.', time: '09:10 AM', isMine: false },
      { id: '3', sender: 'You', content: 'We need the original Encumbrance Certificate and the sale deed for the hearing on June 8. Can you bring them to the office?', time: '09:12 AM', isMine: true },
      { id: '4', sender: 'Lakshmi Devi', content: 'I will bring the EC tomorrow morning.', time: '09:30 AM', isMine: false },
    ],
    '2': [
      { id: '1', sender: 'Adv. Rajesh Kumar', content: 'Priya, is the plaint for Lakshmi case ready?', time: '10:00 AM', isMine: false },
      { id: '2', sender: 'You', content: 'Yes sir, I have completed the draft. Uploaded for your review.', time: '10:15 AM', isMine: true },
      { id: '3', sender: 'Adv. Rajesh Kumar', content: 'Review the plaint and send for filing.', time: '11:00 AM', isMine: false },
    ],
  }

  const currentMessages = messagesByContact[activeContact] || []
  const activeContactInfo = contacts.find(c => c.id === activeContact)

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    setMessage('')
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 text-sm mt-1">Communicate with clients and the advisor</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex" style={{ height: '620px' }}>
        {/* Contacts */}
        <div className="w-72 border-r border-gray-100 flex flex-col">
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact.id)}
                className={`p-3 cursor-pointer transition-colors ${
                  activeContact === contact.id ? 'bg-amber-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                      <span className="text-xs text-gray-400">{contact.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center shrink-0">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center space-x-3">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activeContactInfo?.name}</p>
              <p className="text-xs text-gray-500">{activeContactInfo?.role}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {currentMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${
                  msg.isMine
                    ? 'bg-amber-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-900 rounded-bl-md'
                }`}>
                  <p>{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isMine ? 'text-amber-200' : 'text-gray-500'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button type="submit" className="p-2.5 bg-amber-600 text-white rounded-full hover:bg-amber-700">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
