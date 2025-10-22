import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircuitBoard } from 'lucide-react';

export function Header() {
  const navItems = [
    { name: 'Profil', href: '#about' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Keahlian', href: '#skills' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <CircuitBoard className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              Bentar's Portfolio
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <a href="mailto:muhammad.bentar@example.com">Hubungi Saya</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
