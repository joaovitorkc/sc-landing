import { create } from 'zustand';

interface LandingStore {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;

  setIsScrolled: (isScrolled: boolean) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}

const useLanding = create<LandingStore>((set) => ({
  isScrolled: false,
  isMobileMenuOpen: false,

  setIsScrolled: (isScrolled) => set({ isScrolled }),
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
}));

export { useLanding };
