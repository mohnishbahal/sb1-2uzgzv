import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Layout } from '@/components/layout';
import { StoreProvider } from '@/context/store-context';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="retail-layout-theme">
      <StoreProvider>
        <Layout />
        <Toaster position="top-center" />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;