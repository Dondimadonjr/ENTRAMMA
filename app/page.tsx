import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Coverage } from '@/components/sections/Coverage';
import { Gallery } from '@/components/sections/Gallery';
import { Hero } from '@/components/sections/Hero';
import { Pricing } from '@/components/sections/Pricing';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';
import { FloatingWhatsapp } from '@/components/ui/FloatingWhatsapp';
import { LocalBusinessJsonLd } from '@/components/seo/LocalBusinessJsonLd';

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <div id="top" aria-hidden="true" />
      <Header />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Coverage />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
