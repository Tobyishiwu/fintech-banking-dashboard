import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  ArrowLeftRight, 
  CreditCard, 
  Wallet, 
  Users, 
  Settings,
  ArrowUpRight
} from "lucide-react";

// The closeSidebar prop is passed down from MainLayout to handle mobile screen closure
function Sidebar({ closeSidebar }) {
  
  const menuItems = [
    { name: "Overview", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
    { name: "Transactions", path: "/transactions", icon: <ArrowLeftRight size={20} /> },
    { name: "Payments", path: "/payments", icon: <Wallet size={20} /> },
    { name: "Cards", path: "/cards", icon: <CreditCard size={20} /> },
    { name: "Beneficiaries", path: "/beneficiaries", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="bg-[#0F172A] w-64 h-full border-r border-white/5 p-5 flex flex-col justify-between select-none">
      
      {/* Top Section: Brand Identity & Route Links */}
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="px-3 py-2">
          <h1 className="text-2xl font-bold text-blue-500 tracking-wider">FinBank</h1>
          <p className="text-[10px] text-gray-500 font-medium tracking-widest uppercase mt-0.5">
            Business Suite
          </p>
        </div>

        {/* Dynamic Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar} // Automatically closes the mobile overlay when tapped
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all group
                ${isActive 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/10" 
                  : "text-gray-400 hover:bg-white/[0.03] hover:text-white"
                }
              `}
            >
              <div className="transition-transform group-hover:scale-110 duration-200">
                {item.icon}
              </div>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section: Upgrade Banner / Account Status Widget */}
      <div className="bg-[#070B1A] border border-white/5 rounded-2xl p-4 space-y-3">
        <div>
          <h4 className="text-xs font-semibold text-white">Upgrade Account</h4>
          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
            Unlock professional metrics, limits, and deep accounting insights.
          </p>
        </div>
        <button className="w-full bg-white hover:bg-gray-100 text-[#070B1A] text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors active:scale-[0.98]">
          <span>Upgrade Now</span>
          <ArrowUpRight size={14} />
        </button>
      </div>

    </div>
  );
}

export default Sidebar;