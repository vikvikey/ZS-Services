import { ContactsSection } from "@/components/sections/ContactsSection";
import { EngagementSection } from "@/components/sections/EngagementSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { RepeatCtaSection } from "@/components/sections/RepeatCtaSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SpecializedSection } from "@/components/sections/SpecializedSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileStickyCta } from "@/components/MobileStickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-28 md:pb-0">
        <HeroSection />
        <ServicesSection />
        <EngagementSection />
        <RepeatCtaSection />
        <SpecializedSection />
        <GallerySection />
        <ContactsSection />
        <LeadFormSection />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  );
}
