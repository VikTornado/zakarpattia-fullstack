import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import ContactForm from "../components/ContactForm";

function Contacts() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">
        {language === "uk" ? "Контакти" : "Contacts"}
      </h1>

      <div className="space-y-8 max-w-xl w-full text-center">
        <div>
          <h2 className="font-semibold text-lg">
            {language === "uk"
              ? "Закарпатська обласна державна адміністрація"
              : "Zakarpattia Regional State Administration"}
          </h2>
          <p>
            {language === "uk"
              ? "пл. Народна, 4, Ужгород"
              : "Sq. Narodna, 4, Uzhhorod"}
          </p>
          <p>admin@carpathia.gov.ua</p>
          <p>(0312) 69-61-00, 69-60-80, 69-60-78</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">
            {language === "uk"
              ? "Департамент регіонального та економічного розвитку"
              : "Department of Regional and Economic Development"}
          </h2>
          <p>economy@carpathia.gov.ua</p>
          <p>(0312) 61-53-05, 61-29-18</p>
        </div>

        <div>
          <ContactForm language={language} />
        </div>
      </div>
    </div>
  );
}

export default Contacts;
