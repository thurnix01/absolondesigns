import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import "./card.css";

export const metadata: Metadata = {
  title: "Terence Absolon — Absolon Designs",
  description: "A digital business card for Terence Absolon. Scan to view work, contact, and profile links.",
  appleWebApp: {
    capable: true,
    title: "Absolon",
    statusBarStyle: "black-translucent",
  },
};

export default function QrCardPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/absolon_designs_logo_blk_edit.gif"
              alt="Absolon Designs Logo"
              width={70}
              height={70}
              unoptimized
              className="rounded-full invert dark:invert-0 transition-[filter] duration-300 ease-in-out"
            />
            <span className="text-lg font-bold hidden sm:block">Absolon Designs</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/#home" className="hover:text-[var(--primary)] transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-[var(--primary)] transition-colors">About</Link>
            <Link href="/#projects" className="hover:text-[var(--primary)] transition-colors">Projects</Link>
            <Link href="/card/" className="text-[var(--primary)]">QR Card</Link>
            <Link
              href="https://thurnix01.github.io/absolondesigns_old/pages/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--primary)] transition-colors"
            >
              Resume
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

    <main className="share">
      <article className="share-card" aria-label="Terence Absolon digital business card">
        <Image
          src="/ad_logo.png"
          alt=""
          width={712}
          height={423}
          className="share-logo"
          priority
        />
        <h1 className="share-name">Terence Absolon</h1>
        <p className="share-brand">Absolon Designs</p>
        <p className="share-services">Digital Marketing · Web Design · Automation</p>

        <div className="share-qr">
          <img src="/card-qr.png" alt="QR code for Absolon Designs" />
        </div>

        <p className="share-scan">Scan to view my work</p>
        <a className="share-url" href="https://absolondesigns.com/hello/">
          absolondesigns.com
        </a>
      </article>
    </main>
    </div>
  );
}
