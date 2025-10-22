import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';
import { Target } from 'lucide-react';

export function CareerGoals() {
  return (
    <Section id="career" title="Tujuan Karier">
      <div className="text-center max-w-3xl mx-auto">
        <Target className="h-12 w-12 mx-auto text-accent mb-4" />
        <p className="text-lg leading-relaxed text-muted-foreground">
          {portfolioData.careerGoals}
        </p>
      </div>
    </Section>
  );
}
