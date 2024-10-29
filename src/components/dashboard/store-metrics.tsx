import { Card } from '@/components/ui/card';
import { Square, Users, TrendingUp, BarChart2 } from 'lucide-react';

export function StoreMetrics() {
  const metrics = [
    {
      title: 'Total Floor Space',
      value: '45,000 sq ft',
      icon: Square,
      trend: '+2.5%',
    },
    {
      title: 'Daily Foot Traffic',
      value: '2,847',
      icon: Users,
      trend: '+12.3%',
    },
    {
      title: 'Sales per sq ft',
      value: '$342',
      icon: TrendingUp,
      trend: '+5.1%',
    },
    {
      title: 'Fixture Utilization',
      value: '87%',
      icon: BarChart2,
      trend: '+1.2%',
    },
  ];

  return (
    <>
      {metrics.map((metric) => (
        <Card key={metric.title} className="p-6">
          <div className="flex items-center gap-4">
            <metric.icon className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">{metric.title}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">{metric.value}</p>
                <span className="text-sm text-green-500">{metric.trend}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}