import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  Grape, 
  Sprout, 
  Beef, 
  Sun, 
  Droplets, 
  Leaf,
  ArrowRight
} from "lucide-react";

const AgricultureData = [
  {
    icon: <Grape className="w-8 h-8 text-purple-600" />,
    titleUk: "Виноградарство та Виноробство",
    titleEn: "Viticulture and Winemaking",
    descUk: "Тисячолітні традиції. Унікальний теруар Закарпаття народжує вина світового рівня.",
    descEn: "Millennial traditions. The unique terroir of Zakarpattia gives birth to world-class wines.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-emerald-600" />,
    titleUk: "Садівництво та Ягідництво",
    titleEn: "Horticulture and Berry Growing",
    descUk: "Екологічно чисті яблука, лохина та горіхи. Високий потенціал для експорту в ЄС.",
    descEn: "Ecologically clean apples, blueberries, and nuts. High potential for export to the EU.",
  },
  {
    icon: <Beef className="w-8 h-8 text-amber-700" />,
    titleUk: "Тваринництво",
    titleEn: "Animal Husbandry",
    descUk: "Вирощування ВРХ та вівчарство у гірських районах. Виробництво унікальних карпатських сирів.",
    descEn: "Cattle and sheep breeding in mountain areas. Production of unique Carpathian cheeses.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-500" />,
    titleUk: "Органічне виробництво",
    titleEn: "Organic Production",
    descUk: "Сертифіковані еко-ферми та виробництво спецій, включаючи найдорожчу спецію світу — шафран.",
    descEn: "Certified eco-farms and spice production, including the world's most expensive spice — saffron.",
  },
  {
    icon: <Droplets className="w-8 h-8 text-blue-400" />,
    titleUk: "Переробка агропродукції",
    titleEn: "Agro-processing",
    descUk: "Сучасні заводи з виробництва соків, джемів та заморозки фруктів та овочів.",
    descEn: "Modern plants for the production of juices, jams, and freezing of fruits and vegetables.",
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    titleUk: "Високотехнологічні теплиці",
    titleEn: "High-tech Greenhouses",
    descUk: "Використання термальних вод для цілорічного вирощування овочів та екзотичних рослин.",
    descEn: "Use of thermal waters for year-round cultivation of vegetables and exotic plants.",
  },
];

const Agriculture = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 rounded-full"
        >
          {language === "uk" ? "Дари землі" : "Gifts of the Earth"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display"
        >
          {language === "uk" ? "Сільське Господарство" : "Agriculture"}
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === "uk"
            ? "Унікальний клімат та родючі ґрунти роблять Закарпаття одним із найбільш перспективних регіонів для агроінвестицій у Європі."
            : "The unique climate and fertile soils make Zakarpattia one of the most promising regions for agro-investments in Europe."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {AgricultureData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                {language === "uk" ? item.titleUk : item.titleEn}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {language === "uk" ? item.descUk : item.descEn}
              </p>
              <div className="flex items-center text-emerald-700 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {language === "uk" ? "Каталог продуктів" : "Product Catalog"} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Agriculture;
