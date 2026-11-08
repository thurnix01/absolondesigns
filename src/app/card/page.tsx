import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import { SHOW_SITE_LOGO } from "@/config/mediaDebug";
import "./card.css";

export const metadata: Metadata = {
  title: "Terence Absolon — Absolon Designs",
  description:
    "A digital business card for Terence Absolon. Scan to view work, contact, and profile links.",
  alternates: {
    canonical: "/card/",
  },
  openGraph: {
    title: "Terence Absolon — Absolon Designs",
    description:
      "A digital business card for Terence Absolon. Scan to view work, contact, and profile links.",
    url: "https://absolondesigns.com/card/",
    type: "website",
    images: [
      {
        url: "/card-qr.png",
        width: 1200,
        height: 630,
        alt: "Terence Absolon digital business card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terence Absolon — Absolon Designs",
    description:
      "A digital business card for Terence Absolon. Scan to view work, contact, and profile links.",
    images: ["/card-qr.png"],
  },
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
            {SHOW_SITE_LOGO ? (
              <Image
                src="/absolon_designs_logo.webp"
                alt="Absolon Designs Logo"
                width={80}
                height={45}
                unoptimized
                className="h-10 w-auto object-contain"
              />
            ) : null}
            <span className={`text-lg font-bold ${SHOW_SITE_LOGO ? "hidden sm:block" : ""}`}>
              Absolon Designs
            </span>
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
