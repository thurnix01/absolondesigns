import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Hello — Absolon Designs",
  description: "Terence Absolon's portfolio, profiles, and contact.",
};

const links = [
  { href: "/#projects", label: "Portfolio", note: "Selected work" },
  {
    href: "https://www.fiverr.com/absolondesigns",
    label: "Fiverr",
    note: "Services",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/terence-absolon/",
    label: "LinkedIn",
    note: "Profile",
    external: true,
  },
  {
    href: "https://www.behance.net/absolondesigns",
    label: "Behance",
    note: "Design",
    external: true,
  },
  {
    href: "mailto:absolondesigns@gmail.com",
    label: "Contact",
    note: "absolondesigns@gmail.com",
  },
];

export default function HelloPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/absolon_designs_logo_blk_edit.gif"
              alt="Absolon Designs Logo"
              width={40}
              height={40}
              unoptimized
              className="rounded-full invert dark:invert-0"
            />
            <span className="text-lg font-bold">Absolon Designs</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 max-w-lg">
        <p className="text-sm tracking-[0.22em] uppercase text-[var(--text-muted)] mb-3">
          Hello
        </p>
        <h1 className="text-4xl font-semibold tracking-tight mb-3">Terence Absolon</h1>
        <p className="text-[var(--text-secondary)] mb-10">
          Digital marketing, web design, and automation.
        </p>
        <ul className="divide-y divide-[var(--card-border)] border-y border-[var(--card-border)]">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center justify-between gap-4 py-4 hover:text-[var(--primary)] transition-colors"
              >
                <span className="text-lg">{link.label}</span>
                <span className="text-sm text-[var(--text-muted)]">{link.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
