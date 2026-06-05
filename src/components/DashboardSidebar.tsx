'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  FileText,
  MessageSquare,
  CreditCard,
  Bell,
  Settings,
  Users,
  ClipboardList,
  BarChart3,
  LogOut,
  Scale,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface SidebarProps {
  role: 'ADVISOR' | 'ASSISTANT' | 'CLIENT'
}

const menuItems = {
  ADVISOR: [
    { href: '/dashboard/advisor', label: 'Overview', icon: LayoutDashboard },
    { href: '/dashboard/advisor/cases', label: 'Cases', icon: Briefcase },
    { href: '/dashboard/advisor/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/advisor/clients', label: 'Clients', icon: Users },
    { href: '/dashboard/advisor/tasks', label: 'Tasks', icon: ClipboardList },
    { href: '/dashboard/advisor/documents', label: 'Documents', icon: FileText },
    { href: '/dashboard/advisor/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/advisor/finance', label: 'Finance', icon: CreditCard },
    { href: '/dashboard/advisor/reports', label: 'Reports', icon: BarChart3 },
    { href: '/dashboard/advisor/settings', label: 'Settings', icon: Settings },
  ],
  ASSISTANT: [
    { href: '/dashboard/assistant', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/assistant/clients', label: 'Clients', icon: Users },
    { href: '/dashboard/assistant/cases', label: 'Cases', icon: Briefcase },
    { href: '/dashboard/assistant/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/assistant/tasks', label: 'Task Board', icon: ClipboardList },
    { href: '/dashboard/assistant/documents', label: 'Documents', icon: FileText },
    { href: '/dashboard/assistant/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/assistant/settings', label: 'Settings', icon: Settings },
  ],
  CLIENT: [
    { href: '/dashboard/client', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/client/cases', label: 'My Cases', icon: Briefcase },
    { href: '/dashboard/client/appointments', label: 'Appointments', icon: Calendar },
    { href: '/dashboard/client/documents', label: 'Documents', icon: FileText },
    { href: '/dashboard/client/messages', label: 'Messages', icon: MessageSquare },
    { href: '/dashboard/client/payments', label: 'Payments', icon: CreditCard },
    { href: '/dashboard/client/notifications', label: 'Notifications', icon: Bell },
    { href: '/dashboard/client/settings', label: 'Settings', icon: Settings },
  ],
}

export default function DashboardSidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const items = menuItems[role]

  return (
    <aside className="w-64 bg-gray-900 min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <Scale className="h-7 w-7 text-amber-500" />
          <span className="text-lg font-bold text-white">LegAdv</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-amber-700 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white w-full transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
