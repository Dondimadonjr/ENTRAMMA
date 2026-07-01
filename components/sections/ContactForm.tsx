'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { quoteWhatsappUrl, type QuoteFormValues } from '@/lib/whatsapp';

import * as Select from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';

const inputClass =
  'mt-1.5 w-full rounded-[14px] border border-white/15 bg-black/[0.18] px-3 py-2.5 text-sm text-[var(--text)] outline-none transition duration-200 placeholder:text-white/45 focus:border-blue-300/60 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.18)] md:py-3 md:text-base';

export function ContactForm() {
  const { register, setValue, handleSubmit } = useForm<QuoteFormValues>({
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

        <Select.Root
          onValueChange={(value) =>
            setValue('lugar', value)
          }
        >

          <Select.Trigger
            className="
              mt-2
              flex
              h-[64px]
              w-full
              items-center
              justify-between

              rounded-2xl
              border
              border-white/10

              bg-[#08111d]/90
              px-5

              text-left
              text-white
              font-semibold

              transition

              hover:border-blue-500/40
              focus:ring-4
              focus:ring-blue-500/15
            "
          >
            <Select.Value placeholder="Selecciona..." />

            <Select.Icon>
              <ChevronDown size={18} />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>

            <Select.Content
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10

                bg-[#091321]
                backdrop-blur-xl

                shadow-2xl
              "
            >

              <Select.Viewport className="p-2">

                {[
                  'Balcón',
                  'Ventana',
                  'Terraza / Patio',
                  'Escalera',
                  'Mascotas',
                  'Otro',
                ].map((item) => (

                  <Select.Item
                    key={item}
                    value={item}
                    className="
                      cursor-pointer
                      rounded-xl

                      px-4
                      py-3

                      text-white

                      outline-none

                      hover:bg-white/5
                    "
                  >
                    <Select.ItemText>
                      {item}
                    </Select.ItemText>
                  </Select.Item>

                ))}

              </Select.Viewport>

            </Select.Content>

          </Select.Portal>

        </Select.Root>
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
