import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  Factory, 
  Car, 
  Hammer, 
  Dna, 
  Shirt, 
  Box,
  ArrowRight
} from "lucide-react";

const IndustryData = [
  {
    icon: <Car className="w-8 h-8 text-blue-600" />,
    titleUk: "Автомобілебудування",
    titleEn: "Automotive Industry",
    descUk: "Завод 'Єврокар' (Skoda) — флагман галузі. Розвинена мережа постачальників автокомпонентів для світових брендів.",
    descEn: "Eurocar plant (Skoda) is the industry flagship. A developed network of auto component suppliers for world brands.",
  },
  {
    icon: <Hammer className="w-8 h-8 text-orange-600" />,
    titleUk: "Деревообробка",
    titleEn: "Woodworking",
    descUk: "Меблева промисловість та виробництво паркету. Закарпаття забезпечує повний цикл переробки деревини.",
    descEn: "Furniture industry and parquet production. Zakarpattia provides a full cycle of wood processing.",
  },
  {
    icon: <Shirt className="w-8 h-8 text-pink-500" />,
    titleUk: "Легка промисловість",
    titleEn: "Light Industry",
    descUk: "Текстильні та швейні фабрики, що співпрацюють з відомими європейськими брендами моди.",
    descEn: "Textile and garment factories cooperating with famous European fashion brands.",
  },
  {
    icon: <Box className="w-8 h-8 text-gray-500" />,
    titleUk: "Машинобудування",
    titleEn: "Machinery",
    descUk: "Високоточне приладобудування та виробництво обладнання для енергетики та транспорту.",
    descEn: "High-precision instrument making and production of equipment for energy and transport.",
  },
  {
    icon: <Dna className="w-8 h-8 text-emerald-500" />,
    titleUk: "Харчова промисловість",
    titleEn: "Food Industry",
    descUk: "Переробка екологічно чистої сировини, виробництво соків, консервації та дитячого харчування.",
    descEn: "Processing of ecologically clean raw materials, production of juices, canned goods, and baby food.",
  },
  {
    icon: <Factory className="w-8 h-8 text-indigo-600" />,
    titleUk: "Індустріальні парки",
    titleEn: "Industrial Parks",
    descUk: "Готові майданчики з підведеними комунікаціями та податковими пільгами для нових виробництв.",
    descEn: "Ready-made sites with utility connections and tax incentives for new production facilities.",
  },
];

const Industry = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50/50 rounded-full border border-blue-100/50 backdrop-blur-sm"
        >
          {language === "uk" ? "Потужність регіону" : "Region Power"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-gray-900 mb-8 font-display tracking-tight"
        >
          {language === "uk" ? "Промисловість" : "Industry"}
        </motion.h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
          {language === "uk"
            ? "Від традиційного ремесла до високотехнологічного машинобудування — ми створюємо майбутнє сьогодні."
            : "From traditional crafts to high-tech machinery — we are creating the future today."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {IndustryData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-10 rounded-[2.5rem] bg-white border border-gray-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50/50 rounded-bl-[5rem] -mr-8 -mt-8 group-hover:bg-blue-50/50 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-xl border border-gray-50 mb-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 font-display">
                {language === "uk" ? item.titleUk : item.titleEn}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                {language === "uk" ? item.descUk : item.descEn}
              </p>
              
              <div className="flex items-center text-blue-600 font-extrabold text-sm uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                {language === "uk" ? "Аналіз сектору" : "Sector Analysis"} <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Industry;
