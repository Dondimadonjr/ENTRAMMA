import { AppWindow, Home, ShieldCheck, Trees, TriangleAlert, Wrench } from 'lucide-react';

export const business = {
  name: 'Entramma',
  shortName: 'Entramma',
  area: 'Región Metropolitana',
  phone: '+56 9 7208 6522',
  whatsapp: '56972086522',
  email: 'entramma.seguridad@gmail.com',
  hours: '9:00 a 18:00',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mallasdeseguridad.cl',
  ogImage: '/img/imagen-1.jpg',
  instagram: '@mallasdeseguridad'
};

export const navItems = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#precios', label: 'Precios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contacto', label: 'Contacto' }
];

export const services = [
  { title: 'Balcones', description: 'Protección discreta para departamentos y edificios, con tensado firme y terminaciones limpias.', icon: Home },
  { title: 'Ventanas', description: 'Seguridad para niños y mascotas, sin bloquear la luz natural ni afectar la vista.', icon: AppWindow },
  { title: 'Terrazas y patios', description: 'Soluciones adaptadas a barandas, muros y estructuras existentes en espacios abiertos.', icon: Trees },
  { title: 'Escaleras', description: 'Prevención de caídas en interiores, exteriores y zonas comunes de alto tránsito.', icon: TriangleAlert },
  { title: 'Piscinas', description: 'Mayor tranquilidad en espacios recreativos, con evaluación según accesos y entorno.', icon: ShieldCheck },
  { title: 'Reparación / recambio', description: 'Mantención, tensado y renovación de instalaciones que requieren ajuste o refuerzo.', icon: Wrench }
];

export const homeQuoteHighlight = {
  title: 'Visita a domicilio sin costo',
  description: 'La visita no tiene costo ni compromiso. Durante ella se revisan las medidas, la instalación y se entrega el presupuesto.'
};

export const materialInfo = {
  title: 'Malla monofilamento de alta resistencia',
  items: [
    'Disponible en grosores de 0,70 mm y 0,80 mm.',
    'Material de alta resistencia para protección en balcones, ventanas, terrazas y escaleras.',
    'Instalación profesional con fijaciones de calidad.'
  ]
};

export const immediateDiscount = {
  title: '10% de descuento por instalación inmediata',
  description: 'Si el trabajo corresponde a un cambio de malla o una instalación pequeña, y el técnico cuenta con los materiales necesarios en ese momento, el trabajo puede realizarse de inmediato con un 10% de descuento.',
  note: 'El beneficio está sujeto a la disponibilidad de materiales y aplica únicamente a trabajos pequeños.'
};

export const formDiscountNote = '¿Sabías que? Si tu instalación es pequeña y el técnico cuenta con los materiales necesarios, podrás realizar el trabajo el mismo día y obtener un 10% de descuento.';

export const gallery = [
  { src: '/img/imagen-1.jpg', alt: 'Instalación con malla transparente en balcón de departamento' },
  { src: '/img/imagen-2.jpg', alt: 'Instalación discreta en ventana residencial' },
  { src: '/img/imagen-3.jpg', alt: 'Malla de seguridad instalada en terraza en la Región Metropolitana' },
  { src: '/img/imagen-4.jpg', alt: 'Malla de seguridad instalada en balcón con vista panorámica' },
  { src: '/img/imagen-5.jpg', alt: 'Malla de seguridad instalada en ventana corrediza' },
  { src: '/img/imagen-6.jpg', alt: 'Instalación en balcón con perfiles y tensores' }
];

export const faqs = [
  { question: '¿El resultado se ve muy invasivo?', answer: 'Trabajamos con malla transparente y una instalación prolija para mantener luz, vista y una terminación discreta.' },
  { question: '¿Cómo confirman las medidas?', answer: 'Primero entregamos una estimación y luego un especialista realiza la visita técnica para rectificar dimensiones y condiciones del lugar.' },
  { question: '¿El presupuesto a domicilio tiene costo?', answer: 'No. La visita para evaluar e instalar la cotización es completamente gratuita y sin compromiso.' },
  { question: '¿Qué tipo de malla utilizan?', answer: 'Trabajamos con malla monofilamento de alta resistencia en grosores de 0,70 mm y 0,80 mm.' },
  { question: '¿Puedo obtener un descuento?', answer: 'Sí. Si es un cambio de malla o una instalación pequeña y el técnico dispone de los materiales necesarios, podemos realizar el trabajo de inmediato con un 10% de descuento.' },
  { question: '¿Qué espacios pueden evaluar?', answer: 'Balcones, ventanas, terrazas, escaleras, piscinas, patios y otros puntos donde exista riesgo de caída o acceso no deseado.' },
  { question: '¿Trabajan fuera de la Región Metropolitana?', answer: 'Atendemos principalmente la Región Metropolitana y evaluamos proyectos en comunas cercanas o zonas costeras, según alcance.' },
  { question: '¿La instalación tiene garantía?', answer: 'Sí. Entregamos garantía de 1 año sobre la instalación y usamos materiales resistentes para uso exterior.' }
];
