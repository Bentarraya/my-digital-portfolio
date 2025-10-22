import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative w-full py-20 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
          {portfolioData.name}
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground font-headline">
          {portfolioData.title}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <a href="#projects">Lihat Proyek Saya</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#skills">Keahlian Saya</a>
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{portfolioData.personalInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{portfolioData.personalInfo.birth}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-accent" />
            <span>{portfolioData.personalInfo.expertise}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
