import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

// Bold, condensed display face for the wordmark + headline titles.
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

// Body copy.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Uppercase meta labels: eyebrows, nav, credits, captions.
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chris Lam — Freelance Producer",
    template: "%s — Chris Lam",
  },
  description:
    "Chris Lam is a freelance commercial and film producer based in Los Angeles. Chris Lam Productions LLC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning: the inline script adds the "js" class before
    // hydration, which is an expected html-attribute mismatch.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="bg-ink font-sans text-cream antialiased selection:bg-cream selection:text-ink">
        <GrainOverlay />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
