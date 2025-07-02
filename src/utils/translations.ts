// Type for supported languages
export type Language = 'en' | 'nl';

// Interface for translations
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Translations for UI elements
export const translations: Translations = {
  // Header and navigation
  navigation: {
    en: 'Home',
    nl: 'Home'
  },
  features: {
    en: 'Features',
    nl: 'Functies'
  },
  app: {
    en: 'App',
    nl: 'App'
  },
  pricing: {
    en: 'Pricing',
    nl: 'Prijzen'
  },
  team: {
    en: 'Team',
    nl: 'Team'
  },
  status: {
    en: 'Status',
    nl: 'Status'
  },
  blog: {
    en: 'Blog',
    nl: 'Blog'
  },
  joinBeta: {
    en: 'Join Beta',
    nl: 'Beta Testen'
  },
  register: {
    en: 'Register',
    nl: 'Registreren'
  },
  dashboard: {
    en: 'App',
    nl: 'App'
  },
  preview: {
    en: 'App',
    nl: 'App'
  },
  language: {
    en: 'Language:',
    nl: 'Taal:'
  },
  english: {
    en: 'English',
    nl: 'Engels'
  },
  dutch: {
    en: 'Dutch',
    nl: 'Nederlands'
  },
  joinBetaProgram: {
    en: 'Join Beta Program',
    nl: 'Doe Mee met Beta'
  },
  goToDashboard: {
    en: 'Go to Dashboard',
    nl: 'Ga naar Dashboard'
  },
  
  // Features component
  featuresTitle: {
    en: 'Everything you need to keep tabs on your digital world',
    nl: 'Alles wat je nodig hebt om je digitale wereld in de gaten te houden'
  },
  featuresSubtitle: {
    en: 'We\'ve built PulseGuard to be simple yet powerful. Our features are designed for real people with real monitoring needs - from solo developers to large teams.',
    nl: 'We hebben PulseGuard ontwikkeld om eenvoudig maar krachtig te zijn. Onze functies zijn ontworpen voor echte mensen met echte monitoringbehoeften - van individuele ontwikkelaars tot grote teams.'
  },
  whatWeOffer: {
    en: 'What we offer',
    nl: 'Wat we bieden'
  },
  
  // Website Monitoring
  webMonitoringTitle: {
    en: 'Website Monitoring',
    nl: 'Website Monitoring'
  },
  webMonitoringDesc: {
    en: 'We\'ll ping your websites regularly and let you know right away if they go down. No more finding out from an angry customer email.',
    nl: 'We controleren je websites regelmatig en laten je meteen weten als ze offline zijn. Geen boze klant-emails meer.'
  },
  httpMonitoring: {
    en: 'HTTP/HTTPS status monitoring',
    nl: 'HTTP/HTTPS status monitoring'
  },
  responseTime: {
    en: 'Response time tracking',
    nl: 'Responstijd bijhouden'
  },
  checkIntervals: {
    en: 'Custom check intervals',
    nl: 'Aangepaste controle-intervallen'
  },
  
  // SSL Monitoring
  sslMonitoringTitle: {
    en: 'SSL Certificate Monitoring',
    nl: 'SSL Certificaat Monitoring'
  },
  sslMonitoringDesc: {
    en: 'Never miss an SSL certificate expiration again. We\'ll remind you with plenty of time to renew before your visitors see those scary browser warnings.',
    nl: 'Mis nooit meer een verlopen SSL-certificaat. We herinneren je ruim op tijd zodat je bezoekers geen enge browserwaarschuwingen zien.'
  },
  certExpiration: {
    en: 'Certificate expiration alerts',
    nl: 'Certificaat verloopmeldingen'
  },
  dayWarnings: {
    en: '30, 14, and 7-day warnings',
    nl: '30, 14, en 7-daagse waarschuwingen'
  },
  certDetails: {
    en: 'Certificate details overview',
    nl: 'Certificaatdetails overzicht'
  },
  
  // Pricing component
  pricingTitle: {
    en: 'Transparent pricing',
    nl: 'Transparante prijzen'
  },
  pricingSubtitle: {
    en: 'Choose the package that suits your monitoring needs.',
    nl: 'Kies het pakket dat bij jouw monitoringbehoeften past.'
  },
  cardView: {
    en: 'Card View',
    nl: 'Kaartweergave'
  },
  comparisonTable: {
    en: 'Comparison Table',
    nl: 'Vergelijkingstabel'
  },
  freePlan: {
    en: 'Free',
    nl: 'Gratis'
  },
  standardPlan: {
    en: 'Standard',
    nl: 'Standaard'
  },
  proPlan: {
    en: 'Pro',
    nl: 'Pro'
  },
  enterprisePlan: {
    en: 'Enterprise',
    nl: 'Zakelijk'
  },
  perMonth: {
    en: '/month',
    nl: '/maand'
  },
  forPersonalUse: {
    en: 'For personal use',
    nl: 'Voor persoonlijk gebruik'
  },
  forSmallWebsites: {
    en: 'For small websites',
    nl: 'Voor kleine websites'
  },
  forProfessionals: {
    en: 'For professionals',
    nl: 'Voor professionals'
  },
  forLargeOrg: {
    en: 'For large organizations',
    nl: 'Voor grote organisaties'
  },
  startFree: {
    en: 'Start free',
    nl: 'Begin gratis'
  },
  startNow: {
    en: 'Start now',
    nl: 'Begin nu'
  },
  contactSales: {
    en: 'Contact Sales',
    nl: 'Contact Verkoop'
  },
  mostPopular: {
    en: 'Most popular',
    nl: 'Meest populair'
  },
  save: {
    en: 'Save',
    nl: 'Bespaar'
  },
  trial: {
    en: 'days trial',
    nl: 'dagen proefperiode'
  },
  contactUs: {
    en: 'Contact Us',
    nl: 'Neem contact op'
  }
};

// Translation function
export const translate = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
}; 