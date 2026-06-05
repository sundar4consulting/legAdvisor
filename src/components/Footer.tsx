import Link from 'next/link'
import { Scale, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-7 w-7 text-amber-500" />
              <span className="text-xl font-bold text-white">LegAdv</span>
            </div>
            <p className="text-sm text-gray-400">
              Trusted civil law advisory services across Southern India. Expert legal counsel for property, family, consumer, and contractual matters.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-amber-500 transition-colors">Our Services</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
              <li><Link href="/resources" className="hover:text-amber-500 transition-colors">Legal Resources</Link></li>
              <li><Link href="/book-appointment" className="hover:text-amber-500 transition-colors">Book Appointment</Link></li>
              <li><Link href="/login" className="hover:text-amber-500 transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#property-disputes" className="hover:text-amber-500 transition-colors">Property Disputes</Link></li>
              <li><Link href="/services#family-law" className="hover:text-amber-500 transition-colors">Family Law</Link></li>
              <li><Link href="/services#consumer-protection" className="hover:text-amber-500 transition-colors">Consumer Protection</Link></li>
              <li><Link href="/services#debt-recovery" className="hover:text-amber-500 transition-colors">Debt Recovery</Link></li>
              <li><Link href="/services#document-drafting" className="hover:text-amber-500 transition-colors">Document Drafting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500" />
                <span>No. 42, Law Chamber Complex,<br />Mount Road, Chennai - 600002,<br />Tamil Nadu, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-500" />
                <a href="tel:+919876543210" className="hover:text-amber-500">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <a href="mailto:contact@legadv.in" className="hover:text-amber-500">contact@legadv.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} LegAdv Legal Advisory. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-amber-500">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-amber-500">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-amber-500">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
