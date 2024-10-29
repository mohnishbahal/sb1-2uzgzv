import { useState } from 'react';
import { useStore } from '@/context/store-context';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { Dashboard } from '@/components/dashboard';
import { FixtureAnalysis } from '@/components/fixture-analysis';
import { StoreComparison } from '@/components/store-comparison';
import { Optimization } from '@/components/optimization';
import { cn } from '@/lib/utils';

export function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const { currentView } = useStore();

  const views = {
    dashboard: <Dashboard />,
    fixtures: <FixtureAnalysis />,
    comparison: <StoreComparison />,
    optimization: <Optimization />,
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <main
        className={cn(
          'transition-all duration-300 ease-in-out',
          collapsed ? 'ml-16' : 'ml-64'
        )}
      >
        <Header />
        <div className="container mx-auto p-6">
          {views[currentView as keyof typeof views]}
        </div>
      </main>
    </div>
  );
}