import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Minerals = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Корисні копалини та довкілля",
      intro:
        "Закарпаття має значний природний потенціал та є унікальним екологічним регіоном. Тут розташовані чотири великі заповідні об'єкти, а також численні джерела термальних та мінеральних вод.",
      features: [
        "4 природоохоронні території: Карпатський біосферний заповідник, НПП Синевир, Ужанський НПП, НПП Чарівна долина.",
        "9 429 річок та 137 озер — чверть гідроенергетичного потенціалу України.",
        "Термальні джерела у Берегівському районі (50–52 °C, понад 1000 м³/день).",
        "Понад 360 родовищ мінеральних вод (30 типів, включаючи вуглекислі, сірководневі та миш’яковисті).",
        "Великі запаси корисних копалин: поліметалеві руди, лігніт, кам’яна сіль, карбонатні породи.",
        "13 родовищ мармуроподібного вапняку.",
      ],
    },
    en: {
      title: "Mineral Resources and Environment",
      intro:
        "Zakarpattia possesses significant natural potential and is a unique ecological region. It is home to four major protected areas and numerous thermal and mineral water springs.",
      features: [
        "4 major nature reserves: Carpathian Biosphere Reserve, Synevyr National Park, Uzhansky National Park, Enchanted Valley National Park.",
        "9,429 rivers and 137 lakes — a quarter of Ukraine’s hydroelectric potential.",
        "Thermal springs in the Berehove district (50–52 °C, over 1,000 m³/day).",
        "Over 360 deposits of mineral waters (30 types including carbonated, sulfide, and arsenic waters).",
        "Large deposits of mineral resources: polymetallic ores, lignite, rock salt, carbonate raw materials.",
        "13 deposits of marbled limestone.",
      ],
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-gray-700 mb-4">{t.intro}</p>

      <ul className="list-disc list-inside text-gray-800 space-y-2">
        {t.features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Minerals;
