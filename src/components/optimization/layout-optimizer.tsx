import { useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function LayoutOptimizer() {
  const [optimizing, setOptimizing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startOptimization = () => {
    setOptimizing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setOptimizing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="grid gap-6 p-4">
      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Optimization Parameters</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Optimization Target</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select target" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Maximize Sales</SelectItem>
                <SelectItem value="traffic">Optimize Traffic Flow</SelectItem>
                <SelectItem value="space">Maximize Space Usage</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Department Priority</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="home">Home & Garden</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <Button
            onClick={startOptimization}
            disabled={optimizing}
            className="w-full"
          >
            {optimizing ? 'Optimizing...' : 'Start Optimization'}
          </Button>
        </div>
      </Card>

      {optimizing && (
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Optimization Progress</h3>
          <Progress value={progress} className="mb-2" />
          <p className="text-sm text-muted-foreground">
            Analyzing layout patterns and calculating optimal positions...
          </p>
        </Card>
      )}

      {progress === 100 && (
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Optimization Results</h3>
          <div className="space-y-2">
            <p>✓ Layout efficiency improved by 15%</p>
            <p>✓ Customer flow optimized for peak hours</p>
            <p>✓ Department adjacencies optimized</p>
          </div>
        </Card>
      )}
    </div>
  );
}