import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ClipboardList, Check } from 'lucide-react';

export function Experience() {
  const { internship, training } = portfolioData;

  return (
    <Section id="experience" title="Pengalaman & Pelatihan">
      <Tabs defaultValue="internship" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
          <TabsTrigger value="internship">
            <Briefcase className="mr-2 h-4 w-4" /> Magang
          </TabsTrigger>
          <TabsTrigger value="training">
            <ClipboardList className="mr-2 h-4 w-4" /> Pelatihan
          </TabsTrigger>
        </TabsList>
        <TabsContent value="internship">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-headline">{internship.company}</CardTitle>
              <CardDescription>{internship.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground">{internship.summary}</p>
              <ul className="space-y-2">
                {internship.tasks.map((task, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-1 shrink-0 text-accent" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training">
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-headline">{training.institution}</CardTitle>
              <CardDescription>{training.field}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {training.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-1 shrink-0 text-accent" />
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Section>
  );
}
