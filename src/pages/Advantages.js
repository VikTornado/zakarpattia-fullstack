import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  Globe, 
  ShieldCheck, 
  Users, 
  Truck, 
  Zap, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const AdvantagesData = [
  {
    icon: <Globe className="w-8 h-8 text-blue-500" />,
    titleUk: "Стратегічне розташування",
    titleEn: "Strategic Location",
    descUk: "Кордони з 4 країнами ЄС. Закарпаття — це ворота України до Європи та логістичний вузол міжнародного значення.",
    descEn: "Borders with 4 EU countries. Zakarpattia is Ukraine's gateway to Europe and a logistics hub of international importance.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
    titleUk: "Безпековий хаб",
    titleEn: "Safety Hub",
    descUk: "Один із найбезпечніших регіонів країни з високим рівнем стабільності для ведення бізнесу та життя.",
    descEn: "One of the safest regions in the country with a high level of stability for doing business and living.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    titleUk: "Людський капітал",
    titleEn: "Human Capital",
    descUk: "Кваліфіковані кадри з європейською етикою праці та високим рівнем володіння іноземними мовами.",
    descEn: "Qualified personnel with European work ethics and a high level of foreign language proficiency.",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    titleUk: "Розвинена логістика",
    titleEn: "Developed Logistics",
    descUk: "Комбінація широкої та вузької залізничних колій, близькість до основних європейських автобанів.",
    descEn: "A combination of wide and narrow railway tracks, proximity to major European highways.",
  },
  {
    icon: <Zap className="w-8 h-8 text-amber-500" />,
    titleUk: "Енергетичний потенціал",
    titleEn: "Energy Potential",
    descUk: "Величезні можливості для розвитку 'зеленої' енергетики: сонячної, вітрової та гідроенергетики.",
    descEn: "Huge opportunities for the development of 'green' energy: solar, wind, and hydropower.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-500" />,
    titleUk: "Інвестиційні стимули",
    titleEn: "Investment Incentives",
    descUk: "Діючі індустріальні парки, податкові пільги та повна підтримка з боку обласної адміністрації.",
    descEn: "Active industrial parks, tax benefits, and full support from the regional administration.",
  },
];

const Advantages = () => {
  const { language } = useContext(LanguageContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full ring-1 ring-blue-100"
        >
          {language === "uk" ? "Чому саме ми?" : "Why choose us?"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display leading-tight"
        >
          {language === "uk" 
            ? "Інвестиційні переваги регіону" 
            : "Investment Advantages of the Region"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          {language === "uk"
            ? "Закарпаття пропонує унікальне поєднання географічного положення, безпеки та економічних можливостей для вашого бізнесу."
            : "Zakarpattia offers a unique combination of geographical location, security, and economic opportunities for your business."}
        </motion.p>
      </div>

      {/* Grid Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {AdvantagesData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ring-1 ring-black/5 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-gray-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-md border border-gray-50 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                {language === "uk" ? item.titleUk : item.titleEn}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === "uk" ? item.descUk : item.descEn}
              </p>
              
              <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {language === "uk" ? "Дізнатися більше" : "Learn more"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-32 p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "uk" ? "Готові до співпраці?" : "Ready for collaboration?"}
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            {language === "uk"
              ? "Отримайте індивідуальну консультацію щодо можливостей розміщення вашого бізнесу на Закарпатті."
              : "Get a personalized consultation on the opportunities for locating your business in Zakarpattia."}
          </p>
          <button className="px-10 py-4 bg-white text-blue-700 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg shadow-black/10">
            {language === "uk" ? "Зв'язатися з нами" : "Contact Us"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Advantages;
