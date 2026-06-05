'use client'

import { useState } from 'react'
import { Send, User, Search } from 'lucide-react'

interface Contact {
  id: string
  name: string
  role: string
  lastMessage: string
  time: string
  unread: number
}

interface Message {
  id: string
  sender: string
  content: string
  time: string
  isMine: boolean
}

export default function AdvisorMessagesPage() {
  const [message, setMessage] = useState('')
  const [activeContact, setActiveContact] = useState('1')

  const contacts: Contact[] = [
    { id: '1', name: 'Lakshmi Devi (Client)', role: 'Client', lastMessage: 'Thank you sir, I will bring the documents tomorrow.', time: '1h ago', unread: 1 },
    { id: '2', name: 'Priya (Assistant)', role: 'Assistant', lastMessage: 'Plaint draft is ready for your review', time: '2h ago', unread: 2 },
    { id: '3', name: 'Kumar S. (Client)', role: 'Client', lastMessage: 'When is the next hearing date?', time: '4h ago', unread: 0 },
    { id: '4', name: 'Karthik (Assistant)', role: 'Assistant', lastMessage: 'Legal notice sent to opposite party', time: '1d ago', unread: 0 },
    { id: '5', name: 'Meenakshi R. (Client)', role: 'Client', lastMessage: 'Is there any update on my case?', time: '2d ago', unread: 0 },
  ]

  const messagesByContact: Record<string, Message[]> = {
    '1': [
      { id: '1', sender: 'You', content: 'Good morning Lakshmi. Your case hearing is scheduled for June 10 at Chennai District Court.', time: '09:30 AM', isMine: true },
      { id: '2', sender: 'Lakshmi Devi', content: 'Good morning sir. Should I be present in court?', time: '09:45 AM', isMine: false },
      { id: '3', sender: 'You', content: 'Yes, please come with the original sale deed and EC certificate. Hearing is at 11 AM.', time: '09:50 AM', isMine: true },
      { id: '4', sender: 'Lakshmi Devi', content: 'Thank you sir, I will bring the documents tomorrow.', time: '10:00 AM', isMine: false },
    ],
    '2': [
      { id: '1', sender: 'Priya', content: 'Sir, I have completed the plaint for Lakshmi property case. Filing tomorrow.', time: '11:00 AM', isMine: false },
      { id: '2', sender: 'You', content: 'Good. Make sure the court fee calculation is correct for the property value.', time: '11:15 AM', isMine: true },
      { id: '3', sender: 'Priya', content: 'Plaint draft is ready for your review. Uploaded to documents.', time: '02:30 PM', isMine: false },
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
        <p className="text-gray-600 text-sm mt-1">Communicate with clients and team members</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex" style={{ height: '650px' }}>
        {/* Contacts List */}
        <div className="w-80 border-r border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact.id)}
                className={`p-4 cursor-pointer transition-colors ${
                  activeContact === contact.id ? 'bg-amber-50' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="w-5 h-5 bg-amber-600 text-white text-xs rounded-full flex items-center justify-center">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-100 flex items-center space-x-3">
            <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activeContactInfo?.name}</p>
              <p className="text-xs text-gray-500">{activeContactInfo?.role}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {currentMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl ${
                  msg.isMine
                    ? 'bg-amber-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-900 rounded-bl-md'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isMine ? 'text-amber-200' : 'text-gray-500'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="p-2.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
