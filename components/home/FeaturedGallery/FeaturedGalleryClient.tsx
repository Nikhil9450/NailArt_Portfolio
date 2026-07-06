"use client";

import { useMemo, useState,useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/common/SectionHeading";

import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";
import GallerySearch from "./GallerySearch";

import { Button } from "@/components/ui/button";
import { Gallery } from "@/types/gallery";

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

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 600);

  return () => clearTimeout(timer);
  }, []);
  const filteredGallery = useMemo(() => {
    return featuredGallery.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category === activeCategory;

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.category
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [
    featuredGallery,
    activeCategory,
    search,
  ]);

  // Home page preview
  const previewGallery = filteredGallery.slice(0, 15);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <Section
      id="gallery"
      className="py-16 md:py-24"
    >
      <Container>
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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

        {/* Category Filter */}
        <GalleryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Search */}
        <GallerySearch
          value={search}
          onChange={setSearch}
        />

        {/* Gallery */}
        <GalleryGrid
          items={previewGallery}
          loading={loading}
          onOpen={handleOpen}
        />

        {/* Button */}
        {filteredGallery.length > 15 && (
          <div className="mt-10 flex justify-center md:mt-14">
            <Link
              href="/portfolio"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full rounded-full px-8 shadow-lg transition hover:scale-105 sm:w-auto"
              >
                View Complete Portfolio
              </Button>
            </Link>
          </div>
        )}

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          plugins={[
            Zoom,
            Thumbnails,
            Captions,
          ]}
          slides={previewGallery.map(
            (item) => ({
              src: item.image,
              title: item.title,
              description: item.category,
            })
          )}
          carousel={{
            finite: false,
          }}
        />
      </Container>
    </Section>
  );
}