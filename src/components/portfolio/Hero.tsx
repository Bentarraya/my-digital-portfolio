import { portfolioData } from '@/lib/portfolio-data';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Calendar, Download, Github, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export function Hero() {
  const profilePicture = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="relative w-full bg-background overflow-hidden">
       <div className="container mx-auto px-4">
        <div className="min-h-screen flex items-center justify-center lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-left z-10 py-24 pt-40 lg:pt-24">
            <p className="font-headline text-lg text-muted-foreground">Hello, I Am</p>
            <h1 className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl mt-2">
              {portfolioData.name}
            </h1>
            <p className="mt-6 text-lg max-w-xl mx-auto lg:mx-0 leading-8 text-muted-foreground">
              {portfolioData.title}
            </p>
             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="#projects">Lihat Proyek Saya</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/cv.pdf" download="CV-Bentar-Raya.pdf">
                  <Download className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
             <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6 text-sm text-muted-foreground">
                <Link href="#" className="hover:text-primary transition-colors"><Github size={20} /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                <Link href="#" className="hover:text-primary transition-colors"><Youtube size={20} /></Link>
             </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative h-full">
            <div className="absolute bg-primary/20 rounded-full w-[500px] h-[500px] -right-20 blur-3xl"></div>
            {profilePicture && (
              <div className="relative z-10 w-[400px] h-[400px]">
                <div className="absolute inset-0 bg-primary rounded-full transform -rotate-6"></div>
                 <Image
                  src={profilePicture.imageUrl}
                  alt={profilePicture.description}
                  data-ai-hint={profilePicture.imageHint}
                  width={400}
                  height={400}
                  className="relative rounded-full object-cover border-4 border-background shadow-lg"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
       {/* Mobile-only image */}
       {profilePicture && (
        <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm opacity-20">
          <Image
            src={profilePicture.imageUrl}
            alt={profilePicture.description}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
