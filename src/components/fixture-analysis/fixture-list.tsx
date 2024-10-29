import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const fixtures = [
  {
    id: 'F001',
    type: 'Wall Unit',
    department: 'Electronics',
    dimensions: '240cm × 180cm',
    capacity: '120 units',
    utilization: 'High',
  },
  {
    id: 'F002',
    type: 'Island Display',
    department: 'Clothing',
    dimensions: '180cm × 120cm',
    capacity: '80 units',
    utilization: 'Medium',
  },
  {
    id: 'F003',
    type: 'Gondola',
    department: 'Home & Garden',
    dimensions: '360cm × 120cm',
    capacity: '200 units',
    utilization: 'Low',
  },
];

const utilizationColors = {
  High: 'bg-green-500',
  Medium: 'bg-yellow-500',
  Low: 'bg-red-500',
};

export function FixtureList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Dimensions</TableHead>
            <TableHead>Capacity</TableHead>
            <TableHead>Utilization</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fixtures.map((fixture) => (
            <TableRow key={fixture.id}>
              <TableCell className="font-medium">{fixture.id}</TableCell>
              <TableCell>{fixture.type}</TableCell>
              <TableCell>{fixture.department}</TableCell>
              <TableCell>{fixture.dimensions}</TableCell>
              <TableCell>{fixture.capacity}</TableCell>
              <TableCell>
                <Badge variant="secondary">{fixture.utilization}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}