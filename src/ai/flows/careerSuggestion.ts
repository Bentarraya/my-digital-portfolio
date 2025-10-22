// IMPORTANT: This file is a mock implementation for demonstration purposes.
// In a real-world scenario, this would be a Genkit flow.
'use server';

export async function suggestCareers(
  portfolioData: string
): Promise<{ suggestions: string[] }> {
  // Simulate AI processing delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const allSuggestions = [
    'Spesialis Otomasi Industri: Fokus pada perancangan dan implementasi sistem kontrol otomatis menggunakan PLC dan mikrokontroler untuk meningkatkan efisiensi produksi.',
    'Teknisi Maintenance IoT: Bertanggung jawab atas pemeliharaan dan troubleshooting perangkat IoT di lingkungan industri, memastikan konektivitas dan integritas data.',
    'System Integrator: Mengintegrasikan berbagai sistem mekatronika, kelistrikan, dan perangkat lunak untuk menciptakan solusi otomasi yang kohesif dan fungsional.',
    'Junior Robotics Engineer: Terlibat dalam pengembangan dan pemeliharaan sistem robotik untuk aplikasi industri, dari perakitan hingga pemrograman.',
    'Field Service Engineer: Memberikan layanan teknis dan pemeliharaan di lokasi klien untuk sistem kontrol dan otomasi industri.',
  ];

  // Simulate picking a few random suggestions to make it dynamic
  const shuffled = allSuggestions.sort(() => 0.5 - Math.random());
  return { suggestions: shuffled.slice(0, 3) };
}
