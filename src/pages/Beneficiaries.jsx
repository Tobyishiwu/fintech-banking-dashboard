import { UserPlus, Search } from "lucide-react";

function Beneficiaries() {
  const items = [
    { name: "Amara Nwosu", bank: "Access Bank - 0021***34" },
    { name: "Tunde Bakare", bank: "GTBank - 0112***90" },
    { name: "David Okonjo", bank: "FinBank - 1004***11" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Beneficiaries</h1>
          <p className="text-gray-400 mt-1">Quick list of frequent transfer contacts</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <UserPlus size={16} /> Add New
        </button>
      </div>

      <div className="bg-[#0F172A] border border-white/10 rounded-xl divide-y divide-white/5">
        {items.map((b, i) => (
          <div key={i} className="flex items-center justify-between p-4 hover:bg-white/[0.01]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/10 text-blue-500 font-bold flex items-center justify-center">
                {b.name[0]}
              </div>
              <div>
                <h4 className="font-medium text-white">{b.name}</h4>
                <p className="text-xs text-gray-400">{b.bank}</p>
              </div>
            </div>
            <button className="text-xs text-blue-500 border border-blue-500/20 hover:border-blue-500 px-3 py-1.5 rounded-md transition-all">
              Transfer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beneficiaries;