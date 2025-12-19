import React, { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import videoBg from "../assets/background-video.mp4";
import { LanguageContext } from "../LanguageContext";
import Section from "../components/Section";

function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { language } = useContext(LanguageContext);
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    // Attempt to fetch dynamic content for home if it exists
    fetch("/api/pages/home/")
      .then(res => res.ok ? res.json() : null)
      .then(data => setHomeData(data))
      .catch(() => {});
  }, []);

  return (
    <div className="relative w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[95vh] md:h-screen overflow-hidden bg-black">
        {/* Loading fallback */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0f172a] z-20">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoBg} type="video/mp4" />
        </video>

        {/* Dynamic Overlay Gradient */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-[#0f172a]/80" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-200">
                {language === "uk" ? "Закарпаття" : "Zakarpattia"}
              </span>
              <br />
              <span className="text-white/95">
                {language === "uk" ? "Інвестиції та можливості" : "Investment & Growth"}
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-blue-50/90 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg"
            >
              {language === "uk"
                ? "Відкрийте стратегічний хаб у серці Європи для вашого бізнесу"
                : "Unlock a strategic hub in the heart of Europe for your business expansion"}
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">
              {language === "uk" ? "Гортайте вниз" : "Scroll Down"}
            </span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative z-30 bg-[#f8fafc] -mt-10 rounded-t-[40px] shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.3)] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatePresence>
            {homeData?.sections ? (
              <div className="space-y-16">
                {homeData.sections.map((section) => (
                  <Section key={section.id} section={section} language={language} />
                ))}
              </div>
            ) : (
              /* Fallback / Default blocks if no CMS home data */
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  {language === "uk" ? "Ласкаво просимо до нашого регіону" : "Welcome to our region"}
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default Home;
