import {
  FiGrid,
  FiBarChart2,
  FiCreditCard,
  FiSettings,
  FiRepeat,
  FiUsers,
  FiDollarSign,
  FiX,
} from "react-icons/fi";

import { Link, useLocation } from "react-router-dom";

function Sidebar({ mobileOpen, setMobileOpen }) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Overview",
      icon: <FiGrid />,
      path: "/",
    },
    {
      name: "Analytics",
      icon: <FiBarChart2 />,
      path: "/analytics",
    },
    {
      name: "Transactions",
      icon: <FiRepeat />,
      path: "/transactions",
    },
    {
      name: "Payments",
      icon: <FiDollarSign />,
      path: "/payments",
    },
    {
      name: "Cards",
      icon: <FiCreditCard />,
      path: "/cards",
    },
    {
      name: "Beneficiaries",
      icon: <FiUsers />,
      path: "/beneficiaries",
    },
    {
      name: "Settings",
      icon: <FiSettings />,
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <div
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-[260px] bg-[#070B14] border-r border-[#1A1F2E] flex flex-col justify-between p-5 transform transition-transform duration-300 ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top */}

        <div>
          {/* Header */}

          <div className="flex items-center justify-between mb-10">

            <h1 className="text-3xl font-bold text-blue-500">
              FinBank
            </h1>

            {/* Close Button */}

            <button
              onClick={() => setMobileOpen(false)}
              className="lg:hidden text-white"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Navigation */}

          <div className="space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-[#111827] hover:text-white"
                }`}
              >
                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="text-sm font-medium">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Upgrade Card */}

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-5 rounded-2xl mt-10">

          <h2 className="text-white font-bold text-lg mb-2">
            Upgrade Account
          </h2>

          <p className="text-sm text-blue-100 leading-6 mb-4">
            Unlock premium banking tools and analytics.
          </p>

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Upgrade Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;