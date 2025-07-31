import { create } from "zustand";

type Theme = 'light' | 'dark';

type AppState = {
  isMobile: boolean;
  setIsMobile: (val: boolean) => void;
  goffMode: Theme;
  setGoffMode: (val: Theme) => void;
  motion: boolean;
  setMotion: (val: boolean) => void;
};

export const useStore = create<AppState>((set: (arg0: { isMobile?: any; goffMode?: any; motion?: any; }) => any) => ({
  isMobile: false,
  setIsMobile: (val: any) => set({ isMobile: val }),
  goffMode: 'dark',
  setGoffMode: (val: any) => set({ goffMode: val }),
  motion: true,
  setMotion: (val: any) => set({ motion: val }),
}));
