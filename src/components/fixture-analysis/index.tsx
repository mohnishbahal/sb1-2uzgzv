import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FixtureList } from './fixture-list';
import { FixtureStats } from './fixture-stats';
import { FixtureHeatmap } from './fixture-heatmap';

export function FixtureAnalysis() {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Fixture Analysis</h1>
      <Card>
        <Tabs defaultValue="list" className="p-6">
          <TabsList>
            <TabsTrigger value="list">Fixture List</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
            <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <FixtureList />
          </TabsContent>
          <TabsContent value="stats">
            <FixtureStats />
          </TabsContent>
          <TabsContent value="heatmap">
            <FixtureHeatmap />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}