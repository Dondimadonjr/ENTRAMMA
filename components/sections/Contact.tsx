import { ArrowUpRight, Mail, PhoneCall } from 'lucide-react';
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
      className="relative overflow-hidden py-20 scroll-mt-20"
    >
      {/* Glow fondo */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

      <Container className="relative">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-blue-200">
            Contacto
          </span>

          <h2 className="mt-4 text-[clamp(30px,4vw,44px)] font-black leading-[1.05]">
            Agenda tu visita y recibe una{' '}
            <span className="bg-[linear-gradient(90deg,#93c5fd,#86efac)] bg-clip-text text-transparent">
              cotización rápida
            </span>
          </h2>

          <p className="mt-4 max-w-[62ch] text-[var(--muted)] leading-[1.8]">
            Cuéntanos dónde necesitas instalar y coordinamos una visita sin costo
            para medir y entregarte una propuesta.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Card izquierda */}
          <Card
            className="
              group
              relative
              overflow-hidden
              p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-blue-400/20
              hover:shadow-[0_30px_80px_rgba(37,99,235,.12)]
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-green-400/[0.03] opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative">
              <h3 className="text-2xl font-black">
                Hablemos
              </h3>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Respuesta rápida durante horario laboral.
              </p>

              <div className="mt-8 space-y-4">

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-blue-500/10 p-3">
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

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]">
                  <div className="flex items-center gap-3">

                    <div className="rounded-xl bg-green-500/10 p-3">
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

              <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="text-xs text-[var(--muted)]">
                  Horario
                </div>

                <div className="mt-1 font-semibold">
                  {business.hours}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">

                <Button
                  href={whatsappUrl(
                    'Hola, quiero agendar una visita para cotizar mallas de seguridad.'
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

              <p className="mt-5 text-center text-xs text-[var(--muted)]">
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