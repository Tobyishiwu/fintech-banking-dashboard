import { CreditCard, Eye, Lock, ShieldAlert } from "lucide-react";

function Cards() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Cards</h1>
        <p className="text-gray-400 mt-1">Manage your virtual and physical debit cards</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Moniepoint-esque Virtual Card Layout */}
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-900 p-6 rounded-2xl h-52 flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs text-white/60 tracking-wider">VIRTUAL CARD</p>
              <h3 className="text-lg font-bold mt-1">FinBank Premium</h3>
            </div>
            <span className="font-italic font-bold text-xl text-white/80">VISA</span>
          </div>
          
          <div>
            <p className="text-xl tracking-widest font-mono">••••  ••••  ••••  8824</p>
            <div className="flex gap-6 mt-4 text-xs text-white/80">
              <div><p className="text-white/40">EXP</p><p>12/28</p></div>
              <div><p className="text-white/40">CVV</p><p>•••</p></div>
            </div>
          </div>
        </div>

        {/* Card Controls Panel */}
        <div className="md:col-span-2 bg-[#0F172A] border border-white/10 rounded-xl p-6 divide-y divide-white/5">
          <div className="flex items-center justify-between pb-4">
            <div className="flex gap-3 items-center">
              <Eye className="text-gray-400" />
              <div><h4 className="font-medium">Show Card Details</h4><p className="text-xs text-gray-400">Reveal card number and CVV safely</p></div>
            </div>
            <button className="text-sm text-blue-500 font-semibold">View</button>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex gap-3 items-center">
              <Lock className="text-gray-400" />
              <div><h4 className="font-medium">Freeze Card</h4><p className="text-xs text-gray-400">Temporarily block card operations</p></div>
            </div>
            <div className="w-9 h-5 bg-white/20 rounded-full relative cursor-pointer"><div className="w-4 h-4 bg-white rounded-full absolute top-0.5 left-0.5" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;