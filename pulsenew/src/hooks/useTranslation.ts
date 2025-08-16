import { useState, useEffect } from 'react';
import { Language, translations } from '@/utils/translations';

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  useEffect(() => {
    const initializeLanguage = () => {
      const storedLang = (typeof window !== 'undefined' && localStorage.getItem('language')) as Language | null;
      if (storedLang) {
        setCurrentLang(storedLang);
        setIsLanguageDetected(true);
        return;
      }

      try {
        const browserLang = (typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en') as Language;
        const supportedLangs: Language[] = ['en', 'nl'];
        const detectedLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
        setCurrentLang(detectedLang);
      } catch {
        setCurrentLang('en');
      } finally {
        setIsLanguageDetected(true);
      }
    };

    initializeLanguage();
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'language') {
        const lang = event.newValue as Language | null;
        if (lang) setCurrentLang(lang);
      }
    };

    const handleCustomEvent = (event: Event) => {
      const customEvent = event as CustomEvent<Language>;
      if (customEvent.detail) setCurrentLang(customEvent.detail);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languageChange' as any, handleCustomEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languageChange' as any, handleCustomEvent);
    };
  }, []);

  const changeLanguage = (lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[currentLang] || key;
  };

  return { t, currentLang, changeLanguage, isLanguageDetected };
};

