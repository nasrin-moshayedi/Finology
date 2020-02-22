import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// require("./../public/locales/fa/translation");
import en from "./assets/i18n/translations/en.json";
import fa from "./assets/i18n/translations/fa.json";
// the translations
// (tip move them in a JSON file and import them)
console.log(en);
const resources = {
    en: {
        translation: en
    },
    fa: {
        translation: fa
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: `{{lng}}`,
        fallbackLng: 'fa',
        debug: true,
        // interpolation: {
        //         escapeValue: false // react already safes from xss
        // }
    });

export default i18n;
