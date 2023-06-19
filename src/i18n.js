import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/{{ns}}/translation.json",
    },
    fallBackLng: "en",
    debug: false,
    ns: ["locales"],
    interpolation: {
      spaceValue: false,
      fomatSeparator: ",",
    },
    react: {
      wait: true,
    },
  });
