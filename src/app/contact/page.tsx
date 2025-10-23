
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
    stroke="currentColor"
    strokeWidth="0"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.06 1.2 4.78 1.2h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm-1.2 15.22c-.28 0-.54-.06-.78-.18-1.32-.6-2.5-1.55-3.43-2.67-.15-.18-.3-.38-.44-.6s-.26-.45-.35-.7c-.1-.25-.17-.5-.2-.75-.03-.25-.03-.5 0-.73.05-.27.15-.5.28-.7.13-.2.3-.34.5-.46.2-.1.4-.16.6-.15.24.03.45.1.6.22.15.1.25.25.3.4.07.15.1.3.1.44s-.02.28-.05.4-.1.24-.15.35c-.05.1-.1.2-.18.3-.1.1-.18.18-.25.25-.08.08-.14.15-.17.2-.04.05-.04.1-.02.14.2.4.53.78.9 1.1.35.3.73.58 1.15.8.05.02.1.05.14.07.1.05.2.1.32.12.1.02.2.03.3.02.14,0,.27-.04.4-.12.13-.1.24-.2.32-.35.08-.15.15-.3.2-.47.05-.17.08-.34.08-.5s-.05-.3-.12-.44c-.07-.15-.18-.27-.32-.38-.14-.1-.3-.15-.48-.14h-.02c-.17.02-.33.06-.48.14-.15.08-.28.18-.4.3-.12.1-.23.2-.32.3-.05.04-.1.08-.14.1-.04.03-.08.04-.12.05-.1.02-.2,0-.28-.02s-.16-.06-.23-.1c-.07-.05-.14-.1-.2-.16-.1-.06-.18-.13-.25-.2-.15-.1-.3-.2-.43-.33-.14-.13-.25-.27-.35-.42-.1-.15-.18-.3-.24-.46-.06-.17-.1-.33-.1-.5s.04-.3.1-.44c.07-.15.18-.27.3-.37.14-.1.3-.16.48-.16.2,0,.38.04.54.12.16.1.3.22.4.38.1.16.16.33.18.5.02.17.02.34,0,.5-.03.17-.08.1-.14.4" />
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
    <div className="flex flex-col min-h-screen">
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
