'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to API
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-amber-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-300 max-w-2xl">
              Reach out for a consultation or any legal queries. We are here to help you navigate civil law matters.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Address</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      No. 42, Law Chamber Complex,<br />
                      Mount Road, Chennai - 600002,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      <a href="tel:+919876543210" className="hover:text-amber-700">+91 98765 43210</a><br />
                      <a href="tel:+914428501234" className="hover:text-amber-700">+91 44 2850 1234</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      <a href="mailto:contact@legadv.in" className="hover:text-amber-700">contact@legadv.in</a><br />
                      <a href="mailto:appointments@legadv.in" className="hover:text-amber-700">appointments@legadv.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-700 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Working Hours</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Monday - Saturday: 9:30 AM - 6:00 PM<br />
                      Sunday: Closed<br />
                      Court Holidays: By Appointment Only
                    </p>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Map - Mount Road, Chennai</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. Our team will respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="Brief description of your legal matter"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                          placeholder="Describe your legal issue or query..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                      >
                        Send Message
                      </button>
                      <p className="text-xs text-gray-500">
                        * Your information is kept confidential as per legal privilege and DPDP Act 2023.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
