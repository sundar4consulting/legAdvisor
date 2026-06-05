'use client'

import { useState } from 'react'
import { Send, User } from 'lucide-react'

export default function ClientMessagesPage() {
  const [message, setMessage] = useState('')

  const contacts = [
    { id: '1', name: 'Adv. Suresh Ramanathan', role: 'Advisor', lastMessage: 'Hearing date confirmed for June 15', time: '2h ago', unread: 1 },
    { id: '2', name: 'Priya (Assistant)', role: 'Assistant', lastMessage: 'Please upload the EC document', time: '1d ago', unread: 0 },
  ]

  const messages = [
    { id: '1', sender: 'Adv. Suresh Ramanathan', content: 'Good morning. I have reviewed your property documents.', time: '10:00 AM', isMine: false },
    { id: '2', sender: 'You', content: 'Thank you sir. What are the next steps?', time: '10:15 AM', isMine: true },
    { id: '3', sender: 'Adv. Suresh Ramanathan', content: 'We need to file the suit in District Court. I will prepare the plaint. Please ensure the Encumbrance Certificate is uploaded.', time: '10:20 AM', isMine: false },
    { id: '4', sender: 'You', content: 'I will upload it today.', time: '10:25 AM', isMine: true },
    { id: '5', sender: 'Adv. Suresh Ramanathan', content: 'Hearing date confirmed for June 15 at District Court, Chennai.', time: '2:00 PM', isMine: false },
  ]

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    // In production, call /api/messages
    setMessage('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Messages</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex" style={{ height: '600px' }}>
        {/* Contacts List */}
        <div className="w-80 border-r border-gray-100 overflow-y-auto">
          <div className="p-4 border-b border-gray-100">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>
          <div className="divide-y divide-gray-50">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                      <span className="text-xs text-gray-400">{contact.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{contact.lastMessage}</p>
                  </div>
                  {contact.unread > 0 && (
                    <span className="w-5 h-5 bg-amber-700 text-white text-xs rounded-full flex items-center justify-center">
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
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-amber-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Adv. Suresh Ramanathan</p>
              <p className="text-xs text-gray-500">Senior Advocate</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-xl ${msg.isMine ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.isMine ? 'text-amber-200' : 'text-gray-400'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-gray-100 flex items-center space-x-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-amber-700 text-white p-2.5 rounded-lg hover:bg-amber-800 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
