import { createContext, useContext, useState, type ReactNode } from 'react';

type AppState = {
  goffMode: boolean;
  setGoffMode: (val: boolean) => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [goffMode, setGoffMode] = useState(false);

  return (
    <AppContext.Provider value={{ goffMode, setGoffMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("That's not how the app context works.");
  return context;
}
