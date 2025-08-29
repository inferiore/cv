import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Eder Barrios - FullStack Software Developer | PHP, React, Laravel Expert",
    template: "%s | Eder Barrios - FullStack Developer",
  },
  description:
    "Experienced Full Stack Developer with 5+ years of expertise in PHP, JavaScript, TypeScript, React, Next.js, Laravel. Building scalable web applications and leading development teams.",
  keywords: [
    "Eder Barrios",
    "Full Stack Developer",
    "PHP Developer",
    "React Developer",
    "Laravel Expert",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Web Development",
    "Software Engineer",
    "Colombia",
    "Cartagena",
    "EPAM",
    "SourceToad",
  ],
  authors: [
    { name: "Eder Barrios", url: "https://linkedin.com/in/eder-barrios" },
  ],
  creator: "Eder Barrios",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: "es_ES",
    title: "Eder Barrios - FullStack Software Developer",
    description:
      "Experienced Full Stack Developer with 5+ years of expertise in PHP, React, Laravel, and modern web technologies. Currently at EPAM Systems.",
    siteName: "Eder Barrios Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eder Barrios - FullStack Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eder Barrios - FullStack Software Developer",
    description:
      "Full Stack Developer specializing in PHP, React, Laravel, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://cv.ederbarrios.online" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
