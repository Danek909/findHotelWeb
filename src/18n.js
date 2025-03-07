import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: "en", // Мова за замовчуванням, якщо не вдається виявити
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false // Безпечний спосіб вставки в шаблони
    },
    backend: {
        loadPath: process.env.PUBLIC_URL + "/locales/{{lng}}/translation.json" // Шлях до перекладів
    }
});

export default i18n;