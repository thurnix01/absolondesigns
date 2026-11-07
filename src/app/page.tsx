import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import MobileMenu from "../components/MobileMenu";
import AnimatedSection from "../components/AnimatedSection";
import ParallaxHero from "../components/ParallaxHero";
import ProjectGallery from "../components/ProjectGallery";

export const metadata: Metadata = {
  title: "Absolon Designs - Graphic Designer & Front-End Developer",
  description:
    "Personal portfolio showcasing web development and design work by Terence Absolon in Victoria, BC.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Absolon Designs - Graphic Designer & Front-End Developer",
    description:
      "Personal portfolio showcasing web development and design work by Terence Absolon in Victoria, BC.",
    url: "https://absolondesigns.com/",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 2400,
        height: 1260,
        alt: "Terence Absolon — Digital Marketing Specialist | Absolon Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolon Designs - Graphic Designer & Front-End Developer",
    description:
      "Personal portfolio showcasing web development and design work by Terence Absolon in Victoria, BC.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/#home" className="flex items-center gap-4">
            <div className="h-10 relative">
              <Image
                src="absolon_designs_logo_blk_edit.gif"
                alt="Absolon Designs Logo"
                width={70}
                height={70}
                priority
                className="rounded-full invert dark:invert-0 transition-[filter] duration-300 ease-in-out"
              />
            </div>
            <span className="text-lg font-bold hidden sm:block">Absolon Designs</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            <Link href="/#home" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Home</Link>
            <Link href="/#about" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">About</Link>
            <Link href="/#projects" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Projects</Link>
            <Link href="/card/" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">QR Card</Link>
            <Link href="https://thurnix01.github.io/absolondesigns_old/pages/resume.html" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Resume</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <div className="page-blob page-blob-about-left" />
          <div className="page-blob page-blob-about-right" />
          <div className="page-blob page-blob-work-left" />
          <div className="page-blob page-blob-work-mid" />
          <div className="page-blob page-blob-work-right" />
          <div className="page-blob page-blob-notes-left" />
          <div className="page-blob page-blob-notes-right" />
        </div>
        <div className="relative z-10">
        <ParallaxHero />

        {/* About Section */}
        <section id="about" className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
              <div className="max-w-3xl mx-auto bg-[var(--card-bg)] p-8 rounded-lg shadow-md border border-[var(--card-border)]">
                <p className="text-lg leading-relaxed text-[var(--text-primary)]">
                  In my career and personal life, I&apos;m continuously on the lookout for new opportunities for development. Finding opportunities for creativity that allow me to grow as a designer in a stimulating, ever-changing setting is my top priority. I have extensive experience in web development, production design, and animation, and I am passionate about creating meaningful connections between people through a combination of strategy, practical knowledge, and my hands-on approach. When I consider my strengths in teamwork and communication, I am convinced that I can make a significant contribution in any setting where I am asked to do so.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ProjectGallery />

        {/* Testimonial Section */}
        <section id="testimonial" className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-2xl font-bold mb-6 text-center">Client testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="bg-[var(--card-bg)] p-5 rounded-lg shadow-md border border-[var(--card-border)] h-full w-full max-w-[520px] mx-auto">
                  <p className="text-base leading-relaxed text-[var(--text-primary)] italic">
                    &ldquo;Absolon Designs offered to help with our business website during a brief family visit. In about 30 minutes, they created the initial draft of our webpage as promised. This also included connecting it to our domain, allowing us to immediately access and view the site via the URL.
                  </p>
                  <p className="text-base leading-relaxed text-[var(--text-primary)] italic mt-3">
                    We appreciate the responsiveness and efficiency shown by Absolon Designs in turning ideas into a working and visible result in a short time. The process was smooth, and the outcome was delivered quickly and effectively.&rdquo;
                  </p>
                  <p className="mt-4 text-[var(--text-secondary)] font-semibold">
                    —{" "}
                    <a
                      href="https://ledgerxtr.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                    >
                      LedgerXtR
                    </a>
                  </p>
                </div>

                <div className="bg-[var(--card-bg)] p-5 rounded-lg shadow-md border border-[var(--card-border)] h-full w-full max-w-[520px] mx-auto">
                  <p className="text-base leading-relaxed text-[var(--text-primary)] italic">
                    &ldquo;Working with Absolon Designs was an amazing experience. Professional, creative, and very patient throughout the whole process. The quality of work exceeded my expectations and the attention to detail really stood out. I&apos;d highly recommend Absolon Designs to anyone looking to take their brand or business to the next level.&rdquo;
                  </p>
                  <p className="mt-4 text-[var(--text-secondary)] font-semibold">
                    —{" "}
                    <a
                      href="https://www.mosseamoss.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--primary)] transition-colors duration-300 ease-in-out"
                    >
                      Mo&apos;s Seamoss
                    </a>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        {/*
        <section id="contact" className="py-20 bg-[var(--section-bg)]">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-12 text-center">Get in touch</h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div className="max-w-3xl mx-auto bg-[var(--card-bg)] p-8 rounded-lg shadow-md border border-[var(--card-border)]">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--input-bg)] transition-all duration-300 ease-in-out" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--input-bg)] transition-all duration-300 ease-in-out" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--input-bg)] transition-all duration-300 ease-in-out" 
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full px-4 py-2 border border-[var(--input-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-[var(--input-bg)] transition-all duration-300 ease-in-out" 
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-6 py-3 bg-[var(--primary-fill)] hover:brightness-90 text-white rounded-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>*/}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--card-bg)] border-t border-[var(--card-border)] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-secondary)]">© 2025 Absolon Designs. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
              <Link href="/terms" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]">Terms</Link>
              <Link href="/privacy" className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)]">Privacy</Link>
              <a href="https://github.com/thurnix01" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/terence-absolon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-secondary)] hover:text-[var(--primary)] hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.049 10.049 0 01-3.13 1.196 4.92 4.92 0 00-8.384 4.482A13.98 13.98 0 011.64 3.25a4.922 4.922 0 001.523 6.574 4.9 4.9 0 01-2.23-.616v.06a4.923 4.923 0 003.95 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
