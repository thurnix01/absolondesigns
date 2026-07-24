import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4">
            <div className="h-10 relative">
              <Image
                src="absolon_designs_logo_blk_edit.gif"
                alt="Absolon Designs Logo"
                width={70}
                height={70}
                className="rounded-full invert dark:invert-0 transition-[filter] duration-300 ease-in-out"
              />
            </div>
            <span className="text-lg font-bold hidden sm:block">
              Absolon Designs
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-4 text-sm">
              <Link
                href="/terms"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/"
                className="hover:text-[var(--primary)] transition-colors"
              >
                Home
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <p className="text-sm text-[var(--text-muted)] mb-3">
          CBHR / Absolon Designs · Effective {new Date().getFullYear()}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">{title}</h1>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-[var(--text-primary)] [&_h2]:mt-10 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[var(--primary)] [&_a]:underline">
          {children}
        </div>
      </main>

      <footer className="border-t border-[var(--card-border)] py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-between text-sm text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Absolon Designs / CBHR</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[var(--primary)]">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[var(--primary)]">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
