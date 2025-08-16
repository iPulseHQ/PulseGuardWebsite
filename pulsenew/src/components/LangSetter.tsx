"use client";
import { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

export default function LangSetter() {
  const { currentLang } = useTranslation();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', currentLang);
    }
  }, [currentLang]);

  return null;
}

