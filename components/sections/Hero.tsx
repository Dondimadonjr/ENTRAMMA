import { ArrowRight, Check, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { whatsappUrl } from '@/lib/whatsapp';

const trustItems = ['Garantía 1 año', 'Instalación profesional', 'Materiales certificados', 'Visita técnica'];

const quoteChecklist = [
  'Comuna, región y dirección referencial',
  'Tipo de espacio a intervenir',
  'Medidas aproximadas de ancho y alto',
  'Fotos para revisar las condiciones del lugar'
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-6 md:py-16 lg:py-15">

      {/* Glow fondo */}
      <div className="absolute left-[10%] top-[10%] h-[240px] w-[240px] rounded-full bg-blue-600/10 blur-[90px] md:h-[400px] md:w-[400px] md:blur-[120px]" />
      <div className="absolute right-[5%] top-[35%] h-[180px] w-[180px] rounded-full bg-emerald-500/10 blur-[90px] md:h-[280px] md:w-[280px] md:blur-[120px]" />

      <Container className="relative grid items-center gap-4 md:gap-10 lg:grid-cols-[1.15fr_0.85fr]">

        {/* IZQUIERDA */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-200 md:gap-2 md:px-4 md:py-2 md:text-[13px]">
            <ShieldCheck size={12} className="md:h-3.5 md:w-3.5" aria-hidden="true" />
            Visita técnica y presupuesto estimado
          </div>

          <h1 className="mt-3 text-[clamp(38px,10.5vw,42px)] font-black leading-[0.96] md:mt-5 md:text-[clamp(34px,5.4vw,68px)]">
            Seguridad confiable para
            <span className="mt-1 block bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent md:mt-2">
              espacios en altura
            </span>
          </h1>

          <p className="mt-3 max-w-[650px] text-[15px] leading-6 text-[var(--muted)] md:mt-6 md:text-lg md:leading-8">
            Equipo con experiencia en
            <strong className="text-white"> balcones, ventanas y terrazas</strong> con respuesta rápida, materiales
            certificados, garantía y rectificación en terreno antes de fabricar.
          </p>

          {/* CTA */}
          <div className="mt-4 flex flex-row flex-wrap gap-2.5 md:mt-8 md:gap-4">
            <Button
              className="group"
              href={whatsappUrl('Hola, quiero solicitar un presupuesto estimado y coordinar una visita técnica.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              {...analyticsAttrs(analyticsEvents.heroWhatsapp)}
            >
              Cotizar ahora
              <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden="true" />
            </Button>
            <Button href="#contacto" variant="ghost" {...analyticsAttrs(analyticsEvents.heroContact)}>
              Coordinar visita
            </Button>
          </div>

          {/* Badges */}
          <div className="mt-4 grid grid-cols-2 gap-2 md:mt-8 md:grid-cols-4 md:gap-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="group flex items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-center text-sm text-[var(--muted)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
              >
                <Check
                  size={15}
                  className="mr-2 shrink-0 text-green-400"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
        </div>

        {/* DERECHA */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <Card className="relative overflow-hidden p-4 transition duration-500 hover:-translate-y-1 md:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-2 inline-flex rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300 md:mb-3 md:px-3 md:text-xs">
                Respuesta rápida
              </div>
              <h3 className="text-lg font-black md:text-2xl">Presupuesto claro, sin vueltas</h3>
              <p className="mt-1 text-[13px] text-[var(--muted)] md:mt-2 md:text-base">
                Para estimar mejor, necesitamos:
              </p>

              <div className="mt-3 grid gap-2 md:mt-6 md:gap-4">
                {quoteChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/6 bg-white/[0.03] p-2.5 text-[13px] md:p-4 md:text-base"
                  >
                    <Star size={13} className="shrink-0 text-blue-400" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>

              <Button
                className="mt-4 md:mt-8"
                href={whatsappUrl('Hola, quiero solicitar un presupuesto estimado.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="soft"
                size="full"
                {...analyticsAttrs(analyticsEvents.quickQuote)}
              >
                Escribir por WhatsApp
              </Button>

              <p className="mt-2.5 text-center text-xs text-[var(--muted)] md:mt-4">
                Horario de atención · 09:00 a 18:00
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}