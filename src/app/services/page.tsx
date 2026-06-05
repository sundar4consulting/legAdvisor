import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SERVICES } from '@/lib/constants'
import {
  Building2,
  Users,
  ShieldCheck,
  FileText,
  ScrollText,
  Home,
  Banknote,
  Landmark,
  PenTool,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building2,
  Users,
  ShieldCheck,
  FileText,
  ScrollText,
  Home,
  Banknote,
  Landmark,
  PenTool,
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-amber-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Our Legal Services</h1>
            <p className="text-gray-300 max-w-2xl">
              Comprehensive civil law advisory services across all Southern Indian states.
              We handle cases from initial consultation through final resolution.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon] || FileText
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                          <Icon className="h-7 w-7 text-amber-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.details.map((detail) => (
                            <div key={detail} className="flex items-center space-x-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Fee Structure */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Fee Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-3xl font-bold text-amber-700">₹500</p>
                <p className="text-sm text-gray-500 mt-2">30-minute session</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
                  <li>• Case assessment</li>
                  <li>• Legal opinion</li>
                  <li>• Next steps guidance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center border-2 border-amber-500">
                <h3 className="font-semibold text-gray-900 mb-2">Case Handling</h3>
                <p className="text-3xl font-bold text-amber-700">₹10,000+</p>
                <p className="text-sm text-gray-500 mt-2">Depends on complexity</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
                  <li>• Full case management</li>
                  <li>• Court representation</li>
                  <li>• Document preparation</li>
                  <li>• Regular updates</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Document Drafting</h3>
                <p className="text-3xl font-bold text-amber-700">₹2,000+</p>
                <p className="text-sm text-gray-500 mt-2">Per document</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 text-left">
                  <li>• Legal notices</li>
                  <li>• Agreements</li>
                  <li>• Affidavits</li>
                  <li>• Deeds & wills</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              * Fees vary based on case complexity, court jurisdiction, and duration. Detailed fee structure provided after initial consultation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
