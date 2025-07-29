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

      // Detect language based on location and browser
      try {
        const detectedLang = await detectUserLanguage();
        setCurrentLang(detectedLang);
        // Don't save auto-detected language to localStorage
        // Only save when user explicitly chooses
      } catch (error) {
        console.error('Language detection failed:', error);
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