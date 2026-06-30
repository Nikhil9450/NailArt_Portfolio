import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import About from "@/components/home/About";
import BeforeAfter from "@/components/home/BeforeAfter";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <FeaturedGallery />
      <About />
      <BeforeAfter />
    </main>
  );
}