import React, { useState, useContext } from "react";
import videoBg from "../assets/background-video.mp4";
import { LanguageContext } from "../LanguageContext";

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full">
      {/* Full-screen Hero Section with Video */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Loading indicator */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
            <p className="text-white text-xl animate-pulse">
              {language === "uk" ? "Завантаження..." : "Loading..."}
            </p>
          </div>
        )}

        {/* Background video - full screen */}
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

        {/* Hero content overlay - centered with max-width */}
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {language === "uk"
                  ? "Закарпаття. Інвестиції та можливості"
                  : "Zakarpattia. Investments & Opportunities"}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mt-4 drop-shadow-lg max-w-3xl mx-auto">
                {language === "uk"
                  ? "Відкрийте нові горизонти для бізнесу в серці Європи"
                  : "Discover new business horizons in the heart of Europe"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content sections - max-width 1440px */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          {/* Additional content can go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Placeholder for future content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
