import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Agriculture = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Сільське господарство",
      intro:
        "Закарпаття має унікальний агрокліматичний потенціал завдяки поєднанню гірських і рівнинних територій, м’якому клімату та родючим ґрунтам. У структурі сільського господарства переважають дрібні фермерські господарства.",
      highlights: [
        "Вирощування винограду, садівництво, овочівництво, бджільництво.",
        "Понад 2 000 зареєстрованих фермерських господарств.",
        "Активне виробництво органічної продукції.",
        "Розвиток агротуризму та локальних брендів продукції.",
      ],
    },
    en: {
      title: "Agriculture",
      intro:
        "Zakarpattia has a unique agro-climatic potential due to its combination of mountainous and lowland areas, mild climate, and fertile soils. The sector is dominated by small-scale farming.",
      highlights: [
        "Viticulture, horticulture, vegetable growing, beekeeping.",
        "More than 2,000 registered farms.",
        "Active production of organic products.",
        "Development of agrotourism and local product brands.",
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

export default Agriculture;
