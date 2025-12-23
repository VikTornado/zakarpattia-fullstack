import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  LayoutGrid, 
  Navigation, 
  Map, 
  Rocket, 
  Building2, 
  Handshake,
  ArrowRight
} from "lucide-react";

const OpportunitiesData = [
  {
    icon: <LayoutGrid className="w-8 h-8 text-blue-600" />,
    titleUk: "Індустріальні парки",
    titleEn: "Industrial Parks",
    descUk: "Готові майданчики з податковими канікулами та підведеною інфраструктурою для швидкого старту.",
    descEn: "Ready-made sites with tax holidays and utility infrastructure for a quick start.",
  },
  {
    icon: <Navigation className="w-8 h-8 text-emerald-600" />,
    titleUk: "Логістичні хаби",
    titleEn: "Logistics Hubs",
    descUk: "Будівництво сучасних складських терміналів на кордоні з ЄС. Висока рентабельність транзиту.",
    descEn: "Construction of modern warehouse terminals at the EU border. High transit profitability.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-purple-600" />,
    titleUk: "Релокація бізнесу",
    titleEn: "Business Relocation",
    descUk: "Повний супровід та допомога у перенесенні виробничих потужностей у безпечний регіон.",
    descEn: "Full support and assistance in relocating production facilities to a safe region.",
  },
  {
    icon: <Map className="w-8 h-8 text-orange-600" />,
    titleUk: "Туристичні кластери",
    titleEn: "Tourism Clusters",
    descUk: "Інвестиції у готельні комплекси світового класу та гірськолижні курорти європейського рівня.",
    descEn: "Investments in world-class hotel complexes and European-level ski resorts.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-amber-600" />,
    titleUk: "Енергетичні проекти",
    titleEn: "Energy Projects",
    descUk: "Розвиток вітропарків та малих ГЕС. Енергонезалежність та екологічна стабільність.",
    descEn: "Development of wind farms and small HPPs. Energy independence and environmental stability.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-red-600" />,
    titleUk: "Державне партнерство",
    titleEn: "State Partnership",
    descUk: "Прямий діалог з обласною владою та інституційна підтримка на кожному етапі інвестування.",
    descEn: "Direct dialogue with regional authorities and institutional support at every investment stage.",
  },
];

const Opportunities = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full"
        >
          {language === "uk" ? "Твоє майбутнє тут" : "Your Future Here"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display"
        >
          {language === "uk" ? "Інвестиційні Можливості" : "Investment Opportunities"}
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === "uk"
            ? "Ми ідентифікували найбільш перспективні ніші для вашого капіталу в самому серці Центральної Європи."
            : "We have identified the most promising niches for your capital in the very heart of Central Europe."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {OpportunitiesData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 border-l-4 border-l-blue-600"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {language === "uk" ? item.titleUk : item.titleEn}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {language === "uk" ? item.descUk : item.descEn}
            </p>
            <button className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-widest hover:text-blue-800 transition-colors">
              {language === "uk" ? "Консультація" : "Consultation"} <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Opportunities;
