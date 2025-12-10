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
    "Portfolio of Fareena Iqbal Shah — Software Developer specializing in WordPress, MERN Stack, React, and Next.js. Creating modern, accessible, high-performance websites and scalable web applications.",
  keywords: [
    "Fareena Iqbal Shah",
    "Software Developer Mumbai",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer Mumbai",
    "Web Developer Portfolio",
    "WordPress Developer",
    "MERN Stack Developer",
    "UI Developer",
    "Full Stack Developer",
    "JavaScript Expert",
  ],
  applicationName: "Fareena Portfolio",
  authors: [
    { name: "Fareena Iqbal Shah", url: "https://fareena-shah.vercel.app" },
  ],
  creator: "Fareena Iqbal Shah",
  publisher: "Fareena Iqbal Shah",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://fareena-shah.vercel.app"),
  alternates: {
    canonical: "https://fareena-shah.vercel.app",
  },

  // --------------------------
  // Favicon + Icons + Manifest
  // --------------------------
  icons: {
    icon: "/fs_logo.png",
    shortcut: "/fs_logo.png",
    apple: "/fs_logo.png",
    other: [
      {
        rel: "mask-icon",
        url: "/fs_logo.png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Fareena Iqbal Shah – Software Developer",
    description:
      "Portfolio showcasing modern web development with WordPress, React, Next.js, and MERN stack.",
    url: "https://fareena-shah.vercel.app",
    siteName: "Fareena Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://fareena-shah.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fareena Iqbal Shah Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fareena Iqbal Shah – Software Developer",
    description:
      "Explore projects and work by Fareena — specialist in MERN Stack, WordPress, Next.js & UI development.",
    images: ["https://fareena-shah.vercel.app/og-image.jpg"],
    creator: "@fareena_dev",
  },

  // Additional mobile SEO
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -------------------------------------------------------------------
  //           ---------- FULL GENERATIVE SEO STRUCTURED DATA ----------
  // -------------------------------------------------------------------
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // PERSON
      {
        "@type": "Person",
        name: "Fareena Iqbal Shah",
        url: "https://fareena-shah.vercel.app",
        jobTitle: "Software Developer",
        email: "fareenashah00@gmail.com",
        telephone: "+91 9324258669",
        image: "https://fareena-shah.vercel.app/fs_logo.png",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Santacruz East",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Chetana College",
        },
        sameAs: [
          "https://linkedin.com/in/yourprofile",
          "https://github.com/yourprofile",
          "https://stremir.vercel.app/",
          "https://island-verse.vercel.app/",
          "https://fs-newsletter.vercel.app/",
          "https://paperfolio-fs.vercel.app/",
          "https://codesis-project.vercel.app/",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "WordPress",
          "MERN Stack",
          "Node.js",
          "JavaScript",
          "UI Development",
          "Frontend Optimization",
          "Figma",
          "Bootstrap",
          "HTML/CSS",
          "Git",
          "Responsive Web Design",
        ],
      },

      // WEBSITE
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

      // WEBPAGE
      {
        "@type": "WebPage",
        name: "Home – Fareena Iqbal Shah",
        url: "https://fareena-shah.vercel.app",
        description:
          "Portfolio of Mumbai-based Software Developer, creating modern React, WordPress, and Next.js applications.",
      },

      // ORGANIZATION
      {
        "@type": "Organization",
        name: "Fareena Iqbal Shah",
        url: "https://fareena-shah.vercel.app",
        logo: "https://fareena-shah.vercel.app/fs_logo.png",
        sameAs: [
          "https://linkedin.com/in/yourprofile",
          "https://github.com/yourprofile",
        ],
      },

      // PROJECT LIST (Best for generative search)
      {
        "@type": "ItemList",
        name: "Featured Projects",
        itemListElement: [
          {
            "@type": "CreativeWork",
            name: "Stremir",
            url: "https://stremir.vercel.app/",
          },
          {
            "@type": "CreativeWork",
            name: "Island Verse",
            url: "https://island-verse.vercel.app/",
          },
          {
            "@type": "CreativeWork",
            name: "FS Newsletter",
            url: "https://fs-newsletter.vercel.app/",
          },
          {
            "@type": "CreativeWork",
            name: "Paperfolio",
            url: "https://paperfolio-fs.vercel.app/",
          },
          {
            "@type": "CreativeWork",
            name: "Codesis Project",
            url: "https://codesis-project.vercel.app/",
          },
        ],
      },

      // BREADCRUMB
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
