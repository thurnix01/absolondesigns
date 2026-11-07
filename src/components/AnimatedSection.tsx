'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in', 'animate-slide-up');
            }, delay);
            
            // Unobserve after animation has been triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
      // Initially hide the element
      currentRef.style.opacity = '0';
      // Add transform property for smoother animation
      currentRef.style.transform = 'translateY(20px)';
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] ${className}`}
    >
      {children}
    </div>
  );
} 