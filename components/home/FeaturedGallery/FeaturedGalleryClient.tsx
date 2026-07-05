"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";
import { motion } from "framer-motion";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/types/gallery";
import GallerySearch from "./GallerySearch";

interface FeaturedGalleryClientProps {
  featuredGallery: Gallery[];
  categories: string[];
}

export default function FeaturedGalleryClient({
  featuredGallery,
  categories,
}: FeaturedGalleryClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
    // const [open, setOpen] = useState(false);
    // const [currentIndex, setCurrentIndex] = useState(0);
const filteredGallery = useMemo(() => {
  return featuredGallery.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ||
      item.category === activeCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}, [activeCategory, search]);
  

  return (
    <Section id="gallery">
      <Container>
        <motion.div
        initial={{
            opacity: 0,
            y: 50,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
            once: true,
        }}
        transition={{
            duration: 0.7,
        }}
        >
        <SectionHeading
            badge="Featured Collection"
            title="Discover My Signature Nail Designs"
            subtitle="A curated collection of elegant nail art crafted for clients who appreciate beauty and attention to detail."
            center
        />
        </motion.div>

        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <GallerySearch
        value={search}
        onChange={setSearch}
        />
        <GalleryGrid
        items={filteredGallery}
        onOpen={(index) => {
            console.log("Clicked image:", index);
        }}
        />
        <div className="mt-14 flex justify-center">
            <Link href="/portfolio">
            <Button
                size="lg"
                className="rounded-full px-8 shadow-lg hover:scale-105 transition-transform"
            >
                View Complete Portfolio
            </Button>
            </Link>
        </div>
      </Container>
    </Section>
  );
}