import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'América', value: 400 },
  { name: 'Europa', value: 300 },
  { name: 'Asia', value: 300 },
  { name: 'África', value: 200 },
];

const COLORS = ['#1e3c72', '#2a5298', '#4e73df', '#74b9ff'];

export default function DonutChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h3 className="text-sm font-medium text-gray-600 mb-2">Distribución de usuarios</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
