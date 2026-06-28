import { Mail, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';
import { business } from '@/lib/site';
import { whatsappUrl } from '@/lib/whatsapp';

export function Contact() {
  return (
    <section className="py-[54px]" id="contacto">
      <Container>
        <div className="mb-[18px]">
          <h2 className="mb-2 text-[clamp(24px,3vw,32px)] font-black tracking-normal">Contacto</h2>
          <p className="m-0 leading-[1.7] text-[var(--muted)]">Escribenos y coordinamos visita y medicion gratis.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-[18px]">
            <h3 className="text-lg font-black">Datos</h3>
            <div className="mt-3 space-y-2 text-[var(--muted)]">
              <p className="flex items-center gap-2">
                <PhoneCall size={16} className="text-blue-300" aria-hidden />
                <strong className="text-[var(--text)]">WhatsApp:</strong> {business.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300" aria-hidden />
                <strong className="text-[var(--text)]">Correo:</strong> {business.email}
              </p>
              <p>
                <strong className="text-[var(--text)]">Horario:</strong> {business.hours}
              </p>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <Button
                href={whatsappUrl('Hola, quiero agendar una visita y medicion gratis. Comuna: Lo Barnechea.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                WhatsApp
              </Button>
              <Button href={`mailto:${business.email}`} variant="ghost">
                Enviar correo
              </Button>
            </div>

            <p className="mt-2.5 text-xs text-[var(--muted)]">Redes: {business.instagram}</p>
          </Card>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
