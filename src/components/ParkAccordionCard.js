import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ParkAccordionCard({ park, language, isOpen, onToggle }) {
  return (
    <div className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col h-[250px] sm:h-[270px] md:h-[300px]">
      {/* Заголовок */}
      <div
        onClick={onToggle}
        className="p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-start h-[100px]"
      >
        <h3 className="text-lg font-bold w-4/5 line-clamp-2">
          {park.title[language]}
        </h3>
        <span className="text-gray-600 mt-1">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Зображення */}
      {park.imgSrc && (
        <div className="w-full h-full overflow-hidden">
          <img
            src={park.imgSrc}
            alt="Park"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Деталі */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 text-sm text-gray-800 bg-gray-50 max-h-64 overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mb-2 whitespace-pre-line">
              {park.description[language]}
            </p>
            <ul className="space-y-1">
              {park.details[language]?.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ParkAccordionCard;
