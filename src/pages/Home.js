import React, { useState, useContext } from "react";
import videoBg from "../assets/background-video.mp4";
import { LanguageContext } from "../LanguageContext";

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full h-screen overflow-hidden text-black">
      {/* Завантажувач */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
          <p className="text-white text-xl animate-pulse">
            {language === "uk" ? "Завантаження..." : "Loading..."}
          </p>
        </div>
      )}

      {/* Фонове відео */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setIsVideoLoaded(true)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Контент поверх відео */}
      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold">
          {language === "uk"
            ? "Закарпаття. Інвестиції та можливості"
            : "Zakarpattia. Investments & Opportunities"}
        </h1>
        <p className="mt-4">
          {language === "uk"
            ? "Це головна сторінка нашого інвестиційного порталу."
            : "This is the homepage of our investment portal."}
        </p>
      </div>
    </div>
  );
}

export default Home;
