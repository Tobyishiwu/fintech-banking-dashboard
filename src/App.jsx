import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BankProvider } from "./context/BankContext";

// Layout & Guards
import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Authentication Pages
import Login from "./pages/Login";

// App Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Transactions from "./pages/Transactions";
import Payments from "./pages/Payments";
import Cards from "./pages/Cards";
import Beneficiaries from "./pages/Beneficiaries";
import Settings from "./pages/Settings";
import Register from "./pages/Register";

function App() {
  return (
    <BankProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<div className="text-white p-8">Registration Coming Soon</div>} />

          {/* Secure App Routing Pipeline */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/beneficiaries" element={<Beneficiaries />} />
              <Route path="/settings" element={<Settings />} />
              {/* Public Auth Routes */}
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
            </Route>
          </Route>

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </BankProvider>
  );
}

export default App;