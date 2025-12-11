import React from "react";

function HoverCard({ title, description, details }) {
  return (
    <div className="group relative bg-white shadow-md rounded-lg overflow-hidden p-4 transition-all duration-300 hover:shadow-xl hover:bg-gray-100">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>

      <div
        className="absolute top-0 left-0 w-full h-full bg-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto z-10"
        style={{ maxHeight: "100%" }}
      >
        <h4 className="font-semibold mb-2 text-gray-800">
          Детальна інформація:
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {details.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HoverCard;
