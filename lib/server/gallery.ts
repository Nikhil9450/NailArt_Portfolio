import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";

export async function getGalleryFromDB() {
  await connectDB();

  const gallery = await Gallery.find()
    .sort({ createdAt: -1 })
    .lean();

  return gallery.map((item: any) => ({
    ...item,
    id: item._id.toString(),
    _id: item._id.toString(),
  }));
}