import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Calendar } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const profilePicture = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="w-full py-20 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
             <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              {portfolioData.name}
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 leading-8 text-muted-foreground font-headline">
              {portfolioData.title}
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <Button size="lg" asChild>
                <a href="#projects">Lihat Proyek Saya</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#skills">Keahlian Saya</a>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 text-sm text-muted-foreground">
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
           {profilePicture && (
            <div className="relative flex justify-center items-center">
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-primary/20 rounded-full blur-2xl"></div>
                <div className="relative">
                    <Image
                        src={profilePicture.imageUrl}
                        alt={profilePicture.description}
                        data-ai-hint={profilePicture.imageHint}
                        width={250}
                        height={250}
                        className="rounded-full object-cover border-4 border-background shadow-lg"
                        priority
                        />
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
