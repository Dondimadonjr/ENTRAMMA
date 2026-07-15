import { ArrowUpRight, Mail, PhoneCall, CalendarClock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { business } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden py-7 md:py-20"
    >
      {/* Glow fondo */}
      <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]" />

      <Container className="relative">
        {/* Header */}
        <div className="mb-4 max-w-2xl md:mb-10">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-blue-200 md:px-4 md:py-2 md:text-sm">
            Contacto
          </span>

          <h2 className="mt-2.5 text-[clamp(26px,7vw,34px)] font-black leading-[1.05] md:mt-4 md:text-[clamp(26px,4vw,44px)]">
            Solicita una estimacion y coordinemos la{' '}
            <span className="bg-[linear-gradient(90deg,#93c5fd,#86efac)] bg-clip-text text-transparent">
              visita tecnica
            </span>
          </h2>

          <p className="mt-2.5 max-w-[62ch] text-[13px] leading-5 text-[var(--muted)] md:mt-4 md:text-base md:leading-[1.8]">
            Cuentanos lo esencial para preparar un presupuesto referencial. Luego verificamos medidas y condiciones en
            terreno antes de confirmar la propuesta final.
          </p>
        </div>

        <div className="grid gap-3 md:gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Card izquierda */}
          <Card
            className="
              group
              relative
              overflow-hidden
              p-3
              md:p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-blue-400/20
              hover:shadow-[0_30px_80px_rgba(37,99,235,.12)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-green-400/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <h3 className="text-xl font-black md:text-2xl">
                Hablemos
              </h3>

              <p className="mt-1.5 text-[13px] text-[var(--muted)] md:mt-2 md:text-sm">
                Respuesta rapida durante horario laboral.
              </p>

              <div className="mt-4 space-y-2.5 md:mt-8 md:space-y-4">

                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-2.5 transition hover:bg-white/[0.05] md:rounded-2xl md:p-4">
                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-blue-500/10 p-2.5 md:rounded-xl md:p-3">
                      <PhoneCall
                        size={18}
                        className="text-blue-300"
                      />
                    </div>

                    <div>
                      <div className="text-xs text-[var(--muted)]">
                        WhatsApp
                      </div>

                      <div className="font-semibold">
                        {business.phone}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-2.5 transition hover:bg-white/[0.05] md:rounded-2xl md:p-4">
                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-green-500/10 p-2.5 md:rounded-xl md:p-3">
                      <Mail
                        size={18}
                        className="text-green-300"
                      />
                    </div>

                    <div>
                      <div className="text-xs text-[var(--muted)]">
                        Correo
                      </div>

                      <div className="font-semibold">
                        {business.email}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-2.5 transition hover:bg-white/[0.05] md:mt-6 md:rounded-2xl md:p-4">
                <div className="flex items-center gap-3">

                  <div className="rounded-lg bg-amber-500/10 p-2.5 md:rounded-xl md:p-3">
                    <CalendarClock
                      size={18}
                      className="text-amber-300"
                    />
                  </div>

                  <div>
                    <div className="text-xs text-[var(--muted)]">
                      Horario
                    </div>

                    <div className="font-semibold">
                      {business.hours}
                    </div>
                  </div>

                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2.5 md:mt-8 md:gap-3">

                <Button
                  href={whatsappUrl(
                    'Hola, quiero solicitar un presupuesto estimado y agendar una visita tecnica.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="full"
                >
                  Escribir por WhatsApp
                  <ArrowUpRight size={18} />
                </Button>

                <Button
                  href={`mailto:${business.email}`}
                  variant="ghost"
                  size="full"
                >
                  Enviar correo
                </Button>

              </div>

              <p className="mt-4 text-center text-xs text-[var(--muted)] md:mt-5">
                Instagram · {business.instagram}
              </p>

            </div>
          </Card>

          {/* Formulario */}
          <div className="transition duration-500 hover:-translate-y-1">
            <ContactForm />
          </div>

        </div>
      </Container>
    </section>
  );
}
