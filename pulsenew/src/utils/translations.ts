// Type for supported languages
export type Language = 'en' | 'nl';

// Interface for translations
export interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

// Translations (subset copied and expanded from the legacy app)
export const translations: Translations = {
  // Generic navigation
  navigation: { en: 'Home', nl: 'Home' },
  features: { en: 'Features', nl: 'Functies' },
  pricing: { en: 'Pricing', nl: 'Prijzen' },
  team: { en: 'Team', nl: 'Team' },
  blog: { en: 'Blog', nl: 'Blog' },
  docs: { en: 'Docs', nl: 'Docs' },
  register: { en: 'Sign up', nl: 'Registreren' },
  login: { en: 'Log in', nl: 'Inloggen' },

  // Footer groups
  footerRateUs: { en: 'Rate us on Product Hunt', nl: 'Beoordeel ons op Product Hunt' },
  footerLinks: { en: 'Links', nl: 'Links' },
  footerPlatform: { en: 'Platform', nl: 'Platform' },
  footerSupport: { en: 'Support', nl: 'Ondersteuning' },

  // Footer links
  footerHome: { en: 'Home', nl: 'Home' },
  footerFeatures: { en: 'Features', nl: 'Functies' },
  footerPricing: { en: 'Pricing', nl: 'Prijzen' },
  footerOurTeam: { en: 'Our Team', nl: 'Ons Team' },
  footerBlog: { en: 'Blog', nl: 'Blog' },
  footerDashboard: { en: 'Dashboard', nl: 'Dashboard' },
  footerDomains: { en: 'Domains', nl: 'Domeinen' },
  footerDevices: { en: 'Devices', nl: 'Apparaten' },
  footerSubscriptions: { en: 'Subscriptions', nl: 'Abonnementen' },
  footerDocumentation: { en: 'Documentation', nl: 'Documentatie' },
  footerHelpCenter: { en: 'Help Center', nl: 'Helpcentrum' },
  footerEmailSupport: { en: 'Email Support', nl: 'E-mailondersteuning' },
  footerPrivacyPolicy: { en: 'Privacy Policy', nl: 'Privacybeleid' },
  footerTerms: { en: 'Terms of Service', nl: 'Algemene Voorwaarden' },
  footerCopyright: { en: 'All rights reserved.', nl: 'Alle rechten voorbehouden.' },
  footerContact: { en: 'Contact', nl: 'Contact' },
  footerIsPartOf: { en: 'is part of', nl: 'is onderdeel van' },

  // Language selector
  language: { en: 'Language', nl: 'Taal' },
  english: { en: 'English', nl: 'Engels' },
  dutch: { en: 'Dutch', nl: 'Nederlands' },

  // Home (Next) copy
  heroTitle: { en: 'Your Digital Heartbeat', nl: 'Your Digital Heartbeat' },
  heroSubtitle: { en: 'Monitor your digital infrastructure, share files securely, and manage your complete business processes', nl: 'Monitor je digitale infrastructuur, deel bestanden veilig, en beheer je complete bedrijfsproces' },
  homeHeroSubtitle: { en: 'Monitor your digital infrastructure, share files securely, and manage your complete business processes', nl: 'Monitor je digitale infrastructuur, deel bestanden veilig, en beheer je complete bedrijfsproces' },
  requestDemo: { en: 'Request a demo', nl: 'Vraag een demo aan' },
  heroTrustedBy: { en: 'Trusted by', nl: 'Vertrouwd door' },

  homeGuardDesc: { en: 'Monitor your domains, uptime and security', nl: 'Monitor je domeinen, uptime en security' },
  homeFilesDesc: { en: 'Share files safe and temporarily with encryption, Europe data saving', nl: 'Deel bestanden veilig en tijdelijk met encryptie, data-opslag in Europa' },
  homeCrmDesc: { en: 'ERP and CRM for small companies (PulseFlow)', nl: 'ERP en CRM voor kleine bedrijven (PulseFlow)' },

  homeSection1Title: { en: 'Monitor, visualize your domains', nl: 'Monitor en visualiseer je domeinen' },
  homeSection1Desc: { en: 'See how iPulse helps you gain insight into the status of your digital infrastructure.', nl: 'Zie hoe iPulse je helpt inzicht te krijgen in de status van je digitale infrastructuur.' },
  homeSection2Title: { en: 'All domain information in one place', nl: 'Alle domeininformatie op één plek' },
  homeSection2Desc: { en: 'View DNS, SSL, registrar details, name servers and historical changes for each domain.', nl: 'Bekijk DNS, SSL, registrar-gegevens, nameservers en historische wijzigingen per domein.' },
  homeAiTitle: { en: 'PulseAI assistant', nl: 'PulseAI-assistent' },
  homeAiDesc: { en: 'Ask AI to analyse domains, suggest actions and generate insights from your monitoring data.', nl: 'Laat AI domeinen analyseren, acties voorstellen en inzichten genereren uit je monitoringdata.' },

  // Platform Overview section
  platformOverviewTitle: { en: 'Three powerful solutions for your business', nl: 'Drie krachtige oplossingen voor je bedrijf' },
  pulseGuardOverviewDesc: { en: 'Monitor your websites, servers and digital services 24/7 with real-time alerts and AI insights.', nl: 'Monitor je websites, servers en digitale diensten 24/7 met real-time alerts en AI inzichten.' },
  pulseFilesOverviewDesc: { en: 'Share files securely and temporarily with military-grade encryption and automatic deletion.', nl: 'Deel bestanden veilig en tijdelijk met militaire encryptie en automatische verwijdering.' },
  pulseFlowOverviewDesc: { en: 'Complete ERP & CRM for small businesses with invoicing, inventory and project management.', nl: 'Complete ERP & CRM voor kleine bedrijven met facturatie, voorraad en projectbeheer.' },

  // Features page
  featuresPageTitle: { en: 'Complete monitoring solution', nl: 'Volledige monitoringoplossing' },
  featuresPageSubtitle: { en: 'Monitor your websites, servers, and services with our comprehensive platform. Get instant alerts and detailed insights into your digital infrastructure.', nl: 'Monitor je websites, servers en diensten met ons complete platform. Ontvang directe meldingen en gedetailleerde inzichten in je digitale infrastructuur.' },
  featureWebsiteMonitoringTitle: { en: 'Website Monitoring', nl: 'Website Monitoring' },
  featureWebsiteMonitoringDesc: { en: 'Monitor HTTP/HTTPS endpoints, check response times, and get alerted when your websites go down. Track performance metrics and uptime statistics.', nl: 'Monitor HTTP/HTTPS-endpoints, controleer responstijden en krijg meldingen wanneer je websites offline gaan. Volg prestatiemetrics en uptime-statistieken.' },
  featureSslMonitoringTitle: { en: 'SSL Monitoring', nl: 'SSL Monitoring' },
  featureSslMonitoringDesc: { en: 'Track SSL certificate expiration dates and get warnings before they expire. Monitor certificate validity and security configurations.', nl: 'Houd SSL-certificaatvervaldata bij en ontvang waarschuwingen voordat ze verlopen. Monitor certificaatgeldigheid en beveiligingsconfiguraties.' },
  // Alias for guard page usage
  sslMonitoringTitle: { en: 'SSL Monitoring', nl: 'SSL Monitoring' },
  featureServerMonitoringTitle: { en: 'Server Monitoring', nl: 'Server Monitoring' },
  featureServerMonitoringDesc: { en: 'Monitor CPU usage, memory consumption, disk space, and network performance. Track running processes and system health metrics.', nl: 'Monitor CPU-gebruik, geheugengebruik, schijfruimte en netwerkprestaties. Volg processen en systeemgezondheidsmetrics.' },
  featurePulseAiTitle: { en: 'PulseAI Assistant', nl: 'PulseAI-assistent' },
  featurePulseAiDesc: { en: 'AI-powered insights and natural language queries. Get proactive detection of issues and intelligent performance analysis.', nl: 'AI-gedreven inzichten en natuurlijke taalvragen. Krijg proactieve detectie van problemen en intelligente prestatieanalyse.' },
  featureApiIntegrationsTitle: { en: 'API & Integrations', nl: 'API & Integraties' },
  featureApiIntegrationsDesc: { en: 'Connect with Discord, Slack, Telegram, email notifications, and webhooks. Use our REST API for custom integrations.', nl: 'Koppel met Discord, Slack, Telegram, e-mailnotificaties en webhooks. Gebruik onze REST API voor maatwerkintegraties.' },
  featureStatusPagesTitle: { en: 'Status Pages', nl: 'Statuspagina’s' },
  featureStatusPagesDesc: { en: 'Create beautiful public status pages for your services. Manage incidents and keep your users informed about system status.', nl: 'Maak mooie publieke statuspagina’s voor je diensten. Beheer incidenten en houd gebruikers op de hoogte van de systeemsituatie.' },
  ctaReadyTitle: { en: 'Ready to get started?', nl: 'Klaar om te beginnen?' },
  ctaReadyDesc: { en: 'Start monitoring your infrastructure today with our comprehensive platform.', nl: 'Begin vandaag nog met het monitoren van je infrastructuur met ons complete platform.' },
  ctaStartTrial: { en: 'Start Free Trial', nl: 'Start gratis proefperiode' },

  // Guard page
  guardHeroSubtitle: { en: 'Complete monitoring solution for websites, servers, SSL certificates, and services. Keep your digital infrastructure running smoothly with instant alerts and detailed insights.', nl: 'Complete monitoringoplossing voor websites, servers, SSL-certificaten en diensten. Houd je digitale infrastructuur soepel draaiend met directe meldingen en diepgaande inzichten.' },
  signInArrow: { en: 'Sign In →', nl: 'Inloggen →' },
  guardFeaturesTitle: { en: 'Everything you need to monitor your infrastructure', nl: 'Alles wat je nodig hebt om je infrastructuur te monitoren' },
  smartNotificationsTitle: { en: 'Smart Notifications', nl: 'Slimme notificaties' },
  reportsAnalyticsTitle: { en: 'Reports & Analytics', nl: 'Rapportages & Analytics' },
  guardSeeInActionTitle: { en: 'See PulseGuard (Monitor) in action', nl: 'Bekijk PulseGuard (Monitor) in actie' },
  guardSeeInActionDesc: { en: 'Our intuitive dashboard gives you complete visibility into your infrastructure with real-time monitoring and detailed insights.', nl: 'Ons intuïtieve dashboard geeft volledige zicht op je infrastructuur met realtime monitoring en uitgebreide inzichten.' },
  guardCtaTitle: { en: 'Ready to start monitoring?', nl: 'Klaar om te monitoren?' },
  guardCtaDesc: { en: 'Join thousands of users who trust iPulse to keep their infrastructure running smoothly.', nl: 'Sluit je aan bij duizenden gebruikers die iPulse vertrouwen om hun infrastructuur soepel te laten draaien.' },
  viewPricing: { en: 'View Pricing →', nl: 'Bekijk prijzen →' },

  // Files page
  pulseFilesHeroSubtitle2: { en: 'Share files safe and temporarily with encryption. European data saving, GDPR compliant, and completely secure.', nl: 'Deel bestanden veilig en tijdelijk met encryptie. Europese dataopslag, GDPR-conform en volledig veilig.' },
  aes256Title: { en: 'AES-256-CBC Encryption', nl: 'AES-256-CBC-encryptie' },
  aes256Desc: { en: 'Military-grade encryption ensures your files are completely secure during transfer and storage.', nl: 'Encryptie op militair niveau zorgt ervoor dat je bestanden volledig veilig zijn tijdens overdracht en opslag.' },
  autoDeletionTitle: { en: '7-Day Auto-deletion', nl: 'Automatisch verwijderen na 7 dagen' },
  autoDeletionDesc: { en: 'Files are automatically deleted after 7 days, ensuring no permanent storage of sensitive data.', nl: 'Bestanden worden automatisch na 7 dagen verwijderd, zodat gevoelige data niet permanent wordt opgeslagen.' },
  zeroKnowledgeStorageTitle: { en: 'Zero Knowledge Storage', nl: 'Zero-knowledge opslag' },
  zeroKnowledgeStorageDesc: { en: 'We never see your files. Everything is encrypted on your device before upload.', nl: 'Wij zien je bestanden nooit. Alles wordt op jouw apparaat versleuteld vóór het uploaden.' },
  dutchDatacenterTitle: { en: 'Dutch Datacenter', nl: 'Nederlands datacenter' },
  dutchDatacenterDesc: { en: 'All data stored in Netherlands datacenters, fully GDPR compliant and European privacy protected.', nl: 'Alle data wordt opgeslagen in Nederlandse datacenters, volledig GDPR-conform en met Europese privacybescherming.' },
  openSourceTitle: { en: 'Open Source', nl: 'Open source' },
  openSourceDesc: { en: 'Fully transparent code available on GitHub. Audit our security yourself.', nl: 'Volledig transparante code beschikbaar op GitHub. Audit onze beveiliging zelf.' },
  noTrackingTitle: { en: 'No Tracking', nl: 'Geen tracking' },
  noTrackingDesc: { en: 'We don’t track who uploads what. Complete anonymity and privacy protection.', nl: 'We volgen niet wie wat uploadt. Volledige anonimiteit en privacybescherming.' },
  howPulseFilesWorksTitle: { en: 'How PulseFiles Works', nl: 'Hoe PulseFiles werkt' },
  uploadEncryptTitle: { en: 'Upload & Encrypt', nl: 'Uploaden & versleutelen' },
  uploadEncryptDesc: { en: 'Select your file and it gets encrypted with AES-256-CBC on your device before upload.', nl: 'Selecteer je bestand; het wordt op jouw apparaat versleuteld met AES-256-CBC vóór het uploaden.' },
  shareLinkTitle: { en: 'Share Link', nl: 'Deel link' },
  shareLinkDesc: { en: 'Get a secure link with decryption key that you can share with anyone you trust.', nl: 'Ontvang een beveiligde link met decryptiesleutel die je kunt delen met wie je vertrouwt.' },
  autoDeleteStepTitle: { en: 'Auto-Delete', nl: 'Automatisch verwijderen' },
  autoDeleteStepDesc: { en: 'Files are automatically deleted after 7 days, ensuring no permanent storage.', nl: 'Bestanden worden automatisch na 7 dagen verwijderd; geen permanente opslag.' },
  filesCtaTitle: { en: 'Start sharing files securely', nl: 'Begin veilig bestanden te delen' },
  filesCtaDesc: { en: 'Join users who trust PulseFiles for secure, encrypted file sharing with automatic deletion and European data protection.', nl: 'Sluit je aan bij gebruikers die PulseFiles vertrouwen voor veilige, versleutelde bestandsdeling met automatische verwijdering en Europese gegevensbescherming.' },
  visitPulseFiles: { en: 'Visit PulseFiles →', nl: 'Bezoek PulseFiles →' },

  // CRM page
  crmHeroSubtitle: { en: 'ERP and CRM solution designed for small companies. Manage your customers, projects, and business processes in one integrated platform.', nl: 'ERP- en CRM-oplossing voor kleine bedrijven. Beheer klanten, projecten en bedrijfsprocessen in één geïntegreerd platform.' },
  getStartedCta2: { en: 'Get Started', nl: 'Aan de slag' },
  customerManagementTitle: { en: 'Customer Management', nl: 'Klantbeheer' },
  customerManagementDesc: { en: 'Keep track of all your customers, their contact information, purchase history, and communication preferences.', nl: 'Houd al je klanten bij, met contactgegevens, aankoopgeschiedenis en communicatievoorkeuren.' },
  projectPlanningTitle: { en: 'Project Planning', nl: 'Projectplanning' },
  projectPlanningDesc: { en: 'Plan and track projects with deadlines, milestones, and resource allocation. Keep your team aligned and productive.', nl: 'Plan en volg projecten met deadlines, mijlpalen en resource-allocatie. Houd je team op één lijn en productief.' },
  invoiceManagementTitle: { en: 'Invoice Management', nl: 'Factuurbeheer' },
  invoiceManagementDesc: { en: 'Create professional invoices, track payments, and manage your financial workflow with automated reminders.', nl: 'Maak professionele facturen, volg betalingen en beheer je financiële workflow met automatische herinneringen.' },
  businessAnalyticsTitle: { en: 'Business Analytics', nl: 'Business analytics' },
  businessAnalyticsDesc: { en: 'Get insights into your business performance with detailed reports and analytics on sales, customers, and projects.', nl: 'Krijg inzicht in je bedrijfsresultaten met gedetailleerde rapportages en analyses over verkoop, klanten en projecten.' },
  communicationToolsTitle: { en: 'Communication Tools', nl: 'Communicatietools' },
  communicationToolsDesc: { en: 'Integrated email and SMS communication tools to stay in touch with customers and team members.', nl: 'Geïntegreerde e-mail- en sms-tools om in contact te blijven met klanten en teamleden.' },
  integrationReadyTitle: { en: 'Integration Ready', nl: 'Klaar voor integratie' },
  integrationReadyDesc: { en: 'Connect with your existing tools and services through our API and pre-built integrations.', nl: 'Koppel je bestaande tools en diensten via onze API en kant-en-klare integraties.' },
  whyChooseCrmTitle: { en: 'Why Choose PulseFlow?', nl: 'Waarom kiezen voor PulseFlow?' },
  affordablePricingTitle: { en: 'Affordable Pricing', nl: 'Betaalbare prijzen' },
  affordablePricingDesc: { en: 'Designed specifically for small businesses with transparent, affordable pricing that scales with your growth.', nl: 'Ontworpen voor kleine bedrijven met transparante, betaalbare prijzen die met je groei meegroeien.' },
  dutchDataStorageTitle: { en: 'Dutch Data Storage', nl: 'Nederlandse dataopslag' },
  dutchDataStorageDesc: { en: 'All your data is stored securely in Netherlands datacenters, ensuring GDPR compliance and data protection.', nl: 'Al je data wordt veilig opgeslagen in Nederlandse datacenters, volledig GDPR-conform.' },
  easySetupTitle: { en: 'Easy Setup', nl: 'Eenvoudige installatie' },
  easySetupDesc: { en: 'Get up and running in minutes with our intuitive setup process and migration tools from other CRM systems.', nl: 'Binnen enkele minuten aan de slag met ons intuïtieve installatieproces en migratietools van andere CRM-systemen.' },
  localSupportTitle: { en: 'Local Support', nl: 'Lokale support' },
  localSupportDesc: { en: 'Get help when you need it with our Dutch-speaking support team who understands local business needs.', nl: 'Krijg hulp wanneer je het nodig hebt van ons Nederlandstalige supportteam dat lokale behoeften begrijpt.' },
  crmCtaTitle: { en: 'Start managing your business better', nl: 'Begin je bedrijf beter te beheren' },
  crmCtaDesc: { en: 'Join small businesses who use PulseFlow to manage customers, and business processes more efficiently.', nl: 'Sluit je aan bij kleine bedrijven die PulseFlow gebruiken om klanten en bedrijfsprocessen efficiënter te beheren.' },
  visitPulseCRM: { en: 'Visit PulseFlow →', nl: 'Bezoek PulseFlow →' },
  questionsContact: { en: 'Questions? Contact us at', nl: 'Vragen? Neem contact op via' },

  // Pricing page
  pricingHeroTitle: { en: 'Simple, transparent pricing', nl: 'Eenvoudige, transparante prijzen' },
  pricingHeroSubtitle: { en: 'Choose the plan that fits your needs. Start with our free plan and upgrade as you grow. All plans include 30-day free trial.', nl: 'Kies het plan dat bij je past. Begin met ons gratis plan en upgrade naarmate je groeit. Alle plannen bevatten een proefperiode van 30 dagen.' },
  mostPopular: { en: 'Most Popular', nl: 'Meest populair' },
  freePlan: { en: 'Free', nl: 'Gratis' },
  standardPlan: { en: 'Standard', nl: 'Standaard' },
  proPlan: { en: 'Pro', nl: 'Pro' },
  enterprisePlan: { en: 'Enterprise', nl: 'Zakelijk' },
  perMonth: { en: 'per month', nl: 'per maand' },
  forever: { en: 'forever', nl: 'voor altijd' },
  startTrial14: { en: 'Start 14-day Trial', nl: 'Start 14-daagse proef' },
  getStartedCta: { en: 'Get Started', nl: 'Aan de slag' },
  contactSales: { en: 'Contact Sales', nl: 'Neem contact op met sales' },
  freeTrialBadge14: { en: '14-day free trial', nl: '14 dagen gratis proef' },
  configureYourPlan: { en: 'Configure your plan:', nl: 'Stel je plan samen:' },
  domainsLabel: { en: 'Domains', nl: 'Domeinen' },
  devicesLabel: { en: 'Devices', nl: 'Apparaten' },
  servicesLabel: { en: 'Services', nl: 'Diensten' },
  enterprisePriceExtra: { en: 'each extra', nl: 'per extra' },

  // Pricing FAQ
  pricingFaqTitle: { en: 'Frequently Asked Questions', nl: 'Veelgestelde vragen' },
  pricingFaqPaymentTitle: { en: 'What payment methods do you accept?', nl: 'Welke betaalmethoden accepteren jullie?' },
  pricingFaqPaymentDesc: { en: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers. All payments are processed securely through Stripe.', nl: 'We accepteren alle gangbare creditcards, PayPal en bankoverschrijvingen voor zakelijke klanten. Alle betalingen worden veilig via Stripe verwerkt.' },
  pricingFaqChangePlanTitle: { en: 'Can I change my plan anytime?', nl: 'Kan ik mijn plan op elk moment wijzigen?' },
  pricingFaqChangePlanDesc: { en: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we’ll prorate any billing adjustments.', nl: 'Ja, je kunt je plan op elk moment upgraden of downgraden. Wijzigingen gaan direct in en we verrekenen eventuele aanpassingen pro rata.' },
  pricingFaqTrialTitle: { en: 'Is there a free trial?', nl: 'Is er een gratis proefperiode?' },
  pricingFaqTrialDesc: { en: 'All paid plans come with a 30-day free trial. No credit card required to start. You can cancel anytime during the trial period.', nl: 'Alle betaalde plannen hebben een gratis proefperiode van 30 dagen. Geen creditcard nodig om te starten. Je kunt op elk moment annuleren tijdens de proefperiode.' },
  pricingFaqEnterpriseTitle: { en: 'Do you offer enterprise discounts?', nl: 'Bieden jullie kortingen voor enterprises?' },
  pricingFaqEnterpriseDesc: { en: 'Yes, we offer custom pricing for enterprise customers with special requirements. Contact our sales team for a personalized quote.', nl: 'Ja, we bieden maatwerkprijzen voor enterprise-klanten met speciale vereisten. Neem contact op met onze sales voor een offerte op maat.' },

  // Team page
  teamHeroTitle: { en: 'Meet our team', nl: 'Maak kennis met ons team' },
  teamHeroSubtitle: { en: 'We’re a passionate team of developers and marketers dedicated to building the best monitoring platform for businesses of all sizes.', nl: 'Wij zijn een gepassioneerd team van developers en marketeers dat het beste monitoringplatform bouwt voor organisaties van elke omvang.' },
  aboutIPulseTitle: { en: 'About iPulse', nl: 'Over iPulse' },
  aboutIPulseDesc: { en: 'iPulse is a Netherlands-based technology company focused on creating innovative monitoring and management solutions. We’re committed to helping businesses maintain reliable digital infrastructure with cutting-edge technology and exceptional support.', nl: 'iPulse is een Nederlands technologiebedrijf gericht op innovatieve monitoring- en beheersoplossingen. Wij helpen organisaties met een betrouwbare digitale infrastructuur door toptechnologie en uitstekende support.' },
  aboutPulseGuardTitle: { en: 'About PulseGuard', nl: 'Over PulseGuard' },
  aboutPulseGuardDesc: { en: 'PulseGuard is our comprehensive monitoring platform that helps businesses monitor websites, servers, and digital services 24/7. With real-time alerts, AI-powered insights, and a user-friendly dashboard, we ensure your digital infrastructure stays reliable and secure.', nl: 'PulseGuard is ons complete monitoringplatform dat bedrijven helpt websites, servers en digitale diensten 24/7 te monitoren. Met realtime meldingen, AI-gedreven inzichten en een gebruiksvriendelijk dashboard zorgen we ervoor dat je digitale infrastructuur betrouwbaar en veilig blijft.' },
  teamMembersLabel: { en: 'Team Members', nl: 'Teamleden' },
  monitoredServicesLabel: { en: 'Monitored Services', nl: 'Gemonitorde diensten' },
  platformUptimeLabel: { en: 'Platform Uptime', nl: 'Platform-uptime' },
  joinOurTeamTitle: { en: 'Join our team', nl: 'Kom bij ons team' },
  joinOurTeamDesc: { en: 'We’re always looking for talented individuals to join our growing team. If you’re passionate about technology and want to make an impact, we’d love to hear from you.', nl: 'We zijn altijd op zoek naar talent om ons groeiende team te versterken. Ben je gepassioneerd over technologie en wil je impact maken? Dan horen we graag van je.' },
  getInTouch: { en: 'Get in touch', nl: 'Neem contact op' },

  // Blog list page
  blogHeroTitle: { en: 'iPulse Blog', nl: 'iPulse Blog' },
  blogHeroSubtitle: { en: 'Stay updated with the latest insights on website monitoring, server management, and digital infrastructure best practices.', nl: 'Blijf op de hoogte van de nieuwste inzichten over website monitoring, serverbeheer en best practices voor digitale infrastructuur.' },
  blogStayUpdated: { en: 'Stay updated', nl: 'Blijf op de hoogte' },
  blogNewsletterSubtitle: { en: 'Subscribe to our newsletter to get the latest updates, tips, and insights delivered directly to your inbox.', nl: 'Abonneer je op onze nieuwsbrief voor de nieuwste updates, tips en inzichten rechtstreeks in je inbox.' },
  blogEmailPlaceholder: { en: 'Enter your email', nl: 'Vul je e-mailadres in' },
  blogSubscribe: { en: 'Subscribe', nl: 'Abonneren' },

  // Blog post page (static strings)
  postNotFound: { en: 'Post not found', nl: 'Bericht niet gevonden' },
  backToBlog: { en: 'Back to blog', nl: 'Terug naar blog' },
  moreFromBlog: { en: 'More from our blog', nl: 'Meer van onze blog' },
  viewAllPosts: { en: 'View all posts', nl: 'Bekijk alle berichten' },
  
  // PulseFlow (flow page) extras
  comingSoonBadge: { en: 'Coming Soon - In Development', nl: 'Binnenkort beschikbaar - In ontwikkeling' },
  beFirstToKnowTitle: { en: 'Be the first to know', nl: 'Wees als eerste op de hoogte' },
  crmInDevDesc: { en: 'PulseFlow is currently in development. Sign up to be notified when we launch and get exclusive early access to our beta program.', nl: 'PulseFlow is momenteel in ontwikkeling. Meld je aan om een bericht te krijgen bij lancering en ontvang exclusieve vroege toegang tot ons betaprogramma.' },
  notifyMe: { en: 'Notify Me', nl: 'Houd me op de hoogte' },

  // Domain redirect popup
  domainRedirectTitle: { en: 'We have a new website!', nl: 'We hebben een nieuwe website!' },
  domainRedirectMessage: { en: 'PulseGuard has moved to our new unified platform at ipulse.one. You will be redirected to our new site where you can find all iPulse services.', nl: 'PulseGuard is verhuisd naar ons nieuwe uniforme platform op ipulse.one. Je wordt doorgestuurd naar onze nieuwe site waar je alle iPulse diensten kunt vinden.' },
  domainRedirectButton: { en: 'Go to ipulse.one', nl: 'Ga naar ipulse.one' },
  domainRedirectCancel: { en: 'Stay here', nl: 'Blijf hier' },
};

// Translation function
export const translate = (key: string, language: Language): string => {
  return translations[key]?.[language] || key;
};

