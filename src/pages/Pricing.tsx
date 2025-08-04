import React from 'react';
import Layout from '../components/layout/Layout';
import SEOHead from '../components/layout/SEOHead';
import PricingComponent from '../components/ui/Pricing';

const Pricing: React.FC = () => {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PulseGuard Pricing - Affordable Monitoring Plans",
    "description": "Transparent pricing for professional website monitoring, server monitoring, and infrastructure monitoring. Free plan available with paid upgrades for advanced features.",
    "url": "https://pulseguard.pro/pricing",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "PulseGuard",
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Plan",
          "description": "Perfect for personal projects and small websites. Monitor up to 5 websites with basic features.",
          "price": "0",
          "priceCurrency": "EUR",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "category": "Freemium",
          "businessFunction": "https://schema.org/LeaseOut",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": "5",
            "unitText": "monitors"
          },
          "includesObject": [
            {
              "@type": "TypeAndQuantityNode",
              "amountOfThisGood": "5",
              "typeOfGood": "Website Monitors"
            },
            {
              "@type": "TypeAndQuantityNode", 
              "amountOfThisGood": "Unlimited",
              "typeOfGood": "Email Notifications"
            },
            {
              "@type": "TypeAndQuantityNode",
              "amountOfThisGood": "Basic",
              "typeOfGood": "SSL Monitoring"
            }
          ]
        },
        {
          "@type": "Offer",
          "name": "Starter Plan",
          "description": "Ideal for growing businesses. Enhanced monitoring with more endpoints and advanced notification options.",
          "price": "9",
          "priceCurrency": "EUR",
          "billingIncrement": "Month",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "category": "Professional",
          "businessFunction": "https://schema.org/LeaseOut",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": "25",
            "unitText": "monitors"
          }
        },
        {
          "@type": "Offer", 
          "name": "Professional Plan",
          "description": "Advanced monitoring with extended features for serious businesses and development teams.",
          "price": "29",
          "priceCurrency": "EUR",
          "billingIncrement": "Month",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "category": "Professional",
          "businessFunction": "https://schema.org/LeaseOut",
          "eligibleQuantity": {
            "@type": "QuantitativeValue",
            "value": "100",
            "unitText": "monitors"
          }
        },
        {
          "@type": "Offer",
          "name": "Enterprise Plan",
          "description": "Custom solutions for large organizations with dedicated support and advanced features.",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "category": "Enterprise",
          "businessFunction": "https://schema.org/LeaseOut",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "EUR",
            "name": "Custom Pricing"
          }
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pulseguard.pro/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://pulseguard.pro/pricing"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does website monitoring cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PulseGuard offers a free plan for up to 5 monitors, perfect for personal projects. Paid plans start at €9/month for 25 monitors (Starter), €29/month for 100 monitors (Professional), and custom enterprise pricing for larger organizations."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial for PulseGuard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our free plan includes monitoring for up to 5 websites permanently. You can also try our paid features with a 14-day free trial, no credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through Stripe."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change my plan anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated amount immediately. When downgrading, the change takes effect at the end of your current billing cycle."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer enterprise discounts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer custom enterprise pricing for organizations monitoring 500+ endpoints. Contact our sales team for volume discounts, custom SLAs, and dedicated support options."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Affordable Website Monitoring Pricing - Server Monitoring Plans | PulseGuard Cost"
        description="Transparent pricing for professional website monitoring and server monitoring. Free plan for 5 monitors, paid plans from €9/month. Compare features and costs for uptime monitoring, SSL tracking, and infrastructure monitoring solutions."
        keywords="monitoring pricing, website monitoring cost, server monitoring plans, uptime monitoring price, monitoring service pricing, infrastructure monitoring cost, affordable monitoring solution, website monitoring subscription, monitoring plans comparison, monitoring software pricing, uptime monitoring cost, SSL monitoring pricing, server monitoring cost, cheap website monitoring, budget monitoring solution, monitoring service fees"
        canonicalUrl="https://pulseguard.pro/pricing"
        structuredData={pricingStructuredData}
        breadcrumbData={breadcrumbData}
        faqData={faqData}
      />
      <Layout>
        <div className="pt-20">
          <PricingComponent />
        </div>
      </Layout>
    </>
  );
};

export default Pricing; 