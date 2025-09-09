import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "fs/app/components/header";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Fareena Iqbal Shah – Web Developer",
    template: "%s | Fareena Iqbal Shah",
  },
  description:
    "Fareena Iqbal Shah is a passionate web developer with nearly 2 years of experience in WordPress, MERN Stack, and Next.js. She builds modern, accessible websites with a clean, innovative design.",
  keywords: [
    "Fareena Iqbal Shah",
    "Web Developer Mumbai",
    "WordPress Developer",
    "MERN Stack Developer",
    "Next.js Portfolio",
    "Frontend Developer India",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "Women in Tech",
    "Freelance Developer Mumbai",
  ],
  applicationName: "Fareena Portfolio",
  authors: [
    { name: "Fareena Iqbal Shah", url: "https://fareena-shah.vercel.app" },
  ],
  creator: "Fareena Iqbal Shah",
  publisher: "Fareena Iqbal Shah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://fareena-shah.vercel.app"),
  alternates: {
    canonical: "https://fareena-shah.vercel.app",
  },
  openGraph: {
    title: "Fareena Iqbal Shah – Web Developer",
    description:
      "Modern, responsive portfolio of Fareena Iqbal Shah – Web Developer specialized in WordPress, MERN Stack, and Next.js.",
    url: "https://fareena-shah.vercel.app",
    siteName: "Fareena Portfolio",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "https://fareena-shah.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fareena Iqbal Shah – Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    title: "Fareena Iqbal Shah – Web Developer",
    description:
      "Explore the portfolio of Fareena – A developer building with WordPress, MERN, and Next.js.",
    images: ["https://fareena-shah.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Geo Targeting Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Santacruz East, Mumbai" />
        <meta name="geo.position" content="19.0790;72.8777" />
        <meta name="ICBM" content="19.0790, 72.8777" />

        {/* Theme & Branding */}
        <meta name="theme-color" content="#74d4ea" />
        <meta name="color-scheme" content="light dark" />

        {/* JSON-LD Schema.org (Person) for Generative AI & Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Fareena Iqbal Shah",
              jobTitle: "Web Developer",
              email: "fareenashah00@gmail.com",
              telephone: "+91 9324258669",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santacruz East",
                addressRegion: "Maharashtra",
                postalCode: "400055",
                addressCountry: "India",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Chetana College",
              },
              url: "https://fareena-shah.vercel.app",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourprofile",
              ],
              knowsAbout: [
                "React",
                "Node.js",
                "Next.js",
                "WordPress",
                "JavaScript",
                "Figma",
                "HTML/CSS",
                "Bootstrap",
                "Git",
                "AngularJS",
              ],
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
