import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", balance: 400000 },
  { month: "Feb", balance: 700000 },
  { month: "Mar", balance: 500000 },
  { month: "Apr", balance: 900000 },
  { month: "May", balance: 1200000 },
  { month: "Jun", balance: 950000 },
];

function ChartSection() {
  return (
    <div className="bg-[#111827] p-6 rounded-3xl border border-gray-800 mt-8">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Financial Analytics
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Monthly balance overview
          </p>
        </div>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              stroke="#9CA3AF"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="balance"
              stroke="#8B5CF6"
              fillOpacity={1}
              fill="url(#colorBalance)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ChartSection;