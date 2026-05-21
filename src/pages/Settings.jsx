import { User, Bell, Shield, HelpCircle } from "lucide-react";

function Settings() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-400 mt-1">Configure security thresholds and profile records</p>
      </div>

      <div className="bg-[#0F172A] border border-white/10 rounded-xl divide-y divide-white/5 overflow-hidden">
        {[
          { icon: <User />, title: "Profile Settings", desc: "Update your full name, phone number, and address" },
          { icon: <Bell />, title: "Notifications", desc: "Manage transaction alerts, push reminders, and updates" },
          { icon: <Shield />, title: "Security & PIN", desc: "Change transaction PIN, password, or biometrics settings" },
          { icon: <HelpCircle />, title: "Help & Support", desc: "Open an issue or talk to dedicated support lines" }
        ].map((opt, i) => (
          <div key={i} className="flex items-center gap-4 p-4 hover:bg-white/[0.01] cursor-pointer group transition-colors">
            <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
              {opt.icon}
            </div>
            <div>
              <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">{opt.title}</h3>
              <p className="text-xs text-gray-400 mt-0.5">{opt.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;