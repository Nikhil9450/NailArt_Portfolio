import Container from "./Container";
import { getWebsiteSettings } from "@/lib/server/settings";

export default async function Footer() {
  const settings = await getWebsiteSettings();

  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">
              {settings.salonName || "Nail Studio"}
            </h3>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()}{" "}
              {settings.salonName || "Nail Studio"}. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            {settings.instagram && (
              <a
                href={settings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                Instagram
              </a>
            )}

            {settings.facebook && (
              <a
                href={settings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                Facebook
              </a>
            )}

            {settings.whatsapp && (
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}