import { siteConfig } from '@/config/siteConfig';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteConfig.business.name,
    image: 'https://new-era-beauty-clinic.manus.space/og-image.jpg',
    description: siteConfig.business.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.county,
      postalCode: siteConfig.business.address.postcode,
      addressCountry: siteConfig.business.address.country,
    },
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    url: 'https://new-era-beauty-clinic.manus.space',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.trust.rating,
      reviewCount: parseInt(String(siteConfig.trust.reviews).replace('+', '')),
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.coordinates.lat,
      longitude: siteConfig.business.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Monday',
        opens: siteConfig.hours.monday.open,
        closes: siteConfig.hours.monday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Tuesday',
        opens: siteConfig.hours.tuesday.open,
        closes: siteConfig.hours.tuesday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Wednesday',
        opens: siteConfig.hours.wednesday.open,
        closes: siteConfig.hours.wednesday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Thursday',
        opens: siteConfig.hours.thursday.open,
        closes: siteConfig.hours.thursday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: siteConfig.hours.friday.open,
        closes: siteConfig.hours.friday.close,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: siteConfig.hours.saturday.open,
        closes: siteConfig.hours.saturday.close,
      },
    ],
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteConfig.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  price: number
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'BeautySalon',
      name: siteConfig.business.name,
      url: 'https://new-era-beauty-clinic.manus.space',
    },
    priceRange: `£${price}+`,
    areaServed: {
      '@type': 'City',
      name: siteConfig.business.address.city,
    },
  };
}

export function setMetaTags(
  title: string,
  description: string,
  keywords?: string[],
  ogImage?: string
) {
  // Title
  document.title = title;

  // Description
  let descriptionTag = document.querySelector('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('name', 'description');
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.setAttribute('content', description);

  // Keywords
  if (keywords && keywords.length > 0) {
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', keywords.join(', '));
  }

  // OG Tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', description);

  if (ogImage) {
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) ogImageTag.setAttribute('content', ogImage);
  }

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', window.location.href);
}

export function setJsonLd(schema: Record<string, unknown>) {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}
