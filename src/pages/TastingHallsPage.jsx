import React from "react";
import tastingHalls from "../data/tastingHalls";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function TastingHallsPage() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          {language === "uk" ? "Дегустаційні зали" : "Tasting Halls"}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {language === "uk"
            ? "Ознайомтесь з локаціями дегустацій: ферми, сироварні, пивоварні, винні погреби та інші унікальні місця Закарпаття."
            : "Explore tasting locations: farms, cheese dairies, breweries, wine cellars and other unique places in Zakarpattia."}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {tastingHalls.map((item, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 min-w-[300px] max-w-full"
          >
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
              {language === "uk" ? item.nameUa : item.nameEn}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {language === "uk" ? item.locationUa : item.locationEn}
            </p>
            {item.contacts && (
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1 space-y-0.5">
                {item.contacts.map((contact, i) => (
                  <p key={i}>{contact}</p>
                ))}
              </div>
            )}
            {item.website && (
              <p className="text-blue-600 text-sm break-words">
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.website}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
