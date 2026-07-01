'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { quoteWhatsappUrl, type QuoteFormValues } from '@/lib/whatsapp';

const inputClass =
  'mt-1.5 w-full rounded-[14px] border border-white/15 bg-black/[0.18] px-3 py-3 text-[var(--text)] outline-none transition duration-200 placeholder:text-white/45 focus:border-blue-300/60 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18)]';

export function ContactForm() {
  const { register, handleSubmit } = useForm<QuoteFormValues>({
    defaultValues: {
      comuna: 'Santiago'
    }
  });

  function onSubmit(values: QuoteFormValues) {
    window.open(quoteWhatsappUrl(values), '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      className="rounded-[var(--radius2)] border border-[var(--line)] bg-white/[0.06] p-[18px] shadow-[var(--shadow)]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-lg font-black">Cotizacion rapida</h3>

      <label className="mt-2.5 block font-extrabold">
        Nombre
        <input className={inputClass} type="text" placeholder="Tu nombre" required {...register('nombre')} />
      </label>

      <label className="mt-2.5 block font-extrabold">
        Comuna
        <input className={inputClass} type="text" placeholder="Santiago" required {...register('comuna')} />
      </label>

      <label className="mt-2.5 block font-extrabold">
        Donde instalar?
        <select className={inputClass} required {...register('lugar')}>
          <option value="">Selecciona...</option>
          <option>Balcon</option>
          <option>Ventana</option>
          <option>Terraza / Patio</option>
          <option>Escalera</option>
          <option>Mascotas</option>
          <option>Otro</option>
        </select>
      </label>

      <label className="mt-2.5 block font-extrabold">
        Medidas aproximadas (opcional)
        <input className={inputClass} type="text" placeholder="2,0m alto x 3,0m ancho" {...register('medidas')} />
      </label>

      <label className="mt-2.5 block font-extrabold">
        Mensaje (opcional)
        <textarea
          className={inputClass}
          rows={4}
          placeholder="Cuentanos detalles (piso, tipo de balcon, etc.)"
          {...register('mensaje')}
        />
      </label>

      <Button
        className="mt-5"
        type="submit"
        variant="primary"
        size="full"
        {...analyticsAttrs(analyticsEvents.formSubmit)}
      >
        Enviar por WhatsApp
      </Button>
    </form>
  );
}
