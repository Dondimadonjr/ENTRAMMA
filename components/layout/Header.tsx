import { Clock3, MapPin } from 'lucide-react';
import { MobileNav } from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { business, navItems } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Header() {
  return (
    <>
      <div className="border-b border-[var(--line)] bg-black/[0.18] backdrop-blur-[10px]">
        <Container className="flex items-center justify-between gap-4 py-2.5 text-[13px] text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <MapPin size={15} aria-hidden />
            Lo Barnechea (Atendemos todo Santiago)
          </span>
          <div className="hidden items-center gap-2 sm:flex">
            <a className="transition duration-200 hover:text-[var(--text)]" href={`mailto:${business.email}`}>
              {business.email}
            </a>
            <span className="opacity-60">•</span>
            <span className="flex items-center gap-2">
              <Clock3 size={15} aria-hidden />
              {business.hours}
            </span>
          </div>
        </Container>
      </div>

      <header
        id="inicio"
        className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#070b14]/70 backdrop-blur-[14px] transition duration-300 supports-[backdrop-filter]:bg-[#070b14]/60"
      >
        <Container className="relative flex items-center justify-between py-4">
          <a className="flex items-center gap-3" href="#inicio" aria-label="Ir al inicio">
            <div className="grid h-[42px] w-[42px] place-items-center rounded-[14px] border border-[var(--line)] bg-white/[0.08] font-black tracking-[0.5px] shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              MS
            </div>
            <div>
              <div className="font-black leading-tight tracking-normal">Mallas de Seguridad</div>
              <div className="mt-0.5 text-xs text-[var(--muted)]">Lo Barnechea</div>
            </div>
          </a>

          <nav className="hidden items-center gap-[18px] md:flex" aria-label="Navegacion principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-2.5 py-2 font-semibold text-[var(--muted)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
              >
                {item.label}
              </a>
            ))}
            <Button
              href={whatsappUrl('Hola, quiero cotizar mallas de seguridad en Lo Barnechea.')}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="small"
              {...analyticsAttrs(analyticsEvents.headerCta)}
            >
              Cotiza ahora
            </Button>
          </nav>

          <MobileNav />
        </Container>
      </header>
    </>
  );
}
