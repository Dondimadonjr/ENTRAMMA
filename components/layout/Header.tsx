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
      <div className="border-b border-white/10 bg-gradient-to-r from-[#08111d] via-[#091321] to-[#08111d] backdrop-blur-xl">
        <Container className="flex items-center justify-between gap-4 py-2.5 text-[13px] text-[var(--muted)]">

          <div className="flex items-center gap-2 transition hover:text-white">
            <MapPin size={14} />
            <span>Todo Santiago</span>
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
        <Container className="flex items-center justify-between py-3">


          <a
            href="#top"
            aria-label="Volver al inicio"
            className="
              group
              flex
              items-center
              gap-3
              select-none
            "
          >
            {/* Marca */}
            <div className="text-[28px] font-black tracking-[-0.04em] text-white">
              ENTRAMMA
            </div>

            {/* Logo */}
            <div
              className="
                relative
                h-[54px]
                w-[54px]
                shrink-0

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
            <div className="leading-tight">
              <div className="text-[13px] font-medium text-white/90">
                Mallas de seguridad
              </div>

              <div className="text-[11px] text-[var(--muted)]">
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
                  'Hola, quiero cotizar mallas de seguridad.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="small"
                {...analyticsAttrs(
                  analyticsEvents.headerCta
                )}
              >
                Cotizar →
              </Button>
            </div>

          </nav>

          <MobileNav />

        </Container>
      </header>
    </>
  );
}