"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", USD: 5.10, EUR: 4.95 },
  { month: "Feb", USD: 5.15, EUR: 5.00 },
  { month: "Mar", USD: 5.12, EUR: 5.05 },
  { month: "Apr", USD: 5.18, EUR: 5.03 },
  { month: "May", USD: 5.20, EUR: 5.08 },
  { month: "Jun", USD: 5.25, EUR: 5.12 },
  { month: "Jul", USD: 5.22, EUR: 5.10 },
  { month: "Aug", USD: 5.30, EUR: 5.15 },
  { month: "Sep", USD: 5.28, EUR: 5.18 },
  { month: "Oct", USD: 5.32, EUR: 5.20 },
  { month: "Nov", USD: 5.35, EUR: 5.22 },
  { month: "Dec", USD: 5.40, EUR: 5.25 },
];

export default function CurrencyChart() {
  return (
    <div className="w-full  h-[400px] bg-[#202024] p-4 rounded-md">
      <h2 className="text-xl font-semibold text-[#E1E1E6] mb-4 text-center">
        Variação das Moedas ao Longo do Ano
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="month" stroke="#E1E1E6" />
          <YAxis stroke="#E1E1E6" />
          <Tooltip contentStyle={{ backgroundColor: "#121214", borderColor: "#333", color: "#E1E1E6" }} />
          <Legend />
          <Line type="monotone" dataKey="USD" stroke="#FF8324" strokeWidth={2} />
          <Line type="monotone" dataKey="EUR" stroke="#009C9A" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
