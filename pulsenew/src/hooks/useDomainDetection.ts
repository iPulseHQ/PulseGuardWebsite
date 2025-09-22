"use client";
import { useState, useEffect } from 'react';

export const useDomainDetection = () => {
  const [isPulseGuardDomain, setIsPulseGuardDomain] = useState(false);
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDomain = () => {
      const hostname = window.location.hostname.toLowerCase();
      const isPulseGuard = hostname === 'pulseguard.pro' || hostname === 'www.pulseguard.pro';
      
      setIsPulseGuardDomain(isPulseGuard);

      if (isPulseGuard) {
        // Check if user has already seen the popup
        const hasSeenPopup = localStorage.getItem('pulseguard-redirect-popup-seen');
        if (!hasSeenPopup) {
          setShouldShowPopup(true);
        }
      }
    };

    checkDomain();
  }, []);

  const markPopupAsSeen = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('pulseguard-redirect-popup-seen', 'true');
      setShouldShowPopup(false);
    }
  };

  const redirectToNewSite = () => {
    markPopupAsSeen();
    window.location.href = 'https://ipulse.one';
  };

  return {
    isPulseGuardDomain,
    shouldShowPopup,
    markPopupAsSeen,
    redirectToNewSite
  };
};