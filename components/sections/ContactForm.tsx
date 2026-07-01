'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { quoteWhatsappUrl, type QuoteFormValues } from '@/lib/whatsapp';

const inputClass =
  'mt-1.5 w-full rounded-[14px] border border-white/15 bg-black/[0.18] px-3 py-2.5 text-sm text-[var(--text)] outline-none transition duration-200 placeholder:text-white/45 focus:border-blue-300/60 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18)] md:py-3 md:text-base';

export function ContactForm() {
  const { register, handleSubmit } = useForm<QuoteFormValues>({
    defaultValues: {
      comuna: ''
    }
  });

  function onSubmit(values: QuoteFormValues) {
    window.open(quoteWhatsappUrl(values), '_blank', 'noopener,noreferrer');
  }

  return (
    <form
      className="rounded-[var(--radius2)] border border-[var(--line)] bg-white/[0.06] p-4 shadow-[var(--shadow)] md:p-[18px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-lg font-black">Cotizacion rapida</h3>

      <label className="mt-2.5 block text-sm font-extrabold md:text-base">
        Nombre
        <input className={inputClass} type="text" placeholder="Tu nombre" required {...register('nombre')} />
      </label>

      <label className="mt-2.5 block text-sm font-extrabold md:text-base">
        Comuna
        <input className={inputClass} type="text" placeholder="Santiago" required {...register('comuna')} />
      </label>

      <label className="mt-2.5 block text-sm font-extrabold md:text-base">
        Donde instalar?

        <div className="relative mt-2">
          <select
            className={`
              ${inputClass}

              appearance-none
              cursor-pointer
              pr-14

              text-white
              font-semibold

              hover:border-blue-500/30
              focus:border-blue-500
            `}
            required
            {...register('lugar')}
          >
            <option value="">Selecciona...</option>
            <option value="Balcon">Balcón</option>
            <option value="Ventana">Ventana</option>
            <option value="Terraza">Terraza / Patio</option>
            <option value="Escalera">Escalera</option>
            <option value="Mascotas">Mascotas</option>
            <option value="Otro">Otro</option>
          </select>

          <div
            className="
              pointer-events-none
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              text-white/40
              text-xs
            "
          >
            ▼
          </div>
        </div>
      </label>

      <label className="mt-2.5 block text-sm font-extrabold md:text-base">
        Medidas aproximadas (opcional)
        <input className={inputClass} type="text" placeholder="2,0m alto x 3,0m ancho" {...register('medidas')} />
      </label>

      <label className="mt-2.5 block text-sm font-extrabold md:text-base">
        Mensaje (opcional)
        <textarea
          className={inputClass}
          rows={3}
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
