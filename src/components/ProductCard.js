import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";

export default function ProductCard({
  nameUa,
  nameEn,
  location,
  products,
  descriptionUa,
  descriptionEn,
  contacts,
  website,
}) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold mb-1">
        {language === "uk" ? nameUa : nameEn}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
        {location}
      </p>
      <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 font-medium">
        {products}
      </p>
      <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {language === "uk" ? descriptionUa : descriptionEn}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        {contacts.map((contact, i) => (
          <p key={i}>{contact}</p>
        ))}
      </div>
      {website && (
        <a
          href={website}
          className="text-blue-600 dark:text-blue-400 text-sm underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {website}
        </a>
      )}
    </div>
  );
}
