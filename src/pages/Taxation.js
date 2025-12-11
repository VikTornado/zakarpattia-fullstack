import React from "react";

function Taxation({ language }) {
  return (
    <div className="p-8 pt-20 bg-gray-50 min-h-screen max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        {language === "uk" ? "Система оподаткування" : "Tax System"}
      </h1>

      <p className="mb-6 text-lg">
        {language === "uk"
          ? "Система оподаткування в Україні визначається Податковим кодексом. Вона складається з загальнодержавних та місцевих податків і зборів."
          : "The taxation system in Ukraine is defined by the Tax Code. It includes national and local taxes and fees."}
      </p>

      <ul className="list-disc pl-6 space-y-2 mb-8 text-lg">
        <li>
          22% –{" "}
          {language === "uk"
            ? "єдиний внесок на обов’язкове державне соціальне страхування"
            : "Single contribution to compulsory state social insurance"}{" "}
          (
          {language === "uk"
            ? "8.41% для осіб з інвалідністю"
            : "8.41% for people with disabilities"}
          )
        </li>
        <li>
          20% –{" "}
          {language === "uk" ? "ПДВ (0% для експорту)" : "VAT (0% for exports)"}
        </li>
        <li>
          18% –{" "}
          {language === "uk"
            ? "податок на прибуток підприємств"
            : "corporate income tax"}
        </li>
        <li>
          18% –{" "}
          {language === "uk"
            ? "податок на доходи фізичних осіб"
            : "personal income tax"}
        </li>
        <li>5% – {language === "uk" ? "військовий збір" : "military tax"}</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        {language === "uk"
          ? "Спрощена система оподаткування"
          : "Simplified Taxation System"}
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>
          <strong>Group 1:</strong>{" "}
          {language === "uk"
            ? "10% від прожиткового мінімуму – дохід до 1 336 000 грн"
            : "10% of subsistence minimum – income up to 1,336,000 UAH"}
        </li>
        <li>
          <strong>Group 2:</strong>{" "}
          {language === "uk"
            ? "20% від мінімальної зарплати – дохід до 6 672 000 грн"
            : "20% of minimum wage – income up to 6,672,000 UAH"}
        </li>
        <li>
          <strong>Group 3:</strong>{" "}
          {language === "uk"
            ? "3% (платник ПДВ) / 5% (не платник) – дохід до 9 336 000 грн"
            : "3% (if VAT payer) / 5% (if not) – income up to 9,336,000 UAH"}
        </li>
        <li>
          <strong>Group 4:</strong>{" "}
          {language === "uk"
            ? "лише для сільськогосподарських виробників – податок на базі вартості землі"
            : "for agricultural producers – tax based on land value"}
        </li>
      </ul>
    </div>
  );
}

export default Taxation;
