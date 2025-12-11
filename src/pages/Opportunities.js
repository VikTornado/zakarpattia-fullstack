import React from "react";
import { FaGoogleDrive } from "react-icons/fa";
import qrCode from "../assets/investment_qr.png";
function Opportunities({ language }) {

  const sectors = [
    "high-tech products",
    "alternative energy",
    "IT sector",
    "timber-processing",
    "building materials",
    "waste recycling",
    "mining",
    "agriculture & food",
    "tourism & recreation",
    "winter sports",
  ];

  const sectorList =
    language === "uk"
      ? [
          "Виробництво високотехнологічної продукції",
          "Альтернативна енергетика",
          "Розвиток ІТ-сектору",
          "Деревообробна промисловість",
          "Виробництво будівельних матеріалів",
          "Переробка відходів",
          "Гірничовидобувна промисловість",
          "Сільське господарство та харчова промисловість",
          "Туризм та рекреація",
          "Розвиток зимових видів спорту",
        ]
      : sectors.map((s) => s.charAt(0).toUpperCase() + s.slice(1));

  return (
    <div className="p-8 bg-gray-50 min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "uk"
          ? "Пріоритетні сектори для інвестицій"
          : "Priority Sectors for Investments"}
      </h1>

      <ul className="max-w-xl mx-auto mb-12 space-y-3 animate-fadeIn">
        {sectorList.map((item, i) => (
          <li
            key={i}
            className="text-lg bg-white shadow p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div
        className="flex flex-col items-center justify-center gap-4 animate-fadeIn"
        style={{ animationDelay: "1s" }}
      >
        <img
          src={qrCode}
          alt="QR code"
          className="w-48 h-48 border-2 border-gray-300 rounded-lg shadow-md"
        />
        <a
          href="https://drive.google.com/drive/u/1/folders/1kJP4wZww9AHyKLne09Zn6H6XLezxLpQB"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline text-lg"
        >
          <FaGoogleDrive className="text-2xl" />
          {language === "uk"
            ? "Інвестиційні можливості громад"
            : "Investment opportunities in communities"}
        </a>
      </div>
    </div>
  );
}

export default Opportunities;
