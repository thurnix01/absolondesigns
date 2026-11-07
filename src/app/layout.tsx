import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";

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

const siteUrl = "https://absolondesigns.com";
const siteTitle = "Absolon Designs - Graphic Designer & Front-End Developer";
const siteDescription =
  "Personal portfolio for a Graphic Designer and Front-End Developer based in Victoria, British Columbia, Canada";
const ogImage = {
  url: "/og-image.jpg",
  width: 2400,
  height: 1260,
  alt: "Terence Absolon — Digital Marketing Specialist | Absolon Designs",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "portfolio",
    "web developer",
    "graphic designer",
    "front-end",
    "designer",
    "developer",
    "Victoria BC",
    "Absolon Designs",
    "Terence Absolon",
  ],
  authors: [{ name: "Terence Absolon", url: siteUrl }],
  creator: "Terence Absolon",
  publisher: "Absolon Designs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Absolon Designs",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/ad-favicon-32x32.png",
    apple: "/ad-favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark md:scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');}else{document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        <GoogleAnalytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
