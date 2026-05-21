import { Search, Bell, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <nav className="hidden lg:flex items-center justify-between px-6 py-4 bg-[#070B1A] border-b border-white/5 w-full">
      {/* Page Context Indicator */}
      <div>
        <h2 className="text-xl font-semibold text-white tracking-wide">Overview</h2>
        <p className="text-xs text-gray-400 mt-0.5">Monitor your finances and transactions</p>
      </div>

      {/* Global Actions Area */}
      <div className="flex items-center gap-6">
        
        {/* Mock Search Input Bar */}
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#0F172A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Notification Utilities */}
        <button className="relative p-2 text-gray-400 hover:text-white bg-[#0F172A] border border-white/5 hover:border-white/10 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
        </button>

        {/* Divider Segment */}
        <div className="h-8 w-[1px] bg-white/10" />

        {/* Identity / User Profile Node */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-blue-600 font-bold text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
            T
          </div>
          <div className="hidden xl:block text-left">
            <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Toby Ishiwu</h4>
            <p className="text-xs text-gray-400 mt-0.5">Personal Account</p>
          </div>
          <ChevronDown size={16} className="text-gray-400 group-hover:text-white transition-colors" />
        </div>

      </div>
    </nav>
  );
}

// THIS IS THE LINE THAT RESOLVES THE ERROR OVERLAY:
export default Navbar;