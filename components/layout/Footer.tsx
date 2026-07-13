import Container from "./Container";
import { getWebsiteSettings } from "@/lib/server/settings";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

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

          <div className="flex items-center gap-5">
            {settings.instagram && (
              <a
                href={settings.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full p-2 transition-all duration-300 hover:bg-theme-secondary hover:scale-110"
              >
                <FaInstagram className="h-6 w-6 text-theme-primary" />
              </a>
            )}

            {settings.facebook && (
              <a
                href={settings.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full p-2 transition-all duration-300 hover:bg-theme-secondary hover:scale-110"
              >
                <FaFacebookF className="h-6 w-6 text-theme-primary" />
              </a>
            )}

            {settings.whatsapp && (
              <a
                href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="rounded-full p-2 transition-all duration-300 hover:bg-theme-secondary hover:scale-110"
              >
                <FaWhatsapp className="h-6 w-6 text-theme-primary" />
              </a>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}