import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getProjects } from "@/data/projects";

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
      <body className="bg-black font-sans text-white antialiased">
        <Sidebar
          projects={projects.map(({ slug, navTitle }) => ({ slug, navTitle }))}
        />
        <main className="px-6 pb-24 pt-4 lg:ml-72 lg:px-12 lg:pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
