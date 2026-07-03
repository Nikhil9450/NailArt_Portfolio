import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";

export async function getServicesFromDB() {
  await connectDB();

  const services = await Service.find()
    .sort({ createdAt: -1 })
    .lean();

  return services.map((service: any) => ({
    ...service,
    _id: service._id.toString(),
  }));
}