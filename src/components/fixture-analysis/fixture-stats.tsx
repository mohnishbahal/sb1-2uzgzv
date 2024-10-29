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
    department: 'Electronics',
    wallUnits: 12,
    islands: 8,
    gondolas: 4,
  },
  {
    department: 'Clothing',
    wallUnits: 8,
    islands: 16,
    gondolas: 6,
  },
  {
    department: 'Home & Garden',
    wallUnits: 6,
    islands: 4,
    gondolas: 12,
  },
  {
    department: 'Grocery',
    wallUnits: 4,
    islands: 2,
    gondolas: 16,
  },
];

export function FixtureStats() {
  return (
    <div className="h-[400px] w-full p-4">
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
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wallUnits" fill="#8884d8" name="Wall Units" />
          <Bar dataKey="islands" fill="#82ca9d" name="Islands" />
          <Bar dataKey="gondolas" fill="#ffc658" name="Gondolas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}