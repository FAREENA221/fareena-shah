import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// app/layout.tsx
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Fareena Iqbal Shah – Software Developer",
    template: "%s | Fareena Iqbal Shah",
  },
  description:
    "Fareena Iqbal Shah — Software Developer (WordPress, MERN Stack, Next.js). Built modern, accessible websites with a focus on performance, UX and scalable frontends.",
  keywords: [
    "Fareena Iqbal Shah",
    "Software Developer Mumbai",
    "MERN Stack",
    "Next.js",
    "WordPress",
    "Frontend Developer",
    "React Developer",
    "Node.js",
  ],
  applicationName: "Fareena Portfolio",
  authors: [
    { name: "Fareena Iqbal Shah", url: "https://fareena-shah.vercel.app" },
  ],
  creator: "Fareena Iqbal Shah",
  publisher: "Fareena Iqbal Shah",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://fareena-shah.vercel.app"),
  alternates: { canonical: "https://fareena-shah.vercel.app" },
  openGraph: {
    title: "Fareena Iqbal Shah – Software Developer",
    description:
      "Portfolio of Fareena Iqbal Shah — building modern web apps with WordPress, MERN, and Next.js.",
    url: "https://fareena-shah.vercel.app",
    siteName: "Fareena Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://fareena-shah.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fareena Iqbal Shah – Software Developer",
    description: "Portfolio of Fareena — WordPress, MERN, Next.js developer.",
    images: ["https://fareena-shah.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Fareena Iqbal Shah",
        url: "https://fareena-shah.vercel.app",
        jobTitle: "Software Developer",
        email: "fareenashah00@gmail.com",
        telephone: "+91 9324258669",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santacruz East",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Chetana College" },
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
      },
      {
        "@type": "WebSite",
        name: "Fareena Portfolio",
        url: "https://fareena-shah.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://fareena-shah.vercel.app/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fareena-shah.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://fareena-shah.vercel.app/#projects",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Contact",
            item: "https://fareena-shah.vercel.app/#contact",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#74d4ea" />
        <meta name="color-scheme" content="light dark" />
        <script
          key="ld-json"
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${publicSans.variable} antialiased bg-white text-textPrimary flex flex-col min-h-screen`}
      >
        <SpeedInsights />
        <Analytics />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
