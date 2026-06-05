'use client'

import { useState } from 'react'
import { Plus, CheckCircle, Clock, AlertTriangle, User } from 'lucide-react'

interface Task {
  id: string
  title: string
  assignedTo: string
  caseName: string
  dueDate: string
  priority: number
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE'
}

export default function AdvisorTasksPage() {
  const [filter, setFilter] = useState<string>('all')

  const tasks: Task[] = [
    { id: '1', title: 'Review plaint draft - Property suit', assignedTo: 'Priya', caseName: 'LA-2026-0001', dueDate: '2026-06-06', priority: 2, status: 'REVIEW' },
    { id: '2', title: 'Approve legal notice - Consumer case', assignedTo: 'Karthik', caseName: 'LA-2026-0012', dueDate: '2026-06-07', priority: 2, status: 'REVIEW' },
    { id: '3', title: 'Prepare arguments - Succession matter', assignedTo: 'Priya', caseName: 'LA-2026-0009', dueDate: '2026-06-10', priority: 1, status: 'IN_PROGRESS' },
    { id: '4', title: 'Sign vakalatnama', assignedTo: 'Self', caseName: 'LA-2026-0018', dueDate: '2026-06-08', priority: 1, status: 'TODO' },
    { id: '5', title: 'Research rent control precedents', assignedTo: 'Deepa', caseName: 'LA-2026-0015', dueDate: '2026-06-12', priority: 0, status: 'IN_PROGRESS' },
    { id: '6', title: 'File counter-affidavit', assignedTo: 'Karthik', caseName: 'LA-2026-0005', dueDate: '2026-06-05', priority: 2, status: 'DONE' },
    { id: '7', title: 'Draft settlement proposal', assignedTo: 'Self', caseName: 'LA-2026-0003', dueDate: '2026-06-09', priority: 1, status: 'TODO' },
  ]

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(t => t.status === filter)

  const statusLabels: Record<string, { label: string; color: string }> = {
    TODO: { label: 'To Do', color: 'bg-gray-100 text-gray-700' },
    IN_PROGRESS: { label: 'In Progress', color: 'bg-blue-100 text-blue-700' },
    REVIEW: { label: 'Needs Review', color: 'bg-yellow-100 text-yellow-700' },
    DONE: { label: 'Done', color: 'bg-green-100 text-green-700' },
  }

  const priorityLabels = ['Low', 'Medium', 'High']
  const priorityColors = ['text-green-600', 'text-yellow-600', 'text-red-600']

  const stats = [
    { label: 'Pending Review', value: tasks.filter(t => t.status === 'REVIEW').length, icon: AlertTriangle, color: 'text-yellow-600' },
    { label: 'In Progress', value: tasks.filter(t => t.status === 'IN_PROGRESS').length, icon: Clock, color: 'text-blue-600' },
    { label: 'Completed', value: tasks.filter(t => t.status === 'DONE').length, icon: CheckCircle, color: 'text-green-600' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <p className="text-gray-600 text-sm mt-1">Assign and track team tasks across cases</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
          <Plus className="h-4 w-4" />
          <span>Assign Task</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center space-x-3">
            <stat.icon className={`h-8 w-8 ${stat.color}`} />
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2">
        {['all', 'REVIEW', 'IN_PROGRESS', 'TODO', 'DONE'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              filter === f ? 'bg-amber-700 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {f === 'all' ? 'All' : statusLabels[f]?.label || f}
          </button>
        ))}
      </div>

      {/* Tasks Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Task</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Assigned To</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Case</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Due Date</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Priority</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900">{task.title}</p>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-amber-700" />
                    </div>
                    <span className="text-sm text-gray-700">{task.assignedTo}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600 font-mono">{task.caseName}</span>
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm text-gray-700">{new Date(task.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-sm font-medium ${priorityColors[task.priority]}`}>
                    {priorityLabels[task.priority]}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${statusLabels[task.status].color}`}>
                    {statusLabels[task.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
