import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const profilePicture = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="w-full py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            {profilePicture && (
              <Image
                src={profilePicture.imageUrl}
                alt={profilePicture.description}
                data-ai-hint={profilePicture.imageHint}
                width={250}
                height={250}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            )}
          </div>

          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            {portfolioData.name}
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground font-headline">
            {portfolioData.title}
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <Button size="lg" asChild>
              <a href="#projects">Lihat Proyek Saya</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#skills">Keahlian Saya</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-accent mt-1" />
              <span>{portfolioData.personalInfo.address}</span>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-accent mt-1" />
              <span>{portfolioData.personalInfo.birth}</span>
            </div>
            <div className="flex items-start gap-2">
              <Briefcase className="h-4 w-4 text-accent mt-1 shrink-0" />
              <span className="text-left">{portfolioData.personalInfo.expertise}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
