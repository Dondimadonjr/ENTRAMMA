import type { Metadata } from 'next';
import { business } from '@/lib/site';

export const siteMetadata: Metadata = {
  metadataBase: new URL(business.url),
  title: 'Mallas de Seguridad en Santiago | Instalacion Profesional',
  description:
    'Instalacion de mallas de seguridad para balcones y ventanas en Santiago y la Region Metropolitana. Nylon transparente, visita y medicion gratis, garantia de 1 ano.',
  keywords: [
    'mallas de seguridad',
    'mallas para balcones',
    'mallas para ventanas',
    'instalacion de mallas',
    'mallas de seguridad santiago',
    'Region Metropolitana'
  ],
  alternates: {
    canonical: business.url
  },
  openGraph: {
    title: 'Mallas de Seguridad en Santiago',
    description: 'Instalacion profesional de mallas para balcones y ventanas en Santiago y la Region Metropolitana.',
    url: business.url,
    siteName: business.name,
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: business.ogImage,
        width: 1024,
        height: 680,
        alt: 'Mallas de seguridad instaladas en balcon en Santiago'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallas de Seguridad Santiago',
    description: 'Instalacion profesional de mallas de seguridad para balcones y ventanas en Santiago.',
    images: [business.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};
