function StatCard({ title, amount, growth }) {
  return (
    <div className="bg-[#111827] border border-[#1F2937] rounded-2xl p-5">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {amount}
      </h2>

      <p className="text-green-400 text-sm mt-2">
        {growth} this month
      </p>
    </div>
  );
}

export default StatCard;