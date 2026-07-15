import type { Metadata } from 'next';
import { business } from '@/lib/site';

export const siteMetadata: Metadata = {
  metadataBase: new URL(business.url),

  title: 'Entramma | Instalacion profesional de seguridad en altura',

  description:
    'Instalacion profesional para balcones, ventanas, terrazas, escaleras y piscinas. Presupuesto estimado, visita tecnica, materiales certificados y garantia.',

  keywords: [
    'mallas de seguridad',
    'mallas para balcones',
    'mallas para ventanas',
    'instalacion de mallas',
    'seguridad en altura',
    'Region Metropolitana'
  ],

  icons: {
    icon: 'img/favicon.png',
    shortcut: 'img/favicon.png',
    apple: 'img/apple-touch-icon.png'
  },

  alternates: {
    canonical: business.url
  },

  openGraph: {
    title: 'Entramma | Instalacion profesional de seguridad en altura',
    description:
      'Presupuesto estimado, visita tecnica y materiales certificados para balcones, ventanas, terrazas y otros espacios.',
    url: business.url,
    siteName: business.name,
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: business.ogImage,
        width: 1024,
        height: 680,
        alt: 'Instalacion profesional en balcon con nylon transparente'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Entramma | Seguridad en altura',
    description:
      'Instalacion profesional con visita tecnica, garantia y cobertura en la Region Metropolitana y zonas cercanas.',
    images: [business.ogImage]
  },

  robots: {
    index: true,
    follow: true
  }
};