import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';

export function About() {
  return (
    <Section id="about" title="Profil Singkat">
      <p className="text-center text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
        {portfolioData.profile}
      </p>
    </Section>
  );
}
