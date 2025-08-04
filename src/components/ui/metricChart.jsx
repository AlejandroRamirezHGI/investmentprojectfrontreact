// src/components/ui/MetricChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { month: 'Ene', ventas: 2400 },
  { month: 'Feb', ventas: 3200 },
  { month: 'Mar', ventas: 2800 },
  { month: 'Abr', ventas: 3500 },
  { month: 'May', ventas: 4000 },
];

export default function MetricChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg">
      <h3 className="text-sm font-medium text-gray-600 mb-2">Ventas mensuales</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="ventas" stroke="#1e3c72" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
