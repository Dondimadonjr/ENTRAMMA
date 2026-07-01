import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { gallery } from '@/lib/site';

export function Gallery() {
  return (
    <section className="scroll-mt-20 border-y border-[var(--line)] bg-white/[0.03] py-9 md:py-[54px]" id="galeria">
      <Container>
        <div className="mb-4 md:mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Galeria</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Trabajos reales en Santiago y la Region Metropolitana. Malla nylon transparente y garantia de 1 ano.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 md:gap-3.5 lg:grid-cols-4">
          {gallery.map((item) => (
            <a
              key={item.src}
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[14px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:rounded-[var(--radius)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={400}
                sizes="(max-width: 768px) 46vw, (max-width: 1024px) 46vw, 25vw"
                className="aspect-square w-full rounded-[14px] border border-[var(--line)] bg-white/[0.03] object-cover shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] hover:saturate-[1.06] hover:contrast-[1.03] md:aspect-[16/11] md:rounded-[var(--radius)] lg:aspect-[16/10]"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
