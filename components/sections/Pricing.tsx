import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Faq } from '@/components/sections/Faq';
import { quotePricing } from '@/lib/quote';
import { immediateDiscount } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Pricing() {
  return (
    <section className="py-7 md:py-[54px]" id="precios">
      <Container>
        <div className="mb-3.5 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Valores referenciales y FAQ</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Entregamos una estimación inicial clara. El valor final se confirma luego de revisar medidas, accesos y condiciones reales.
          </p>
        </div>

        <div className="grid items-start gap-3 md:gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-3 md:p-[18px]">
            <h3 className="text-base font-black md:text-lg">Precio referencial</h3>
            <div className="my-2.5 grid gap-2 md:my-3 md:gap-2.5">
              {Object.values(quotePricing).map((pricing) => (
                <div key={pricing.key} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 md:rounded-2xl md:p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-black">{pricing.label}</span>
                    <span className="text-base font-black tracking-normal md:text-xl">
                      ${pricing.basePricePerM2.toLocaleString('es-CL')}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{pricing.description} Valor referencial por m2.</p>
                </div>
              ))}
            </div>
            <p className="mb-3 text-[13px] leading-5 text-[var(--muted)] md:mb-5 md:text-base md:leading-6">
              *El valor final depende de medidas, tipo de instalación y condiciones del lugar. La visita técnica permite
              rectificar el presupuesto antes de fabricar.
            </p>
            <div className="mb-3 rounded-xl border border-green-300/20 bg-green-400/10 p-2.5 md:mb-5 md:rounded-2xl md:p-3">
              <h4 className="text-sm font-black text-white md:text-base">{immediateDiscount.title}</h4>
              <p className="mt-1 text-[13px] leading-5 text-[var(--muted)] md:mt-1.5 md:text-sm md:leading-6">{immediateDiscount.description}</p>
              <p className="mt-2 text-xs leading-5 text-green-100">{immediateDiscount.note}</p>
            </div>
            <Button
              href={whatsappUrl('Hola, quiero solicitar un presupuesto estimado segun medidas aproximadas y condiciones del lugar.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="full"
            >
              Solicitar estimación por WhatsApp
            </Button>
          </Card>
          <Faq />
        </div>
      </Container>
    </section>
  );
}
