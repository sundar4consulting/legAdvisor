'use client'

import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string | null
  phone: string
  role: 'ADVISOR' | 'ASSISTANT' | 'CLIENT'
  language: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  logout: () => void
  fetchUser: () => Promise<void>
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user, isLoading: false }),

  logout: () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    set({ user: null, isAuthenticated: false, isLoading: false })
    window.location.href = '/login'
  },

  fetchUser: async () => {
    try {
      const res = await fetch('/api/auth/me')
      if (res.ok) {
        const data = await res.json()
        set({ user: data.user, isAuthenticated: true, isLoading: false })
      } else {
        set({ user: null, isAuthenticated: false, isLoading: false })
      }
    } catch {
      set({ user: null, isAuthenticated: false, isLoading: false })
    }
  },
}))
