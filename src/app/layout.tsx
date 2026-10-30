import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Noto_Serif_JP, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

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
  title: "Los Angeles Divine Light Center | Back to the Origin",
  description:
    "Experience the Art of Divine Light (tekazashi) in Los Angeles. Purify spiritual burdens, elevate your Sonen, and return to your original luminous self. 100% non-profit 501(c)(3).",
  keywords: [
    "World Divine Light Organization",
    "Sekai Mahikari Bunmei Kyodan",
    "Okiyome",
    "Art of Divine Light",
    "Tekazashi",
    "Los Angeles",
    "spiritual healing",
    "soul purification",
    "nonprofit",
  ],
  openGraph: {
    title: "Los Angeles Divine Light Center | Back to the Origin",
    description:
      "A sacred non-contact practice that purifies the soul and elevates the spirit.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakartaSans.variable} ${notoSerifJP.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-1695WNK4CX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1695WNK4CX');
        gtag('config', 'AW-853490942');
      `}</Script>
    </html>
  );
}
