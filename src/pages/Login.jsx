import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Temporary Frontend-only login bypass
    // Once the backend is ready, this will be an API fetch request
    if (email === "demo@finbank.com" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid email or password. Use demo@finbank.com / password");
    }
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white flex flex-col justify-center items-center p-4 selection:bg-blue-500/30">
      <div className="w-full max-w-md bg-[#0F172A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
        
        {/* Logo and Greeting */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-blue-500 tracking-wide">FinBank</h1>
          <h2 className="text-xl font-semibold">Welcome Back</h2>
          <p className="text-xs text-gray-400">Secure access to your business portal</p>
        </div>

        {/* Form Error Flash */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-medium text-center">
            {error}
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. demo@finbank.com"
                className="w-full bg-[#070B1A] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-gray-400">Password</label>
              <a href="#" className="text-xs text-blue-500 hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#070B1A] border border-white/10 rounded-xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>Sign In</span>
            <ArrowRight size={16} />
          </button>
        </form>

        {/* Footer Toggle links */}
        <p className="text-center text-xs text-gray-400">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold hover:underline">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}