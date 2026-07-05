import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import About from "@/components/home/About";
import BeforeAfter from "@/components/home/BeforeAfter";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import ContactCTA from "@/components/home/ContactCTA";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <FeaturedGallery />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}