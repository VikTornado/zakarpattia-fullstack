import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  BarChart3, 
  PieChart, 
  Coins, 
  Handshake, 
  Globe, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const EconomyData = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    titleUk: "Експортна орієнтація",
    titleEn: "Export Orientation",
    descUk: "Понад 90% експорту регіону спрямовано на ринки Європейського Союзу. Стабільні торговельні зв'язки.",
    descEn: "More than 90% of the region's exports are directed to European Union markets. Stable trade relations.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
    titleUk: "Структура ВРП",
    titleEn: "GRP Structure",
    descUk: "Збалансована економіка з високою часткою промисловості, сільського господарства та сфери послуг.",
    descEn: "Balanced economy with a high share of industry, agriculture, and services.",
  },
  {
    icon: <Coins className="w-8 h-8 text-amber-600" />,
    titleUk: "Прямі інвестиції",
    titleEn: "Foreign Direct Investment",
    descUk: "Закарпаття входить до лідерів України за обсягом залучених іноземних інвестицій на душу населення.",
    descEn: "Zakarpattia is among the leaders in Ukraine by the volume of foreign investment per capita.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
    titleUk: "Динаміка зростання",
    titleEn: "Growth Dynamics",
    descUk: "Позитивна динаміка розвитку навіть у складні часи завдяки безпеці та географічним перевагам.",
    descEn: "Positive development dynamics even in difficult times thanks to security and geographical advantages.",
  },
  {
    icon: <PieChart className="w-8 h-8 text-purple-600" />,
    titleUk: "Митні преференції",
    titleEn: "Customs Preferences",
    descUk: "Ефективна робота митних терміналів та спрощені процедури для експортерів та імпортерів.",
    descEn: "Efficient operation of customs terminals and simplified procedures for exporters and importers.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-red-600" />,
    titleUk: "Стимули для бізнесу",
    titleEn: "Business Incentives",
    descUk: "Місцеві програми підтримки малого та середнього бізнесу, державне страхування інвестиційних ризиків.",
    descEn: "Local support programs for small and medium businesses, state insurance of investment risks.",
  },
];

const Economy = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full"
        >
          {language === "uk" ? "Економічний огляд" : "Economic Overview"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display"
        >
          {language === "uk" ? "Економіка та Аналітика" : "Economy and Analytics"}
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === "uk"
            ? "Об'єктивні показники, що підтверджують інвестиційну привабливість та стабільність нашого регіону."
            : "Objective indicators confirming the investment attractiveness and stability of our region."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {EconomyData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/30 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                {language === "uk" ? item.titleUk : item.titleEn}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "uk" ? item.descUk : item.descEn}
              </p>
              <div className="flex items-center text-indigo-700 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {language === "uk" ? "Звітність" : "Reporting"} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Economy;
