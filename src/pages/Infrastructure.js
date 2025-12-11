import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Infrastructure = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Інфраструктура",
      intro:
        "Закарпатська область має вигідне транзитне положення та розвинену транспортну мережу, що робить її стратегічним логістичним вузлом для міжнародних перевезень.",
      features: [
        "6 міжнародних автомобільних пунктів пропуску та 1 авіаційний (Ужгородський аеропорт).",
        "8 залізничних пунктів пропуску, зокрема до Словаччини, Угорщини та Румунії.",
        "5 міжнародних транспортних коридорів проходять через область.",
        "Наявна інфраструктура для вантажних і пасажирських перевезень.",
        "Індустріальні парки з підведеною інженерною інфраструктурою.",
      ],
    },
    en: {
      title: "Infrastructure",
      intro:
        "Zakarpattia region benefits from a favorable transit location and a well-developed transport network, making it a strategic logistics hub for international freight and passenger transportation.",
      features: [
        "6 international road border crossings and 1 airport (Uzhhorod Airport).",
        "8 railway crossings to Slovakia, Hungary, and Romania.",
        "5 international transport corridors pass through the region.",
        "Available infrastructure for freight and passenger transportation.",
        "Industrial parks with ready-to-use utility infrastructure.",
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

export default Infrastructure;
