import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

interface StoreContextType {
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedStore: string;
  setSelectedStore: (store: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedStore, setSelectedStore] = useState('');

  return (
    <StoreContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedStore,
        setSelectedStore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}