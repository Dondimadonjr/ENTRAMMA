import { Container } from '@/components/ui/Container';
import { business } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-black/[0.18] py-5 backdrop-blur-[10px] md:py-[22px]">
      <Container className="flex flex-col justify-between gap-2 text-sm text-[var(--muted)] md:flex-row md:items-center md:gap-3 md:text-base">
        <div>
          <strong className="text-[var(--text)]">{business.name}</strong>
          <br />
          Nylon transparente • Garantia 1 ano • Todo Santiago
        </div>
        <div className="text-[13px]">© {new Date().getFullYear()} • Atencion 9:00-18:00</div>
      </Container>
    </footer>
  );
}
