"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

type BubblePos = { top: number };

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/card/", label: "QR Card" },
  {
    href: "https://thurnix01.github.io/absolondesigns_old/pages/resume.html",
    label: "Resume",
    external: true,
  },
] as const;

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bubblePos, setBubblePos] = useState<BubblePos>({ top: 64 });
  const { theme } = useTheme();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const bubbleBg =
    theme === "dark" ? "rgba(30, 41, 59, 0.94)" : "rgba(255, 255, 255, 0.96)";
  const bubbleBorder =
    theme === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)";

  const placeBubble = useCallback(() => {
    const toggle = toggleRef.current;
    if (!toggle) return;
    const rect = toggle.getBoundingClientRect();
    const top = Math.min(
      Math.max(rect.bottom + 10, 12),
      window.innerHeight - 280,
    );
    setBubblePos({ top });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    placeBubble();
    // Fixed coords stay in the viewport while the page scrolls underneath
    const onResize = () => placeBubble();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen, placeBubble]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#mobile-menu") && !target.closest("#menu-toggle")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => {
    setIsOpen((open) => {
      if (!open) placeBubble();
      return !open;
    });
  };

  const menu = (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={`fixed left-8 right-8 z-[100] origin-top md:hidden ${
        isOpen
          ? "pointer-events-auto visible scale-100 opacity-100"
          : "pointer-events-none invisible scale-95 opacity-0"
      }`}
      style={{
        top: bubblePos.top,
        transition:
          "opacity 220ms ease, transform 280ms cubic-bezier(0.22, 1, 0.36, 1), visibility 220ms",
      }}
    >
      <div
        className="relative overflow-hidden rounded-[1.75rem] border shadow-2xl backdrop-blur-xl"
        style={{
          backgroundColor: bubbleBg,
          borderColor: bubbleBorder,
          boxShadow:
            theme === "dark"
              ? "0 18px 50px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.04)"
              : "0 18px 50px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.6)",
        }}
      >
        <div
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 45%, transparent), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <p className="relative px-4 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Menu
        </p>

        <nav className="relative flex flex-col gap-1 px-2 pb-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-2xl px-4 py-3 text-lg font-semibold text-[var(--text-primary)] transition hover:bg-[var(--input-bg)] hover:text-[var(--primary)] active:scale-[0.98]"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <button
        ref={toggleRef}
        id="menu-toggle"
        type="button"
        className="rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-[var(--input-bg)] md:hidden"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-[var(--text-primary)]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-[var(--text-primary)]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      {mounted ? createPortal(menu, document.body) : null}
    </>
  );
}
