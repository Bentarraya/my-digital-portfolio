
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getCareerSuggestions } from '@/app/actions';
import { portfolioData } from '@/lib/portfolio-data';
import { Loader2, Wand2, Sparkles } from 'lucide-react';

const getPortfolioString = () => {
  const { name, profile, education, internship, training, projects, skills } = portfolioData;
  return JSON.stringify({ name, profile, education, internship, training, projects, skills }, null, 2);
};

export function CareerSuggestion() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setSuggestions([]);

    try {
      const data = getPortfolioString();
      const result = await getCareerSuggestions(data);
      if (result.suggestions) {
        setSuggestions(result.suggestions);
      } else {
        throw new Error(result.error || 'Gagal mendapatkan saran karir.');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Terjadi kesalahan.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-dashed border-primary/50 text-center bg-background/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2 font-headline">
          <Wand2 className="text-accent" />
          Saran Karier Berbasis AI
        </CardTitle>
        <CardDescription>
          Analisis profil Anda untuk mendapatkan rekomendasi jalur karier yang
          potensial di bidang otomasi industri dan IoT.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Menganalisis...
            </>
          ) : (
            'Dapatkan Saran'
          )}
        </Button>

        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}

        {suggestions.length > 0 && !isLoading && (
          <div className="mt-6 text-left space-y-4 rounded-lg border bg-background/80 p-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Rekomendasi untuk Anda:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="pl-2">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
