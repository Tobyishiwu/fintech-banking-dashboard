import { useBank } from "../context/BankContext";
import { ArrowUpRight, ArrowDownLeft, CreditCard, ShoppingBag, Landmark, Film } from "lucide-react";

export default function TransactionCard() {
  const { transactions } = useBank();

  const getCategoryIcon = (category, type) => {
    switch (category?.toLowerCase()) {
      case "entertainment":
        return <Film className="text-purple-400" size={18} />;
      case "business":
        return <Landmark className="text-emerald-400" size={18} />;
      case "logistics":
      case "transport":
        return <ShoppingBag className="text-amber-400" size={18} />;
      default:
        return type === "Credit" ? (
          <ArrowDownLeft className="text-green-400" size={18} />
        ) : (
          <ArrowUpRight className="text-blue-400" size={18} />
        );
    }
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 border border-dashed border-white/10 rounded-2xl bg-[#0F172A]/50">
        <CreditCard className="text-gray-600 mb-3" size={32} />
        <p className="text-sm text-gray-400 font-medium">No recent transactions found</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((tx) => {
        const isCredit = tx.type === "Credit";
        
        return (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 bg-[#0F172A] border border-white/5 hover:border-white/10 rounded-xl transition-all duration-200 group"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 bg-[#070B1A] border border-white/5 rounded-xl group-hover:scale-105 transition-transform duration-200">
                {getCategoryIcon(tx.category, tx.type)}
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-white truncate tracking-wide">
                  {tx.title}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-gray-500 font-medium">{tx.date}</span>
                  <span className="w-1 h-1 bg-white/10 rounded-full" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/5">
                    {tx.category || "General"}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right pl-4">
              <span className={`text-sm font-bold tracking-tight ${isCredit ? "text-green-400" : "text-gray-200"}`}>
                {isCredit ? "+" : "-"}₦{Number(tx.amount).toLocaleString("en-US")}
              </span>
              <p className="text-[10px] text-gray-500 font-medium mt-0.5 tracking-wider uppercase">
                {tx.type}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}