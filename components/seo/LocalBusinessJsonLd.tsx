import { business, faqs } from '@/lib/site';

export function LocalBusinessJsonLd() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    url: business.url,
    telephone: business.phone,
    email: business.email,
    areaServed: ['Region Metropolitana', 'Localidades cercanas', 'Zonas costeras segun evaluacion'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Region Metropolitana',
      addressRegion: 'Region Metropolitana',
      addressCountry: 'CL'
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '$$',
    image: `${business.url}${business.ogImage}`,
    description:
      'Instalacion profesional para balcones, ventanas, terrazas, escaleras, piscinas y otros espacios, con visita tecnica y presupuesto estimado.',
    makesOffer: [
      'mallas de seguridad',
      'mallas para balcones',
      'mallas para ventanas',
      'instalacion de mallas'
    ]
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
