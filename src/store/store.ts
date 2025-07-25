import { create } from "zustand";

type AppState = {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
  goffMode: boolean;
  setGoffMode: (val: boolean) => void;
  motion: boolean;
  setMotion: (val: boolean) => void;
};

export const useStore = create<AppState>((set) => ({
  isMobile: false,
  setIsMobile: (val) => set({ isMobile: val }),
  goffMode: false,
  setGoffMode: (val) => set({ goffMode: val }),
  motion: true,
  setMotion: (val) => set({ motion: val }),
}));
