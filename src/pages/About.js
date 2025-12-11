import React, { useEffect, useState, useMemo } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const About = ({ language }) => {
  const stats = useMemo(
    () => ({
      area: 12777,
      population: 1244.5,
      gdp: 122140,
      communities: 64,
    }),
    []
  );

  const labels = {
    area: language === "uk" ? "Загальна площа (км²)" : "Total Area (km²)",
    population:
      language === "uk" ? "Населення (тис.)" : "Population (thousands)",
    gdp:
      language === "uk"
        ? "Валовий регіональний продукт (млн грн)"
        : "Gross Regional Product (million UAH)",
    communities:
      language === "uk" ? "Територіальні громади" : "Territorial Communities",
  };

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
      language === "uk" ? "Київ" : "Kyiv",
      language === "uk" ? "Львів" : "Lviv",
      language === "uk" ? "Одеса" : "Odesa",
      language === "uk" ? "Дніпро" : "Dnipro",
      language === "uk" ? "Харків" : "Kharkiv",
      language === "uk" ? "Вінниця" : "Vinnytsia",
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 pt-24 pb-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "uk" ? "Статистика регіону" : "Region Statistics"}
      </h1>

      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          {Object.keys(stats).map((key) => (
            <div key={key} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{labels[key]}</h2>
              <p className="text-3xl font-bold text-green-600">
                {animatedStats[key]}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
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
    </div>
  );
};

export default About;
