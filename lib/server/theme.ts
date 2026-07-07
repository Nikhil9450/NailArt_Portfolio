import { connectDB } from "@/lib/mongodb";
import Theme from "@/models/Theme";
import { defaultTheme } from "@/data/defaultTheme";

export async function getTheme() {
  await connectDB();

  const theme = await Theme.findOne();

  if (!theme) {
    return defaultTheme;
  }

  return JSON.parse(JSON.stringify(theme));
}