'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { gallery } from '@/lib/site';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current - 1 + gallery.length) % gallery.length));
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? null : (current + 1) % gallery.length));
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'ArrowRight') showNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section className="scroll-mt-20 border-y border-[var(--line)] bg-white/[0.03] py-7 md:py-[54px]" id="galeria">
      <Container>
        <div className="mb-3.5 md:mb-6">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Galería</h2>
          <p className="m-0 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-[1.7]">
            Trabajos reales con malla de monofilamento, tensado firme y terminaciones cuidadas para distintos espacios.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-4 lg:gap-5">
          {gallery.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver imagen ampliada: ${item.alt}`}
              className="group relative block overflow-hidden rounded-[14px] text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:rounded-[var(--radius)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={640}
                height={400}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 31vw"
                className="aspect-square w-full rounded-[14px] border border-[var(--line)] bg-white/[0.03] object-cover shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)] group-hover:saturate-[1.06] group-hover:contrast-[1.03] md:aspect-[4/3] md:rounded-[var(--radius)]"
              />

              {/* Overlay de zoom */}
              <span
                className="
                  pointer-events-none
                  absolute inset-0
                  flex items-center justify-center
                  rounded-[14px]
                  bg-black/0
                  opacity-0
                  transition
                  duration-300
                  group-hover:bg-black/30
                  group-hover:opacity-100
                  md:rounded-[var(--radius)]
                "
              >
                <span className="flex h-9 w-9 scale-90 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur transition duration-300 group-hover:scale-100 md:h-11 md:w-11">
                  <Expand size={16} strokeWidth={2.25} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visor de galería"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar visor"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:top-6 md:h-11 md:w-11"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Imagen anterior"
            className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6 md:h-12 md:w-12"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            className="relative mx-4 aspect-[4/3] w-full max-w-[min(90vw,900px)] md:aspect-[16/11]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].alt}
              fill
              sizes="90vw"
              className="rounded-[14px] object-contain md:rounded-[var(--radius)]"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Imagen siguiente"
            className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6 md:h-12 md:w-12"
          >
            <ChevronRight size={22} />
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            {activeIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </section>
  );
}