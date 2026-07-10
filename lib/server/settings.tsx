import { unstable_noStore as noStore } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import Settings from "@/models/Settings";

export async function getWebsiteSettings() {
  noStore(); // ⭐ Disable caching

  await connectDB();

  let settings = await Settings.findOne().lean();

  if (!settings) {
    settings = await Settings.create({});
    settings = settings.toObject();
  }

  return {
    ...settings,
    _id: settings._id.toString(),
  };
}