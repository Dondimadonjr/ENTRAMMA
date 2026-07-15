import { MessageCircle } from "lucide-react";
import { analyticsAttrs, analyticsEvents } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl("Hola, quiero solicitar un presupuesto estimado.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar presupuesto por WhatsApp"
      {...analyticsAttrs(analyticsEvents.floatingWhatsapp)}
      className="
        group
        fixed bottom-5 right-5 md:bottom-6 md:right-6
        z-[60]
        flex items-center
        overflow-hidden
        rounded-full
        border border-green-200/20
        bg-[#25D366]
        text-[#06210f]
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        active:scale-95
      "
    >
      {/* Pulso */}
      <span
        aria-hidden="true"
        className="
          absolute inset-0
          -z-10
          rounded-full
          bg-green-500/50
          animate-wsp-pulse
          group-hover:animate-none
        "
      />

      {/* Icono */}
      <span className="flex h-14 w-14 items-center justify-center shrink-0">
        <MessageCircle
          size={24}
          strokeWidth={2.4}
          className="fill-current"
        />
      </span>

      {/* Texto escritorio */}
      <span
        className="
          hidden md:block
          max-w-0
          overflow-hidden
          whitespace-nowrap
          text-sm font-extrabold
          opacity-0
          transition-all duration-300
          group-hover:max-w-[170px]
          group-hover:pr-5
          group-hover:opacity-100
        "
      >
        Solicitar presupuesto
      </span>

      {/* Texto móvil */}
      <span className="pr-5 text-sm font-extrabold md:hidden">
        Presupuesto
      </span>

      {/* Indicador */}
      <span
        aria-hidden="true"
        className="
          absolute
          right-2
          top-2
          h-2.5
          w-2.5
          rounded-full
          border-2 border-[#06210f]/70
          bg-lime-300
        "
      />
    </a>
  );
}