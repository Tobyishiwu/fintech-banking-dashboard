import AnalyticsChart from "../components/AnalyticsChart";

function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-gray-400 mt-1">Deep insights into your cash inflow and expenditures</p>
      </div>

      <div className="bg-[#0F172A] border border-white/10 p-6 rounded-xl">
        <AnalyticsChart />
      </div>
    </div>
  );
}

export default Analytics;