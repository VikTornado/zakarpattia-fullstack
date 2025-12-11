import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { LanguageContext } from "../LanguageContext";

const RelocatedEnterprises = () => {
  const { language } = useContext(LanguageContext);

  const chartDataMap = {
    uk: [
      { name: "Виробництво металевих виробів", value: 20 },
      { name: "Виробництво машин та обладнання", value: 11.3 },
      { name: "Виробництво одягу та взуття", value: 10 },
      { name: "Виробництво обладнання", value: 8.8 },
      { name: "Обробка деревини", value: 8.8 },
      { name: "Виробництво харчових продуктів", value: 8.8 },
      { name: "Комп'ютерна та електронна продукція", value: 5 },
      { name: "Фармацевтична продукція", value: 3.8 },
      { name: "Металургійна продукція", value: 2.5 },
      { name: "Інше", value: 21 },
    ],
    en: [
      { name: "Manufacture of fabricated metal products", value: 20 },
      { name: "Manufacture of machinery and equipment", value: 11.3 },
      { name: "Clothing and footwear production", value: 10 },
      { name: "Machinery and equipment production", value: 8.8 },
      { name: "Processing of wood and wood products", value: 8.8 },
      { name: "Manufacture of food products", value: 8.8 },
      { name: "Computers, electronic and optical products", value: 5 },
      { name: "Pharmaceutical products", value: 3.8 },
      { name: "Metallurgical production", value: 2.5 },
      { name: "Other", value: 21 },
    ],
  };

  const textContent = {
    uk: {
      title: "Переміщені підприємства",
      intro:
        "Закарпаття активно підтримує підприємства, які були релоковані із зони бойових дій. Область створила всі умови для швидкого запуску виробництва та адаптації бізнесу. Багато релокованих компаній вже успішно працюють у різних сферах.",
      chartTitle: "Основні види діяльності переміщених підприємств",
      chartNote:
        "З початку повномасштабного вторгнення Росії на Закарпаття переїхало 286 підприємств з інших регіонів України. З них 80 одиниць – це підприємства переробної промисловості.",
      examplesTitle: "Приклади релокованих підприємств:",
      examples: [
        "Меблева фабрика з Харківської області, яка відновила виробництво в Мукачеві.",
        "Харчове підприємство з Дніпра, що переїхало до Хуста.",
        "Легка промисловість з Києва, яка відкрила швейний цех в Ужгороді.",
      ],
    },
    en: {
      title: "Relocated Enterprises",
      intro:
        "Zakarpattia actively supports enterprises relocated from war-affected areas. The region has established all necessary conditions for fast production launch and business adaptation. Many relocated companies are already successfully operating in various sectors.",
      chartTitle: "Main activities of relocated enterprises",
      chartNote:
        "Since the beginning of Russia's full-scale invasion, 286 business entities have relocated to Zakarpattia from other regions of Ukraine. 80 units of these are enterprises of the processing industry.",
      examplesTitle: "Examples of relocated companies:",
      examples: [
        "Furniture factory from Kharkiv region, restarted production in Mukachevo.",
        "Food enterprise from Dnipro, relocated to Khust.",
        "Light industry company from Kyiv, opened a sewing workshop in Uzhhorod.",
      ],
    },
  };

  const COLORS = [
    "#1e3d35",
    "#f6e84e",
    "#f59e0b",
    "#284b63",
    "#d62828",
    "#29339b",
    "#8d5a43",
    "#98c1d9",
    "#f28585",
    "#0278ae",
  ];

  const t = textContent[language];
  const chartData = chartDataMap[language] || chartDataMap.uk;

  return (
    <div className="min-h-screen flex flex-col p-4 bg-gray-50 pt-12 pb-32">
      <h1 className="text-3xl font-bold mb-6 text-center">{t.title}</h1>

      <p className="text-gray-700 mb-4 max-w-4xl mx-auto text-justify">
        {t.intro}
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-center">
        {t.chartTitle}
      </h2>

      <ResponsiveContainer width="100%" height={400} className="mb-8">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={120}
            label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            wrapperStyle={{ paddingTop: "20px", fontSize: "14px" }}
          />
        </PieChart>
      </ResponsiveContainer>

      <p className="text-center text-gray-600 text-base max-w-3xl mx-auto mb-12">
        {t.chartNote}
      </p>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mt-6 mb-2">{t.examplesTitle}</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {t.examples.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelocatedEnterprises;
