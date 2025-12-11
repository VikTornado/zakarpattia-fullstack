import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Tourism = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Туризм",
      intro:
        "Закарпаття має значний туристичний потенціал, який лише частково реалізовано. Тут є 298 туристичних об'єктів, зокрема 37 оздоровчих закладів, 137 туристичних і рекреаційних комплексів та 124 готелі.",
      highlights: [
        "Сільський туризм з національним колоритом, етнографічними особливостями та цілющими джерелами.",
        "Унікальна дерев’яна архітектура – старовинні дерев’яні церкви та пам’ятки.",
        "Народні промисли: ткацтво, вишивка, лозоплетіння, різьблення, гончарство.",
        "Живописні пейзажі Карпат, чисте повітря, природні екосистеми та рідкісні види флори і фауни.",
      ],
    },
    en: {
      title: "Tourism",
      intro:
        "Zakarpattia has significant tourist potential that has only been partially realized. The region has 298 tourist facilities, including 37 health resorts, 137 tourist and recreational complexes, and 124 hotels.",
      highlights: [
        "Rural tourism with national flavor, ethnographic features, and healing springs.",
        "Unique wooden architecture – ancient wooden churches and historical monuments.",
        "Folk crafts: weaving, embroidery, basket weaving, wood carving, pottery.",
        "Picturesque Carpathian landscapes, clean air, natural ecosystems, and rare species of flora and fauna.",
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

export default Tourism;
