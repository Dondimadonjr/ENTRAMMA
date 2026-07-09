import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { homeQuoteHighlight, materialInfo, services } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Services() {
  return (
    <section className="scroll-mt-20 py-9 md:py-[54px]" id="servicios">
      <Container>
        <div className="mb-4 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Servicios</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Instalaciones a medida para reducir riesgos sin alterar la vista ni la estetica del espacio.
          </p>
        </div>

        <div className="grid gap-2.5 md:gap-3.5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <Card className="flex h-full items-start gap-3 rounded-[var(--radius)] p-3 md:block md:p-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] md:mb-3 md:h-auto md:w-auto md:place-items-start md:border-0 md:bg-transparent">
                    <Icon className="h-5 w-5 text-blue-300 md:h-[22px] md:w-[22px]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-black md:text-lg">{service.title}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-[var(--muted)] line-clamp-2 md:mt-2 md:text-sm md:leading-[1.7] md:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>

        <Card className="mt-4 p-4 md:mt-[18px] md:p-5">
          <h3 className="text-lg font-black">{materialInfo.title}</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--muted)] md:grid-cols-3 md:text-base md:leading-[1.7]">
            {materialInfo.items.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-4 flex flex-col items-start justify-between gap-3 rounded-[var(--radius2)] border border-blue-500/25 bg-blue-500/10 p-3.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:mt-[18px] md:flex-row md:items-center md:gap-3.5 md:p-4">
          <div>
            <strong>{homeQuoteHighlight.title}</strong>
            <br />
            <span className="text-sm text-[var(--muted)] md:text-base">{homeQuoteHighlight.description}</span>
          </div>
          <Button
            href={whatsappUrl('Hola, quiero agendar una visita gratuita a domicilio para solicitar un presupuesto.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Coordinar por WhatsApp <ArrowRight size={18} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
