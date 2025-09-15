import { useTranslation as useReactI18Next } from 'react-i18next';

export const useTranslation = () => {
  const { t, i18n } = useReactI18Next();
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  
  const currentLanguage = i18n.language;
  
  const availableLanguages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
  ];
  
  return {
    t,
    changeLanguage,
    currentLanguage,
    availableLanguages,
  };
};