import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { services } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Services() {
  return (
    <section className="py-[54px] scroll-mt-20" id="servicios">
      <Container>
        <div className="mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Servicios</h2>
          <p className="m-0 leading-[1.7] text-[var(--muted)]">
            Soluciones para seguridad en altura con terminaciones prolijas y materiales resistentes.
          </p>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <Card className="rounded-[var(--radius)] p-4">
                  <Icon className="mb-3 text-blue-300" size={22} aria-hidden />
                  <h3 className="text-lg font-black">{service.title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-[var(--muted)]">{service.description}</p>
                </Card>
              </article>
            );
          })}
        </div>

        <div className="mt-[18px] flex flex-col items-start justify-between gap-3.5 rounded-[var(--radius2)] border border-blue-500/25 bg-blue-500/10 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:flex-row md:items-center">
          <div>
            <strong>Visita y medicion gratis</strong>
            <br />
            <span className="text-[var(--muted)]">Cotizacion en terreno con el maestro.</span>
          </div>
          <Button
            href={whatsappUrl('Hola, quiero agendar visita y medicion gratis en Santiago.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Agendar por WhatsApp <ArrowRight size={18} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
