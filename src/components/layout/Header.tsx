import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircuitBoard } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export function Header() {
  const navItems = [
    { name: 'Profil', href: '#about' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
  ];

  return (
    <header className="absolute top-0 z-50 w-full py-4">
      <div className="container flex h-14 max-w-7xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <CircuitBoard className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Bentar's Portfolio
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <nav className="hidden items-center gap-1 text-sm lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: 'ghost', size: 'sm' }),
                  'transition-colors hover:bg-accent/50 hover:text-accent-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button asChild className="ml-4">
            <Link href="/contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
