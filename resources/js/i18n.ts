import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from './translations/en.json';
import zh from './translations/zh.json';
import ko from './translations/ko.json';
import es from './translations/es.json';
import tl from './translations/tl.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ko: { translation: ko },
  es: { translation: es },
  tl: { translation: tl },
};

// Get language from localStorage or default to 'en'
const getStoredLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('toptalks-language') || 'en';
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getStoredLanguage(),
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    // Detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Store language preference when changed
i18n.on('languageChanged', (lng: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('toptalks-language', lng);
    // Update html lang attribute for accessibility
    document.documentElement.lang = lng;
  }
});

export default i18n;