import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[18px] border border-white/10 bg-white/[0.055] shadow-[0_12px_34px_rgba(0,0,0,0.24)] transition duration-200 active:scale-[0.995] hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_18px_45px_rgba(0,0,0,0.28),0_0_28px_rgba(59,130,246,0.06)] md:rounded-[var(--radius2)] md:border-[var(--line)] md:shadow-[var(--shadow)] md:hover:shadow-[var(--shadow2),0_0_34px_rgba(59,130,246,0.08)]',
        className
      )}
      {...props}
    />
  );
}
