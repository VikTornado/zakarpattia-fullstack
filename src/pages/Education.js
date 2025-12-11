import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

const Education = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    uk: {
      title: "Освіта",
      intro:
        "У Закарпатській області функціонує 30 закладів вищої та професійної освіти, включаючи 16 коледжів, технікумів і центрів профтехосвіти, а також 14 університетів, академій та інститутів.",
      universitiesTitle: "Основні університети області:",
      universityList: [
        "Ужгородський національний університет",
        "Мукачівський державний університет",
        "Закарпатська академія мистецтв",
      ],
    },
    en: {
      title: "Education",
      intro:
        "There are 30 higher and vocational education institutions operating in Zakarpattia, including 16 colleges, technical schools, and vocational training centers, and 14 universities, academies, and institutes.",
      universitiesTitle: "Main universities in the region:",
      universityList: [
        "Uzhhorod National University",
        "Mukachevo State University",
        "Zakarpattia Academy of Arts",
      ],
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p className="text-gray-700 mb-4">{t.intro}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        {t.universitiesTitle}
      </h2>
      <ul className="list-disc list-inside text-gray-800">
        {t.universityList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
