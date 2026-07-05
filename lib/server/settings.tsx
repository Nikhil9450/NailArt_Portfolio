import { connectDB } from "@/lib/mongodb";
import Settings from "@/models/Settings";

export async function getWebsiteSettings() {
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