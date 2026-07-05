import { connectDB } from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function getTestimonialsFromDB() {
  await connectDB();

  const testimonials = await Testimonial.find()
    .sort({ createdAt: -1 })
    .lean();

  return testimonials.map((item: any) => ({
    ...item,
    id: item._id.toString(),
    _id: item._id.toString(),
  }));
}