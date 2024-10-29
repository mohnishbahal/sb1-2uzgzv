import { Card } from '@/components/ui/card';
import { StoreMetrics } from './store-metrics';
import { LayoutViewer } from './layout-viewer';
import { DepartmentDistribution } from './department-distribution';
import { PerformanceMetrics } from './performance-metrics';

export function Dashboard() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Store Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StoreMetrics />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Store Layout</h2>
          <LayoutViewer />
        </Card>
        <Card className="p-6">
          <h2 className="mb-4 text-lg font-semibold">Department Distribution</h2>
          <DepartmentDistribution />
        </Card>
      </div>
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Performance Metrics</h2>
        <PerformanceMetrics />
      </Card>
    </div>
  );
}