import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ThemeToggle from "../components/ThemeToggle";
import MobileMenu from "../components/MobileMenu";
import AnimatedSection from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "Portfolio - Front-End Developer & Designer",
  description: "Personal portfolio showcasing web development and design work",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--card-border)]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-10 relative">
              <Image
                src="absolon_designs_logo_blk_edit.gif"
                alt="Absolon Designs Logo"
                width={70}
                height={70}
                className="rounded-full"  
              />
            </div>
            <span className="text-lg font-bold hidden sm:block">Absolon Designs</span>
          </div>
          
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Home</Link>
            <Link href="#about" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">About</Link>
            <Link href="#projects" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Projects</Link>
            <Link href="#contact" className="text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out">Contact</Link>
          </nav>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto md:mx-0" style={{ margin: "0 auto" }}>
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-[var(--card-border)] shadow-lg" style={{
                  borderRadius: "50%",
                  maxWidth: "190px",
                  width: "100%"
                }}>
                  <Image
                    src="profile.png"
                    alt="Profile Picture"
                    fill
                    unoptimized
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      objectFit: "cover"
                    }}
                    priority
                    className="transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[var(--accent)]">
                    Graphic Designer / Front-End Developer
                  </h1>
                  <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-6">
                    Victoria, British Columbia, Canada
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a href="mailto:absolondesigns@gmail.com" className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-md flex items-center gap-2 transition-all duration-300 ease-in-out hover:shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Me
                    </a>
                    <a href="https://www.linkedin.com/in/terence-absolon/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[var(--card-border)] hover:bg-[var(--input-bg)] rounded-md flex items-center gap-2 hover:shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[var(--section-bg)]">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
              <div className="max-w-3xl mx-auto bg-[var(--card-bg)] p-8 rounded-lg shadow-md border border-[var(--card-border)]">
                <p className="text-lg leading-relaxed text-[var(--text-primary)]">
                  I&apos;m always looking for ways to grow—both professionally and personally. My goal is to find opportunities that push my design skills further while letting me thrive in a creative, dynamic environment. With a strong background in web development, production design, animation, I bring a mix of strategy, hands-on expertise, and a passion for making things that truly connect with people. Add in my ability to collaborate and communicate effectively, and I&apos;m confident in my ability to make an impact wherever I go.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">Some of my work</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <AnimatedSection delay={100} className="h-full">
              <div className="group bg-[var(--card-bg)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 h-full border border-[var(--card-border)] transition-all duration-500 ease-in-out">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="preview_01.jpg"
                    alt="Performance Bicycle Email Builder"
                    fill
                    unoptimized
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Performance Bicycle Email Builder</h3>
                  <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                    Creating this form, I focused on streamlining the process from the mockup stage of Performance Bicycle newsletter in Figma, to live text in the form of HTML.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">HTML, Javascript, Figma</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Project 2 */}
            <AnimatedSection delay={200} className="h-full">
              <div className="group bg-[var(--card-bg)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 h-full border border-[var(--card-border)] transition-all duration-500 ease-in-out">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="preview_02.jpg"
                    alt="Modal Card"
                    fill
                    unoptimized
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Modal Card</h3>
                  <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                    Created a modal card using a border radius manipulation for a curving effect.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">HTML, CSS</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Project 3 */}
            <AnimatedSection delay={300} className="h-full">
              <div className="group bg-[var(--card-bg)] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 h-full border border-[var(--card-border)] transition-all duration-500 ease-in-out">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src="preview_03.jpg"
                    alt="Social Media"
                    fill
                    unoptimized
                    style={{objectFit: "cover"}}
                    className="group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-15rem)]">
                  <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Social Media</h3>
                  <p className="text-[var(--text-secondary)] mb-4 flex-grow">
                    Showcasing a blend of instagram ads promoting various bmx and performance cycling brands.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] italic">HTML, Figma, Photoshop</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={400}>
            <div className="text-center mt-12">
              <a href="#" className="inline-block px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105">
                View all projects
              </a>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact Section */}
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
                        placeholder="absolondesigns@gmail.com"
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
                    className="w-full md:w-auto px-6 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-md transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--card-bg)] border-t border-[var(--card-border)] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-secondary)]">© 2025 Absolon Designs. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)] hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
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
