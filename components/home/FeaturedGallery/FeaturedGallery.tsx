import { getGalleryFromDB } from "@/lib/server/gallery";
import { getGalleryCategories } from "@/lib/server/galleryCategory";

import FeaturedGalleryClient from "./FeaturedGalleryClient";

export default async function FeaturedGallery() {
  const featuredGallery =
    await getGalleryFromDB();

  const categories =
    await getGalleryCategories();

  return (
    <FeaturedGalleryClient
      featuredGallery={featuredGallery}
      categories={categories}
    />
  );
}