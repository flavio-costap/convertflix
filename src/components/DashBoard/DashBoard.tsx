import { SiConvertio } from "react-icons/si";
import CustomInput from "./CustomInput";
import CurrencyChart from "../Cards/CurrencyChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-10 items-center">
        <CustomInput />
        <SiConvertio size={150} color="#E1E1E6" />
        <CustomInput />
      </div>
      <CurrencyChart />
    </div>
  );
}
