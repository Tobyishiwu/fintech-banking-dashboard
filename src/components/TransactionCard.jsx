import { useBank } from "../context/BankContext";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export default function TransactionCard() {
  const { transactions } = useBank();

  const formatCurrency = (amount) => {
    const formatted = new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(Math.abs(amount));
    return amount < 0 ? `-${formatted}` : `+${formatted}`;
  };

  // Slice to only show the top 3 latest entries on the dashboard view
  const recentTransactions = transactions.slice(0, 3);

  return (
    <div className="space-y-4">
      {recentTransactions.map((tx) => (
        <div key={tx.id} className="flex items-center justify-between p-3 rounded-xl bg-[#070B1A]/50 border border-white/5 hover:border-white/10 transition-all">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              tx.amount < 0 ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
            }`}>
              {tx.amount < 0 ? <ArrowUpRight size={18} /> : <ArrowDownLeft size={18} />}
            </div>
            <div>
              <p className="text-sm font-semibold text-white line-clamp-1">{tx.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">{tx.date}</p>
            </div>
          </div>
          <span className={`text-sm font-bold ${
            tx.amount < 0 ? 'text-red-400' : 'text-green-400'
          }`}>
            {formatCurrency(tx.amount)}
          </span>
        </div>
      ))}
    </div>
  );
}