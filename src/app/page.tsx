import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import {
  Scale,
  Shield,
  Clock,
  Users,
  Building2,
  FileText,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="h-6 w-6 text-amber-400" />
                <span className="text-amber-400 font-medium">Trusted Legal Advisory</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Expert Civil Law Counsel for{' '}
                <span className="text-amber-400">Southern India</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                Professional legal advisory services for property disputes, family law, consumer protection, and all civil matters across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh & Telangana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-appointment"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  View Services
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>15+ Years Experience</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>5000+ Cases Handled</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Bar Council Registered</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '5000+', label: 'Cases Handled' },
                { number: '15+', label: 'Years Experience' },
                { number: '98%', label: 'Success Rate' },
                { number: '5', label: 'States Covered' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-amber-700">{stat.number}</p>
                  <p className="text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Practice Areas</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Comprehensive civil law services tailored for the Southern Indian legal landscape
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: 'Property Disputes', desc: 'Land litigation, title disputes, partition suits, and possession matters' },
                { icon: Users, title: 'Family Law', desc: 'Divorce, maintenance, custody, and domestic violence protection' },
                { icon: Shield, title: 'Consumer Protection', desc: 'Product liability, service deficiency, and unfair trade practices' },
                { icon: FileText, title: 'Contract Disputes', desc: 'Breach of contract, specific performance, and recovery suits' },
                { icon: Scale, title: 'Debt Recovery', desc: 'Cheque bounce cases (NI Act 138), money suits, and execution' },
                { icon: Clock, title: 'Document Drafting', desc: 'Sale deeds, agreements, affidavits, legal notices, and wills' },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <service.icon className="h-10 w-10 text-amber-700 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 text-amber-700 font-semibold hover:text-amber-800"
              >
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
              <p className="mt-3 text-gray-600">Simple steps to get legal assistance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Book Appointment', desc: 'Schedule a consultation online or call us directly' },
                { step: '2', title: 'Initial Consultation', desc: 'Discuss your case with our senior advocate' },
                { step: '3', title: 'Case Strategy', desc: 'We prepare a legal strategy and agree on fees' },
                { step: '4', title: 'Resolution', desc: 'We represent you until successful resolution' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jurisdictions */}
        <section className="py-16 bg-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Courts & Jurisdictions</h2>
              <p className="mt-3 text-gray-600">We practice across all levels of civil courts in Southern India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'District Courts', courts: ['Chennai', 'Bangalore', 'Hyderabad', 'Kochi', 'Coimbatore', 'Madurai'] },
                { title: 'High Courts', courts: ['Madras High Court', 'Karnataka High Court', 'Kerala High Court', 'AP High Court', 'Telangana High Court'] },
                { title: 'Tribunals & Forums', courts: ['Consumer Forums', 'Rent Control Courts', 'Revenue Courts', 'Family Courts', 'DRAT'] },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.courts.map((court) => (
                      <li key={court} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-amber-600" />
                        <span>{court}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Rajesh Kumar', location: 'Chennai, TN', text: 'Excellent guidance on my property dispute case. The team handled everything professionally and we got a favorable judgment.' },
                { name: 'Priya Lakshmi', location: 'Bangalore, KA', text: 'Very supportive during my divorce proceedings. They explained every step clearly and ensured my rights were protected.' },
                { name: 'Venkatesh Rao', location: 'Hyderabad, TS', text: 'Quick resolution of my consumer complaint. The online portal made it easy to track my case progress throughout.' },
              ].map((testimonial) => (
                <div key={testimonial.name} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Legal Advice?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get expert civil law counsel. Book a consultation today or call us for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/book-appointment"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center space-x-2 border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
