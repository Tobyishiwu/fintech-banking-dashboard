function WalletCard() {
  return (
    <div className="bg-gradient-to-r from-indigo-700 via-blue-600 to-indigo-500 rounded-[32px] p-8 mt-8 shadow-2xl relative overflow-hidden">

      {/* Glow */}

      <div className="absolute top-[-60px] right-[-60px] w-[180px] h-[180px] bg-white/10 rounded-full"></div>

      {/* Top */}

      <div className="flex justify-between items-start relative z-10">

        <div>
          <p className="text-sm opacity-80">
            Available Balance
          </p>

          <h2 className="text-5xl font-extrabold mt-4 tracking-wide">
            ₦2,560,000
          </h2>
        </div>

        <span className="font-bold text-xl">
          VISA
        </span>
      </div>

      {/* Bottom */}

      <div className="flex justify-between mt-16 relative z-10">

        <div>
          <p className="text-sm opacity-70">
            Card Holder
          </p>

          <h3 className="font-semibold mt-2 text-lg">
            Toby Ishiwu
          </h3>
        </div>

        <div>
          <p className="text-sm opacity-70">
            Expires
          </p>

          <h3 className="font-semibold mt-2 text-lg">
            09/27
          </h3>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;