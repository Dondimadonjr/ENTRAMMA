import { RefreshCw, ShieldPlus } from 'lucide-react';

export const quotePricing = {
  installation: {
    key: 'installation',
    label: 'Nueva instalacion',
    description: 'Precio calculado como instalacion desde cero.',
    basePricePerM2: 5000
  },
  replacement: {
    key: 'replacement',
    label: 'Cambio de malla',
    description: 'Precio calculado como recambio sobre una estructura existente.',
    basePricePerM2: 4200
  }
} as const;

export const serviceTypes = [
  {
    id: 'installation',
    title: 'Nueva instalacion',
    description: 'Instalaremos una malla donde actualmente no existe.',
    pricingKey: 'installation',
    icon: ShieldPlus
  },
  {
    id: 'replacement',
    title: 'Cambio de malla',
    description: 'Reemplazaremos una malla existente por una nueva.',
    pricingKey: 'replacement',
    icon: RefreshCw
  }
] as const;

export type ServiceTypeId = (typeof serviceTypes)[number]['id'];
export type QuotePricingKey = keyof typeof quotePricing;

export function getServiceType(serviceTypeId?: string) {
  return serviceTypes.find((serviceType) => serviceType.id === serviceTypeId);
}

export function getServicePricing(serviceTypeId?: string) {
  const serviceType = getServiceType(serviceTypeId);
  return serviceType ? quotePricing[serviceType.pricingKey] : null;
}

export function getServiceTitle(serviceTypeId?: string) {
  return getServiceType(serviceTypeId)?.title || 'No indicado';
}

export function getPricingSummary(serviceTypeId?: string) {
  const pricing = getServicePricing(serviceTypeId);

  if (!pricing) {
    return 'Se definira luego de seleccionar el servicio.';
  }

  return `${pricing.label}: desde $${pricing.basePricePerM2.toLocaleString('es-CL')} CLP / m2. ${pricing.description}`;
}
