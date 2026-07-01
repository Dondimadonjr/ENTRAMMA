import { whatsappUrl } from '@/lib/whatsapp';
import { analyticsAttrs, analyticsEvents } from '@/lib/analytics';

export function FloatingWhatsapp() {
  return (
    <a
      className="fixed bottom-4 right-4 z-[60] rounded-full bg-[rgba(34,197,94,0.96)] px-4 py-3 text-sm font-black text-[#06210f] shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition duration-200 animate-wsp-pulse hover:-translate-y-0.5 hover:brightness-105 hover:[animation:none]"
      href={whatsappUrl('Hola, quiero cotizar mallas de seguridad.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      {...analyticsAttrs(analyticsEvents.floatingWhatsapp)}
    >
      Cotizar
    </a>
  );
}
