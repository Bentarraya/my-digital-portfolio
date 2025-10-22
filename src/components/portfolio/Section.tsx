import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  title: string;
}

export function Section({ id, className, children, title }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-center font-headline sm:text-4xl text-primary">
        {title}
      </h2>
      <div className="mt-12">{children}</div>
    </section>
  );
}
