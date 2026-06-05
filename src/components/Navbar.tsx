'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Scale, Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-amber-700" />
              <span className="text-xl font-bold text-gray-900">LegAdv</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/login"
              className="border border-amber-700 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-appointment"
              className="block bg-amber-700 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </Link>
            <Link
              href="/login"
              className="block border border-amber-700 text-amber-700 px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <a href="tel:+919876543210" className="flex items-center text-gray-600 space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
