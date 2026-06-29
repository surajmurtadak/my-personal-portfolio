import { create } from 'zustand';

const usePortfolioStore = create((set) => ({
  // Navigation state
  activeSection: 'home',
  isNavOpen: false,
  isNavScrolled: false,

  // Contact form state
  contactForm: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },

  // Counter animation state
  countersAnimated: false,

  // Actions
  setActiveSection: (section) => set({ activeSection: section }),

  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
  closeNav: () => set({ isNavOpen: false }),

  setNavScrolled: (scrolled) => set({ isNavScrolled: scrolled }),

  updateContactForm: (field, value) =>
    set((state) => ({
      contactForm: { ...state.contactForm, [field]: value },
    })),

  resetContactForm: () =>
    set({
      contactForm: { name: '', email: '', subject: '', message: '' },
    }),

  setCountersAnimated: () => set({ countersAnimated: true }),
}));

export default usePortfolioStore;
