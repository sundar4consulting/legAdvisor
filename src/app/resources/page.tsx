import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, Calculator, FileText, HelpCircle, ExternalLink } from 'lucide-react'

const faqs = [
  {
    question: 'How do I file a property dispute case?',
    answer: 'A property dispute case is typically filed as a civil suit in the jurisdictional District Court. You need the property documents, sale deed, and any evidence of ownership. Our team will help you draft the plaint and file the suit with appropriate court fees.',
  },
  {
    question: 'What is the court fee for civil cases in Tamil Nadu?',
    answer: 'Court fees in Tamil Nadu are governed by the Tamil Nadu Court Fees and Suits Valuation Act. For property cases, it is typically calculated based on the market value of the property. Money suits require ad valorem fees. We can calculate the exact fees for your specific case.',
  },
  {
    question: 'How long does a civil case take in Indian courts?',
    answer: 'Civil cases typically take 2-5 years in District Courts, depending on complexity. Consumer cases in forums are usually resolved within 3-12 months. Family court matters may take 6-18 months. We work to expedite through proper documentation and timely filings.',
  },
  {
    question: 'Can I file a case online?',
    answer: 'Yes, e-filing is available in many courts through the eCourts portal. However, certain documents still require physical submission. We handle both e-filing and physical filing on your behalf.',
  },
  {
    question: 'What documents do I need for a divorce petition?',
    answer: 'For a divorce petition, you need: Marriage certificate, address proof, photographs, evidence of grounds (cruelty, desertion, etc.), and income details for maintenance claims. For mutual divorce, both parties need to jointly file the petition.',
  },
  {
    question: 'How does the consumer forum work?',
    answer: 'Consumer complaints are filed under the Consumer Protection Act 2019. Complaints up to ₹1 crore go to District Forum, up to ₹10 crore to State Commission, and above that to National Commission. The process is simpler than regular civil courts.',
  },
]

const articles = [
  {
    title: 'Understanding Property Title Verification in Tamil Nadu',
    excerpt: 'A comprehensive guide to verifying property titles before purchase, including encumbrance certificate checks and revenue record verification.',
    date: '2026-05-15',
    category: 'Property Law',
  },
  {
    title: 'Recent Amendments to Rent Control Act - Karnataka',
    excerpt: 'Key changes in the Karnataka Rent Control Act 2024 and their impact on landlords and tenants.',
    date: '2026-04-22',
    category: 'Tenant Rights',
  },
  {
    title: 'Cheque Bounce Case: Step-by-Step Guide under NI Act 138',
    excerpt: 'Complete procedure for filing a complaint under Section 138 of the Negotiable Instruments Act, including timelines and documentation.',
    date: '2026-03-10',
    category: 'Debt Recovery',
  },
  {
    title: 'Madras High Court: Key Civil Judgments 2025-26',
    excerpt: 'Summary of significant civil case judgments from the Madras High Court that affect property, family, and consumer matters.',
    date: '2026-02-28',
    category: 'Case Law',
  },
]

const courtFees = [
  { state: 'Tamil Nadu', act: 'TN Court Fees & Suits Valuation Act', link: '#' },
  { state: 'Karnataka', act: 'Karnataka Court Fees & Suits Valuation Act', link: '#' },
  { state: 'Kerala', act: 'Kerala Court Fees & Suits Valuation Act', link: '#' },
  { state: 'Andhra Pradesh', act: 'AP Court Fees & Suits Valuation Act', link: '#' },
  { state: 'Telangana', act: 'Telangana Court Fees & Suits Valuation Act', link: '#' },
]

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-gray-900 to-amber-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Legal Resources</h1>
            <p className="text-gray-300 max-w-2xl">
              Helpful information, FAQs, and guides on civil law matters in Southern India.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-amber-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#faqs" className="flex items-center space-x-2 text-amber-800 font-medium hover:text-amber-900">
                <HelpCircle className="h-5 w-5" />
                <span>FAQs</span>
              </a>
              <a href="#articles" className="flex items-center space-x-2 text-amber-800 font-medium hover:text-amber-900">
                <BookOpen className="h-5 w-5" />
                <span>Articles</span>
              </a>
              <a href="#court-fees" className="flex items-center space-x-2 text-amber-800 font-medium hover:text-amber-900">
                <Calculator className="h-5 w-5" />
                <span>Court Fees</span>
              </a>
              <a href="#documents" className="flex items-center space-x-2 text-amber-800 font-medium hover:text-amber-900">
                <FileText className="h-5 w-5" />
                <span>Document Checklists</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="group bg-white rounded-lg border border-gray-200 p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-amber-700 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        <section id="articles" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Legal Articles & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <div key={article.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
                  <p className="text-xs text-gray-400">{new Date(article.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Court Fees */}
        <section id="court-fees" className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Court Fee References</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">State</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Governing Act</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {courtFees.map((item) => (
                    <tr key={item.state} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.state}</td>
                      <td className="px-6 py-4 text-sm text-gray-600 flex items-center space-x-2">
                        <span>{item.act}</span>
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Note: Court fees vary based on the type and value of the suit. Contact us for exact fee calculation for your case.
            </p>
          </div>
        </section>

        {/* Document Checklists */}
        <section id="documents" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Document Checklists</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Property Dispute Case',
                  docs: ['Sale Deed / Title Deed', 'Encumbrance Certificate (EC)', 'Patta & Chitta', 'Property Tax Receipts', 'Survey Documents', 'ID Proof (Aadhaar/PAN)'],
                },
                {
                  title: 'Divorce Petition',
                  docs: ['Marriage Certificate', 'Address Proof', 'Income Proof', 'Photographs', 'Evidence of Grounds', 'Children\'s Birth Certificates'],
                },
                {
                  title: 'Consumer Complaint',
                  docs: ['Purchase Invoice/Bill', 'Product/Service Details', 'Complaint Letters Sent', 'Response from Company', 'Evidence of Defect', 'ID Proof'],
                },
                {
                  title: 'Cheque Bounce (NI Act 138)',
                  docs: ['Dishonoured Cheque', 'Bank Memo/Return Statement', 'Legal Notice (sent within 30 days)', 'Proof of Service of Notice', 'Original Transaction Proof', 'ID Proof'],
                },
              ].map((checklist) => (
                <div key={checklist.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">{checklist.title}</h3>
                  <ul className="space-y-2">
                    {checklist.docs.map((doc) => (
                      <li key={doc} className="flex items-center space-x-2 text-sm text-gray-600">
                        <FileText className="h-4 w-4 text-amber-600" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-amber-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Personalized Legal Guidance?</h2>
            <p className="text-amber-100 mb-6">Our experienced advocates can analyze your specific case and provide tailored advice.</p>
            <Link href="/book-appointment" className="bg-white text-amber-800 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
