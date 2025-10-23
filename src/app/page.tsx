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
import { AnimateOnScroll } from '@/components/motion/AnimateOnScroll';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimateOnScroll>
          <Hero />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <About />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2}>
          <Education />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Experience />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Projects />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Skills />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <CareerGoals />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.1}>
          <Section id="ai-suggestion" title="AI Career Suggestion">
            <CareerSuggestion />
          </Section>
        </AnimateOnScroll>
      </main>
      <Footer />
    </div>
  );
}
