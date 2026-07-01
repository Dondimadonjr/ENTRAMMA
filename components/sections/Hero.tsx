import { ArrowRight, Check, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { whatsappUrl } from '@/lib/whatsapp';

const trustItems = [
  'Garantía 1 año',
  'Instalación profesional',
  'Protección niños y mascotas',
  'Cobertura Santiago',
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-15">

      {/* Glow fondo */}
    <div className="absolute left-[10%] top-[10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-[5%] top-[35%] h-[280px] w-[280px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">

        {/* IZQUIERDA */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[13px] text-blue-200">
            <ShieldCheck size={14} />
            Visita y medición gratuita
          </div>

          <h1 className="mt-5 text-[clamp(40px,6vw,68px)] font-black leading-[0.95]">
            Protege tu hogar con
            <span className="mt-2 block bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              mallas de seguridad
            </span>
          </h1>

          <p className="mt-6 max-w-[650px] text-lg leading-8 text-[var(--muted)]">
            Instalación profesional para
            <strong className="text-white">
              {' '}balcones, ventanas y terrazas
            </strong>
            {' '}con materiales resistentes, terminaciones limpias y atención rápida.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href={whatsappUrl(
                'Hola, quiero cotizar instalación de mallas.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              {...analyticsAttrs(
                analyticsEvents.heroWhatsapp
              )}
            >
              Cotizar ahora

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Button>
            <Button
              href="#contacto"
              variant="ghost"
              {...analyticsAttrs(
                analyticsEvents.heroContact
              )}
            >
              Agendar visita
            </Button>
          </div>

          {/* Badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="
                group
                rounded-2xl
                border
                border-white/8
                bg-white/[0.03]
                px-4
                py-3
                text-sm
                text-[var(--muted)]
                transition
                duration-300
                hover:-translate-y-1
                hover:border-blue-400/30
                hover:bg-white/[0.06]
              "
              >
                <div className="flex items-center gap-2">
                  <Check
                    size={15}
                    className="text-green-400"
                  />
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DERECHA */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <Card
            className="
            relative
            overflow-hidden
            p-8
            transition
            duration-500
            hover:-translate-y-1
          "
          >

          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]" />
            <div className="relative">
              <div className="mb-3 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Respuesta rápida
              </div>
              <h3 className="text-2xl font-black">
                Cotiza en menos de 1 minuto
              </h3>
              <p className="mt-2 text-[var(--muted)]">
                Solo envíanos:
              </p>
              <div className="mt-6 space-y-4">

                {[
                  'Comuna o sector de Santiago',
                  'Donde instalar? balcon/ventana/terraza',
                  'Medidas aproximadas (alto x ancho o m2)',
                  'Si puedes, fotos del lugar',
                ].map((item) => (
                  <div
                    key={item}
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/6
                    bg-white/[0.03]
                    p-4
                  "
                  >
                    <Star
                      size={14}
                      className="text-blue-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
              <Button
                className="mt-8"
                href={whatsappUrl(
                  'Hola, quiero cotizar mallas de seguridad.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="soft"
                size="full"
                {...analyticsAttrs(
                  analyticsEvents.quickQuote
                )}
              >
                Abrir WhatsApp
              </Button>
              <p className="mt-4 text-center text-xs text-[var(--muted)]">
                Horario atención · 09:00–18:00
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
