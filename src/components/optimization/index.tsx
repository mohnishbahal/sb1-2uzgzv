import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CapacityCalculator } from './capacity-calculator';
import { LayoutOptimizer } from './layout-optimizer';

export function Optimization() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Layout Optimization</h1>
      <Card>
        <Tabs defaultValue="capacity" className="p-6">
          <TabsList>
            <TabsTrigger value="capacity">Capacity Calculator</TabsTrigger>
            <TabsTrigger value="optimizer">Layout Optimizer</TabsTrigger>
          </TabsList>
          <TabsContent value="capacity">
            <CapacityCalculator />
          </TabsContent>
          <TabsContent value="optimizer">
            <LayoutOptimizer />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}