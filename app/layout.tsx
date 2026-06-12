import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "Chris Lam — Freelance Producer",
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
    <html lang="en">
      <body className="bg-black font-sans text-white antialiased">
        <Sidebar />
        <main className="px-6 pb-24 pt-4 lg:ml-72 lg:px-12 lg:pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
