'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Scale, Phone, Lock, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [loginMethod, setLoginMethod] = useState<'otp' | 'password'>('otp')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSendOtp = async () => {
    if (!phone || phone.length < 10) {
      setError('Please enter a valid phone number')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      const data = await res.json()
      if (res.ok) {
        setOtpSent(true)
      } else {
        setError(data.error || 'Failed to send OTP')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const body = loginMethod === 'otp'
        ? { phone, otp }
        : { phone, password }

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (res.ok) {
        // Store token
        document.cookie = `token=${data.token}; path=/; max-age=${7 * 24 * 60 * 60}`
        // Redirect based on role
        const roleRoutes: Record<string, string> = {
          ADVISOR: '/dashboard/advisor',
          ASSISTANT: '/dashboard/assistant',
          CLIENT: '/dashboard/client',
        }
        router.push(roleRoutes[data.user.role] || '/dashboard/client')
      } else {
        setError(data.error || 'Login failed')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center space-x-2">
          <Scale className="h-10 w-10 text-amber-700" />
          <span className="text-2xl font-bold text-gray-900">LegAdv</span>
        </Link>
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your case dashboard and documents
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-sm rounded-xl border border-gray-200">
          {/* Login Method Tabs */}
          <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => { setLoginMethod('otp'); setError('') }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${loginMethod === 'otp' ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-600'}`}
            >
              OTP Login
            </button>
            <button
              onClick={() => { setLoginMethod('password'); setError('') }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${loginMethod === 'password' ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-600'}`}
            >
              Password
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {loginMethod === 'otp' ? (
              <>
                {!otpSent ? (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={loading}
                    className="w-full bg-amber-700 text-white py-2.5 rounded-lg font-semibold hover:bg-amber-800 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Sending...' : 'Send OTP'}
                  </button>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                      <input
                        type="text"
                        required
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-center text-lg tracking-widest"
                        placeholder="000000"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-amber-700 text-white py-2.5 rounded-lg font-semibold hover:bg-amber-800 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Verifying...' : 'Login'}
                    </button>
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="w-full text-sm text-amber-700 hover:text-amber-800"
                    >
                      Resend OTP
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-700 text-white py-2.5 rounded-lg font-semibold hover:bg-amber-800 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </>
            )}
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-amber-700 font-medium hover:text-amber-800">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
