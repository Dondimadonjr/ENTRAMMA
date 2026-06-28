import type { QuoteFormValues } from '@/lib/whatsapp';

export type CotizacionInsert = QuoteFormValues & {
  telefono?: string;
  origen?: 'web' | 'whatsapp' | 'admin';
};

export type Cotizacion = CotizacionInsert & {
  id: string;
  estado: 'nueva' | 'contactada' | 'agendada' | 'cerrada' | 'perdida';
  created_at: string;
};
