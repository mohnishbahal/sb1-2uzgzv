import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    store: 'Store #1',
    floorSpace: 45000,
    salesPerSqFt: 342,
    footTraffic: 2847,
  },
  {
    store: 'Store #2',
    floorSpace: 38000,
    salesPerSqFt: 289,
    footTraffic: 2156,
  },
  {
    store: 'Store #3',
    floorSpace: 52000,
    salesPerSqFt: 412,
    footTraffic: 3245,
  },
];

export function ComparisonChart() {
  return (
    <div className="h-[500px] w-full p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="store" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="floorSpace" fill="#8884d8" name="Floor Space (sq ft)" />
          <Bar dataKey="salesPerSqFt" fill="#82ca9d" name="Sales per sq ft ($)" />
          <Bar dataKey="footTraffic" fill="#ffc658" name="Daily Foot Traffic" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}