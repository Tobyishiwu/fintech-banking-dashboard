import { useBank } from "../context/BankContext";
import StatCard from "../components/StatCard";
import WalletCard from "../components/WalletCard";
import TransactionCard from "../components/TransactionCard";
import QuickActions from "../components/QuickActions";
import AnalyticsChart from "../components/AnalyticsChart";

function Dashboard() {
  const { balance } = useBank();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    // Added explicit spacing container to decouple page layout from main layout
    <div className="space-y-8 pb-10 animate-fade-in">
      
      {/* Dynamic Header Block */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-white/5 pb-5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            Welcome Back <span className="animate-bounce-slow">👋</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Here's a comprehensive look at your financial health today.
          </p>
        </div>
      </div>

      {/* Metrics Grid - Optimized responsive layout breakpoints */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          title="Total Balance"
          amount={formatCurrency(balance)}
          growth="+12.5%"
        />
        <StatCard
          title="Income"
          amount="₦840,000"
          growth="+8.2%"
        />
        <StatCard
          title="Expenses"
          amount="₦220,000"
          growth="-2.1%"
        />
        <StatCard
          title="Savings"
          amount="₦1,200,000"
          growth="+18.4%"
        />
      </div>

      {/* Core Dynamic Area: Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column: Wallet Management & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-1 transition-all hover:border-white/20">
            <WalletCard />
          </div>
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Shortcuts</h3>
            <QuickActions />
          </div>
        </div>

        {/* Right Column: Live Ledger Stream */}
        <div className="h-full">
          <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-5 shadow-xl sticky top-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
              <a href="/transactions" className="text-xs font-semibold text-blue-500 hover:underline">View All</a>
            </div>
            <TransactionCard />
          </div>
        </div>
        
      </div>

      {/* Footer Visualizations */}
      <div className="bg-[#0F172A] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-white">Cashflow Analytics</h3>
          <p className="text-xs text-gray-400 mt-0.5">Inflow vs Outflow balance history</p>
        </div>
        <AnalyticsChart />
      </div>

    </div>
  );
}

export default Dashboard;