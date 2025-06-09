import { useState, useEffect } from 'react';
import { Language, translations } from '../utils/translations';

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    // Check browser language or stored preference
    const storedLang = localStorage.getItem('language') as Language;
    if (storedLang === 'nl' || storedLang === 'en') {
      return storedLang;
    }
    return navigator.language.startsWith('nl') ? 'nl' : 'en';
  });

  // Listen for language changes in localStorage
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'language') {
        const lang = event.newValue as Language;
        if (lang && (lang === 'en' || lang === 'nl')) {
          setCurrentLang(lang);
        }
      }
    };
    
    // Also listen for custom event for when components change the language
    const handleCustomEvent = (event: CustomEvent) => {
      const lang = event.detail as Language;
      if (lang && (lang === 'en' || lang === 'nl')) {
        setCurrentLang(lang);
      }
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
    localStorage.setItem('language', lang);
    
    // Dispatch a custom event so other components can listen for language changes
    window.dispatchEvent(
      new CustomEvent('languageChange', { detail: lang })
    );
  };

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[currentLang] || key;
  };

  return { t, currentLang, changeLanguage };
}; 