import { business } from '@/lib/site';

export type QuoteFormValues = {
  nombre: string;
  comuna: string;
  lugar: string;
  medidas?: string;
  mensaje?: string;
};

export function whatsappUrl(text: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function quoteWhatsappUrl(values: QuoteFormValues) {
  const details = values.mensaje?.trim() ? `\nDetalles: ${values.mensaje.trim()}` : '';
  const measures = values.medidas?.trim() || 'Por confirmar en visita';

  return whatsappUrl(
    `Hola, soy ${values.nombre.trim()}. Quiero cotizar instalacion de mallas de seguridad.\n` +
      `Comuna: ${values.comuna.trim()}\n` +
      `Lugar: ${values.lugar.trim()}\n` +
      `Medidas aprox: ${measures}` +
      details +
      '\nPodemos coordinar visita y medicion gratis?'
  );
}
