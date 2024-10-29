import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function CapacityCalculator() {
  const [dimensions, setDimensions] = useState({
    length: 200,
    width: 100,
    height: 180,
  });
  const [itemSize, setItemSize] = useState({
    length: 30,
    width: 20,
    height: 25,
  });

  const calculateCapacity = () => {
    const lengthUnits = Math.floor(dimensions.length / itemSize.length);
    const widthUnits = Math.floor(dimensions.width / itemSize.width);
    const heightUnits = Math.floor(dimensions.height / itemSize.height);
    return lengthUnits * widthUnits * heightUnits;
  };

  return (
    <div className="grid gap-6 p-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Fixture Dimensions (cm)</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Length</Label>
              <Slider
                value={[dimensions.length]}
                onValueChange={(value) =>
                  setDimensions({ ...dimensions, length: value[0] })
                }
                min={50}
                max={500}
                step={10}
              />
              <Input
                type="number"
                value={dimensions.length}
                onChange={(e) =>
                  setDimensions({
                    ...dimensions,
                    length: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Width</Label>
              <Slider
                value={[dimensions.width]}
                onValueChange={(value) =>
                  setDimensions({ ...dimensions, width: value[0] })
                }
                min={50}
                max={300}
                step={10}
              />
              <Input
                type="number"
                value={dimensions.width}
                onChange={(e) =>
                  setDimensions({ ...dimensions, width: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Height</Label>
              <Slider
                value={[dimensions.height]}
                onValueChange={(value) =>
                  setDimensions({ ...dimensions, height: value[0] })
                }
                min={50}
                max={300}
                step={10}
              />
              <Input
                type="number"
                value={dimensions.height}
                onChange={(e) =>
                  setDimensions({
                    ...dimensions,
                    height: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="mb-4 text-lg font-semibold">Item Dimensions (cm)</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Length</Label>
              <Input
                type="number"
                value={itemSize.length}
                onChange={(e) =>
                  setItemSize({ ...itemSize, length: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Width</Label>
              <Input
                type="number"
                value={itemSize.width}
                onChange={(e) =>
                  setItemSize({ ...itemSize, width: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="space-y-2">
              <Label>Height</Label>
              <Input
                type="number"
                value={itemSize.height}
                onChange={(e) =>
                  setItemSize({ ...itemSize, height: parseInt(e.target.value) })
                }
              />
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-4">
        <h3 className="mb-4 text-lg font-semibold">Capacity Results</h3>
        <div className="text-2xl font-bold">
          Maximum Capacity: {calculateCapacity()} units
        </div>
      </Card>
    </div>
  );
}