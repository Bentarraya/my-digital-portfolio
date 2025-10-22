'use server';

import { suggestCareers } from '@/ai/flows/careerSuggestion';

export async function getCareerSuggestions(
  portfolioData: string
): Promise<{ suggestions?: string[]; error?: string }> {
  try {
    const result = await suggestCareers(portfolioData);
    return { suggestions: result.suggestions };
  } catch (error) {
    console.error('Error getting career suggestions:', error);
    return { error: 'Gagal memuat saran karier. Silakan coba lagi.' };
  }
}
