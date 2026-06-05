'use client'

import DashboardSidebar from '@/components/DashboardSidebar'

export default function AdvisorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="ADVISOR" />
      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
