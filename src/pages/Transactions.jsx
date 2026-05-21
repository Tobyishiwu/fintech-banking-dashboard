import { useBank } from "../context/BankContext";
import { Search, Filter, ArrowUpRight, ArrowDownLeft, Download } from "lucide-react";

function Transactions() {
  const { transactions } = useBank();

  // Helper to format currency
  const formatCurrency = (amount) => {
    const formatted = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(Math.abs(amount));
    
    return amount < 0 ? `-${formatted}` : `+${formatted}`;
  };

  return (
    <div className="space-y-6">
      {/* Header and Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Transactions</h1>
          <p className="text-gray-400 mt-1">Track all your financial activities</p>
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium self-start sm:self-auto transition-colors">
          <Download size={18} />
          <span>Export</span>
        </button>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="w-full bg-[#0F172A] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-[#0F172A] border border-white/10 hover:border-white/20 px-4 py-2.5 rounded-lg text-gray-300 transition-colors">
          <Filter size={18} />
          <span>Filter</span>
        </button>
      </div>

      {/* Transactions List Container */}
      <div className="bg-[#0F172A] border border-white/10 rounded-xl divide-y divide-white/5 overflow-hidden">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4">
              {/* Dynamic Icon Wrapper */}
              <div className={`p-2.5 rounded-lg ${
                tx.amount < 0 ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'
              }`}>
                {tx.amount < 0 ? <ArrowUpRight size={20} /> : <ArrowDownLeft size={20} />}
              </div>
              
              <div>
                <h3 className="font-semibold text-white">{tx.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">{tx.date}</p>
              </div>
            </div>

            {/* Dynamic Amount Styling */}
            <span className={`font-bold text-lg ${
              tx.amount < 0 ? 'text-red-400' : 'text-green-400'
            }`}>
              {formatCurrency(tx.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;