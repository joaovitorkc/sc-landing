"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { SidebarPreferences } from "~/typings"

interface SidebarStore extends SidebarPreferences {
  toggleCollapsed: (id: string) => void
  toggleFavorite: (id: string) => void
  toggleItemVisibility: (id: string, hasChildren?: boolean) => void
  toggleSectionCollapsed: (id: string) => void
  setItemOrder: (sectionId: string, order: string[]) => void
  setChildOrder: (parentId: string, order: string[]) => void
  isCollapsed: (id: string) => boolean
  isFavorite: (id: string) => boolean
  isHidden: (id: string) => boolean
  isSectionCollapsed: (id: string) => boolean
  explicitlyHidden: string[]
  setExplicitlyHidden: (id: string, hidden: boolean) => void
  isExplicitlyHidden: (id: string) => boolean
  hideChildren: (parentId: string, children: string[]) => void
  restoreChildren: (parentId: string, children: string[]) => void
}

export const useSidebar = create<SidebarStore>()(
  persist(
    (set, get) => ({
      collapsed: {},
      favorites: [],
      hiddenItems: [],
      itemOrder: {},
      childOrder: {},
      explicitlyHidden: [],

      toggleCollapsed: (id: string) => {
        set((state) => ({
          collapsed: {
            ...state.collapsed,
            [id]: !state.collapsed[id],
          },
        }))
      },

      toggleFavorite: (id: string) => {
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((item) => item !== id)
            : [...state.favorites, id],
        }))
      },

      toggleItemVisibility: (id: string) => {
        set((state) => {
          const isCurrentlyHidden = state.hiddenItems.includes(id)
          const wasExplicitlyHidden = state.explicitlyHidden.includes(id)

          if (isCurrentlyHidden) {
            // Unhiding: remove from hiddenItems
            // Only restore if it was explicitly hidden
            return {
              hiddenItems: state.hiddenItems.filter((item) => item !== id),
              explicitlyHidden: wasExplicitlyHidden
                ? state.explicitlyHidden.filter((item) => item !== id)
                : state.explicitlyHidden,
            }
          } else {
            // Hiding: add to both hiddenItems and explicitlyHidden
            return {
              hiddenItems: [...state.hiddenItems, id],
              explicitlyHidden: [...state.explicitlyHidden, id],
            }
          }
        })
      },

      toggleSectionCollapsed: (id: string) => {
        set((state) => ({
          collapsed: {
            ...state.collapsed,
            [id]: !state.collapsed[id],
          },
        }))
      },

      setItemOrder: (sectionId: string, order: string[]) => {
        set({ itemOrder: { ...get().itemOrder, [sectionId]: order } })
      },

      setChildOrder: (parentId: string, order: string[]) => {
        set({ childOrder: { ...get().childOrder, [`child-${parentId}`]: order } })
      },

      isCollapsed: (id: string) => get().collapsed[id] || false,
      isFavorite: (id: string) => get().favorites.includes(id),
      isHidden: (id: string) => get().hiddenItems.includes(id),
      isSectionCollapsed: (id: string) => get().collapsed[id] || false,

      setExplicitlyHidden: (id: string, hidden: boolean) => {
        set((state) => ({
          explicitlyHidden: hidden
            ? [...state.explicitlyHidden, id]
            : state.explicitlyHidden.filter((item) => item !== id),
        }))
      },

      isExplicitlyHidden: (id: string) => get().explicitlyHidden.includes(id),

      hideChildren: (parentId: string, children: string[]) => {
        set((state) => ({
          hiddenItems: [...new Set([...state.hiddenItems, ...children])],
        }))
      },

      restoreChildren: (parentId: string, children: string[]) => {
        set((state) => ({
          hiddenItems: state.hiddenItems.filter((id) => !children.includes(id) || state.explicitlyHidden.includes(id)),
        }))
      },
    }),
    { name: "sidebar-store" },
  ),
)
