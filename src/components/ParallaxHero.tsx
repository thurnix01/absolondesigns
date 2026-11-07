"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function ParallaxHero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;
    const update = () => {
      const rect = root.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
      root.style.setProperty("--scroll", progress.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const onMove = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      root.style.setProperty("--mx", x.toFixed(3));
      root.style.setProperty("--my", y.toFixed(3));
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    root.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      root.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="parallax-hero relative"
    >
      <div className="parallax-orb parallax-orb-a" aria-hidden="true" />
      <div className="parallax-orb parallax-orb-b" aria-hidden="true" />
      <div className="parallax-grid" aria-hidden="true" />

      <div className="container relative mx-auto px-4 py-10 md:py-14">
        <div className="parallax-copy mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center">
          <div className="parallax-portrait relative h-64 w-64 shrink-0 overflow-hidden rounded-full border-4 border-[var(--card-border)] shadow-lg sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/profile-display.webp"
              alt="Terence Absolon"
              fill
              unoptimized
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
              Absolon Designs · Victoria, BC
            </p>
            <h1 className="mb-4 bg-gradient-to-r from-blue-500 to-[var(--accent)] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Terence Absolon
              <span className="mt-2 block">Digital Designer & Front-End Developer</span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--text-secondary)] md:mx-0">
              Brand, print, motion, and websites — reviewed here, without sending you off to another portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#projects"
                className="rounded-full bg-[var(--primary-fill)] px-5 py-2.5 text-white transition hover:brightness-90 hover:shadow-lg"
              >
                See the work
              </a>
              <a
                href="mailto:absolondesigns@gmail.com"
                className="rounded-full border border-[var(--card-border)] px-5 py-2.5 transition hover:bg-[var(--input-bg)]"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/terence-absolon/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--card-border)] px-5 py-2.5 transition hover:bg-[var(--input-bg)]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
