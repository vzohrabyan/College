import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsInEng from '../locales/en/translation.json';
import translationsInRussian from '../locales/ru/translation.json';
import translationsInArmenian from '../locales/am/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  ru: {
    translation: translationsInRussian
  },
  am: {
    translation: translationsInArmenian
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'am',
  debug: false, // Set to false to disable debug logs
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  ns: 'translation',
  defaultNS: 'translation'
});

export default i18n;
