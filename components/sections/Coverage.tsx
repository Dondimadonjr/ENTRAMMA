import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const items = [
  { title: 'Region Metropolitana', description: 'Coordinamos instalaciones en comunas urbanas y residenciales con visita tecnica.' },
  { title: 'Zonas cercanas', description: 'Evaluamos proyectos en localidades proximas cuando el alcance de la instalacion lo requiere.' },
  { title: 'Evaluacion en terreno', description: 'Rectificamos medidas, accesos y detalles constructivos antes de fabricar.' }
];

export function Coverage() {
  return (
    <section className="scroll-mt-20 border-y border-[var(--line)] bg-white/[0.03] py-7 md:py-[54px]" id="cobertura">
      <Container>
        <div className="mb-3.5 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Cobertura</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Realizamos instalaciones en toda la Region Metropolitana y tambien desarrollamos proyectos en localidades
            cercanas y zonas costeras segun evaluacion.
          </p>
        </div>

        <div className="grid gap-2 md:gap-3.5 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="rounded-[14px] p-3 md:rounded-[var(--radius)] md:p-4">
              <h3 className="text-[15px] font-black md:text-lg">{item.title}</h3>
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
