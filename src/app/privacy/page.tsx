import { Scale } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: 1 June 2026</p>

            <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1. Information We Collect</h2>
                <p>LegAdv Legal Advisory Services collects the following information to provide our services:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Personal Information:</strong> Name, phone number, email address, Aadhaar number (for verification), address</li>
                  <li><strong>Case Information:</strong> Details of legal matters, court documents, property documents, agreements</li>
                  <li><strong>Financial Information:</strong> Payment records, transaction history (processed securely via Razorpay)</li>
                  <li><strong>Communication Data:</strong> Messages exchanged within the platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To provide legal advisory and case management services</li>
                  <li>To schedule appointments and send reminders</li>
                  <li>To process payments and generate invoices</li>
                  <li>To communicate case updates and hearing dates</li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3. Data Protection</h2>
                <p>We implement industry-standard security measures in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>All data is encrypted in transit (TLS/SSL) and at rest</li>
                  <li>Access controls ensure only authorized personnel view your data</li>
                  <li>Attorney-client privilege is maintained through encrypted channels</li>
                  <li>Regular security audits and vulnerability assessments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4. Data Sharing</h2>
                <p>We do not sell your personal data. Information may be shared only:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>With your assigned legal team (advisor and assistants)</li>
                  <li>With courts and legal authorities as required by your case</li>
                  <li>With payment processors (Razorpay) for transaction processing</li>
                  <li>When required by law or court order</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">5. Your Rights (Under DPDPA 2023)</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Right to access your personal data</li>
                  <li>Right to correction of inaccurate data</li>
                  <li>Right to erasure (subject to legal retention requirements)</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to grievance redressal</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">6. Data Retention</h2>
                <p>Case-related data is retained for a minimum of 8 years after case closure as per Bar Council guidelines. Personal data is retained for 3 years after last interaction unless legal obligations require longer retention.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7. Contact Us</h2>
                <p>For privacy-related concerns or to exercise your data rights:</p>
                <p className="mt-2">
                  <strong>Data Protection Officer</strong><br />
                  LegAdv Legal Advisory Services<br />
                  No. 15, Anna Salai, High Court Campus<br />
                  Chennai - 600104, Tamil Nadu<br />
                  Email: privacy@legadv.in<br />
                  Phone: +91 44 2812 3456
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
