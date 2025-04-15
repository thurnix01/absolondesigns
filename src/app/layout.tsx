import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absolon Designs - Graphic Designer & Front-End Developer",
  description: "Personal portfolio for a Graphic Designer and Front-End Developer based in Victoria, British Columbia, Canada",
  keywords: ["portfolio", "web developer", "graphic designer", "front-end", "designer", "developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Add dark mode script to avoid FOUC (Flash of Unstyled Content) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Check if theme is set in localStorage
                var theme = localStorage.getItem('theme');
                
                // If theme is set, use it
                if (theme) {
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } else {
                  // Otherwise, check user preference
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  document.documentElement.classList.toggle('dark', prefersDark);
                  localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
