import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const items = [
  { title: 'Lo Barnechea', description: 'Zona principal de atencion.' },
  { title: 'Todo Santiago', description: 'Cobertura amplia para hogares y departamentos.' },
  { title: 'Visita gratis', description: 'Medicion + cotizacion en terreno.' }
];

export function Coverage() {
  return (
    <section className="border-y border-[var(--line)] bg-white/[0.03] py-[54px]" id="cobertura">
      <Container>
        <div className="mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Cobertura</h2>
          <p className="m-0 leading-[1.7] text-[var(--muted)]">
            Base en Lo Barnechea y atencion en todo Santiago (sin cobro adicional por comuna).
          </p>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="rounded-[var(--radius)] p-4">
              <h3 className="text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-[1.7] text-[var(--muted)]">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
