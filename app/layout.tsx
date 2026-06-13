import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { getProjects } from "@/data/projects";

// Druk-like display face for the wordmark + headline titles: bold, condensed,
// high-impact. (Real Druk is a licensed Commercial Type font; Anton is the
// closest free substitute.)
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chris Lam — Freelance Producer",
    template: "%s — Chris Lam",
  },
  description:
    "Chris Lam is a freelance commercial and film producer based in Santa Monica, CA. Chris Lam Productions LLC.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getProjects();
  return (
    // suppressHydrationWarning: the inline script adds the "js" class before
    // hydration, which is an expected html-attribute mismatch.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${anton.variable} bg-white font-sans text-black antialiased`}
      >
        <AppShell
          projects={projects.map(({ slug, navTitle }) => ({ slug, navTitle }))}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
