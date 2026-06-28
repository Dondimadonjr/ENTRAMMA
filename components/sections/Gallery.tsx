import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { gallery } from '@/lib/site';

export function Gallery() {
  return (
    <section className="border-y border-[var(--line)] bg-white/[0.03] py-[54px]" id="galeria">
      <Container>
        <div className="mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Galeria</h2>
          <p className="m-0 leading-[1.7] text-[var(--muted)]">
            Trabajos reales en Lo Barnechea y Santiago. Malla nylon transparente y garantia de 1 ano.
          </p>
        </div>

        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={640}
              height={400}
              className="aspect-[16/10] w-full rounded-[var(--radius)] border border-[var(--line)] bg-white/[0.03] object-cover shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] hover:saturate-[1.06] hover:contrast-[1.03] max-lg:aspect-[16/11]"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
