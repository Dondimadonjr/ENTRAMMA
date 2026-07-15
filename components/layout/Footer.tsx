import { Container } from '@/components/ui/Container';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-white/30 bg-black/20 py-5 backdrop-blur-xl md:py-4">
      <Container className="flex flex-col gap-3 text-[var(--muted)] md:flex-row md:items-center md:justify-between md:gap-4">

        {/* Marca */}
        <div className="flex items-center gap-3">
          <div
            className="
              relative
              h-20 w-20
              shrink-0
              overflow-hidden
              rounded-md
              md:h-35 md:w-35 
              transform-gpu transition-transform duration-300
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
            <div className="text-base font-black tracking-tight text-white transition-transform duration-300 hover:-translate-y-0.5 md:text-lg">
              ENTRAMMA
            </div>

            <div className="text-left text-xs text-[var(--muted)] transition-transform duration-300 hover:-translate-y-0.5">
              Instalación profesional <span className="mx-1 opacity-60">•</span> Materiales certificados
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center text-xs leading-5 transition-transform duration-300 hover:-translate-y-0.5 md:text-left md:text-sm">
          Nylon transparente • Garantía 1 año <br />Región Metropolitana y zonas cercanas
        </div>

        {/* Copyright */}
        <div className="whitespace-nowrap text-xs text-[var(--muted)] transition-transform duration-300 hover:-translate-y-0.5 md:text-right">
          © {new Date().getFullYear()} · Atención 9:00–18:00
        </div>

      </Container>
    </footer>
  );
}