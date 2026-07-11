import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBooking from "@/components/common/FloatingBooking";

import ThemeProvider from "@/components/providers/ThemeProvider";
import WebsiteSettingsProvider from "@/components/providers/WebsiteSettingsProvider";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getWebsiteSettings();

  return (
     <WebsiteSettingsProvider settings={settings}>
      <ThemeProvider settings={settings}>
        <Navbar />
        {children}
        <FloatingBooking />
        <Footer />
      </ThemeProvider>
     </WebsiteSettingsProvider>
  );
}