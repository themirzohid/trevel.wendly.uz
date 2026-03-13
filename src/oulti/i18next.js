import i18next from "i18next";
import  engtranletion from "../locals/eng/tranletion.json"
import uzbtransletion from "../locals/uzb/transletion.json"
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: "en",
  resources: {
    en: {
      translation: engtranletion
    },

    uz: {
        translation: uzbtransletion
    }
    
  },
  interpolation:{
    escapeValue: false,
  }
  
});