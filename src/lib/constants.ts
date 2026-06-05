export const SERVICES = [
  {
    id: 'property-disputes',
    title: 'Property Disputes & Land Litigation',
    description: 'Expert resolution of property ownership conflicts, boundary disputes, title verification, and land acquisition matters across Southern Indian states.',
    icon: 'Building2',
    details: [
      'Title dispute resolution',
      'Partition suits',
      'Specific performance of sale agreements',
      'Injunction petitions',
      'Revenue court matters',
    ],
  },
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Compassionate legal guidance for divorce, maintenance, child custody, domestic violence, and matrimonial disputes.',
    icon: 'Users',
    details: [
      'Divorce petitions (mutual & contested)',
      'Maintenance under CrPC 125',
      'Child custody & visitation rights',
      'Domestic violence (Protection of Women Act)',
      'Restitution of conjugal rights',
    ],
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection',
    description: 'Filing and defending consumer complaints for defective products, deficient services, and unfair trade practices.',
    icon: 'ShieldCheck',
    details: [
      'Consumer complaint filing',
      'Product liability claims',
      'Service deficiency matters',
      'E-commerce disputes',
      'Insurance claim disputes',
    ],
  },
  {
    id: 'contract-disputes',
    title: 'Contract & Agreement Disputes',
    description: 'Enforcement and resolution of contractual obligations, breach claims, and commercial agreement disputes.',
    icon: 'FileText',
    details: [
      'Breach of contract suits',
      'Specific performance',
      'Recovery of damages',
      'Partnership disputes',
      'Commercial arbitration',
    ],
  },
  {
    id: 'succession',
    title: 'Succession & Inheritance',
    description: 'Legal assistance for will drafting, probate applications, succession certificates, and inheritance disputes.',
    icon: 'ScrollText',
    details: [
      'Will drafting & registration',
      'Probate petitions',
      'Succession certificate applications',
      'Letters of administration',
      'Inheritance dispute resolution',
    ],
  },
  {
    id: 'landlord-tenant',
    title: 'Landlord-Tenant Disputes',
    description: 'Resolution of rental disputes, eviction proceedings, and tenancy rights under state-specific rent control laws.',
    icon: 'Home',
    details: [
      'Eviction petitions',
      'Rent control matters',
      'Lease agreement disputes',
      'Unauthorized occupation',
      'Rent tribunal proceedings',
    ],
  },
  {
    id: 'debt-recovery',
    title: 'Debt Recovery & Cheque Bounce',
    description: 'Legal action for recovery of debts, dishonoured cheques under NI Act Section 138, and money suits.',
    icon: 'Banknote',
    details: [
      'NI Act Section 138 complaints',
      'Money recovery suits',
      'Summary suits',
      'Execution petitions',
      'Insolvency proceedings',
    ],
  },
  {
    id: 'rti-grievance',
    title: 'RTI & Government Grievances',
    description: 'Assistance with Right to Information applications, government grievance redressal, and administrative tribunal matters.',
    icon: 'Landmark',
    details: [
      'RTI application drafting',
      'First & second appeals',
      'Writ petitions',
      'Administrative tribunal matters',
      'Government contract disputes',
    ],
  },
  {
    id: 'document-drafting',
    title: 'Document Drafting',
    description: 'Professional drafting of legal documents including sale deeds, agreements, affidavits, wills, and legal notices.',
    icon: 'PenTool',
    details: [
      'Sale deed & gift deed',
      'Power of Attorney',
      'Legal notices',
      'Affidavits & declarations',
      'Rental agreements',
    ],
  },
]

export const STATES = [
  { code: 'TN', name: 'Tamil Nadu', highCourt: 'Madras High Court' },
  { code: 'KA', name: 'Karnataka', highCourt: 'Karnataka High Court' },
  { code: 'KL', name: 'Kerala', highCourt: 'Kerala High Court' },
  { code: 'AP', name: 'Andhra Pradesh', highCourt: 'Andhra Pradesh High Court' },
  { code: 'TS', name: 'Telangana', highCourt: 'Telangana High Court' },
]

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'Tamil' },
  { code: 'kn', name: 'Kannada' },
  { code: 'te', name: 'Telugu' },
  { code: 'ml', name: 'Malayalam' },
]

export const CASE_TYPE_LABELS: Record<string, string> = {
  PROPERTY_DISPUTE: 'Property Dispute',
  FAMILY_LAW: 'Family Law',
  CONSUMER_PROTECTION: 'Consumer Protection',
  CONTRACT_DISPUTE: 'Contract Dispute',
  SUCCESSION: 'Succession & Inheritance',
  LANDLORD_TENANT: 'Landlord-Tenant',
  DEBT_RECOVERY: 'Debt Recovery',
  RTI_GRIEVANCE: 'RTI & Grievance',
  DOCUMENT_DRAFTING: 'Document Drafting',
  OTHER: 'Other',
}

export const CASE_STATUS_LABELS: Record<string, string> = {
  INQUIRY: 'Inquiry',
  CONSULTATION_SCHEDULED: 'Consultation Scheduled',
  ACCEPTED: 'Accepted',
  DOCUMENTS_PENDING: 'Documents Pending',
  IN_PROGRESS: 'In Progress',
  HEARING_SCHEDULED: 'Hearing Scheduled',
  AWAITING_JUDGMENT: 'Awaiting Judgment',
  RESOLVED: 'Resolved',
  CLOSED: 'Closed',
  REJECTED: 'Rejected',
}
