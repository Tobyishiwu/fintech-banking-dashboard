import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BankProvider } from "./context/BankContext";

// Layout
import MainLayout from "./layout/MainLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";
import Cards from "./pages/Cards";
import Beneficiaries from "./pages/Beneficiaries";
import Settings from "./pages/Settings";

function App() {
  return (
    <BankProvider>
      <BrowserRouter>
        <Routes>
          {/* MainLayout acts as the parent for all authenticated pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/beneficiaries" element={<Beneficiaries />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* 
            Catch-all Route: 
            If the user goes to a route that doesn't exist (like /help), 
            redirect them to the Dashboard.
          */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </BankProvider>
  );
}

export default App;