import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ComparisonChart } from './comparison-chart';
import { MetricsTable } from './metrics-table';

export function StoreComparison() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Store Comparison</h1>
      <Card>
        <Tabs defaultValue="chart" className="p-6">
          <TabsList>
            <TabsTrigger value="chart">Visual Comparison</TabsTrigger>
            <TabsTrigger value="table">Metrics Table</TabsTrigger>
          </TabsList>
          <TabsContent value="chart">
            <ComparisonChart />
          </TabsContent>
          <TabsContent value="table">
            <MetricsTable />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}