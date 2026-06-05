import DashboardSidebar from '@/components/DashboardSidebar'

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar role="CLIENT" />
      <main className="flex-1 bg-gray-50">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
