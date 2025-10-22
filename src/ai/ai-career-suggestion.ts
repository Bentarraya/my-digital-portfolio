'use server';

/**
 * @fileOverview AI-powered career suggestion based on portfolio data.
 *
 * - suggestCareerPaths - A function that suggests career paths based on the input portfolio data.
 * - CareerSuggestionInput - The input type for the suggestCareerPaths function, representing the portfolio data.
 * - CareerSuggestionOutput - The return type for the suggestCareerPaths function, providing a list of suggested career paths.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerSuggestionInputSchema = z.object({
  name: z.string().describe('The name of the individual.'),
  expertise: z.string().describe('Areas of expertise.'),
  shortProfile: z.string().describe('A brief profile of the individual.'),
  educationAndAchievements: z
    .string()
    .describe('Education and academic achievements.'),
  internshipExperience: z.string().describe('Internship experiences.'),
  trainingExperience: z.string().describe('Training and certifications.'),
  personalProjects: z.string().describe('Personal projects and experiments.'),
  technicalSkills: z.string().describe('Technical skills.'),
  nonTechnicalSkills: z.string().describe('Non-technical skills.'),
  careerGoals: z.string().describe('Career goals.'),
});
export type CareerSuggestionInput = z.infer<typeof CareerSuggestionInputSchema>;

const CareerSuggestionOutputSchema = z.object({
  suggestedCareers: z
    .array(z.string())
    .describe('A list of suggested career paths based on the portfolio data.'),
});
export type CareerSuggestionOutput = z.infer<typeof CareerSuggestionOutputSchema>;

export async function suggestCareerPaths(
  input: CareerSuggestionInput
): Promise<CareerSuggestionOutput> {
  return suggestCareerPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerSuggestionPrompt',
  input: {schema: CareerSuggestionInputSchema},
  output: {schema: CareerSuggestionOutputSchema},
  prompt: `You are a career advisor specializing in the fields of maintenance, industrial control systems, automation, and IoT.

  Based on the following portfolio data, suggest several relevant career paths for {{name}}.
  Consider the individual's expertise, skills, experience, and goals.

  Expertise: {{{expertise}}}
  Short Profile: {{{shortProfile}}}
  Education and Achievements: {{{educationAndAchievements}}}
  Internship Experience: {{{internshipExperience}}}
  Training Experience: {{{trainingExperience}}}
  Personal Projects: {{{personalProjects}}}
  Technical Skills: {{{technicalSkills}}}
  Non-technical Skills: {{{nonTechnicalSkills}}}
  Career Goals: {{{careerGoals}}}

  Please provide a list of suggested career paths, focusing on roles that align with their skills and interests. Return the response as a valid JSON.
  `,
});

const suggestCareerPathsFlow = ai.defineFlow(
  {
    name: 'suggestCareerPathsFlow',
    inputSchema: CareerSuggestionInputSchema,
    outputSchema: CareerSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
