import { create } from 'zustand';

type AppState = {
  goffMode: boolean;
  setGoffMode: (val: boolean) => void;
  motion: boolean;
  setMotion: (val: boolean) => void;
};

export const useStore = create<AppState>((set) => ({
  goffMode: false,
  setGoffMode: (val) => set({ goffMode: val }),
  motion: true,
  setMotion: (val) => set({ motion: val }),
}));
