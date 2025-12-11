import React, { useEffect, useState, useMemo, useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { LanguageContext } from "../LanguageContext"; // 🔹 додаємо

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Summary = () => {
  const { language } = useContext(LanguageContext); // 🔹 використовуємо контекст

  const stats = useMemo(
    () => ({
      area: 12777,
      population: 1243.7,
      gdp: 122140,
      communities: 64,
    }),
    []
  );

  const [animatedStats, setAnimatedStats] = useState({
    area: 0,
    population: 0,
    gdp: 0,
    communities: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedStats((prev) => {
        let updatedStats = {};
        Object.keys(stats).forEach((key) => {
          const numericValue = stats[key];
          updatedStats[key] =
            prev[key] < numericValue
              ? prev[key] + Math.ceil(numericValue / 100)
              : numericValue;
        });
        return updatedStats;
      });
    }, 30);
    setTimeout(() => clearInterval(interval), 3000);
    return () => clearInterval(interval);
  }, [stats]);

  const densityData = {
    labels: [
      language === "uk" ? "Закарпаття" : "Zakarpattia",
      "Kyiv",
      "Lviv",
      "Odesa",
      "Dnipro",
      "Kharkiv",
      "Vinnytsia",
    ],
    datasets: [
      {
        label:
          language === "uk"
            ? "Щільність населення (осіб на км²)"
            : "Population Density (people per km²)",
        data: [7, 10, 9, 8, 6, 7.5, 5.5],
        backgroundColor: [
          "#2f855a",
          "#a0aec0",
          "#a0aec0",
          "#a0aec0",
          "#a0aec0",
          "#a0aec0",
          "#a0aec0",
        ],
      },
    ],
  };

  const labels = {
    area: language === "uk" ? "Площа (км²)" : "Area (km²)",
    population:
      language === "uk" ? "Населення (тис. осіб)" : "Population (thousands)",
    gdp:
      language === "uk"
        ? "Валовий регіональний продукт (млн грн)"
        : "Gross Regional Product (mln UAH)",
    communities:
      language === "uk" ? "Кількість громад" : "Territorial Communities",
  };

  const description =
    language === "uk"
      ? `Закарпатська область — одна з найунікальніших в Україні. Це найбезпечніший регіон для ведення бізнесу (2023), прикордонна область з 19 пунктами пропуску (в т.ч. авіа), яка межує з 4 країнами ЄС. Вона розташована на перехресті Північної, Східної та Західної Європи, що сприяє активному міжрегіональному співробітництву. У регіоні проживають представники понад 100 національностей, зареєстровано понад 137 000 ВПО (орієнтовно 400 000).`
      : `Zakarpattia is one of Ukraine's most unique regions. It is the safest region for doing business (2023), with 19 border crossing points (including an international airport) and borders with 4 EU countries. Located at the crossroads of Northern, Eastern, and Western Europe, it fosters vibrant international cooperation. The region is home to representatives of over 100 nationalities and hosts more than 137,000 officially registered IDPs (approx. 400,000 estimated).`;

  const advantages =
    language === "uk"
      ? [
          "Унікальне геополітичне розташування — близькість до ринків ЄС",
          "Сприятливе середовище для бізнесу та іноземних інвестицій",
          "Різноманітний рельєф — Карпати та Закарпатська низовина",
          "Розвинене транскордонне співробітництво (Interreg NEXT, USAID тощо)",
          "Наявність 19 пунктів пропуску та стратегічних транспортних коридорів",
        ]
      : [
          "Unique geopolitical location — close to EU markets",
          "Favorable business climate and high level of foreign investment",
          "Diverse landscape — Carpathians and Tysa Lowland",
          "Active cross-border cooperation (Interreg NEXT, USAID etc.)",
          "Presence of 19 border crossings and strategic transport corridors",
        ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        {language === "uk" ? "Закарпатська область" : "Zakarpattia Region"}
      </h1>

      <p className="text-md text-gray-700 text-justify mb-6">{description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
        {Object.keys(stats).map((key) => (
          <div key={key} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{labels[key]}</h2>
            <p className="text-3xl font-bold text-green-600">
              {animatedStats[key]}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">
          {language === "uk"
            ? "Ключові переваги регіону"
            : "Key Regional Advantages"}
        </h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {advantages.map((adv, idx) => (
            <li key={idx}>{adv}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          {language === "uk"
            ? "Порівняння щільності населення"
            : "Population Density Comparison"}
        </h2>
        <Bar
          data={densityData}
          options={{
            responsive: true,
            plugins: { legend: { display: false } },
          }}
        />
      </div>
    </div>
  );
};

export default Summary;
