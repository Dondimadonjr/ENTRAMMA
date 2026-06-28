import type { Metadata } from 'next';
import { business } from '@/lib/site';

export const siteMetadata: Metadata = {
  metadataBase: new URL(business.url),
  title: 'Mallas de Seguridad en Lo Barnechea y Santiago | Instalacion Profesional',
  description:
    'Instalacion de mallas de seguridad para balcones y ventanas en Lo Barnechea y Santiago. Nylon transparente, visita y medicion gratis, garantia de 1 ano.',
  keywords: [
    'mallas de seguridad',
    'mallas para balcones',
    'mallas para ventanas',
    'instalacion de mallas',
    'mallas de seguridad santiago',
    'Lo Barnechea'
  ],
  alternates: {
    canonical: business.url
  },
  openGraph: {
    title: 'Mallas de Seguridad en Lo Barnechea',
    description: 'Instalacion profesional de mallas para balcones y ventanas en Lo Barnechea y Santiago.',
    url: business.url,
    siteName: business.name,
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: business.ogImage,
        width: 1024,
        height: 680,
        alt: 'Mallas de seguridad instaladas en balcon en Lo Barnechea'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallas de Seguridad Lo Barnechea',
    description: 'Instalacion profesional de mallas de seguridad para balcones y ventanas en Santiago.',
    images: [business.ogImage]
  },
  robots: {
    index: true,
    follow: true
  }
};
