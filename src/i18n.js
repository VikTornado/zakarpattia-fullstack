import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Використовуємо backend для завантаження перекладів
  .use(LanguageDetector) // Додатковий плагін для виявлення мови браузера
  .use(initReactI18next) // Підключаємо i18next до React
  .init({
    fallbackLng: "uk", // Якщо не знайдеться переклад, використовуємо українську
    debug: false, // Вимкнено для production
    interpolation: {
      escapeValue: false, // Вимикає екранування для React
    },
    react: {
      useSuspense: false, // Для уникнення зависання
    },
    backend: {
      // Шлях до ваших файлів перекладу на сервері
      loadPath: "/locales/{{lng}}/translation.json", // Вказуємо, де знаходяться JSON файли перекладів
      // Не блокуємо додаток якщо файли не завантажуються
      crossDomain: false,
      withCredentials: false,
    },
    // Можна також налаштувати мовні коди, якщо потрібні альтернативи
    supportedLngs: ["en", "uk"], // Перелічуємо доступні мови
    // Не падати якщо переклади не завантажуються
    partialBundledLanguages: true,
    load: 'languageOnly',
  });

export default i18n;
