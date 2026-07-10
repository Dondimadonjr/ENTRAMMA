import Link from 'next/link';
import type { AnchorHTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 select-none items-center justify-center gap-1.5 border text-sm font-extrabold transition duration-200 active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 md:min-h-0 md:gap-2',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-[linear-gradient(90deg,rgba(59,130,246,0.98),rgba(34,197,94,0.88))] text-[#071021] hover:brightness-[1.02]',
        ghost: 'border-[var(--line)] bg-white/[0.05] text-[var(--text)] hover:border-white/25 hover:bg-white/[0.07]',
        soft: 'border-white/15 bg-white/[0.08] text-[var(--text)] hover:border-white/25 hover:bg-white/[0.1]'
      },
      size: {
        default: 'rounded-xl px-3 py-2.5 md:rounded-[14px] md:px-3.5 md:py-3',
        small: 'rounded-xl px-2.5 py-2 text-sm md:px-3',
        full: 'w-full rounded-xl px-3 py-2.5 md:rounded-[14px] md:px-3.5 md:py-3'
      }
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'default'
    }
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
