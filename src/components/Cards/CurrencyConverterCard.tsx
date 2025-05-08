import { CURRENCIES } from "@/constants/currencies";


export default function CurrencyConverterCard() {
  return (
    <div className="bg-sunrise p-4 rounded-xl text-white shadow-lg">
      <h2 className="text-xl font-bold mb-4">Conversor</h2>
      <div className="flex flex-col gap-4">
        <select className="p-2 rounded text-black">
          {CURRENCIES.map(c => <option key={c.code}>{c.label}</option>)}
        </select>
        <select className="p-2 rounded text-black">
          {CURRENCIES.map(c => <option key={c.code}>{c.label}</option>)}
        </select>
        <input className="p-2 rounded text-black" type="number" placeholder="Valor" />
      </div>
    </div>
  )
}