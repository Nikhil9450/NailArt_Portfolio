import { getGalleryFromDB } from "@/lib/server/gallery";
import FeaturedGalleryClient from "./FeaturedGalleryClient";

export default async function FeaturedGallery() {
  const featuredGallery = await getGalleryFromDB();

  return (
    <FeaturedGalleryClient
      featuredGallery={featuredGallery}
    />
  );
}