import React, { useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../LanguageContext";
import { 
  GraduationCap, 
  BookOpen, 
  Cpu, 
  Globe2, 
  Lightbulb, 
  Trophy,
  ArrowRight
} from "lucide-react";

const EducationData = [
  {
    icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
    titleUk: "Ужгородський національний університет",
    titleEn: "Uzhhorod National University",
    descUk: "Провідний державний ВНЗ з широким спектром спеціальностей та тисячами іноземних студентів.",
    descEn: "A leading state university with a wide range of specialties and thousands of foreign students.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-500" />,
    titleUk: "ІТ та Технологічні хаби",
    titleEn: "IT and Tech Hubs",
    descUk: "Розвинена мережа ІТ-академій та курсів, що готують фахівців для найдинамічнішого сектору економіки.",
    descEn: "A developed network of IT academies and courses preparing specialists for the most dynamic sector of the economy.",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-purple-500" />,
    titleUk: "Європейські програми обміну",
    titleEn: "European Exchange Programs",
    descUk: "Тісна співпраця з університетами ЄС через програми Erasmus+ та грантові проекти.",
    descEn: "Close cooperation with EU universities through Erasmus+ programs and grant projects.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    titleUk: "Професійна освіта",
    titleEn: "Vocational Education",
    descUk: "Мережа коледжів, орієнтованих на практичні потреби бізнесу, включаючи інженерію та сервіс.",
    descEn: "A network of colleges oriented toward practical business needs, including engineering and service.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
    titleUk: "Дуальна освіта",
    titleEn: "Dual Education",
    descUk: "Модель навчання, що поєднує теоретичні заняття з оплачуваною практикою на реальних підприємствах.",
    descEn: "A learning model combining theoretical classes with paid practice at real enterprises.",
  },
  {
    icon: <Trophy className="w-8 h-8 text-red-500" />,
    titleUk: "Наукові досягнення",
    titleEn: "Scientific Achievements",
    descUk: "Високий рейтинг наукових публікацій та інноваційні дослідження в галузі фізики, медицини та права.",
    descEn: "High rating of scientific publications and innovative research in physics, medicine, and law.",
  },
];

const Education = () => {
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
          className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full"
        >
          {language === "uk" ? "Потенціал знань" : "Knowledge Potential"}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-display"
        >
          {language === "uk" ? "Освіта та Наука" : "Education and Science"}
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {language === "uk"
            ? "Ми готуємо покоління фахівців з європейськими цінностями та високим рівнем професійної компетенції."
            : "We prepare a generation of specialists with European values and a high level of professional competence."}
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {EducationData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group p-10 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
              {language === "uk" ? item.titleUk : item.titleEn}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {language === "uk" ? item.descUk : item.descEn}
            </p>
            <div className="flex items-center text-indigo-600 font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {language === "uk" ? "Більше" : "More"} <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
