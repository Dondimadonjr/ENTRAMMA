import { AppWindow, Home, ShieldCheck, Trees, TriangleAlert, Wrench } from 'lucide-react';

export const business = {
  name: 'Mallas de Seguridad',
  shortName: 'Mallas de Seguridad',
  area: 'Santiago',
  phone: '+56 9 7208 6522',
  whatsapp: '56972086522',
  email: 'mallasdeseguridad@gmail.com',
  hours: '9:00 a 18:00',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mallasdeseguridad.cl',
  ogImage: '/img/imagen-1.jpg',
  instagram: '@mallasdeseguridad'
};

export const navItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#precios', label: 'Precios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contacto', label: 'Contacto' }
];

export const services = [
  { title: 'Balcones', description: 'Mallas para balcones con fijacion firme y estetica discreta.', icon: Home },
  { title: 'Ventanas', description: 'Mallas para ventanas que mantienen ventilacion y luz natural.', icon: AppWindow },
  { title: 'Terrazas y patios', description: 'Instalacion de mallas segun medidas y condiciones del lugar.', icon: Trees },
  { title: 'Escaleras', description: 'Prevencion de caidas en zonas interiores o comunes.', icon: TriangleAlert },
  { title: 'Mallas para mascotas', description: 'Ideal para gatos: seguridad sin perder vista ni aire.', icon: ShieldCheck },
  { title: 'Reparacion / recambio', description: 'Recambio de mallas, tensado, refuerzos y mantenciones.', icon: Wrench }
];

export const gallery = [
  { src: '/img/imagen-1.jpg', alt: 'Malla de seguridad instalada en balcon en Santiago' },
  { src: '/img/imagen-2.jpg', alt: 'Malla de seguridad instalada en ventana en Santiago' },
  { src: '/img/imagen-3.jpg', alt: 'Malla de seguridad instalada en terraza en la Region Metropolitana' },
  { src: '/img/imagen-4.jpg', alt: 'Malla de seguridad instalada en balcon con vista panoramica' },
  { src: '/img/imagen-5.jpg', alt: 'Malla de seguridad instalada en ventana corrediza' },
  { src: '/img/imagen-6.jpg', alt: 'Malla de seguridad instalada en balcon con perfiles y tensores en Santiago' }
];

export const faqs = [
  { question: 'La malla de seguridad se nota?', answer: 'Usamos nylon transparente, se ve discreta y mantiene la luz.' },
  { question: 'La instalacion de mallas es segura?', answer: 'Si, trabajamos con arneses y equipo de seguridad para instalaciones en altura.' },
  { question: 'Instalan mallas para balcones y ventanas?', answer: 'Si, instalamos mallas para balcones, ventanas, terrazas, escaleras y mascotas.' },
  { question: 'Atienden mallas de seguridad en Santiago?', answer: 'Si, atendemos en todo Santiago con visita y medicion gratis.' },
  { question: 'Tiene garantia?', answer: 'Si: 1 ano de garantia sobre la instalacion.' }
];
