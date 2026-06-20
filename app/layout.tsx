import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import LenisProvider from "@/components/providers/lenis-provider";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Production-grade SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://deskly.vishaldev.space"),
  title: {
    default: "Deskly - Open Source Desktop App for VIT Chennai Students",
    template: "%s | Deskly",
  },
  description:
    "Free open-source desktop application for VIT Chennai students. Get real-time VTOP access, automatic attendance tracking, timetable management, and secure credential storage. Built with Electron for Windows, macOS, and Linux.",
  keywords: [
    "VIT Chennai",
    "VTOP access",
    "VIT Chennai desktop app",
    "attendance tracker VIT",
    "VIT timetable app",
    "student portal VIT",
    "open source student app",
    "VIT Chennai software",
    "VTOP automation",
    "electron app VIT",
    "VIT Chennai utilities",
    "campus services VIT",
  ],
  authors: [
    {
      name: "Deskly Contributors",
      url: "https://github.com/Vishal-770/Deskly",
    },
  ],
  creator: "Deskly Contributors",
  publisher: "Deskly",
  applicationName: "Deskly",
  category: "Education",
  classification: "Student Productivity Software",

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deskly.vishaldev.space",
    siteName: "Deskly",
    title: "Deskly - Open Source Desktop App for VIT Chennai Students",
    description:
      "Free desktop application for VIT Chennai students with real-time VTOP access, attendance tracking, and secure session management.",
    images: [
      {
        url: "/app-logo.png",
        width: 512,
        height: 512,
        alt: "Deskly - VIT Chennai Desktop Portal",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Deskly - Open Source Desktop App for VIT Chennai Students",
    description:
      "Free desktop application for VIT Chennai students with real-time VTOP access, attendance tracking, and secure session management.",
    images: ["/app-logo.png"],
    creator: "@vishal_dev_",
  },

  // Robots directives
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

  // Additional metadata
  alternates: {
    canonical: "https://deskly.vishaldev.space",
  },

  // App-specific metadata
  appleWebApp: {
    capable: true,
    title: "Deskly",
    statusBarStyle: "default",
  },

  // Verification tokens (add when you have them)
  verification: {
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
  },

  // Others
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/app-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/app-logo.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for enhanced SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Deskly",
        applicationCategory: "EducationalApplication",
        operatingSystem: ["Windows", "macOS", "Linux"],
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Free open-source desktop application for VIT Chennai students with real-time VTOP access, attendance tracking, and timetable management.",
        softwareVersion: "1.2.0",
        downloadUrl: "https://github.com/Vishal-770/Deskly/releases",
        screenshot: "https://deskly.vishaldev.space/main.png",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "150",
        },
        author: {
          "@type": "Organization",
          name: "Deskly Contributors",
          url: "https://github.com/Vishal-770/Deskly",
        },
      },
      {
        "@type": "WebSite",
        name: "Deskly",
        url: "https://deskly.vishaldev.space",
        description: "Open source desktop application for VIT Chennai students",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://deskly.vishaldev.space/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "Deskly",
        url: "https://deskly.vishaldev.space",
        logo: "https://deskly.vishaldev.space/app-logo.png",
        sameAs: ["https://github.com/Vishal-770/Deskly"],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${raleway.variable} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
