import React, { useContext } from "react";
import presentationVideo from "../assets/video/presentation.mp4";
import { LanguageContext } from "../LanguageContext";

const Presentation = () => {
  const { language } = useContext(LanguageContext);

  const title =
    language === "uk" ? "Презентація Закарпаття" : "Zakarpattya Presentation";
  const description =
    language === "uk"
      ? "Перегляньте відеопрезентацію про потенціал регіону."
      : "Watch the video presentation about the region’s potential.";

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
      <p className="text-center mb-6 text-gray-700">{description}</p>
      <div className="aspect-w-16 aspect-h-9">
        <video
          autoPlay
          muted
          loop
          controls
          className="w-full h-auto rounded-lg shadow-lg"
        >
          <source src={presentationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Presentation;
