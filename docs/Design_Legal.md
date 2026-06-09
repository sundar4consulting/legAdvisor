# Shivani Legal Advisory Services Firm
## System Design Document

**Version:** 1.0  
**Date:** June 2026  
**Document Type:** Technical Design Specification

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Legal Domain Overview](#2-legal-domain-overview)
3. [System Architecture](#3-system-architecture)
4. [Module Design](#4-module-design)
5. [eCourts Integration](#5-ecourts-integration)
6. [Supreme Court Integration Options](#6-supreme-court-integration-options)
7. [Workflow Design](#7-workflow-design)
8. [Data Model](#8-data-model)
9. [Security & Compliance](#9-security--compliance)
10. [Implementation Roadmap](#10-implementation-roadmap)

---

## 1. Executive Summary

### 1.1 Purpose
Shivani Legal Advisory Services Firm Portal is an integrated legal advisory platform designed to streamline legal services for clients, legal advisors, and legal assistants in the Indian judicial ecosystem. The platform bridges the gap between citizens seeking legal help and qualified legal professionals.

### 1.2 Vision
To create a unified platform that:
- Simplifies client-advisor interactions
- Integrates with India's eCourts ecosystem
- Provides real-time case tracking and updates
- Enables digital document management
- Facilitates online payments and scheduling

### 1.3 Target Users
| Role | Description |
|------|-------------|
| **Client** | Citizens seeking legal advice and representation |
| **Legal Advisor** | Qualified advocates handling cases |
| **Legal Assistant** | Support staff managing case documentation and coordination |

---

## 2. Legal Domain Overview

### 2.1 Indian Judicial System Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    SUPREME COURT OF INDIA                   │
│                    (Apex Court - Delhi)                     │
├─────────────────────────────────────────────────────────────┤
│                      HIGH COURTS (25)                       │
│     (Appellate & Original Jurisdiction - State Level)      │
├─────────────────────────────────────────────────────────────┤
│                   DISTRICT COURTS (3716+)                   │
│            (Civil & Criminal Courts - District Level)       │
├─────────────────────────────────────────────────────────────┤
│              SUBORDINATE/TALUKA COURTS                      │
│                (Local Level Courts)                         │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Case Types Supported

#### Civil Cases
- Property Disputes & Land Matters
- Family Law (Divorce, Custody, Maintenance)
- Consumer Protection
- Contract Disputes
- Succession & Inheritance
- Landlord-Tenant Disputes
- Debt Recovery
- RTI & Grievance Redressal

#### Criminal Cases
- Bail Applications
- Criminal Appeals
- Quashing Petitions

#### Document Services
- Legal Notice Drafting
- Agreement Drafting
- Affidavit Preparation
- Vakalatnama

### 2.3 Key Legal Terminology

| Term | Description |
|------|-------------|
| **CNR Number** | Case Number Record - Unique 16-digit identifier for every case |
| **Diary Number** | Temporary number assigned when case is filed |
| **Cause List** | Daily list of cases scheduled for hearing |
| **Vakalatnama** | Legal document authorizing advocate to represent client |
| **FIR Number** | First Information Report number for criminal cases |
| **Caveat** | Legal notice to prevent ex-parte orders |

---

## 3. System Architecture

### 3.1 High-Level Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │
│  │   Web    │  │  Mobile  │  │   SMS    │  │  WhatsApp Bot    │   │
│  │   App    │  │   App    │  │ Gateway  │  │   (Future)       │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────────┬─────────┘   │
└───────┼─────────────┼─────────────┼─────────────────┼──────────────┘
        │             │             │                 │
        └─────────────┴─────────────┴─────────────────┘
                              │
┌─────────────────────────────┴──────────────────────────────────────┐
│                       API GATEWAY LAYER                             │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  Authentication │ Rate Limiting │ Load Balancing │ Logging  │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
┌─────────────────────────────┴──────────────────────────────────────┐
│                      APPLICATION LAYER                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│  │   User     │  │   Case     │  │  Document  │  │  Payment   │   │
│  │  Service   │  │  Service   │  │  Service   │  │  Service   │   │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│  │ Appointment│  │Notification│  │  eCourts   │  │  Reports   │   │
│  │  Service   │  │  Service   │  │ Integration│  │  Service   │   │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘   │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
┌─────────────────────────────┴──────────────────────────────────────┐
│                     INTEGRATION LAYER                               │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│  │  eCourts   │  │  Razorpay  │  │   MSG91    │  │   Email    │   │
│  │    API     │  │  Gateway   │  │  SMS/OTP   │  │   SMTP     │   │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘   │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
┌─────────────────────────────┴──────────────────────────────────────┐
│                        DATA LAYER                                   │
│  ┌─────────────────────┐  ┌─────────────────────┐                  │
│  │   PostgreSQL        │  │   File Storage      │                  │
│  │   (Prisma Postgres) │  │   (Cloud Storage)   │                  │
│  └─────────────────────┘  └─────────────────────┘                  │
└────────────────────────────────────────────────────────────────────┘
```

### 3.2 Technology Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16, React 19, TailwindCSS |
| Backend | Next.js API Routes, Node.js |
| Database | PostgreSQL (Prisma Postgres) |
| ORM | Prisma 7.x |
| Authentication | JWT + OTP (MSG91) |
| Payments | Razorpay |
| Hosting | Render.com |
| File Storage | Cloud Storage (S3/GCS) |

---

## 4. Module Design

### 4.1 Client Portal

#### Features
| Feature | Description | Priority |
|---------|-------------|----------|
| Dashboard | Overview of cases, appointments, payments | P0 |
| Case Tracking | Real-time status with eCourts integration | P0 |
| Appointments | Book/reschedule consultations | P0 |
| Documents | Upload/view case documents | P0 |
| Payments | Pay consultation fees, court fees | P1 |
| Notifications | SMS/Email alerts for hearings, updates | P0 |
| Messages | Secure communication with advisor | P1 |

#### Client Dashboard Wireframe
```
┌────────────────────────────────────────────────────────────┐
│  LegAdv                              🔔  👤 John Doe ▼    │
├────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────┐ │
│  │  Welcome, John!                                       │ │
│  │  You have 2 active cases and 1 upcoming hearing      │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │ Active Cases│ │ Upcoming    │ │ Pending     │          │
│  │     2       │ │ Hearings: 1 │ │ Payments: ₹ │          │
│  │             │ │ Jun 15, 2026│ │ 5,000       │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
│                                                            │
│  📋 My Cases                                               │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ SLA-2026-1234 │ Property Dispute │ IN_PROGRESS │ →    │ │
│  │ SLA-2026-1235 │ Consumer Case    │ HEARING_SCH │ →    │ │
│  └──────────────────────────────────────────────────────┘ │
│                                                            │
│  📅 Next Hearing                                           │
│  ┌──────────────────────────────────────────────────────┐ │
│  │ Jun 15, 2026 │ 10:30 AM │ District Court, Mumbai     │ │
│  │ Case: SLA-2026-1235 │ Consumer Protection Act         │ │
│  └──────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────┘
```

### 4.2 Advisor Portal

#### Features
| Feature | Description | Priority |
|---------|-------------|----------|
| Dashboard | Case load, today's hearings, pending tasks | P0 |
| Case Management | Full case lifecycle management | P0 |
| Calendar | Hearing dates, appointments, deadlines | P0 |
| Client Management | Client directory and history | P0 |
| Documents | Case file management with templates | P0 |
| Finance | Invoice generation, payment tracking | P1 |
| Reports | Case analytics, revenue reports | P2 |
| eCourts Sync | Auto-fetch case updates from eCourts | P1 |

#### Advisor Dashboard Wireframe
```
┌────────────────────────────────────────────────────────────┐
│  LegAdv | Advisor Portal              🔔  👤 Adv. Kumar ▼ │
├──────────┬─────────────────────────────────────────────────┤
│          │                                                 │
│ Dashboard│  📊 Today's Overview                            │
│ Cases    │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│ Calendar │  │Active  │ │Hearings│ │Pending │ │Revenue │   │
│ Clients  │  │Cases:25│ │Today: 3│ │Tasks:12│ │₹1.2L   │   │
│ Documents│  └────────┘ └────────┘ └────────┘ └────────┘   │
│ Finance  │                                                 │
│ Tasks    │  📅 Today's Hearings                            │
│ Messages │  ┌──────────────────────────────────────────┐   │
│ Reports  │  │ 10:00 AM │ Property Matter │ Dist Court │   │
│ Settings │  │ 11:30 AM │ Family Dispute │ High Court  │   │
│          │  │ 02:00 PM │ Consumer Case  │ NCDRC       │   │
│          │  └──────────────────────────────────────────┘   │
│          │                                                 │
│          │  ⚡ Pending Tasks                               │
│          │  ┌──────────────────────────────────────────┐   │
│          │  │ □ Draft reply - SLA-2026-1234 │ Due Today │   │
│          │  │ □ File vakalatnama - New client │ Jun 10 │   │
│          │  │ □ Submit evidence - SLA-2026-1200 │Jun 12 │   │
│          │  └──────────────────────────────────────────┘   │
└──────────┴─────────────────────────────────────────────────┘
```

### 4.3 Assistant Portal

#### Features
| Feature | Description | Priority |
|---------|-------------|----------|
| Dashboard | Assigned cases, pending tasks | P0 |
| Case Support | Document preparation, filing | P0 |
| Calendar | Manage advisor's schedule | P0 |
| Documents | Draft documents, manage files | P0 |
| Client Coordination | Schedule follow-ups | P1 |
| Task Management | Track and complete assigned tasks | P0 |

---

## 5. eCourts Integration

### 5.1 eCourts Services Available

Based on https://ecourts.gov.in, the following services can be integrated:

| Service | URL | Purpose |
|---------|-----|---------|
| **Case Status** | services.ecourts.gov.in | Check case status by CNR/Party Name |
| **Cause List** | services.ecourts.gov.in | Daily hearing schedule |
| **eFiling** | filing.ecourts.gov.in | Online case filing |
| **ePay** | pay.ecourts.gov.in | Court fee payments |
| **Judgments** | judgments.ecourts.gov.in | Search court judgments |
| **NJDG** | njdg.ecourts.gov.in | National Judicial Data Grid |
| **Virtual Courts** | vcourts.gov.in | Online hearings |

### 5.2 Integration Options

#### Option A: Web Scraping (Limited - Not Recommended)
- **Pros:** Quick to implement
- **Cons:** Fragile, may violate ToS, no official support
- **Use Case:** Proof of concept only

#### Option B: CNR-Based SMS Integration
```
SMS Format: ECOURTS <CNR_NUMBER> to 9766899899
Response: Case status details via SMS
```
- **Pros:** Official channel, reliable
- **Cons:** Manual trigger, limited data
- **Use Case:** Basic case status checks

#### Option C: API Integration (Recommended)
```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    LegAdv       │────▶│   eCourts API   │────▶│   Court DB      │
│    Portal       │◀────│   Gateway       │◀────│   (NJDG)        │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**API Endpoints (Proposed):**
```
GET  /api/ecourts/case-status?cnr={cnr_number}
GET  /api/ecourts/cause-list?court={court_code}&date={date}
GET  /api/ecourts/orders?cnr={cnr_number}
POST /api/ecourts/track-case {cnr_number, notify: true}
```

**Note:** Official eCourts API access requires approval from e-Committee, Supreme Court of India.

#### Option D: Data Partnership
- Apply for official data partnership with NIC/e-Committee
- Access to NJDG data feeds
- Real-time case updates
- Compliance with data governance policies

### 5.3 eCourts Data Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                    eCOURTS DATA INTEGRATION                       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  1. CASE REGISTRATION                                             │
│     ┌─────────┐    ┌─────────┐    ┌─────────┐                    │
│     │ Client  │───▶│ LegAdv  │───▶│eCourts  │                    │
│     │ Request │    │ Filing  │    │eFiling  │                    │
│     └─────────┘    └─────────┘    └─────────┘                    │
│                                        │                          │
│                                        ▼                          │
│                                   ┌─────────┐                     │
│                                   │  CNR    │                     │
│                                   │ Number  │                     │
│                                   └─────────┘                     │
│                                                                   │
│  2. CASE TRACKING                                                 │
│     ┌─────────┐    ┌─────────┐    ┌─────────┐                    │
│     │ LegAdv  │◀───│ Sync    │◀───│ eCourts │                    │
│     │   DB    │    │ Service │    │  NJDG   │                    │
│     └─────────┘    └─────────┘    └─────────┘                    │
│          │                                                        │
│          ▼                                                        │
│     ┌─────────┐                                                   │
│     │ Notify  │───▶ SMS/Email/Push                                │
│     │ Client  │                                                   │
│     └─────────┘                                                   │
│                                                                   │
│  3. HEARING UPDATES                                               │
│     ┌─────────┐    ┌─────────┐    ┌─────────┐                    │
│     │ Cause   │───▶│ Parse & │───▶│ Update  │                    │
│     │ List    │    │ Match   │    │Calendar │                    │
│     └─────────┘    └─────────┘    └─────────┘                    │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 5.4 Implementation Phases

| Phase | Scope | Timeline |
|-------|-------|----------|
| Phase 1 | Manual CNR entry, basic status display | Month 1-2 |
| Phase 2 | Automated cause list parsing, notifications | Month 3-4 |
| Phase 3 | eFiling integration (pending API access) | Month 5-6 |
| Phase 4 | Full NJDG integration with real-time sync | Month 7-8 |

---

## 6. Supreme Court Integration Options

### 6.1 Available Supreme Court Services

Based on https://www.sci.gov.in:

| Service | Description |
|---------|-------------|
| Case Status | Track SLP, Civil/Criminal appeals |
| Daily Orders | Access to daily court orders |
| Judgments | Searchable judgment database |
| Cause List | Daily and advance cause lists |
| E-Filing | Online filing for Supreme Court matters |
| Live Streaming | Court proceedings broadcast |

### 6.2 SCI-Specific Features for LegAdv

```
┌────────────────────────────────────────────────────────────────┐
│                 SUPREME COURT FEATURES                          │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  CASE TRACKING                                           │   │
│  │  • Track by Diary Number / Case Number                   │   │
│  │  • SLP Status & Listing                                  │   │
│  │  • Defect Status for Filed Matters                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  CAUSE LIST                                              │   │
│  │  • Daily Cause List with Bench Details                   │   │
│  │  • Advance Cause List                                    │   │
│  │  • Supplementary List                                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  ORDERS & JUDGMENTS                                      │   │
│  │  • Daily Orders                                          │   │
│  │  • Final Judgments                                       │   │
│  │  • Download PDF Orders                                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  E-FILING GATEWAY                                        │   │
│  │  • SLP Filing                                            │   │
│  │  • Application Filing                                    │   │
│  │  • Court Fee Payment                                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 7. Workflow Design

### 7.1 Client Onboarding Workflow

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│ Register│────▶│ Verify  │────▶│ Complete│────▶│ Book    │
│   OTP   │     │ Phone   │     │ Profile │     │ Consult │
└─────────┘     └─────────┘     └─────────┘     └─────────┘
                                                      │
┌─────────┐     ┌─────────┐     ┌─────────┐          │
│ Track   │◀────│ Case    │◀────│ Consult │◀─────────┘
│ Case    │     │ Created │     │ Done    │
└─────────┘     └─────────┘     └─────────┘
```

### 7.2 Case Lifecycle Workflow

```
┌──────────────────────────────────────────────────────────────────┐
│                      CASE LIFECYCLE                               │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  INQUIRY ──▶ CONSULTATION ──▶ ACCEPTED ──▶ DOCUMENTS_PENDING     │
│                                                    │              │
│                                                    ▼              │
│  CLOSED ◀── RESOLVED ◀── AWAITING_JUDGMENT ◀── IN_PROGRESS      │
│                               ▲                    │              │
│                               │                    ▼              │
│                          HEARING_SCHEDULED ◀───────┘              │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

Status Definitions:
─────────────────────
INQUIRY              : Initial client query
CONSULTATION_SCHEDULED: Meeting scheduled with advisor
ACCEPTED             : Case accepted by advisor
DOCUMENTS_PENDING    : Awaiting client documents
IN_PROGRESS          : Active case work
HEARING_SCHEDULED    : Court date fixed
AWAITING_JUDGMENT    : Arguments concluded, awaiting order
RESOLVED             : Matter decided
CLOSED               : Case closed/archived
REJECTED             : Case not accepted
```

### 7.3 Hearing Notification Workflow

```
┌─────────────┐
│ Cause List  │
│ Published   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│ Parse &     │────▶│ Match with  │
│ Extract     │     │ LegAdv Cases│
└─────────────┘     └──────┬──────┘
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Update Case │     │ Notify      │     │ Notify      │
│ Calendar    │     │ Advisor     │     │ Client      │
└─────────────┘     └─────────────┘     └─────────────┘
                           │                   │
                           ▼                   ▼
                    ┌─────────────┐     ┌─────────────┐
                    │ SMS + Email │     │ SMS + Email │
                    │ + Push      │     │ + Push      │
                    └─────────────┘     └─────────────┘
```

### 7.4 Document Workflow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Upload      │────▶│ Validate    │────▶│ Store       │
│ Document    │     │ & Scan      │     │ Encrypted   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                                       │
       ▼                                       ▼
┌─────────────┐                         ┌─────────────┐
│ Auto-Tag    │                         │ Link to     │
│ & Classify  │                         │ Case        │
└─────────────┘                         └─────────────┘

Document Types:
• Identity (Aadhaar, PAN)
• Property Documents
• Agreements & Contracts
• Court Orders
• Legal Notices
• Affidavits
• Vakalatnama
• Evidence Documents
```

---

## 8. Data Model

### 8.1 Core Entities

```
┌───────────────────────────────────────────────────────────────┐
│                        DATA MODEL                              │
├───────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────┐          ┌─────────┐          ┌─────────┐        │
│  │  USER   │          │  CASE   │          │DOCUMENT │        │
│  ├─────────┤          ├─────────┤          ├─────────┤        │
│  │ id      │──────────│clientId │          │ id      │        │
│  │ name    │          │advisorId│──────────│ caseId  │        │
│  │ phone   │          │ title   │          │ type    │        │
│  │ email   │          │ status  │          │ url     │        │
│  │ role    │          │ cnrNo   │          │ name    │        │
│  │ ...     │          │ ...     │          │ ...     │        │
│  └─────────┘          └─────────┘          └─────────┘        │
│       │                    │                                   │
│       │                    │                                   │
│       ▼                    ▼                                   │
│  ┌─────────┐          ┌─────────┐          ┌─────────┐        │
│  │APPOINT- │          │ HEARING │          │ PAYMENT │        │
│  │  MENT   │          ├─────────┤          ├─────────┤        │
│  ├─────────┤          │ id      │          │ id      │        │
│  │ id      │          │ caseId  │          │ caseId  │        │
│  │ clientId│          │ date    │          │ amount  │        │
│  │ date    │          │ court   │          │ status  │        │
│  │ status  │          │ purpose │          │ method  │        │
│  └─────────┘          └─────────┘          └─────────┘        │
│                                                                │
│  ┌─────────┐          ┌─────────┐          ┌─────────┐        │
│  │  TASK   │          │ MESSAGE │          │NOTIFIC- │        │
│  ├─────────┤          ├─────────┤          │  ATION  │        │
│  │ id      │          │ id      │          ├─────────┤        │
│  │ caseId  │          │ senderId│          │ id      │        │
│  │ title   │          │ content │          │ userId  │        │
│  │ status  │          │ caseId  │          │ message │        │
│  │ dueDate │          │ ...     │          │ read    │        │
│  └─────────┘          └─────────┘          └─────────┘        │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

### 8.2 eCourts Integration Fields

```sql
-- Additional fields for eCourts integration
Case {
  cnrNumber       String?    -- 16-digit CNR from eCourts
  diaryNumber     String?    -- Diary number (before CNR assigned)
  courtCaseNo     String?    -- Court's case number
  courtCode       String?    -- eCourts court code
  filingDate      DateTime?  -- Date of filing
  registrationDate DateTime? -- Date of registration
  lastSyncedAt    DateTime?  -- Last eCourts sync timestamp
}

Hearing {
  courtCode       String?    -- eCourts court code
  benchNo         String?    -- Bench number
  itemNo          Int?       -- Item number in cause list
  listType        String?    -- DAILY/SUPPLEMENTARY/ADVANCE
}
```

---

## 9. Security & Compliance

### 9.1 Authentication & Authorization

```
┌────────────────────────────────────────────────────────────────┐
│                   SECURITY ARCHITECTURE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  AUTHENTICATION                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Phone + OTP (Primary)                                 │   │
│  │  • Email + Password (Secondary)                          │   │
│  │  • JWT Tokens (7-day expiry)                             │   │
│  │  • Refresh Token Rotation                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  AUTHORIZATION (Role-Based)                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  CLIENT    → Own cases, documents, appointments         │   │
│  │  ASSISTANT → Assigned cases, limited write access       │   │
│  │  ADVISOR   → All cases, full access, reports            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  DATA PROTECTION                                                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • AES-256 encryption at rest                            │   │
│  │  • TLS 1.3 in transit                                    │   │
│  │  • Document watermarking                                 │   │
│  │  • Audit logging                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

### 9.2 Compliance Requirements

| Regulation | Requirement | Implementation |
|------------|-------------|----------------|
| IT Act 2000 | Digital records, e-signatures | eSigning integration |
| DPDP Act 2023 | Data protection, consent | Privacy controls, consent management |
| BCI Rules | Advocate-client privilege | Encrypted communications |
| Court Rules | Document formatting | Template compliance |

### 9.3 Audit Trail

```
All actions logged:
• User login/logout
• Case creation/modification
• Document uploads/downloads
• Payment transactions
• eCourts data fetches
• Notification dispatches
```

---

## 10. Implementation Roadmap

### 10.1 Phase-wise Delivery

```
┌──────────────────────────────────────────────────────────────────┐
│                    IMPLEMENTATION ROADMAP                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│  PHASE 1: MVP (Months 1-3)                                       │
│  ════════════════════════                                        │
│  ✓ User registration & authentication                            │
│  ✓ Basic case management                                         │
│  ✓ Appointment booking                                           │
│  ✓ Document upload                                               │
│  ✓ SMS notifications                                             │
│  ✓ Basic dashboard for all roles                                 │
│                                                                   │
│  PHASE 2: Core Features (Months 4-6)                             │
│  ═══════════════════════════════════                             │
│  • Payment integration (Razorpay)                                │
│  • Advanced case workflows                                       │
│  • Task management                                               │
│  • Messaging system                                              │
│  • Email notifications                                           │
│  • Manual eCourts CNR tracking                                   │
│                                                                   │
│  PHASE 3: eCourts Integration (Months 7-9)                       │
│  ═════════════════════════════════════════                       │
│  • Automated cause list parsing                                  │
│  • Hearing notifications                                         │
│  • Case status sync                                              │
│  • Judgment/Order fetching                                       │
│  • Calendar sync with court dates                                │
│                                                                   │
│  PHASE 4: Advanced Features (Months 10-12)                       │
│  ═════════════════════════════════════════                       │
│  • eFiling integration (pending approval)                        │
│  • Analytics & Reports                                           │
│  • Mobile app (React Native)                                     │
│  • WhatsApp bot integration                                      │
│  • AI-powered document analysis                                  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

### 10.2 Current Status

| Module | Status | Completion |
|--------|--------|------------|
| User Management | ✅ Done | 100% |
| Authentication (OTP) | ✅ Done | 100% |
| Case Management | ✅ Done | 90% |
| Appointments | ✅ Done | 100% |
| Documents | ✅ Done | 80% |
| Hearings | ✅ Done | 90% |
| Tasks | ✅ Done | 90% |
| Payments | 🔄 In Progress | 60% |
| Notifications | ✅ Done | 80% |
| Messages | ✅ Done | 70% |
| eCourts Integration | 📋 Planned | 0% |

### 10.3 eCourts Integration Action Items

1. **Apply for API Access**
   - Contact: e-Committee, Supreme Court of India
   - Email: ecommittee@sci.gov.in
   - Documentation required: Organization details, use case

2. **Implement CNR Tracking**
   - Add CNR field to case model
   - Build manual lookup interface
   - Cache results locally

3. **Cause List Parser**
   - Download daily cause lists (PDF)
   - Parse using PDF extraction
   - Match with local cases
   - Trigger notifications

4. **Hearing Calendar Sync**
   - Auto-update hearing dates
   - Send reminders (7 days, 1 day, morning of hearing)

---

## Appendix A: eCourts API Reference (Proposed)

```typescript
// Case Status API
interface CaseStatusRequest {
  cnrNumber: string;
  // OR
  partyName?: string;
  court?: string;
  year?: number;
}

interface CaseStatusResponse {
  cnrNumber: string;
  caseType: string;
  caseNumber: string;
  filingDate: Date;
  registrationDate: Date;
  status: 'PENDING' | 'DISPOSED';
  petitioner: string;
  respondent: string;
  hearings: Hearing[];
  orders: Order[];
}

// Cause List API
interface CauseListRequest {
  courtCode: string;
  date: Date;
  benchNo?: string;
}

interface CauseListResponse {
  court: string;
  date: Date;
  items: CauseListItem[];
}
```

---

## Appendix B: Glossary

| Term | Definition |
|------|------------|
| **CNR** | Case Number Record - 16-digit unique case identifier |
| **NJDG** | National Judicial Data Grid - Centralized case database |
| **NIC** | National Informatics Centre - IT arm of government |
| **SLP** | Special Leave Petition - Appeal to Supreme Court |
| **PIL** | Public Interest Litigation |
| **FIR** | First Information Report |
| **Vakalatnama** | Power of Attorney for advocate |
| **Caveat** | Legal notice preventing ex-parte orders |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | June 2026 | LegAdv Team | Initial document |

---

*This document is confidential and intended for internal use only.*
