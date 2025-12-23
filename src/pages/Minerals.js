import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  Pickaxe, 
  Gem, 
  Waves, 
  Mountain, 
  Factory, 
  Map,
  ArrowRight
} from "lucide-react";

const MineralsData = [
  {
    icon: <Pickaxe className="w-8 h-8 text-amber-600" />,
    titleUk: "Кам'яна сіль (Солотвино)",
    titleEn: "Rock Salt (Solotvyno)",
    descUk: "Величезні запаси солі високої чистоти. Унікальні умови для розвитку бальнеології та промислового видобутку.",
    descEn: "Huge reserves of high-purity salt. Unique conditions for the development of balneology and industrial extraction.",
  },
  {
    icon: <Waves className="w-8 h-8 text-blue-500" />,
    titleUk: "Термальні води",
    titleEn: "Thermal Waters",
    descUk: "Понад 50 родовищ термальних та мінеральних вод. Світовий рівень рекреаційного потенціалу (Берегово, Косино).",
    descEn: "More than 50 deposits of thermal and mineral waters. World-class recreational potential (Berehove, Kosyno).",
  },
  {
    icon: <Gem className="w-8 h-8 text-yellow-500" />,
    titleUk: "Золоторудні запаси",
    titleEn: "Gold Ore Reserves",
    descUk: "Мужіївське родовище — одне з небагатьох в Україні, що має підтверджені запаси золота та поліметалів.",
    descEn: "Muzhiivske deposit is one of the few in Ukraine with confirmed reserves of gold and polymetals.",
  },
  {
    icon: <Mountain className="w-8 h-8 text-emerald-600" />,
    titleUk: "Каолін та Цеоліти",
    titleEn: "Kaolin and Zeolites",
    descUk: "Високоякісний білий каолін та унікальні цеоліти, що використовуються у космічній та очисній галузях.",
    descEn: "High-quality white kaolin and unique zeolites used in space and cleaning industries.",
  },
  {
    icon: <Factory className="w-8 h-8 text-gray-600" />,
    titleUk: "Будівельна сировина",
    titleEn: "Construction Raw Materials",
    descUk: "Мармур, граніт, туф та андезит. Масштабні запаси для розвитку сучасної будівельної індустрії.",
    descEn: "Marble, granite, tuff, and andesite. Scale reserves for the development of the modern construction industry.",
  },
  {
    icon: <Map className="w-8 h-8 text-red-500" />,
    titleUk: "Геологічний інтерес",
    titleEn: "Geological Interest",
    descUk: "Складна геологічна будова забезпечує постійне відкриття нових родовищ корисних копалин.",
    descEn: "Complex geological structure ensures constant discovery of new mineral deposits.",
  },
];

const Minerals = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full"
        >
          {language === "uk" ? "Надра регіону" : "Subsoil of the Region"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display"
        >
          {language === "uk" ? "Корисні копалини" : "Mineral Resources"}
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === "uk"
            ? "Закарпаття володіє унікальною мінерально-сировинною базою, що створює широкі можливості для промислових та туристичних інвестицій."
            : "Zakarpattia possesses a unique mineral and raw material base, creating extensive opportunities for industrial and tourism investments."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {MineralsData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-50 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {language === "uk" ? item.titleUk : item.titleEn}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {language === "uk" ? item.descUk : item.descEn}
            </p>
            <div className="flex items-center text-emerald-600 font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
              {language === "uk" ? "Деталі" : "Details"} <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Minerals;
