import { AppWindow, Home, ShieldCheck, Trees, TriangleAlert, Wrench } from 'lucide-react';

export const business = {
  name: 'Entramma',
  shortName: 'Entramma',
  area: 'Region Metropolitana',
  phone: '+56 9 7208 6522',
  whatsapp: '56972086522',
  email: 'contacto@entramma.cl',
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
  { title: 'Balcones', description: 'Proteccion discreta para departamentos y edificios, con tensado firme y terminaciones limpias.', icon: Home },
  { title: 'Ventanas', description: 'Seguridad para ninos y mascotas sin bloquear la luz natural ni afectar la vista.', icon: AppWindow },
  { title: 'Terrazas y patios', description: 'Soluciones adaptadas a barandas, muros y estructuras existentes en espacios abiertos.', icon: Trees },
  { title: 'Escaleras', description: 'Prevencion de caidas en interiores, exteriores y zonas comunes de alto transito.', icon: TriangleAlert },
  { title: 'Piscinas', description: 'Mayor tranquilidad en espacios recreativos, con evaluacion segun accesos y entorno.', icon: ShieldCheck },
  { title: 'Reparacion / recambio', description: 'Mantencion, tensado y renovacion de instalaciones que requieren ajuste o refuerzo.', icon: Wrench }
];

export const homeQuoteHighlight = {
  title: 'Presupuesto a domicilio GRATIS',
  description: 'La visita no tiene costo ni compromiso. Durante la visita se toman las medidas, se revisa la instalacion y se entrega el presupuesto.'
};

export const materialInfo = {
  title: 'Malla monofilamento de alta resistencia',
  items: [
    'Disponible en grosor 0,70 mm y 0,80 mm.',
    'Material de alta resistencia para proteccion en balcones, ventanas, terrazas y escaleras.',
    'Instalacion profesional con fijaciones de calidad.'
  ]
};

export const immediateDiscount = {
  title: '10% de descuento por instalacion inmediata',
  description: 'Si el trabajo corresponde a un cambio de malla o una instalacion pequena, y el tecnico cuenta con los materiales necesarios en ese momento, el trabajo puede realizarse inmediatamente con un 10% de descuento.',
  note: 'El beneficio esta sujeto a la disponibilidad de materiales y aplica unicamente a trabajos pequenos.'
};

export const formDiscountNote = 'Sabias que? Si tu instalacion es pequena y el tecnico cuenta con los materiales necesarios, podras realizar el trabajo el mismo dia y obtener un 10% de descuento.';

export const gallery = [
  { src: '/img/imagen-1.jpg', alt: 'Instalacion con nylon transparente en balcon de departamento' },
  { src: '/img/imagen-2.jpg', alt: 'Instalacion discreta en ventana residencial' },
  { src: '/img/imagen-3.jpg', alt: 'Malla de seguridad instalada en terraza en la Region Metropolitana' },
  { src: '/img/imagen-4.jpg', alt: 'Malla de seguridad instalada en balcon con vista panoramica' },
  { src: '/img/imagen-5.jpg', alt: 'Malla de seguridad instalada en ventana corrediza' },
  { src: '/img/imagen-6.jpg', alt: 'Instalacion en balcon con perfiles y tensores' }
];

export const faqs = [
  { question: 'El resultado se ve muy invasivo?', answer: 'Trabajamos con nylon transparente y una instalacion prolija para mantener luz, vista y una terminacion discreta.' },
  { question: 'Como confirman las medidas?', answer: 'Primero entregamos una estimacion y luego un maestro realiza la visita tecnica para rectificar dimensiones y condiciones del lugar.' },
  { question: 'El presupuesto a domicilio tiene costo?', answer: 'No. La visita para evaluar e instalar la cotizacion es completamente gratuita y sin compromiso.' },
  { question: 'Que tipo de malla utilizan?', answer: 'Trabajamos con malla monofilamento de alta resistencia en espesores de 0,70 mm y 0,80 mm.' },
  { question: 'Puedo obtener un descuento?', answer: 'Si. Si es un cambio de malla o una instalacion pequena y el tecnico dispone de los materiales necesarios, podemos realizar el trabajo inmediatamente con un 10% de descuento.' },
  { question: 'Que espacios pueden evaluar?', answer: 'Balcones, ventanas, terrazas, escaleras, piscinas, patios y otros puntos donde exista riesgo de caida o acceso no deseado.' },
  { question: 'Trabajan fuera de la Region Metropolitana?', answer: 'Atendemos principalmente la Region Metropolitana y evaluamos proyectos en comunas cercanas o zonas costeras segun alcance.' },
  { question: 'La instalacion tiene garantia?', answer: 'Si. Entregamos garantia de 1 ano sobre la instalacion y usamos materiales resistentes para uso exterior.' }
];
