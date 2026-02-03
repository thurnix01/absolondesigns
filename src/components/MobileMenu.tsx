'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button 
        id="menu-toggle"
        className="md:hidden p-2 rounded-md hover:bg-[var(--input-bg)] transition-all duration-300 ease-in-out"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--text-primary)] transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--text-primary)] transition-transform duration-300 ease-in-out">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>
      
      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backgroundColor: '#0f182aed',
        }}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 backdrop-blur-sm"
          style={{
            backgroundColor: '#0f182aed',
          }}
          onClick={closeMenu}
        />
        
        {/* Menu Content */}
        <div className={`relative z-10 flex flex-col h-full transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-md hover:bg-[var(--input-bg)] transition-all duration-300 ease-in-out"
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[var(--text-primary)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col items-center justify-center px-4 space-y-6">
            <Link 
              href="#home" 
              className="w-full text-center py-4 text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-all duration-300 ease-in-out border-b border-[var(--card-border)] active:bg-[var(--input-bg)] rounded-md"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="w-full text-center py-4 text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-all duration-300 ease-in-out border-b border-[var(--card-border)] active:bg-[var(--input-bg)] rounded-md"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="w-full text-center py-4 text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-all duration-300 ease-in-out border-b border-[var(--card-border)] active:bg-[var(--input-bg)] rounded-md"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link 
              href="https://thurnix01.github.io/absolondesigns_old/pages/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-4 text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-all duration-300 ease-in-out border-b border-[var(--card-border)] active:bg-[var(--input-bg)] rounded-md"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
} 