import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { whatsappUrl } from '@/lib/whatsapp';

const trustItems = ['Garantia 1 ano', 'Instalacion profesional', 'Equipo con arneses', 'Todo Santiago'];

export function Hero() {
  return (
    <section className="py-11">
      <Container className="grid items-start gap-[22px] lg:grid-cols-[1.25fr_0.75fr]">
        <div className="animate-fade-up">
          <div className="inline-flex rounded-full border border-[var(--line)] bg-white/[0.06] px-3 py-2.5 text-[13px] text-[var(--muted)]">
            Visita y medicion gratis • Garantia 1 ano
          </div>

          <h1 className="my-3.5 max-w-3xl text-[clamp(32px,4vw,48px)] font-black leading-[1.05] tracking-normal">
            Mallas de seguridad para balcones y ventanas en{' '}
            <span className="bg-[linear-gradient(90deg,#93c5fd,#86efac)] bg-clip-text text-transparent">
              Lo Barnechea
            </span>
          </h1>

          <p className="mb-5 max-w-[60ch] text-base leading-[1.7] text-[var(--muted)]">
            Protege a tu familia y mascotas con <strong>malla de nylon transparente</strong>, instalacion profesional
            con <strong>perfiles, ganchos y tensores</strong>.
          </p>

          <div className="mb-5 flex flex-wrap gap-3">
            <Button
              href={whatsappUrl(
                'Hola, quiero cotizar instalacion de mallas de seguridad. Mi comuna es Lo Barnechea y quiero instalar en balcon/ventana/terraza.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              {...analyticsAttrs(analyticsEvents.heroWhatsapp)}
            >
              Cotizar por WhatsApp <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href="#contacto" variant="ghost" {...analyticsAttrs(analyticsEvents.heroContact)}>
              Agendar visita gratuita
            </Button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-full border border-[var(--line)] bg-white/[0.04] px-3 py-2.5 text-[13px] text-[var(--muted)] transition duration-200 hover:-translate-y-0.5 hover:border-white/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:80ms]">
          <Card className="p-[18px]">
            <h3 className="mb-2.5 text-lg font-black">Que necesitas para cotizar rapido?</h3>
            <ul className="mb-3.5 list-disc space-y-1.5 pl-[18px] text-[var(--muted)]">
              <li>Comuna (ej: Lo Barnechea)</li>
              <li>Donde instalar? balcon/ventana/terraza</li>
              <li>Medida aproximada (alto x ancho o m2)</li>
              <li>Si puedes, fotos del lugar</li>
            </ul>
            <Button
              href={whatsappUrl('Hola, quiero cotizar. Comuna: Lo Barnechea. Lugar: _____. Medidas aprox: _____. Adjunto fotos.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="soft"
              size="full"
              {...analyticsAttrs(analyticsEvents.quickQuote)}
            >
              Enviar mensaje
            </Button>
            <p className="mt-2.5 text-xs text-[var(--muted)]">Respuesta en horario de atencion (9:00 a 18:00).</p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
