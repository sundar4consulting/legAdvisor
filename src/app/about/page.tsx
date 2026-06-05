import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Scale, Award, BookOpen, Users, GraduationCap } from 'lucide-react'

const team = [
  {
    name: 'Adv. Suresh Ramanathan',
    role: 'Senior Advocate & Founding Partner',
    experience: '20+ years',
    specialization: 'Property Law, Civil Litigation',
    barCouncil: 'Bar Council of Tamil Nadu (TN/1234/2004)',
    courts: ['Madras High Court', 'Supreme Court of India'],
  },
  {
    name: 'Adv. Kavitha Nair',
    role: 'Associate Partner',
    experience: '12+ years',
    specialization: 'Family Law, Consumer Protection',
    barCouncil: 'Bar Council of Kerala (KL/5678/2012)',
    courts: ['Kerala High Court', 'Family Courts'],
  },
  {
    name: 'Adv. Venkatesh Reddy',
    role: 'Senior Associate',
    experience: '8+ years',
    specialization: 'Contract Law, Debt Recovery',
    barCouncil: 'Bar Council of Telangana (TS/9012/2016)',
    courts: ['Telangana High Court', 'AP High Court'],
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-amber-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">About Our Firm</h1>
            <p className="text-gray-300 max-w-2xl">
              A trusted name in civil law advisory across Southern India since 2004.
              We bring decades of combined experience in helping individuals and businesses resolve civil disputes.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  At LegAdv, we believe that quality legal counsel should be accessible to everyone.
                  Our mission is to simplify the legal process for our clients, providing transparent,
                  affordable, and effective representation in civil matters across Southern India.
                </p>
                <p className="text-gray-600 mb-4">
                  We leverage technology to keep our clients informed at every stage of their case,
                  from initial consultation to final resolution. Our online portal ensures you always
                  have access to your case documents, hearing dates, and direct communication with your legal team.
                </p>
                <p className="text-gray-600">
                  Our deep understanding of regional civil laws, state-specific amendments, and local court
                  procedures gives us a distinct advantage in representing clients across Tamil Nadu, Karnataka,
                  Kerala, Andhra Pradesh, and Telangana.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-6 rounded-xl text-center">
                  <Scale className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">5000+</p>
                  <p className="text-sm text-gray-600">Cases Handled</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl text-center">
                  <Award className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">98%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">3000+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl text-center">
                  <BookOpen className="h-8 w-8 text-amber-700 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">20+</p>
                  <p className="text-sm text-gray-600">Years Practice</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Legal Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-10 w-10 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center">{member.name}</h3>
                  <p className="text-amber-700 text-sm text-center mb-3">{member.role}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><span className="font-medium">Experience:</span> {member.experience}</p>
                    <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
                    <p><span className="font-medium">Registration:</span> {member.barCouncil}</p>
                    <div>
                      <span className="font-medium">Courts:</span>
                      <ul className="ml-4 mt-1">
                        {member.courts.map((court) => (
                          <li key={court} className="text-gray-500">• {court}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Integrity', desc: 'We uphold the highest ethical standards in all our dealings with clients and courts.' },
                { title: 'Transparency', desc: 'Clear communication about fees, timelines, and case progress at every stage.' },
                { title: 'Accessibility', desc: 'Making quality legal services accessible through technology and fair pricing.' },
                { title: 'Excellence', desc: 'Thorough preparation, meticulous documentation, and relentless pursuit of justice.' },
              ].map((value) => (
                <div key={value.title} className="text-center p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
