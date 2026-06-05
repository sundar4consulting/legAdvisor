import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Disclaimer</h1>
            <p className="text-sm text-gray-500 mb-8">Last updated: 1 June 2026</p>

            <div className="prose prose-gray max-w-none space-y-6 text-sm leading-relaxed text-gray-700">
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Legal Disclaimer</h2>
                <p>The information provided on this website and platform is for general informational purposes only. It should not be construed as legal advice on any specific matter.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">No Attorney-Client Relationship</h2>
                <p>Browsing this website, reading its content, or contacting us through the contact form does not create an attorney-client relationship. Such a relationship is only established after formal engagement through our platform with mutual consent and a signed vakalatnama.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Bar Council of India Compliance</h2>
                <p>As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This website is meant solely for the purpose of information and not for the purpose of advertising or solicitation. The information about our services is provided to aid individuals seeking legal assistance.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">No Guarantee of Results</h2>
                <p>The outcome of any legal matter depends on numerous factors specific to each case. Past results do not guarantee future outcomes. Any testimonials or case studies mentioned are factual representations and do not constitute a promise of similar results.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Third-Party Links</h2>
                <p>This platform may contain links to external websites (eCourts, government portals, etc.). We do not control or endorse these websites and are not responsible for their content or privacy practices.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Legal Information Accuracy</h2>
                <p>While we strive to keep the legal information on this platform up-to-date, laws and regulations change frequently. The articles, FAQs, and resources provided should not be relied upon as current legal authority. Always consult with a qualified advocate for advice specific to your situation.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Jurisdiction</h2>
                <p>Our services are primarily focused on civil law matters in the Southern Indian states of Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana. For matters in other jurisdictions, we may refer you to appropriate legal professionals.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">IT Act Compliance</h2>
                <p>This platform is developed and maintained in compliance with the Information Technology Act, 2000, and associated rules including the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.</p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Contact</h2>
                <p>If you have any questions about this disclaimer, please contact us at:</p>
                <p className="mt-2">
                  LegAdv Legal Advisory Services<br />
                  No. 15, Anna Salai, High Court Campus<br />
                  Chennai - 600104, Tamil Nadu<br />
                  Email: info@legadv.in<br />
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
