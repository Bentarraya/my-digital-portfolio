
'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Instagram, Send, Loader2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.75 13.96c.25.13.43.2.6.33.2.14.38.3.52.48.14.2.22.4.24.62.02.22-.02.43-.1.6-.1.2-.26.36-.45.5-.2.14-.4.23-.64.3-.23.04-.5.03-.75-.02-.26-.06-.52-.16-.8-.3-.28-.15-.56-.32-.86-.52-.3-.2-.6-.42-.9-.67-.3-.26-.58-.55-.83-.86-.25-.3-.48-.63-.66-.98-.2-.35-.3-.7-.34-1.04-.04-.34-.02-.65.04-.92.05-.27.15-.5.28-.7.13-.2.3-.34.5-.46.2-.1.4-.16.6-.15.24.03.45.1.6.22.15.1.25.25.3.4.07.15.1.3.1.44s-.02.28-.05.4-.1.24-.15.35c-.05.1-.1.2-.18.3-.1.1-.18.18-.25.25-.08.08-.14.15-.17.2-.04.05-.04.1-.02.14.03.04.1.1.2.18.1.1.2.17.3.25.1.1.2.18.3.28.1.1.2.17.3.22.1.05.2.1.3.14.1.04.2.07.25.1.05.02.1.04.13.05.02.02.04.03.05.04.04.02.07.02.1.02.14,0,.27-.04.4-.12Z M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.06 1.2 4.78 1.2h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Z" />
  </svg>
);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    // This is a dummy submission handler.
    // In a real application, you would send this to a server endpoint.
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih telah menghubungi saya. Saya akan segera merespons.',
      });
      (event.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-center font-headline sm:text-4xl text-primary mb-4">
            Hubungi Saya
          </h1>
          <p className="text-center text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto mb-12">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
            menghubungi saya melalui salah satu platform di bawah ini.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-start gap-2">
                  <Send className="text-accent shrink-0" />
                  Kirim Pesan Langsung
                </CardTitle>
                <CardDescription>
                  Gunakan formulir ini untuk mengirim email langsung ke saya.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" placeholder="Nama Anda" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input id="subject" placeholder="Subjek pesan" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." required rows={5}/>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
               <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                        <Mail className="text-accent shrink-0"/> Email
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground mb-3">
                        Anda juga dapat mengirim email langsung ke alamat di bawah ini.
                    </p>
                    <Button asChild variant="outline">
                         <a href="mailto:muhammad.bentar@example.com">
                            muhammad.bentar@example.com
                        </a>
                    </Button>
                </CardContent>
               </Card>
              <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                        <WhatsAppIcon /> WhatsApp
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground mb-3">
                        Kirim pesan cepat melalui WhatsApp.
                    </p>
                    <Button asChild variant="outline">
                         <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                            Chat di WhatsApp
                        </a>
                    </Button>
                </CardContent>
               </Card>
              <Card className="bg-card/50">
                <CardHeader>
                    <CardTitle className="flex items-start gap-3">
                        <Instagram className="text-accent shrink-0"/> Instagram
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <p className="text-muted-foreground mb-3">
                        Hubungi saya melalui Direct Message di Instagram.
                    </p>
                    <Button asChild variant="outline">
                         <a href="https://www.instagram.com/bentar.raya" target="_blank" rel="noopener noreferrer">
                            DM di Instagram
                        </a>
                    </Button>
                </CardContent>
               </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
