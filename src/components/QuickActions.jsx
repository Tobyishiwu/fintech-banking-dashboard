import {
  FiSend,
  FiDownload,
  FiCreditCard,
  FiSmartphone,
  FiLink,
  FiMoreHorizontal,
} from "react-icons/fi";

function QuickActions() {
  const actions = [
    {
      icon: <FiSend />,
      label: "Send",
    },

    {
      icon: <FiDownload />,
      label: "Receive",
    },

    {
      icon: <FiSmartphone />,
      label: "Airtime",
    },

    {
      icon: <FiCreditCard />,
      label: "Cards",
    },

    {
      icon: <FiLink />,
      label: "Payment Link",
    },

    {
      icon: <FiMoreHorizontal />,
      label: "More",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">

      {actions.map((action, index) => (
        <button
          key={index}
          className="bg-[#111827] border border-[#1F2937] rounded-2xl p-5 hover:border-indigo-500 hover:bg-[#182235] transition duration-300 shadow-xl"
        >
          <div className="flex flex-col items-center gap-3">

            <div className="text-2xl text-indigo-400">
              {action.icon}
            </div>

            <p className="text-sm font-medium text-white text-center">
              {action.label}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default QuickActions;