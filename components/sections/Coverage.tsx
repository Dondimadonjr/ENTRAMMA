import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const items = [
  { title: 'Santiago', description: 'Cobertura para comunas de la ciudad.' },
  { title: 'Todo Santiago', description: 'Cobertura amplia para hogares y departamentos.' },
  { title: 'Visita gratis', description: 'Medicion + cotizacion en terreno.' }
];

export function Coverage() {
  return (
    <section className="scroll-mt-20 border-y border-[var(--line)] bg-white/[0.03] py-9 md:py-[54px]" id="cobertura">
      <Container>
        <div className="mb-4 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Cobertura</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Atencion en Santiago y comunas de la Region Metropolitana, con coordinacion segun disponibilidad.
          </p>
        </div>

        <div className="grid gap-2.5 md:gap-3.5 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="rounded-[var(--radius)] p-3.5 md:p-4">
              <h3 className="text-base font-black md:text-lg">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-5 text-[var(--muted)] md:mt-2 md:text-sm md:leading-[1.7]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
