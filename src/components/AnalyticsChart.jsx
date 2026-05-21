import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

function AnalyticsChart() {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Income",
        data: [200000, 400000, 300000, 500000, 700000, 840000],
        borderColor: "#4F46E5",
        backgroundColor: "#4F46E5",
        tension: 0.4,
      },

      {
        label: "Expenses",
        data: [100000, 200000, 250000, 300000, 180000, 220000],
        borderColor: "#EF4444",
        backgroundColor: "#EF4444",
        tension: 0.4,
      },
    ],
  };

  const doughnutData = {
    labels: ["Transfer", "Shopping", "Bills", "Food"],

    datasets: [
      {
        data: [40, 25, 20, 15],

        backgroundColor: [
          "#4F46E5",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],

        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

      {/* Line Chart */}

      <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-semibold">
            Cashflow Overview
          </h2>

          <button className="text-gray-400 text-sm">
            This Month
          </button>
        </div>

        <Line data={lineData} />
      </div>

      {/* Doughnut Chart */}

      <div className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-semibold">
            Spending Categories
          </h2>

          <button className="text-gray-400 text-sm">
            This Month
          </button>
        </div>

        <div className="w-[280px] mx-auto">
          <Doughnut data={doughnutData} />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsChart;