import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const International = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Міжнародне співробітництво",
      intro:
        "Закарпатська область єдина в Україні межує одразу з чотирма країнами ЄС: Польщею, Словаччиною, Угорщиною та Румунією. Після здобуття незалежності Україною було укладено численні міжнародні угоди, які стали основою економічного, соціального та культурного розвитку регіону.",
      consulates: "Консульські установи в області:",
      consulateList: [
        "Генеральне консульство Угорщини в Ужгороді",
        "Генеральне консульство Словаччини в Ужгороді",
        "Консульство Румунії в Солотвино",
        "Консульство Угорщини в Берегові",
        "Представництво Австрії в Ужгороді",
      ],
      euPrograms: "Програми ЄС, в яких бере участь Закарпаття:",
      programList: [
        "Угорщина – Словаччина – Румунія – Україна",
        "Румунія – Україна",
        "Польща – Україна",
        "Програма Дунайського регіону (2021–2027)",
      ],
      usaid:
        "Область активно співпрацює з USAID у напрямках розвитку інфраструктури, ефективності місцевого врядування та кібербезпеки.",
    },
    en: {
      title: "International Cooperation",
      intro:
        "Zakarpattia is the only region in Ukraine that borders four EU countries: Poland, Slovakia, Hungary, and Romania. After Ukraine's independence, numerous international agreements were signed, forming the foundation for the region's economic, social, and cultural development.",
      consulates: "Consular offices in the region:",
      consulateList: [
        "Consulate General of Hungary in Uzhhorod",
        "Consulate General of Slovakia in Uzhhorod",
        "Consulate of Romania in Solotvyno",
        "Consulate of Hungary in Berehove",
        "Representation of Austria in Uzhhorod",
      ],
      euPrograms: "EU Programs involving Zakarpattia:",
      programList: [
        "Hungary – Slovakia – Romania – Ukraine",
        "Romania – Ukraine",
        "Poland – Ukraine",
        "Danube Region Program (2021–2027)",
      ],
      usaid:
        "The region actively cooperates with USAID on infrastructure development, effective local governance, and cybersecurity.",
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="mb-4 text-gray-700">{t.intro}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t.consulates}</h2>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        {t.consulateList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">{t.euPrograms}</h2>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        {t.programList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <p className="mt-4 text-gray-700 italic">{t.usaid}</p>
    </div>
  );
};

export default International;
