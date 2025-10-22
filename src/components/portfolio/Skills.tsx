import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Users } from 'lucide-react';

export function Skills() {
  const { technical, nonTechnical } = portfolioData.skills;
  return (
    <Section id="skills" title="Keahlian">
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Wrench className="h-6 w-6 text-accent" />
              Kemampuan Teknis
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {technical.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-headline">
              <Users className="h-6 w-6 text-accent" />
              Keterampilan Non-Teknis
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {nonTechnical.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
