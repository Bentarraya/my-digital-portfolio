import { portfolioData } from '@/lib/portfolio-data';
import { Section } from './Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Award, CheckCircle } from 'lucide-react';

export function Education() {
  return (
    <Section id="education" title="Pendidikan & Prestasi">
      <div className="grid gap-8 md:grid-cols-5">
        <Card className="md:col-span-2 bg-card/50">
          <CardHeader className="flex flex-row items-center gap-4">
            <School className="h-8 w-8 text-accent" />
            <div>
              <CardTitle className="font-headline">{portfolioData.education.school}</CardTitle>
              <p className="text-sm text-muted-foreground">{portfolioData.education.major}</p>
            </div>
          </CardHeader>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
             <CardTitle className="flex items-center gap-2 font-headline">
                <Award className="h-6 w-6 text-accent" />
                Prestasi Akademik
             </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {portfolioData.education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 mt-1 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
