import { cn } from '@/lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius2)] border border-[var(--line)] bg-white/[0.06] shadow-[var(--shadow)] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[var(--shadow2),0_0_34px_rgba(59,130,246,0.08)]',
        className
      )}
      {...props}
    />
  );
}
