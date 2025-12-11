import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Advantages = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Переваги Закарпаття",
      points: [
        "Єдиний регіон України, який межує з чотирма країнами ЄС (Угорщина, Словаччина, Румунія, Польща).",
        "Найбезпечніший регіон України станом на 2023 рік за оцінкою міжнародних організацій.",
        "Високий рівень міжрегіонального та транскордонного співробітництва (Interreg, USAID, міжнародні проєкти).",
        "Розвинена логістична інфраструктура — автомобільні, залізничні шляхи, міжнародний аеропорт.",
        "Багатонаціональне середовище та високий рівень толерантності до іноземного бізнесу.",
        "Історична стабільність у залученні іноземних інвестицій.",
      ],
    },
    en: {
      title: "Advantages of Zakarpattia",
      points: [
        "The only region in Ukraine bordering four EU countries (Hungary, Slovakia, Romania, Poland).",
        "The safest region in Ukraine as of 2023, according to international assessments.",
        "High level of interregional and cross-border cooperation (Interreg, USAID, international projects).",
        "Well-developed logistics infrastructure — roads, railways, international airport.",
        "Multinational environment and strong tolerance for foreign business.",
        "Historical stability in attracting foreign investment.",
      ],
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        {t.points.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Advantages;
