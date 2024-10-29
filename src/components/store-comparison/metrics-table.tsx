import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const metrics = [
  {
    store: 'Store #1',
    location: 'Downtown',
    floorSpace: '45,000 sq ft',
    salesPerSqFt: '$342',
    footTraffic: '2,847',
    fixtureCount: '156',
  },
  {
    store: 'Store #2',
    location: 'Westfield Mall',
    floorSpace: '38,000 sq ft',
    salesPerSqFt: '$289',
    footTraffic: '2,156',
    fixtureCount: '134',
  },
  {
    store: 'Store #3',
    location: 'East Side Plaza',
    floorSpace: '52,000 sq ft',
    salesPerSqFt: '$412',
    footTraffic: '3,245',
    fixtureCount: '189',
  },
];

export function MetricsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Store</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Floor Space</TableHead>
            <TableHead>Sales/sq ft</TableHead>
            <TableHead>Foot Traffic</TableHead>
            <TableHead>Fixtures</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics.map((metric) => (
            <TableRow key={metric.store}>
              <TableCell className="font-medium">{metric.store}</TableCell>
              <TableCell>{metric.location}</TableCell>
              <TableCell>{metric.floorSpace}</TableCell>
              <TableCell>{metric.salesPerSqFt}</TableCell>
              <TableCell>{metric.footTraffic}</TableCell>
              <TableCell>{metric.fixtureCount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}