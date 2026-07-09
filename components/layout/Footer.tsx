import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-black/20 py-5 backdrop-blur-xl">
      <Container className="flex flex-col gap-4 text-[var(--muted)] md:flex-row md:items-center md:justify-between">

        {/* Marca */}
        <div className="flex items-center gap-3">

          <div
            className="
              relative
              h-[80px]
              w-[80px]
              shrink-0

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
            <div className="text-lg font-black tracking-tight text-white transition-transform
              duration-300 hover:-translate-y-0.5">
              ENTRAMMA
            </div>

            <div className="text-xs text-[var(--muted)] transition-transform duration-300 hover:-translate-y-0.5">
              Instalacion profesional · Materiales certificados
            </div>
          </div>

        </div>

        {/* Info */}
        <div className="text-center text-sm md:text-left transition-transform duration-300 hover:-translate-y-0.5">
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
