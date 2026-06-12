import type { Metadata } from "next";
import {
  Archivo,
  Instrument_Serif,
  Libre_Caslon_Text,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

// Expanded ultra-black grotesque for wordmarks + nav (Druk-wide feel).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

// Caslon for body paragraphs — the editorial reading voice.
const caslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Narrow high-contrast display serif for the big lowercase titles.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-title",
  display: "swap",
});

// Mono for metadata: client/category/role lines, credits, contact.
const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});
import BrandMarks from "@/components/BrandMarks";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Chris Lam — Producer",
    template: "%s — Chris Lam",
  },
  description:
    "Chris Lam is a freelance commercial and film producer based in Santa Monica, CA. Chris Lam Productions LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the inline script in <head> adds the "js"
    // class before React hydrates, which is an expected mismatch.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${archivo.variable} ${caslon.variable} ${instrument.variable} ${mono.variable} bg-white font-sans text-black`}
      >
        <BrandMarks />
        <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 pt-28 sm:px-8 sm:pt-36">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
