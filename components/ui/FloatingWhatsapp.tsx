import { whatsappUrl } from '@/lib/whatsapp';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';

export function FloatingWhatsapp() {
  return (
    <a
      className="fixed bottom-3 right-3 z-[60] rounded-full border border-green-200/25 bg-[rgba(34,197,94,0.94)] px-3.5 py-2.5 text-xs font-black text-[#06210f] shadow-[0_12px_28px_rgba(0,0,0,0.30)] transition duration-200 animate-wsp-pulse active:scale-[0.98] hover:-translate-y-0.5 hover:brightness-105 hover:[animation:none] md:bottom-4 md:right-4 md:px-4 md:py-3 md:text-sm md:shadow-[0_16px_36px_rgba(0,0,0,0.35)]"
      href={whatsappUrl('Hola, quiero solicitar un presupuesto estimado.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar presupuesto por WhatsApp"
      {...analyticsAttrs(analyticsEvents.floatingWhatsapp)}
    >
      Presupuesto
    </a>
  );
}
