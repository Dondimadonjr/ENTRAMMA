import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-black/20 py-4 backdrop-blur-xl md:py-5">
      <Container className="flex flex-col gap-3 text-[var(--muted)] md:flex-row md:items-center md:justify-between md:gap-4">

        {/* Marca */}
        <div className="flex items-center gap-3">

          <div
            className="
              relative
              h-12
              w-12
              shrink-0
              md:h-[80px]
              md:w-[80px]

              transform-gpu
              transition-transform
              duration-300

              hover:-translate-y-0.5

            "
          >
            <Image
              src="/img/logo.png"
              alt="ENTRAMMA"
              fill
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <div className="text-base font-black tracking-tight text-white transition-transform md:text-lg
              duration-300 hover:-translate-y-0.5">
              ENTRAMMA
            </div>

            <div className="text-xs text-[var(--muted)] transition-transform duration-300 hover:-translate-y-0.5">
              Instalacion profesional · Materiales certificados
            </div>
          </div>

        </div>

        {/* Info */}
        <div className="text-center text-xs leading-5 transition-transform duration-300 hover:-translate-y-0.5 md:text-left md:text-sm">
          Nylon transparente • Garantia 1 ano • Region Metropolitana y zonas cercanas
        </div>

        {/* Copyright */}
        <div className="text-xs text-[var(--muted)] md:text-right transition-transform duration-300 hover:-translate-y-0.5  ">
          © {new Date().getFullYear()} · Atención 9:00–18:00
        </div>

      </Container>
    </footer>
  );
}
