import { create } from "zustand";

interface InViewState {
  inView: boolean;
  hide: () => void;
  show: () => void;
}

export const useInViewStore = create<InViewState>()((set) => ({
  inView: false,
  hide: () => set(() => ({ inView: false })),
  show: () => set(() => ({ inView: true })),
}));
