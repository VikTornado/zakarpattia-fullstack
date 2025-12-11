import React, { useState } from "react";
import InvestmentChart from "../components/InvestmentChart";


const allData = {
  2024: {
    uk: [
      { name: "Обробна промисловість", value: 69.5 },
      { name: "Постачання електроенергії, газу, пари", value: 27.3 },
      { name: "Водопостачання, каналізація", value: 1.9 },
      { name: "Гірничодобувна промисловість", value: 1.3 },
    ],
    en: [
      { name: "Processing industry", value: 69.5 },
      { name: "Electricity, gas, steam supply", value: 27.3 },
      { name: "Water supply, sewerage", value: 1.9 },
      { name: "Mining industry", value: 1.3 },
    ],
  },
  2023: {
    uk: [
      { name: "Обробна промисловість", value: 68.0 },
      { name: "Постачання електроенергії, газу, пари", value: 28.0 },
      { name: "Водопостачання, каналізація", value: 2.0 },
      { name: "Гірничодобувна промисловість", value: 2.0 },
    ],
    en: [
      { name: "Processing industry", value: 68.0 },
      { name: "Electricity, gas, steam supply", value: 28.0 },
      { name: "Water supply, sewerage", value: 2.0 },
      { name: "Mining industry", value: 2.0 },
    ],
  },
};

function Investments({ language }) {
  const [year, setYear] = useState("2024");

  return (
    <div className="p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          {language === "uk"
            ? `Промисловість Закарпатської області у ${year}`
            : `Industry of Zakarpattia Region in ${year}`}
        </h1>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      <InvestmentChart data={allData[year][language]} />

      {/* інші блоки сторінки */}
    </div>
  );
}

export default Investments;
