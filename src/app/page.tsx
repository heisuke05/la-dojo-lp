import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PracticeSection from "@/components/PracticeSection";
import QuoteSection from "@/components/QuoteSection";
import MissionSection from "@/components/MissionSection";
import JourneySection from "@/components/JourneySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <PracticeSection />
        <QuoteSection />
        <MissionSection />
        <JourneySection />
        <TestimonialsSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
