import { business } from '@/lib/site';
import { getPricingSummary, getServiceTitle, type ServiceTypeId } from '@/lib/quote';

export type QuoteFormValues = {
  serviceType: ServiceTypeId | '';
  nombre: string;
  telefono: string;
  correo?: string;
  direccion: string;
  comuna: string;
  region: string;
  tipoInstalacion: string;
  ancho: string;
  alto: string;
  obstaculosDetalle?: string;
  comentarios?: string;
};

type QuoteWhatsappOptions = {
  caracteristicas: string[];
  photoCount: number;
};

export function whatsappUrl(text: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function quoteWhatsappUrl(values: QuoteFormValues, options: QuoteWhatsappOptions) {
  const email = values.correo?.trim() || 'No indicado';
  const obstacles = values.obstaculosDetalle?.trim()
    ? `\nObstaculos: ${values.obstaculosDetalle.trim()}`
    : '';
  const comments = values.comentarios?.trim() ? `\nComentarios: ${values.comentarios.trim()}` : '';
  const features = options.caracteristicas.length ? options.caracteristicas.join(', ') : 'Sin caracteristicas marcadas';

  return whatsappUrl(
    `Hola, soy ${values.nombre.trim()}. Quiero solicitar un presupuesto estimado.\n` +
      `Servicio: ${getServiceTitle(values.serviceType)}\n` +
      `Criterio de precio: ${getPricingSummary(values.serviceType)}\n` +
      `Telefono: ${values.telefono.trim()}\n` +
      `Correo: ${email}\n` +
      `Direccion: ${values.direccion.trim()}\n` +
      `Comuna: ${values.comuna.trim()}\n` +
      `Region: ${values.region.trim()}\n` +
      `Tipo de instalacion: ${values.tipoInstalacion.trim()}\n` +
      `Medidas aprox: ${values.ancho.trim()} ancho x ${values.alto.trim()} alto\n` +
      `Caracteristicas: ${features}\n` +
      `Fotos adjuntas en formulario: ${options.photoCount}` +
      obstacles +
      comments +
      '\nEntiendo que el presupuesto es estimado y se confirma luego de la visita tecnica.'
  );
}
