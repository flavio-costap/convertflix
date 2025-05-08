export default function CustomInput() {
  return (
    <div className="rounded-md shadow-lg p-8 w-full bg-[#323238]">
      <div className="flex flex-row items-center space-x-2 mb-6">
        <h1 className="text-2xl font-semibold text-[#E1E1E6]">
          Valor em
        </h1>
        <select
          id="currency"
          className="w-32 rounded-md px-2 py-2 bg-[#121214] text-[#E1E1E6] focus:outline-none text-2xl font-semibold"
        >
          <option value="USD">USD</option>
          <option value="BRL">BRL</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="GBP">GBP</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          id="amount"
          type="text"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#009C9A] text-2xl font-semibold"
          placeholder="Ex: 100"
        />
      </div>
    </div>
  );
}
