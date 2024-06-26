import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactIi18next } from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactIi18next).init({
    fallbackLng: "En",
    debug: true,
    detection: {
        order: ['queryString', 'cookies'],
        cache: ['cookies']
    },
    interpolation: {
        escapeValue: false
    }
})
export default i18n;