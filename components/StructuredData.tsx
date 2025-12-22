import Script from 'next/script';

interface StructuredDataProps {
  type: 'WebApplication' | 'Organization' | 'FAQPage' | 'Product' | 'WebSite' | 'Article';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    switch (type) {
      case 'WebApplication':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: data.name || 'PulseGuard',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: data.price || '0',
            priceCurrency: 'USD',
          },
          description: data.description,
          url: data.url,
          aggregateRating: data.rating && {
            '@type': 'AggregateRating',
            ratingValue: data.rating.value,
            ratingCount: data.rating.count,
          },
          featureList: data.features,
        };

      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name || 'iPulse',
          url: data.url || 'https://ipulse.one',
          logo: data.logo || 'https://ipulse.one/logo.png',
          description: data.description,
          sameAs: data.socialLinks || [],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            email: data.email,
            availableLanguage: ['English', 'Dutch'],
          },
        };

      case 'FAQPage':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions.map((q: { question: string; answer: string }) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };

      case 'Product':
        return {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.name,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: data.description,
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: data.lowPrice || '0',
            highPrice: data.highPrice,
            priceCurrency: 'USD',
            offerCount: data.offerCount || '3',
          },
          aggregateRating: data.rating && {
            '@type': 'AggregateRating',
            ratingValue: data.rating.value,
            ratingCount: data.rating.count,
            bestRating: '5',
            worstRating: '1',
          },
        };

      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name || 'iPulse',
          url: data.url || 'https://ipulse.one',
          description: data.description,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${data.url || 'https://ipulse.one'}/blog?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
          publisher: {
            '@type': 'Organization',
            name: data.name || 'iPulse',
            logo: {
              '@type': 'ImageObject',
              url: data.logo || 'https://ipulse.one/logofinal.png',
            },
          },
        };

      case 'Article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.description || data.excerpt,
          image: data.image,
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          author: {
            '@type': data.authorType || 'Organization',
            name: data.author || 'iPulse Team',
          },
          publisher: {
            '@type': 'Organization',
            name: 'iPulse',
            logo: {
              '@type': 'ImageObject',
              url: 'https://ipulse.one/logofinal.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data.url,
          },
        };

      default:
        return {};
    }
  };

  const schema = generateSchema();

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
