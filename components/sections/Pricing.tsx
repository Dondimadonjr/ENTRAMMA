import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { Faq } from '@/components/sections/Faq';
import { whatsappUrl } from '@/lib/whatsapp';

export function Pricing() {
  return (
    <section className="py-9 md:py-[54px]" id="precios">
      <Container>
        <div className="mb-4 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Precios referenciales & FAQ</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Transparencia sin amarrarte: el valor final depende de medidas y condiciones del lugar.
          </p>
        </div>

        <div className="grid items-start gap-3.5 md:gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-4 md:p-[18px]">
            <h3 className="text-lg font-black">Precio referencial</h3>
            <div className="my-2.5 flex items-baseline gap-2.5">
              <span className="text-[var(--muted)]">Desde</span>
              <span className="text-[34px] font-black tracking-normal md:text-[40px]">$5.000</span>
              <span className="text-[var(--muted)]">CLP / m2</span>
            </div>
            <p className="mb-4 text-sm leading-6 text-[var(--muted)] md:mb-5 md:text-base">
              *El valor final depende de medidas, tipo de instalacion y condiciones del lugar. Visita y cotizacion en
              terreno: <strong>gratis</strong>.
            </p>
            <Button
              href={whatsappUrl('Hola, quiero cotizar. Cuanto me sale aprox segun m2 y condiciones del balcon/ventana?')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="full"
            >
              Consultar precio por WhatsApp
            </Button>
          </Card>
          <Faq />
        </div>
      </Container>
    </section>
  );
}
