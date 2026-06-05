'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, CheckCircle2 } from 'lucide-react'
import { CASE_TYPE_LABELS } from '@/lib/constants'

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    description: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'in-person',
  })
  const [otp, setOtp] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      // In production, would trigger OTP send via API
      setStep(2)
    } else {
      // In production, would verify OTP and create appointment
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex-1 py-16">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Booked!</h1>
            <p className="text-gray-600 mb-6">
              Your consultation has been scheduled. You will receive a confirmation SMS on {formData.phone}.
            </p>
            <div className="bg-amber-50 rounded-xl p-6 text-left space-y-2 text-sm">
              <p><span className="font-medium">Name:</span> {formData.name}</p>
              <p><span className="font-medium">Date:</span> {formData.preferredDate}</p>
              <p><span className="font-medium">Time:</span> {formData.preferredTime}</p>
              <p><span className="font-medium">Type:</span> {formData.consultationType === 'in-person' ? 'In-Person' : 'Video Call'}</p>
              <p><span className="font-medium">Case Type:</span> {CASE_TYPE_LABELS[formData.caseType] || formData.caseType}</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Our team will call you to confirm the appointment within 2 hours during working hours.
            </p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-amber-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
            <p className="text-gray-300 max-w-2xl">
              Schedule an appointment with our senior advocate. First consultation is free for case evaluation.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress */}
            <div className="flex items-center justify-center mb-8">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 1 ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
              <div className={`w-24 h-1 ${step >= 2 ? 'bg-amber-700' : 'bg-gray-200'}`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= 2 ? 'bg-amber-700 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900">Your Details</h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Enter your full name"
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type of Legal Matter *</label>
                      <select
                        required
                        value={formData.caseType}
                        onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select case type</option>
                        {Object.entries(CASE_TYPE_LABELS).map(([key, label]) => (
                          <option key={key} value={key}>{label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
                      <textarea
                        rows={3}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                        placeholder="Briefly describe your legal matter..."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
                        <select
                          required
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="03:00 PM">03:00 PM</option>
                          <option value="04:00 PM">04:00 PM</option>
                          <option value="05:00 PM">05:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="in-person"
                            checked={formData.consultationType === 'in-person'}
                            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                            className="text-amber-700 focus:ring-amber-500"
                          />
                          <span className="text-sm text-gray-700">In-Person</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input
                            type="radio"
                            value="video"
                            checked={formData.consultationType === 'video'}
                            onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                            className="text-amber-700 focus:ring-amber-500"
                          />
                          <span className="text-sm text-gray-700">Video Call</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                    >
                      Continue - Verify Phone
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-gray-900">Verify Your Phone</h2>
                    <p className="text-gray-600 text-sm">
                      We&apos;ve sent a 6-digit OTP to <strong>{formData.phone}</strong>
                    </p>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP *</label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-center text-2xl tracking-widest"
                        placeholder="000000"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
                    >
                      Verify & Book Appointment
                    </button>

                    <div className="flex justify-between text-sm">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        ← Go Back
                      </button>
                      <button
                        type="button"
                        className="text-amber-700 hover:text-amber-800"
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="mt-8 bg-amber-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Calendar className="h-5 w-5 text-amber-700 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-1">Consultation Details</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• First consultation is FREE for case evaluation</li>
                    <li>• Duration: 30-45 minutes</li>
                    <li>• Walk-ins available (Mon-Sat, 9:30 AM - 6 PM)</li>
                    <li>• Video consultations available on request</li>
                  </ul>
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
