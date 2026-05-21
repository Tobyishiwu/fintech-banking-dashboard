import { useState } from "react";
import { useBank } from "../context/BankContext";
import { Send, Smartphone, Receipt, CreditCard } from "lucide-react";

function Payments() {
  const { performTransfer, balance } = useBank();
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState(null);

  const handleTransfer = (e) => {
    e.preventDefault();
    const numericAmount = parseFloat(amount);

    if (!recipient || isNaN(numericAmount) || numericAmount <= 0) {
      setStatus({ type: "error", msg: "Please enter valid transfer details." });
      return;
    }

    const success = performTransfer(recipient, numericAmount);
    if (success) {
      setStatus({ type: "success", msg: `Successfully sent ₦${numericAmount.toLocaleString()} to ${recipient}!` });
      setRecipient("");
      setAmount("");
    } else {
      setStatus({ type: "error", msg: "Insufficient funds for this transaction." });
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Payments</h1>
        <p className="text-gray-400 mt-1">Send money, pay bills, and manage utilities</p>
      </div>

      {/* Quick Payment Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: <Send />, label: "Transfer" },
          { icon: <Smartphone />, label: "Airtime & Data" },
          { icon: <Receipt />, label: "Pay Bills" },
          { icon: <CreditCard />, label: "Card Pay" },
        ].map((item, index) => (
          <button key={index} className="flex flex-col items-center gap-3 bg-[#0F172A] border border-white/10 hover:border-blue-500/50 p-4 rounded-xl transition-all group">
            <div className="p-3 bg-blue-600/10 text-blue-500 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
              {item.icon}
            </div>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Send Money Live Engine */}
      <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Instant Bank Transfer</h2>
        
        <form onSubmit={handleTransfer} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Recipient Name / Account Number</label>
            <input 
              type="text" 
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. David Okonjo" 
              className="w-full bg-[#070B1A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Amount (NGN)</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00" 
              className="w-full bg-[#070B1A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {status && (
            <div className={`p-3 rounded-lg text-sm font-medium ${
              status.type === "success" ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
            }`}>
              {status.msg}
            </div>
          )}

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Confirm Transfer
          </button>
        </form>
      </div>
    </div>
  );
}

export default Payments;