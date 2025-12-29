import { cn } from '~/libs/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-zinc-200 animate-pulse rounded text-transparent select-none w-max', className)}
      {...props}
    />
  );
}

export { Skeleton };
