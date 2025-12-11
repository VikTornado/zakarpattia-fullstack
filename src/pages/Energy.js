import React, { useContext } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { LanguageContext } from "../LanguageContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Energy() {
  const { language } = useContext(LanguageContext);

  const labels = {
    solar: language === "uk" ? "Сонячна енергія" : "Solar energy",
    wind: language === "uk" ? "Вітрова енергія" : "Wind energy",
    hydro: language === "uk" ? "Гідроелектростанції" : "Hydroelectric",
    gas: language === "uk" ? "Газ низької якості" : "Low-grade gas",
    storage: language === "uk" ? "Акумуляція енергії" : "Storage systems",
  };

  const energyData = {
    potential: [1757.0, 1163.0, 132.0, 25.5, 2.1],
    installed: [396.4, 9.6, 42.2, 11.6, 0],
    growth: [1360.6, 1153.4, 89.8, 13.9, 70.4],
  };

  const chartData = {
    labels: Object.values(labels),
    datasets: [
      {
        label: language === "uk" ? "Потенціал (МВт)" : "Potential (MW)",
        data: energyData.potential,
        backgroundColor: "#60a5fa",
      },
      {
        label:
          language === "uk" ? "Встановлена потужність (МВт)" : "Installed (MW)",
        data: energyData.installed,
        backgroundColor: "#34d399",
      },
      {
        label:
          language === "uk"
            ? "Можливість зростання (МВт)"
            : "Growth prospects (MW)",
        data: energyData.growth,
        backgroundColor: "#fbbf24",
      },
    ],
  };

  const pieData = {
    labels: Object.values(labels),
    datasets: [
      {
        data: energyData.potential,
        backgroundColor: [
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#f87171",
          "#c084fc",
        ],
        borderWidth: 1,
      },
    ],
  };

  const totalPotential = energyData.potential.reduce((a, b) => a + b, 0);

  const overview =
    language === "uk"
      ? [
          "Потенціал для розвитку сонячної енергетики — понад 2000 годин сонця на рік.",
          "Активне зростання інтересу до вітрової енергетики в гірських районах.",
          "Малі ГЕС на численних річках — ще один напрямок розвитку.",
          "Можливість використання термальних джерел для опалення та енергетики.",
        ]
      : [
          "Solar energy potential — more than 2,000 hours of sunshine per year.",
          "Growing interest in wind energy in mountainous areas.",
          "Small hydropower stations on numerous rivers offer further development.",
          "Thermal springs can be used for heating and energy supply.",
        ];

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "uk"
          ? "Енергетичний потенціал Закарпаття"
          : "Energy Potential of Zakarpattia"}
      </h1>

      <p className="mb-6 leading-relaxed text-gray-700 whitespace-pre-line">
        {language === "uk"
          ? `Згідно з розрахунками державного інституту проєктування, загальний потенціал відновлюваних ресурсів Закарпаття становить понад 45 млрд кВт⋅год на рік, з яких приблизно 30 млрд кВт⋅год реально використовувати.

Використання цього потенціалу сприятиме інноваційному розвитку регіону, зміцненню енергетичної безпеки та досягненню глобальних цілей України у сфері зміни клімату.

У реалізації Енергетичної стратегії України Закарпаття має бути серед лідерів.`
          : `According to calculations by the State Design Institute, the total renewable energy potential of Zakarpattia is over 45 billion kWh per year, of which about 30 billion kWh is realistically usable.

Using this potential will contribute to innovative development, strengthen energy security, and support Ukraine’s global climate change goals.

In the implementation of Ukraine's Energy Strategy, Zakarpattia should be among the leaders.`}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        {language === "uk"
          ? "Огляд відновлюваних джерел"
          : "Renewables Overview"}
      </h2>
      <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
        {overview.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">
                {language === "uk" ? "Джерело" : "Source"}
              </th>
              <th className="border p-2">
                {language === "uk" ? "Потенціал (МВт)" : "Potential (MW)"}
              </th>
              <th className="border p-2">
                {language === "uk" ? "Встановлено (МВт)" : "Installed (MW)"}
              </th>
              <th className="border p-2">
                {language === "uk" ? "Зростання (МВт)" : "Growth (MW)"}
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(labels).map((key, i) => (
              <tr key={key}>
                <td className="border p-2">{labels[key]}</td>
                <td className="border p-2 text-center">
                  {energyData.potential[i]}
                </td>
                <td className="border p-2 text-center">
                  {energyData.installed[i]}
                </td>
                <td className="border p-2 text-center">
                  {energyData.growth[i]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mt-10 mb-4 text-center">
        {language === "uk"
          ? "Графік: Потенціал, Встановлена потужність, Зростання"
          : "Chart: Potential vs Installed vs Growth"}
      </h2>

      <Bar data={chartData} options={{ responsive: true }} />

      <h2 className="text-xl font-semibold mt-10 mb-4 text-center">
        {language === "uk"
          ? "Загальний потенціал по джерелах"
          : "Total potential per source"}
      </h2>

      <Pie data={pieData} />

      <p className="mt-8 text-center text-gray-600 text-sm">
        {language === "uk"
          ? `Загальний потенціал: ${totalPotential} МВт`
          : `Total potential: ${totalPotential} MW`}
      </p>
    </div>
  );
}

export default Energy;
