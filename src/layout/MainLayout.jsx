import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; 
import { Menu, X } from "lucide-react"; // Imported X icon for explicit mobile closing options

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#070B1A] min-h-screen text-white overflow-x-hidden relative">
      
      {/* 1. Mobile Backdrop Overlay - Clicking anywhere here closes the open menu */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 2. Persistent Responsive Sidebar */}
      <div className={`
          fixed lg:static top-0 left-0 z-50 h-screen w-64
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Pass close functionality directly into the sidebar panel */}
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        
        {/* Mobile floating close button inside the sidebar drawer for fallback accessibility */}
        {sidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 lg:hidden text-gray-400 hover:text-white p-1"
          >
            <X size={22} />
          </button>
        )}
      </div>

      {/* 3. Main Frame Application Wrapper */}
      <div className="flex-1 flex flex-col w-full min-w-0">
        
        {/* Mobile Header Node (Visible ONLY on viewport scales below lg breakpoint) */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-[#070B1A] border-b border-white/5 sticky top-0 z-30">
          <h1 className="text-xl font-bold text-blue-500 tracking-wide">FinBank</h1>
          
          {/* CRITICAL FIXED BUTTON ENTRY */}
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-gray-400 hover:text-white active:scale-90 transition-transform bg-[#0F172A] border border-white/10 rounded-lg pointer-events-auto"
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Desktop Header Panel (Hidden on Mobile) */}
        <Navbar />

        {/* Dynamic Nested Route View viewport */}
        <main className="p-4 md:p-6 flex-1 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;