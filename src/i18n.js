import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Використовуємо backend для завантаження перекладів
  .use(LanguageDetector) // Додатковий плагін для виявлення мови браузера
  .use(initReactI18next) // Підключаємо i18next до React
  .init({
    fallbackLng: "en", // Якщо не знайдеться переклад, використовуємо англійську
    debug: true, // Включаємо debug режим для моніторингу процесу
    interpolation: {
      escapeValue: false, // Вимикає екранування для React
    },
    react: {
      useSuspense: false, // Для уникнення зависання
    },
    backend: {
      // Шлях до ваших файлів перекладу на сервері
      loadPath: "/locales/{{lng}}/translation.json", // Вказуємо, де знаходяться JSON файли перекладів
    },
    // Можна також налаштувати мовні коди, якщо потрібні альтернативи
    supportedLngs: ["en", "uk"], // Перелічуємо доступні мови
  });

export default i18n;
