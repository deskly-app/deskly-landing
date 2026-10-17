import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import LenisProvider from "@/components/providers/lenis-provider";
import { GITHUB_URL, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Deskly — Open-Source VIT Attendance & Timetable App",
    template: "%s | Deskly",
  },
  description:
    "Deskly is a free, open-source VIT student app for attendance, timetables, marks, calendars, and VTOP access on Android, Windows, macOS, and Linux.",
  keywords: [
    "VIT Chennai",
    "VIT attendance app",
    "VIT timetable app",
    "VTOP app",
    "student productivity app",
    "open-source student app",
  ],
  authors: [
    {
      name: "Deskly Contributors",
      url: GITHUB_URL,
    },
  ],
  creator: "Deskly Contributors",
  publisher: "Deskly",
  applicationName: "Deskly",
  category: "Education",
  classification: "Student Productivity Software",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Deskly — Open-Source VIT Attendance & Timetable App",
    description:
      "A free, open-source VIT student app for attendance, timetables, marks, calendars, and VTOP access on Android and desktop.",
    images: [
      {
        url: "/main.png",
        width: 1673,
        height: 940,
        alt: "Deskly attendance and timetable dashboard",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deskly — Open-Source VIT Attendance & Timetable App",
    description:
      "A free, open-source VIT student app for attendance, timetables, marks, calendars, and VTOP access on Android and desktop.",
    images: ["/main.png"],
    creator: "@vishal_dev_",
  },

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

  alternates: {
    canonical: SITE_URL,
  },

  appleWebApp: {
    capable: true,
    title: "Deskly",
    statusBarStyle: "default",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "EducationalApplication",
        applicationSubCategory: "Student productivity",
        operatingSystem: ["Android", "Windows", "macOS", "Linux"],
        url: SITE_URL,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        description:
          "Free, open-source student app for VIT attendance, timetables, marks, calendars, and VTOP access.",
        downloadUrl: `${SITE_URL}/download`,
        screenshot: `${SITE_URL}/main.png`,
        isAccessibleForFree: true,
        author: {
          "@type": "Organization",
          name: "Deskly Contributors",
          url: GITHUB_URL,
        },
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: "Open-source student app for VIT attendance and timetables.",
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/app-logo.png`,
        sameAs: [GITHUB_URL],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
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
