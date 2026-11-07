"use client";

import { useRef, useEffect, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

const DESKTOP_MOTION =
  "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

/** Scroll reveal on desktop only — mobile keeps content painted and skips observer JS work. */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;
    if (!window.matchMedia(DESKTOP_MOTION).matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          window.setTimeout(() => {
            entry.target.classList.add("animate-fade-in", "animate-slide-up");
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    currentRef.style.opacity = "0";
    currentRef.style.transform = "translateY(20px)";
    observer.observe(currentRef);

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`md:transition-all md:duration-1000 md:ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${className}`}
    >
      {children}
    </div>
  );
}
