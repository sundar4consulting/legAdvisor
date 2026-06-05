import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: 1 June 2026</p>

            <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">1. Acceptance of Terms</h2>
                <p>By accessing and using the LegAdv platform (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">2. Services Provided</h2>
                <p>LegAdv provides a digital platform for:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Connecting clients with qualified legal advisors for civil law matters</li>
                  <li>Case management and tracking</li>
                  <li>Appointment scheduling and communication</li>
                  <li>Document management and secure storage</li>
                  <li>Payment processing for legal services</li>
                </ul>
                <p className="mt-2"><strong>Note:</strong> This platform facilitates legal advisory services. All legal advice is provided by qualified advocates enrolled with the Bar Council of India.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">3. User Accounts</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You must provide accurate and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must be at least 18 years old to create an account</li>
                  <li>One person may have only one active account</li>
                  <li>You must notify us immediately of any unauthorized access</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">4. Fees and Payments</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Consultation fees and case fees are determined by the assigned Legal Advisor</li>
                  <li>All fees are communicated before engagement and require client agreement</li>
                  <li>Payments are processed securely through Razorpay (UPI, Net Banking, Cards)</li>
                  <li>Refund policies are case-specific and subject to the Advisor&apos;s discretion</li>
                  <li>Court fees, stamp duty, and government charges are separate from advisory fees</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">5. Client Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide truthful and complete information about your legal matter</li>
                  <li>Submit required documents within specified timelines</li>
                  <li>Attend scheduled hearings and appointments</li>
                  <li>Make payments as per agreed schedule</li>
                  <li>Do not use the platform for illegal purposes or frivolous litigation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">6. Attorney-Client Privilege</h2>
                <p>All communications between you and your legal advisor through this platform are protected by attorney-client privilege under the Indian Evidence Act, 1872 (Section 126). We maintain strict confidentiality of all case-related information.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">7. Limitation of Liability</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Case outcomes are not guaranteed</li>
                  <li>LegAdv is not liable for delays caused by court proceedings or government bodies</li>
                  <li>We are not responsible for information provided by third parties or opposing parties</li>
                  <li>Our liability is limited to the fees paid for the specific service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">8. Dispute Resolution</h2>
                <p>Any disputes arising from the use of this platform shall be resolved through:</p>
                <ol className="list-decimal pl-5 space-y-1 mt-2">
                  <li>Internal grievance redressal (within 15 days)</li>
                  <li>Mediation</li>
                  <li>Arbitration under the Arbitration and Conciliation Act, 1996</li>
                </ol>
                <p className="mt-2">Jurisdiction: Courts of Chennai, Tamil Nadu.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">9. Bar Council Compliance</h2>
                <p>This platform operates in compliance with the Bar Council of India Rules on advertising and solicitation. The information on this platform is for informational purposes and does not constitute solicitation.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">10. Changes to Terms</h2>
                <p>We may update these terms from time to time. Users will be notified of material changes via email or platform notification. Continued use after changes constitutes acceptance.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
