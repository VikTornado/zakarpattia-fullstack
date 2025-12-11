// EconomyCard.js

import React from "react";
import { motion } from "framer-motion";

function EconomyCard({
  title,
  description,
  details,
  imgSrc,
  variant = "light",
  hoverEffect = false,
}) {
  const bgColor = variant === "light" ? "bg-gray-100" : "bg-gray-200";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-xl shadow overflow-hidden ${bgColor}`}
    >
      {/* Фото або заглушка */}
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          "Фото буде додано"
        )}
      </div>

      <div
        className={`p-5 transition duration-300 ease-in-out ${
          hoverEffect ? "hover:bg-gray-300" : ""
        }`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 whitespace-pre-line">{description}</p>

        {/* Деталі */}
        {details && Array.isArray(details) && (
          <ul className="text-sm text-gray-700 space-y-1">
            {details.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export default EconomyCard;
