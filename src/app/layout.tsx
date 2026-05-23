import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Divine Light Organization — Los Angeles Spiritual Center",
  description:
    "Discover the transformative Art of Divine Light — a sacred practice that purifies the soul and elevates the spirit, open to all people seeking peace, healing, and spiritual growth.",
  keywords: [
    "World Divine Light Organization",
    "Sekai Kyusei Kyo",
    "Okiyome",
    "Art of Divine Light",
    "Los Angeles",
    "spiritual healing",
    "soul purification",
    "nonprofit",
  ],
  openGraph: {
    title: "World Divine Light Organization — Los Angeles Spiritual Center",
    description:
      "A sacred practice that purifies the soul and elevates the spirit.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
