import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { homeQuoteHighlight, materialInfo, services } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Services() {
  return (
    <section className="scroll-mt-20 py-7 md:py-[54px]" id="servicios">
      <Container>
        <div className="mb-3.5 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Servicios</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Instalaciones a medida para reducir riesgos sin alterar la vista ni la estetica del espacio.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-3.5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <Card className="flex h-full flex-col gap-2 rounded-[14px] p-2.5 md:block md:rounded-[var(--radius)] md:p-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] md:mb-3 md:h-auto md:w-auto md:place-items-start md:border-0 md:bg-transparent">
                    <Icon className="h-[18px] w-[18px] text-blue-300 md:h-[22px] md:w-[22px]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-black leading-tight md:text-lg">{service.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--muted)] line-clamp-2 md:mt-2 md:text-sm md:leading-[1.7] md:line-clamp-none">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>

        <Card className="mt-3.5 p-3 md:mt-[18px] md:p-5">
          <h3 className="text-base font-black md:text-lg">{materialInfo.title}</h3>
          <ul className="mt-2.5 grid gap-2 text-[13px] leading-5 text-[var(--muted)] md:grid-cols-3 md:text-base md:leading-[1.7]">
            {materialInfo.items.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 md:rounded-2xl md:p-3">
                {item}
              </li>
            ))}
          </ul>
        </Card>

        <div className="mt-3.5 flex flex-col items-start justify-between gap-2.5 rounded-[18px] border border-blue-500/25 bg-blue-500/10 p-3 shadow-[0_14px_34px_rgba(0,0,0,0.16)] md:mt-[18px] md:flex-row md:items-center md:gap-3.5 md:rounded-[var(--radius2)] md:p-4">
          <div>
            <strong>{homeQuoteHighlight.title}</strong>
            <br />
            <span className="text-[13px] leading-5 text-[var(--muted)] md:text-base">{homeQuoteHighlight.description}</span>
          </div>
          <Button
            href={whatsappUrl('Hola, quiero agendar una visita gratuita a domicilio para solicitar un presupuesto.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Coordinar por WhatsApp <ArrowRight size={16} aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
