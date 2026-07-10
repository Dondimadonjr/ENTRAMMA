import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn('mx-auto w-[min(1120px,91%)] md:w-[min(1120px,92%)]', className)} {...props} />;
}
