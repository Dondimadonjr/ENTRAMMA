import type { Metadata } from 'next';
import { business } from '@/lib/site';

export const siteMetadata: Metadata = {
  metadataBase: new URL(business.url),

  title: 'Entramma | Instalación profesional de seguridad en altura',

  description:
    'Instalación profesional para balcones, ventanas, terrazas, escaleras y piscinas. Presupuesto estimado, visita técnica, materiales certificados y garantía.',

  keywords: [
    'mallas de seguridad',
    'mallas para balcones',
    'mallas para ventanas',
    'instalación de mallas',
    'seguridad en altura',
    'Región Metropolitana'
  ],

  icons: {
    icon: 'img/favicon1.png',
    shortcut: 'img/favicon1.png',
    apple: 'img/apple-touch-icon.png'
  },

  alternates: {
    canonical: business.url
  },

  openGraph: {
    title: 'Entramma | Instalación profesional de seguridad en altura',
    description:
      'Presupuesto estimado, visita técnica y materiales certificados para balcones, ventanas, terrazas y otros espacios.',
    url: business.url,
    siteName: business.name,
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: business.ogImage,
        width: 1024,
        height: 680,
        alt: 'Instalación profesional en balcón con malla transparente'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Entramma | Seguridad en altura',
    description:
      'Instalación profesional con visita técnica, garantía y cobertura en la Región Metropolitana y zonas cercanas.',
    images: [business.ogImage]
  },

  robots: {
    index: true,
    follow: true
  }
};