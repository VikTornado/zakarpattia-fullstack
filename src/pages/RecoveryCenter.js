// import React, { useContext, useEffect } from "react";
// import { LanguageContext } from "../LanguageContext"; // Імпортуємо ваш контекст
// import { useTranslation } from "react-i18next"; // Імпортуємо i18next

// const RecoveryCenter = () => {
//   const { language } = useContext(LanguageContext); // Отримуємо мову з контексту
//   const { t, i18n } = useTranslation(); // Використовуємо i18next для перекладу

//   // Слухаємо зміни мови в LanguageContext і оновлюємо i18next
//   useEffect(() => {
//     if (language) {
//       i18n.changeLanguage(language); // Змінюємо мову через i18next
//     }
//   }, [language, i18n]);

//   return (
//     <div className="pt-20 w-full text-white bg-black">
//       {/* Section: 4.5.0 Meaning */}
//       <section className="w-full min-h-screen flex flex-col justify-center px-6 py-20 bg-black text-green-200">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
//           <div>
//             <h1 className="text-6xl font-bold text-green-300 mb-6">
//               4.5.0
//               <span className="block text-3xl font-light mt-2">
//                 {t("recoveryCenter.title")}
//               </span>
//             </h1>
//             <p className="text-white font-semibold mb-4">
//               {t("recoveryCenter.meaningLine1")}
//             </p>
//             <p className="text-white">{t("recoveryCenter.meaningLine2")}</p>
//           </div>

//           <div className="space-y-8">
//             <div>
//               <h3 className="text-lg font-bold text-white">
//                 {t("recoveryCenter.number5Title")}
//               </h3>
//               <p className="text-gray-300">{t("recoveryCenter.number5Text")}</p>
//             </div>

//             <div>
//               <h3 className="text-lg font-bold text-white">
//                 {t("recoveryCenter.number0Title")}
//               </h3>
//               <p className="text-gray-300">{t("recoveryCenter.number0Text")}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section: Project Idea */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-[#0a0a0a]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-5xl font-bold text-green-300 mb-6">
//               {t("recoveryCenter.projectIdea")}
//             </h2>
//             <p className="text-gray-400">
//               {t("recoveryCenter.projectIdeaText")}
//             </p>
//           </div>

//           <div className="space-y-4">
//             {Array.from({ length: 5 }, (_, i) => (
//               <div
//                 key={i}
//                 className={`${
//                   i === 0 ? "bg-white text-black" : "border border-white"
//                 } px-4 py-3 rounded shadow font-medium`}
//               >
//                 {t(`recoveryCenter.bullet${i + 1}`)}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section: Multidisciplinary Assistance */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-green-100 text-black">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h2 className="text-3xl font-extrabold mb-6">
//               {t("recoveryCenter.assistanceTitle")}
//             </h2>
//           </div>
//           <ul className="space-y-3 text-lg font-medium">
//             {Array.from({ length: 6 }, (_, i) => (
//               <li key={i}>{t(`recoveryCenter.assistance${i + 1}`)}</li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Section: Our Goal */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold mb-6">
//               {t("recoveryCenter.goalTitle")}
//             </h2>
//             <p className="text-green-400 font-semibold mb-4">
//               {t("recoveryCenter.goalText1")}
//             </p>
//             <p className="text-gray-300">{t("recoveryCenter.goalText2")}</p>
//           </div>

//           <div className="flex justify-center">
//             <div className="bg-white rounded-lg shadow p-6 text-black text-center">
//               <p className="uppercase tracking-wide font-bold">
//                 {t("recoveryCenter.goalCard")}
//               </p>
//               <div className="text-sm text-gray-500 mt-4">
//                 {t("recoveryCenter.title")} {/* 4.5.0 recovery center */}
//               </div>
//               <div className="flex justify-center gap-4 mt-2 text-2xl">
//                 ❤️ 👥
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section: Infrastructure Overview */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-green-100 text-black">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h2 className="text-5xl font-bold mb-8">
//               4.5.0
//               <br />
//               {t("recoveryCenter.title")}
//             </h2>
//           </div>
//           <ul className="space-y-4 text-lg font-medium">
//             {Array.from({ length: 6 }, (_, i) => (
//               <li key={i}>{t(`recoveryCenter.infra${i + 1}`)}</li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       {/* Section: Status */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto text-center space-y-12">
//           <div>
//             <p className="text-green-400 text-lg mb-2">
//               {t("recoveryCenter.statusLabel")}
//             </p>
//             <h2 className="text-3xl font-bold">
//               {t("recoveryCenter.statusTitle")}
//             </h2>
//           </div>
//           <div>
//             <p className="text-green-400 text-lg mb-2">
//               {t("recoveryCenter.launchLabel")}
//             </p>
//             <h2 className="text-5xl font-extrabold">
//               {t("recoveryCenter.launchTitle")}{" "}
//               <span className="text-green-300">2025</span>
//             </h2>
//           </div>
//         </div>
//       </section>

//       {/* Section: Ministry of Health */}
//       <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 bg-[#d5e3dc] text-black">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               {t("recoveryCenter.mohTitle")}
//             </h2>
//             <p className="text-lg">{t("recoveryCenter.mohText")}</p>
//           </div>

//           <div className="flex justify-center">
//             <img
//               src="/img/moh-logo.png"
//               alt="Ministry of Health of Ukraine"
//               className="max-h-40 object-contain"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Section: Target Group */}
//       <section className="w-full bg-black text-white px-6 py-20">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="text-left">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               {t("recoveryCenter.forWhomTitle")}
//             </h2>
//           </div>

//           <div className="flex flex-col gap-4">
//             {Array.from({ length: 3 }, (_, i) => (
//               <div
//                 key={i}
//                 className="bg-green-200 text-black rounded-full px-6 py-3 font-semibold text-lg w-full shadow-md"
//               >
//                 {t(`recoveryCenter.forWhom${i + 1}`)}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RecoveryCenter;
