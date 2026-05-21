import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar"; // Using the correct filename
import { Menu } from "lucide-react";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-[#070B1A] min-h-screen text-white overflow-x-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Persistent Sidebar */}
      <div className={`
          fixed lg:static top-0 left-0 z-50 h-screen
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <Sidebar closeSidebar={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 flex flex-col w-full">
        {/* Mobile Header (Visible only on small screens) */}
        <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-white/10">
          <h1 className="text-xl font-bold text-blue-500">FinBank</h1>
          <button onClick={() => setSidebarOpen(true)}>
            <Menu size={26} />
          </button>
        </div>

        {/* Persistent Navbar - This stays visible on all pages */}
        <Navbar />

        <main className="p-3 sm:p-4 md:p-6 flex-1 overflow-x-hidden">
          {/* This is where Dashboard, Analytics, etc., will load */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;