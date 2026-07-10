import { Clock3, MapPin } from 'lucide-react';
import { MobileNav } from '@/components/layout/MobileNav';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';
import { business, navItems } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

import Image from "next/image";

export function Header() {
  return (
    <>
      {/* TOP BAR */}
      <div className="border-b border-white/30 bg-gradient-to-r from-[#08111d] via-[#091321] to-[#08111d] backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-3 py-1.5 text-[11px] text-[var(--muted)] md:gap-4 md:py-2.5 md:text-[13px]">

          <div className="flex items-center gap-2 transition hover:text-white">
            <MapPin size={12} className="md:h-3.5 md:w-3.5" />
            <span className="truncate">Region Metropolitana y zonas cercanas</span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">

            <a
              href={`mailto:${business.email}`}
              className="transition duration-300 hover:text-white hover:-translate-y-0.5"
            >
              {business.email}
            </a>

            <span className="opacity-30">|</span>

            <div className="flex items-center gap-2">
              <Clock3 size={14} />
              <span>{business.hours}</span>
            </div>

          </div>

        </Container>
      </div>

      {/* HEADER */}
      <header
        className="
          sticky
          top-0
          z-50
          bg-[#050913]/75
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.18)]
        "
      >
        <Container className="flex items-center justify-between py-2 md:py-3">


          <a
            href="#top"
            aria-label="Volver al inicio"
            className="
              group
              flex
              items-center
              gap-2
              select-none
              md:gap-3
            "
          >
            {/* Marca */}
            <div className="text-[21px] font-black tracking-[-0.04em] text-white md:text-[28px]">
              ENTRAMMA
            </div>

            {/* Logo */}
            <div
              className="
                relative
                h-9
                w-9
                shrink-0
                md:h-[54px]
                md:w-[54px]

                transform-gpu
                transition-transform
                duration-300
                ease-out

                md:group-hover:rotate-[5deg]
                md:group-hover:scale-105

                active:rotate-0
                active:scale-100
              "
            >
              <Image
                src="/img/favicon.png"
                alt="ENTRAMMA"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Descriptor */}
            <div className="max-w-[76px] leading-[1.05] md:max-w-none md:leading-tight">
              <div className="text-[11px] font-medium text-white/90 md:text-[13px]">
                Seguridad en altura
              </div>

              <div className="mt-0.5 text-[10px] text-[var(--muted)] md:mt-0 md:text-[11px]">
                Instalación profesional
              </div>
            </div>
          </a>

          {/* NAV */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navegacion principal"
          >

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  group
                  relative
                  rounded-xl
                  px-4
                  py-2.5
                  text-[18px]
                  font-medium
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:text-white
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    bottom-1
                    left-1/2
                    h-[2px]
                    w-0
                    bg-blue-500
                    transition-all
                    duration-300
                    group-hover:left-4
                    group-hover:w-[calc(100%-32px)]
                  "
                />

              </a>
            ))}

            <div className="ml-4">
              <Button
                href={whatsappUrl(
                  'Hola, quiero solicitar un presupuesto estimado y coordinar visita tecnica.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="small"
                {...analyticsAttrs(
                  analyticsEvents.headerCta
                )}
              >
                Presupuesto →
              </Button>
            </div>

          </nav>

          <MobileNav />

        </Container>
      </header>
    </>
  );
}
