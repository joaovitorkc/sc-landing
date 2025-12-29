import type { LucideIcon } from "lucide-react"

export interface NavItem {
  id: string
  title: string
  href?: string
  regex?: RegExp;
  pattern?: RegExp;
  icon: LucideIcon
  badge?: string
  children?: Pick<NavItem, 'id' | 'title' | 'href' | 'regex' | 'pattern' | 'role' | 'base_role' | 'badge' | 'children'>[]
  role?: string[]
  base_role?: number[]
}

export interface NavSection {
  id: string
  title: string
  items: NavItem[]
}

export interface SidebarPreferences {
  collapsed: Record<string, boolean>
  favorites: string[]
  hiddenItems: string[]
  itemOrder: Record<string, string[]>
  childOrder?: Record<string, string[]>
}
