"use client"

import { create } from "zustand"

interface ViewModeStore {
  viewMode: "charts" | "list"
  setViewMode: (mode: "charts" | "list") => void
  toggleViewMode: () => void
}

export const useViewMode = create<ViewModeStore>((set) => ({
  viewMode: "list",
  setViewMode: (mode) => set({ viewMode: mode }),
  toggleViewMode: () =>
    set((state) => ({
      viewMode: state.viewMode === "charts" ? "list" : "charts",
    })),
}))
