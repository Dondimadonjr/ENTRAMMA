'use client';

import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { navItems } from '@/lib/site';
import { cn } from '@/lib/utils';
import { whatsappUrl } from '@/lib/whatsapp';
import { useMobileMenu } from '@/hooks/use-mobile-menu';

export function MobileNav() {
  const menu = useMobileMenu();

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="grid h-11 w-11 place-items-center rounded-[14px] border border-[var(--line)] bg-white/[0.06] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
        aria-label={menu.isOpen ? 'Cerrar menu' : 'Abrir menu'}
        aria-expanded={menu.isOpen}
        aria-controls="mobile-nav"
        onClick={menu.toggle}
      >
        {menu.isOpen ? <X size={21} aria-hidden /> : <Menu size={21} aria-hidden />}
      </button>

      <nav
        className={cn(
          'absolute right-0 top-[72px] hidden w-[min(360px,92vw)] flex-col items-stretch gap-2 rounded-[var(--radius2)] border border-[var(--line)] bg-[#070b14]/95 p-3 shadow-[var(--shadow2)] backdrop-blur-[14px]',
          menu.isOpen && 'flex'
        )}
        id="mobile-nav"
        aria-label="Navegacion movil"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={menu.close}
            className="rounded-xl bg-white/[0.04] px-2.5 py-2 font-semibold text-[var(--muted)] transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20"
          >
            {item.label}
          </a>
        ))}
        <Button
          href={whatsappUrl('Hola, quiero cotizar mallas de seguridad.')}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="small"
          {...analyticsAttrs(analyticsEvents.headerCta)}
        >
          Cotiza ahora
        </Button>
      </nav>
    </div>
  );
}
