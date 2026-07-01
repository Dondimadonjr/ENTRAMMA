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
      <div className="border-b border-white/6 bg-gradient-to-r from-[#08111d] via-[#091321] to-[#08111d] backdrop-blur-xl">
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
          border-b
          border-white/8
          bg-[#050913]/75
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,.18)]
        "
      >
        <Container className="flex items-center justify-between py-4">


          <a
            href="#top"
            aria-label="Volver al inicio"
            className="group flex items-center gap-4 transition hover:opacity-80"
          >
            <div className="text-[17px] font-black tracking-tight text-white">
              ENTRAMMA
            </div>

            <div
              className="
                relative
                h-[58px]
                w-[58px]
                
                transition-all
                duration-500
                group-hover:scale-105
                group-hover:rotate-[4deg]
              "
            >
              <Image
              src="/img/favicon.png"
                alt="Mallas de Seguridad"
                fill
                priority
                className="object-contain"
              />
            </div>

            

            <div className="text-xs text-[var(--muted)]">
              Mallas de seguridad 
              Instalación profesional
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