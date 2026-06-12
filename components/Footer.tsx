import Link from "next/link";

const nav = [
  { href: "/#work", label: "work" },
  { href: "/about/", label: "about" },
  { href: "/about/#contact", label: "contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <nav className="flex gap-6">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="wordmark text-base underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="font-mono text-xs lowercase">
          chris lam productions llc — santa monica, ca
        </div>
      </div>
    </footer>
  );
}
