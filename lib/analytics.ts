'use client';

import { track } from '@vercel/analytics';

/**
 * Track custom events for Vercel Analytics
 */
export const trackEvent = (name: string, properties?: Record<string, any>) => {
  track(name, properties);
};

/**
 * Predefined event names for consistency
 */
export const AnalyticsEvents = {
  // Navigation
  NAVIGATION_CLICK: 'navigation_click',
  NAVIGATION_MOBILE_MENU_TOGGLE: 'navigation_mobile_menu_toggle',
  
  // Buttons & CTAs
  BUTTON_CLICK: 'button_click',
  CTA_CLICK: 'cta_click',
  LOGIN_CLICK: 'login_click',
  REGISTER_CLICK: 'register_click',
  SIGNUP_CLICK: 'signup_click',
  
  // Forms
  FORM_SUBMIT: 'form_submit',
  FORM_SUBMIT_SUCCESS: 'form_submit_success',
  FORM_SUBMIT_ERROR: 'form_submit_error',
  
  // Theme & Language
  THEME_TOGGLE: 'theme_toggle',
  LANGUAGE_TOGGLE: 'language_toggle',
  
  // Product Pages
  PRODUCT_VIEW: 'product_view',
  PRODUCT_LINK_CLICK: 'product_link_click',
  
  // External Links
  EXTERNAL_LINK_CLICK: 'external_link_click',
  
  // Footer
  FOOTER_LINK_CLICK: 'footer_link_click',
  
  // Solutions Dropdown
  SOLUTIONS_DROPDOWN_OPEN: 'solutions_dropdown_open',
  SOLUTION_CLICK: 'solution_click',
} as const;

/**
 * Helper functions for common events
 */
export const analytics = {
  // Navigation
  trackNavigation: (href: string, label: string) => {
    trackEvent(AnalyticsEvents.NAVIGATION_CLICK, { href, label });
  },
  
  // Buttons
  trackButtonClick: (buttonName: string, location?: string) => {
    trackEvent(AnalyticsEvents.BUTTON_CLICK, { buttonName, location });
  },
  
  trackCTAClick: (ctaName: string, location?: string) => {
    trackEvent(AnalyticsEvents.CTA_CLICK, { ctaName, location });
  },
  
  trackLogin: (location?: string) => {
    trackEvent(AnalyticsEvents.LOGIN_CLICK, { location });
  },
  
  trackRegister: (location?: string) => {
    trackEvent(AnalyticsEvents.REGISTER_CLICK, { location });
  },
  
  // Forms
  trackFormSubmit: (formName: string, success: boolean, error?: string) => {
    trackEvent(
      success ? AnalyticsEvents.FORM_SUBMIT_SUCCESS : AnalyticsEvents.FORM_SUBMIT_ERROR,
      { formName, error }
    );
  },
  
  // Theme & Language
  trackThemeToggle: (theme: 'light' | 'dark') => {
    trackEvent(AnalyticsEvents.THEME_TOGGLE, { theme });
  },
  
  trackLanguageToggle: (language: 'en' | 'nl') => {
    trackEvent(AnalyticsEvents.LANGUAGE_TOGGLE, { language });
  },
  
  // Products
  trackProductView: (productName: string) => {
    trackEvent(AnalyticsEvents.PRODUCT_VIEW, { productName });
  },
  
  trackProductLinkClick: (productName: string, location?: string) => {
    trackEvent(AnalyticsEvents.PRODUCT_LINK_CLICK, { productName, location });
  },
  
  // External Links
  trackExternalLink: (url: string, label?: string) => {
    trackEvent(AnalyticsEvents.EXTERNAL_LINK_CLICK, { url, label });
  },
  
  // Footer
  trackFooterLink: (href: string, label: string) => {
    trackEvent(AnalyticsEvents.FOOTER_LINK_CLICK, { href, label });
  },
  
  // Solutions
  trackSolutionClick: (solutionName: string) => {
    trackEvent(AnalyticsEvents.SOLUTION_CLICK, { solutionName });
  },
};
