import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/portfolio/Hero';
import { About } from '@/components/portfolio/About';
import { Education } from '@/components/portfolio/Education';
import { Experience } from '@/components/portfolio/Experience';
import { Projects } from '@/components/portfolio/Projects';
import { Skills } from '@/components/portfolio/Skills';
import { CareerGoals } from '@/components/portfolio/CareerGoals';
import { CareerSuggestion } from '@/components/portfolio/CareerSuggestion';
import { Section } from '@/components/portfolio/Section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <CareerGoals />
        <Section id="ai-suggestion" title="AI Career Suggestion">
          <CareerSuggestion />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
