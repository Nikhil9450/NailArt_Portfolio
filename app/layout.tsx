import type { Metadata } from "next";
import {
  Poppins,
  Playfair_Display,
  Inter,
  Montserrat,
  Open_Sans,
  Lato,
  Nunito,
  Cormorant_Garamond,
} from "next/font/google";

import "./globals.css";
import { Toaster } from "sonner";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});
export const metadata: Metadata = {
  title: "Luxury Nail Studio",
  description: "Professional Nail Artist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body
      className={`
        ${poppins.variable}
        ${playfair.variable}
        ${inter.variable}
        ${montserrat.variable}
        ${openSans.variable}
        ${lato.variable}
        ${nunito.variable}
        ${cormorant.variable}
      `}
    >
        {children}

        <Toaster
          position="top-right"
          richColors
          closeButton
        />
      </body>
    </html>
  );
}