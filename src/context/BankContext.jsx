import { createContext, useContext, useState } from "react";

const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [balance, setBalance] = useState(2560000); // Numeric for math
  const [transactions, setTransactions] = useState([
    { id: 1, name: "Netflix Subscription", amount: -4500, date: "Today, 12:30 PM", type: "debit" },
    { id: 2, name: "Salary Deposit", amount: 840000, date: "Yesterday", type: "credit" },
  ]);

  const performTransfer = (recipient, amount) => {
    if (balance >= amount) {
      setBalance((prev) => prev - amount);
      const newTx = {
        id: Date.now(),
        name: `Transfer to ${recipient}`,
        amount: -amount,
        date: "Just now",
        type: "debit",
      };
      setTransactions((prev) => [newTx, ...prev]);
      return true;
    }
    return false;
  };

  return (
    <BankContext.Provider value={{ balance, transactions, performTransfer }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBank = () => useContext(BankContext);