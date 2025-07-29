import { Language } from './translations';

// Country to language mapping - each country mapped to its primary/official language
const countryToLanguageMap: Record<string, Language> = {
  // English-speaking countries
  'US': 'en', 'GB': 'en', 'AU': 'en', 'IE': 'en', 'NZ': 'en',
  
  // Dutch
  'NL': 'nl', 'SR': 'nl',
  
  // German
  'DE': 'de', 'AT': 'de', 'LI': 'de',
  
  // French
  'FR': 'fr', 'MC': 'fr',
  
  // Spanish
  'ES': 'es', 'MX': 'es', 'AR': 'es', 'CO': 'es', 'PE': 'es', 'VE': 'es', 'CL': 'es', 'EC': 'es', 'UY': 'es', 'PY': 'es', 'BO': 'es', 'CR': 'es', 'PA': 'es', 'GT': 'es', 'HN': 'es', 'SV': 'es', 'NI': 'es', 'DO': 'es', 'CU': 'es', 'PR': 'es',
  
  // Italian
  'IT': 'it', 'SM': 'it', 'VA': 'it',
  
  // Portuguese
  'PT': 'pt', 'BR': 'pt', 'AO': 'pt', 'MZ': 'pt', 'CV': 'pt', 'GW': 'pt', 'ST': 'pt', 'TL': 'pt',
  
  // Russian
  'RU': 'ru', 'BY': 'ru', 'KZ': 'ru', 'KG': 'ru', 'TJ': 'ru',
  
  // Japanese
  'JP': 'ja',
  
  // Korean
  'KR': 'ko', 'KP': 'ko',
  
  // Chinese
  'CN': 'zh', 'TW': 'zh', 'HK': 'zh', 'MO': 'zh', 'SG': 'zh',
  
  // Arabic
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'MA': 'ar', 'DZ': 'ar', 'TN': 'ar', 'LY': 'ar', 'SD': 'ar', 'SY': 'ar', 'LB': 'ar', 'JO': 'ar', 'IQ': 'ar', 'KW': 'ar', 'QA': 'ar', 'BH': 'ar', 'OM': 'ar', 'YE': 'ar',
  
  // Hindi and other Indian languages
  'IN': 'hi',
  
  // Bengali
  'BD': 'bn',
  
  // Urdu
  'PK': 'ur',
  
  // Indonesian
  'ID': 'id',
  
  // Malay
  'MY': 'ms', 'BN': 'ms',
  
  // Thai
  'TH': 'th',
  
  // Vietnamese
  'VN': 'vi',
  
  // Turkish
  'TR': 'tr',
  
  // Polish
  'PL': 'pl',
  
  // Czech
  'CZ': 'cs',
  
  // Slovak
  'SK': 'sk',
  
  // Hungarian
  'HU': 'hu',
  
  // Romanian
  'RO': 'ro', 'MD': 'ro',
  
  // Bulgarian
  'BG': 'bg',
  
  // Croatian
  'HR': 'hr',
  
  // Serbian
  'RS': 'sr', 'ME': 'sr', 'BA': 'sr',
  
  // Slovenian
  'SI': 'sl',
  
  // Estonian
  'EE': 'et',
  
  // Latvian
  'LV': 'lv',
  
  // Lithuanian
  'LT': 'lt',
  
  // Finnish
  'FI': 'fi',
  
  // Swedish
  'SE': 'sv',
  
  // Norwegian
  'NO': 'no',
  
  // Danish
  'DK': 'da',
  
  // Icelandic
  'IS': 'is',
  
  // Greek
  'GR': 'el', 'CY': 'el',
  
  // Hebrew
  'IL': 'he',
  
  // Persian
  'IR': 'fa', 'AF': 'fa',
  
  // Tamil (Sri Lanka, Singapore)
  'LK': 'ta',
  
  // Myanmar
  'MM': 'my',
  
  // Khmer
  'KH': 'km',
  
  // Lao
  'LA': 'lo',
  
  // Georgian
  'GE': 'ka',
  
  // Amharic
  'ET': 'am',
  
  // Swahili
  'KE': 'sw', 'TZ': 'sw', 'UG': 'sw',
  
  // Multi-language countries - using most appropriate defaults
  'CH': 'de', // Switzerland - German (most spoken)
  'BE': 'nl', // Belgium - Dutch (Flemish is majority)
  'LU': 'fr', // Luxembourg - French (administrative language)
  'CA': 'en', // Canada - English (majority)
  'ZA': 'en', // South Africa - English (lingua franca)
};

// Browser language to our language mapping
const browserLanguageMap: Record<string, Language> = {
  'en': 'en', 'en-US': 'en', 'en-GB': 'en', 'en-AU': 'en', 'en-CA': 'en',
  'nl': 'nl', 'nl-NL': 'nl', 'nl-BE': 'nl',
  'de': 'de', 'de-DE': 'de', 'de-AT': 'de', 'de-CH': 'de',
  'fr': 'fr', 'fr-FR': 'fr', 'fr-CA': 'fr', 'fr-BE': 'fr', 'fr-CH': 'fr',
  'es': 'es', 'es-ES': 'es', 'es-MX': 'es', 'es-AR': 'es', 'es-CO': 'es',
  'it': 'it', 'it-IT': 'it', 'it-CH': 'it',
  'pt': 'pt', 'pt-PT': 'pt', 'pt-BR': 'pt',
  'ru': 'ru', 'ru-RU': 'ru',
  'ja': 'ja', 'ja-JP': 'ja',
  'ko': 'ko', 'ko-KR': 'ko',
  'zh': 'zh', 'zh-CN': 'zh', 'zh-TW': 'zh', 'zh-HK': 'zh',
  'ar': 'ar', 'ar-SA': 'ar', 'ar-EG': 'ar', 'ar-AE': 'ar',
  'hi': 'hi', 'hi-IN': 'hi',
  'bn': 'bn', 'bn-BD': 'bn', 'bn-IN': 'bn',
  'ur': 'ur', 'ur-PK': 'ur',
  'id': 'id', 'id-ID': 'id',
  'ms': 'ms', 'ms-MY': 'ms',
  'th': 'th', 'th-TH': 'th',
  'vi': 'vi', 'vi-VN': 'vi',
  'tr': 'tr', 'tr-TR': 'tr',
  'pl': 'pl', 'pl-PL': 'pl',
  'cs': 'cs', 'cs-CZ': 'cs',
  'sk': 'sk', 'sk-SK': 'sk',
  'hu': 'hu', 'hu-HU': 'hu',
  'ro': 'ro', 'ro-RO': 'ro',
  'bg': 'bg', 'bg-BG': 'bg',
  'hr': 'hr', 'hr-HR': 'hr',
  'sr': 'sr', 'sr-RS': 'sr',
  'sl': 'sl', 'sl-SI': 'sl',
  'et': 'et', 'et-EE': 'et',
  'lv': 'lv', 'lv-LV': 'lv',
  'lt': 'lt', 'lt-LT': 'lt',
  'fi': 'fi', 'fi-FI': 'fi',
  'sv': 'sv', 'sv-SE': 'sv',
  'no': 'no', 'no-NO': 'no', 'nb': 'no', 'nn': 'no',
  'da': 'da', 'da-DK': 'da',
  'is': 'is', 'is-IS': 'is',
  'el': 'el', 'el-GR': 'el',
  'he': 'he', 'he-IL': 'he',
  'fa': 'fa', 'fa-IR': 'fa',
  'ta': 'ta', 'ta-IN': 'ta', 'ta-LK': 'ta',
  'te': 'te', 'te-IN': 'te',
  'ml': 'ml', 'ml-IN': 'ml',
  'kn': 'kn', 'kn-IN': 'kn',
  'gu': 'gu', 'gu-IN': 'gu',
  'pa': 'pa', 'pa-IN': 'pa',
  'or': 'or', 'or-IN': 'or',
  'as': 'as', 'as-IN': 'as',
  'mr': 'mr', 'mr-IN': 'mr',
  'ne': 'ne', 'ne-NP': 'ne',
  'si': 'si', 'si-LK': 'si',
  'my': 'my', 'my-MM': 'my',
  'km': 'km', 'km-KH': 'km',
  'lo': 'lo', 'lo-LA': 'lo',
  'ka': 'ka', 'ka-GE': 'ka',
  'am': 'am', 'am-ET': 'am',
  'sw': 'sw', 'sw-KE': 'sw', 'sw-TZ': 'sw',
  'zu': 'zu', 'zu-ZA': 'zu',
  'af': 'af', 'af-ZA': 'af',
  'xh': 'xh', 'xh-ZA': 'xh',
  'st': 'st', 'st-ZA': 'st',
  'tn': 'tn', 'tn-ZA': 'tn',
  'ss': 'ss', 'ss-ZA': 'ss',
  've': 've', 've-ZA': 've',
  'ts': 'ts', 'ts-ZA': 'ts',
  'nr': 'nr', 'nr-ZA': 'nr'
};

// Get user's location using IP geolocation
export const getUserLocation = async (): Promise<string | null> => {
  try {
    // Try multiple IP geolocation services for reliability
    const services = [
      'https://ipapi.co/country_code/',
      'https://api.country.is/',
      'https://ipinfo.io/country'
    ];

    for (const service of services) {
      try {
        const response = await fetch(service);
        if (response.ok) {
          const data = await response.text();
          // Handle different response formats
          if (service.includes('country.is')) {
            const json = JSON.parse(data);
            return json.country;
          }
          return data.trim().toUpperCase();
        }
      } catch (error) {
        console.warn(`Failed to get location from ${service}:`, error);
        continue;
      }
    }
    return null;
  } catch (error) {
    console.error('Error getting user location:', error);
    return null;
  }
};

// Get browser language
export const getBrowserLanguage = (): Language => {
  if (typeof navigator === 'undefined') return 'en';
  
  const languages = navigator.languages || [navigator.language];
  
  for (const lang of languages) {
    // Check exact match first
    if (browserLanguageMap[lang]) {
      return browserLanguageMap[lang];
    }
    
    // Check base language (e.g., 'en' from 'en-US')
    const baseLang = lang.split('-')[0];
    if (browserLanguageMap[baseLang]) {
      return browserLanguageMap[baseLang];
    }
  }
  
  return 'en'; // Default fallback
};

// Get language based on user's location
export const getLanguageFromLocation = async (): Promise<Language> => {
  try {
    const countryCode = await getUserLocation();
    
    if (countryCode && countryToLanguageMap[countryCode]) {
      return countryToLanguageMap[countryCode];
    }
    
    // Fallback to browser language
    return getBrowserLanguage();
  } catch (error) {
    console.error('Error detecting language from location:', error);
    return getBrowserLanguage();
  }
};

// Combined detection: prioritize location, fallback to browser language
export const detectUserLanguage = async (): Promise<Language> => {
  // First try browser language (instant)
  const browserLang = getBrowserLanguage();
  
  // Then try location-based detection (async)
  try {
    const locationLang = await getLanguageFromLocation();
    return locationLang;
  } catch (error) {
    console.error('Location-based language detection failed:', error);
    return browserLang;
  }
};

// Get language name in the native language
export const getLanguageName = (language: Language): string => {
  const languageNames: Record<Language, string> = {
    en: 'English',
    nl: 'Nederlands',
    de: 'Deutsch',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    pt: 'Português',
    ru: 'Русский',
    ja: '日本語',
    ko: '한국어',
    zh: '中文',
    ar: 'العربية',
    hi: 'हिन्दी',
    bn: 'বাংলা',
    ur: 'اردو',
    id: 'Bahasa Indonesia',
    ms: 'Bahasa Melayu',
    th: 'ไทย',
    vi: 'Tiếng Việt',
    tr: 'Türkçe',
    pl: 'Polski',
    cs: 'Čeština',
    sk: 'Slovenčina',
    hu: 'Magyar',
    ro: 'Română',
    bg: 'Български',
    hr: 'Hrvatski',
    sr: 'Српски',
    sl: 'Slovenščina',
    et: 'Eesti',
    lv: 'Latviešu',
    lt: 'Lietuvių',
    fi: 'Suomi',
    sv: 'Svenska',
    no: 'Norsk',
    da: 'Dansk',
    is: 'Íslenska',
    el: 'Ελληνικά',
    he: 'עברית',
    fa: 'فارسی',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    ml: 'മലയാളം',
    kn: 'ಕನ್ನಡ',
    gu: 'ગુજરાતી',
    pa: 'ਪੰਜਾਬੀ',
    or: 'ଓଡ଼ିଆ',
    as: 'অসমীয়া',
    mr: 'मराठी',
    ne: 'नेपाली',
    si: 'සිංහල',
    my: 'မြန်မာ',
    km: 'ខ្មែរ',
    lo: 'ລາວ',
    ka: 'ქართული',
    am: 'አማርኛ',
    sw: 'Kiswahili',
    zu: 'isiZulu',
    af: 'Afrikaans',
    xh: 'isiXhosa',
    st: 'Sesotho',
    tn: 'Setswana',
    ss: 'siSwati',
    ve: 'Tshivenḓa',
    ts: 'Xitsonga',
    nr: 'isiNdebele'
  };
  
  return languageNames[language] || language;
};