import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Radio, Mic } from 'lucide-react';

const projectIcons = [
  <Cpu key="cpu" className="h-6 w-6 text-accent" />,
  <Radio key="radio" className="h-6 w-6 text-accent" />,
  <Mic key="mic" className="h-6 w-6 text-accent" />,
];

export function Projects() {
  return (
    <Section id="projects" title="Proyek & Eksperimen">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col transition-transform duration-300 hover:-translate-y-2">
            <CardHeader className="flex-row gap-4 items-center">
              {projectIcons[index % projectIcons.length]}
              <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
