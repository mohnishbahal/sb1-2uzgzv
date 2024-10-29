import { useState } from 'react';
import {
  LayoutDashboard,
  BoxSelect,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useStore } from '@/context/store-context';

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

export function Sidebar({ collapsed, onCollapse }: SidebarProps) {
  const { currentView, setCurrentView } = useStore();

  const items = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      value: 'dashboard',
    },
    {
      title: 'Fixture Analysis',
      icon: BoxSelect,
      value: 'fixtures',
    },
    {
      title: 'Store Comparison',
      icon: BarChart3,
      value: 'comparison',
    },
    {
      title: 'Optimization',
      icon: Settings,
      value: 'optimization',
    },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 h-full border-r bg-background transition-all duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <span className="text-lg font-semibold">Store Analytics</span>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => onCollapse(!collapsed)}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="space-y-2 p-4">
        {items.map((item) => (
          <Button
            key={item.value}
            variant={currentView === item.value ? 'secondary' : 'ghost'}
            className={cn(
              'w-full justify-start',
              collapsed ? 'px-2' : 'px-4'
            )}
            onClick={() => setCurrentView(item.value)}
          >
            <item.icon className={cn('h-5 w-5', collapsed ? 'mx-auto' : 'mr-3')} />
            {!collapsed && <span>{item.title}</span>}
          </Button>
        ))}
      </nav>
    </aside>
  );
}