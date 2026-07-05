import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function getGalleryCategories() {
  await connectDB();

  const categories = await Gallery.distinct("category");

  return [
    "All",
    ...categories.sort(),
  ];
}