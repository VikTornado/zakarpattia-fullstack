import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const IT = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "ІТ-сектор Закарпаття",
      intro:
        "У регіоні активно розвивається ІТ-сфера: понад 100 компаній, більше 1500 фахівців, зростаюча інфраструктура, коворкінги, навчальні ІТ-центри та кластери.",
      highlights: [
        "З 2022 року в регіоні зареєстровано понад 20 нових ІТ-компаній.",
        "Робота коворкінгів та навчальних хабів в Ужгороді та Мукачеві.",
        "Присутність регіонального ІТ-кластера з підтримкою місцевої влади.",
        "Діяльність компаній у сфері аутсорсингу, розробки ПЗ, кібербезпеки, UI/UX та ін.",
      ],
    },
    en: {
      title: "IT Sector in Zakarpattia",
      intro:
        "The IT industry is growing in the region: over 100 companies, more than 1,500 specialists, expanding infrastructure, coworking spaces, training centers, and IT clusters.",
      highlights: [
        "Over 20 new IT companies registered in the region since 2022.",
        "Coworking spaces and training hubs operating in Uzhhorod and Mukachevo.",
        "Presence of a regional IT cluster with support from local authorities.",
        "Companies active in outsourcing, software development, cybersecurity, UI/UX, and more.",
      ],
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-gray-700 mb-4">{t.intro}</p>

      <ul className="list-disc list-inside text-gray-800 space-y-2">
        {t.highlights.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default IT;
