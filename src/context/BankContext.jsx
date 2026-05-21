import { createContext, useState, useEffect, useContext } from "react";

// Create the Base Context
export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  // Initial Fallback Data
  const defaultTransactions = [
    { id: 1, type: "Debit", title: "Netflix Subscription", amount: 4500, date: "May 20, 2026", category: "Entertainment" },
    { id: 2, type: "Credit", title: "Invoice #4092 Payment", amount: 120000, date: "May 18, 2026", category: "Business" },
    { id: 3, type: "Debit", title: "Fuel Station", amount: 15000, date: "May 15, 2026", category: "Logistics" }
  ];

  const defaultBalances = {
    totalBalance: 2560000,
    income: 840000,
    expenses: 220000,
    savings: 1200000
  };

  // Sync State with LocalStorage
  const [balances, setBalances] = useState(() => {
    const savedBalances = localStorage.getItem("finbank_balances");
    return savedBalances ? JSON.parse(savedBalances) : defaultBalances;
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTx = localStorage.getItem("finbank_transactions");
    return savedTx ? JSON.parse(savedTx) : defaultTransactions;
  });

  useEffect(() => {
    localStorage.setItem("finbank_balances", JSON.stringify(balances));
  }, [balances]);

  useEffect(() => {
    localStorage.setItem("finbank_transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Execute Transfers
  const executeTransfer = (title, amount, category) => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return false;
    if (numAmount > balances.totalBalance) return false;

    const newTransaction = {
      id: Date.now(),
      type: "Debit",
      title: title || "General Transfer",
      amount: numAmount,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      category: category || "Transfer"
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setBalances((prev) => ({
      ...prev,
      totalBalance: prev.totalBalance - numAmount,
      expenses: prev.expenses + numAmount
    }));

    return true;
  };

  return (
    <BankContext.Provider value={{ balances, transactions, executeTransfer }}>
      {children}
    </BankContext.Provider>
  );
};

// CRITICAL HOOK EXPORT: This resolves the TransactionCard.jsx import error!
export const useBank = () => {
  const context = useContext(BankContext);
  if (!context) {
    throw new Error("useBank must be used within a BankProvider");
  }
  return context;
};