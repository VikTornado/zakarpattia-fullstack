// src/components/ParkModal.js
import React from "react";

function ParkModal({ park, language, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center overflow-auto p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{park.title[language]}</h2>
        <p className="mb-4 whitespace-pre-line">{park.description[language]}</p>
        <ul className="space-y-1 text-sm text-gray-700">
          {park.details[language].map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ParkModal;
