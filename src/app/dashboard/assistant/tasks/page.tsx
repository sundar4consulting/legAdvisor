'use client'

import { useState } from 'react'
import { Plus, GripVertical } from 'lucide-react'

type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE'

interface Task {
  id: string
  title: string
  case: string
  dueDate: string
  priority: number
  status: TaskStatus
}

export default function AssistantTasksPage() {
  const [tasks] = useState<Task[]>([
    { id: '1', title: 'Prepare plaint for Property Dispute', case: 'LA-2026-0001', dueDate: '2026-06-06', priority: 2, status: 'TODO' },
    { id: '2', title: 'Upload court fee receipt', case: 'LA-2026-0001', dueDate: '2026-06-07', priority: 1, status: 'TODO' },
    { id: '3', title: 'Draft legal notice for consumer case', case: 'LA-2026-0012', dueDate: '2026-06-08', priority: 1, status: 'IN_PROGRESS' },
    { id: '4', title: 'Research precedents for rent control', case: 'LA-2026-0015', dueDate: '2026-06-10', priority: 0, status: 'IN_PROGRESS' },
    { id: '5', title: 'Review petition - Family court', case: 'LA-2026-0009', dueDate: '2026-06-05', priority: 2, status: 'REVIEW' },
    { id: '6', title: 'File vakalatnama', case: 'LA-2026-0012', dueDate: '2026-06-03', priority: 1, status: 'DONE' },
  ])

  const columns: { key: TaskStatus; label: string; color: string }[] = [
    { key: 'TODO', label: 'To Do', color: 'border-gray-300' },
    { key: 'IN_PROGRESS', label: 'In Progress', color: 'border-blue-400' },
    { key: 'REVIEW', label: 'Review', color: 'border-yellow-400' },
    { key: 'DONE', label: 'Done', color: 'border-green-400' },
  ]

  const priorityLabels = ['Low', 'Medium', 'High']
  const priorityColors = ['bg-green-100 text-green-700', 'bg-yellow-100 text-yellow-700', 'bg-red-100 text-red-700']

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Board</h1>
          <p className="text-gray-600 text-sm mt-1">Manage and track your daily tasks</p>
        </div>
        <button className="flex items-center space-x-2 bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 text-sm">
          <Plus className="h-4 w-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((column) => {
          const columnTasks = tasks.filter((t) => t.status === column.key)
          return (
            <div key={column.key} className={`bg-gray-100 rounded-xl p-4 border-t-4 ${column.color}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-700">{column.label}</h3>
                <span className="text-xs bg-white px-2 py-0.5 rounded-full text-gray-500">{columnTasks.length}</span>
              </div>
              <div className="space-y-3">
                {columnTasks.map((task) => (
                  <div key={task.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 cursor-move hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-2">
                      <GripVertical className="h-4 w-4 text-gray-300 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{task.title}</p>
                        <p className="text-xs text-gray-500 mt-1">{task.case}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-gray-400">
                            {new Date(task.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                            {priorityLabels[task.priority]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
