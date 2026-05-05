import { ContactsSection } from "@/components/sections/ContactsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { RepeatCtaSection } from "@/components/sections/RepeatCtaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <RepeatCtaSection />
        <ContactsSection />
        <LeadFormSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
