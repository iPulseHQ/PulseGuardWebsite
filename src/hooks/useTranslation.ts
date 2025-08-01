import { useState, useEffect } from 'react';
import { Language, translations } from '../utils/translations';
import { detectUserLanguage } from '../utils/locationDetection';

export const useTranslation = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en'); // Start with default
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  // Initialize language detection
  useEffect(() => {
    const initializeLanguage = async () => {
      // Check stored preference first
      const storedLang = localStorage.getItem('language') as Language;
      if (storedLang) {
        setCurrentLang(storedLang);
        setIsLanguageDetected(true);
        return;
      }

      // Use browser language preference instead of location-based detection
      try {
        const browserLang = navigator.language.split('-')[0] as Language;
        const supportedLangs = ['en', 'nl']; // Add your supported languages
        const detectedLang = supportedLangs.includes(browserLang) ? browserLang : 'en';
        setCurrentLang(detectedLang);
      } catch (error) {
        setCurrentLang('en'); // Fallback
      } finally {
        setIsLanguageDetected(true);
      }
    };

    initializeLanguage();
  }, []);

  // Listen for language changes in localStorage
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'language') {
        const lang = event.newValue as Language;
        if (lang) {
          setCurrentLang(lang);
        }
      }
    };
    
    // Also listen for custom event for when components change the language
    const handleCustomEvent = (event: CustomEvent) => {
      const lang = event.detail as Language;
      if (lang) {
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

  return { t, currentLang, changeLanguage, isLanguageDetected };
}; 