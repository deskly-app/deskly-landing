import type { Metadata } from "next";
import PageContent from "./page-content";

// Page-level SEO metadata
export const metadata: Metadata = {
  title: "Deskly - Free VIT Chennai VTOP Desktop App with Real-Time Sync",
  description:
    "Download Deskly for Windows, macOS, and Linux. Open-source desktop app for VIT Chennai students featuring automatic attendance tracking, real-time timetable updates, secure VTOP session management, and campus services integration. Zero captchas, auto-updates included.",
  keywords: [
    "download VIT Chennai app",
    "VTOP desktop client",
    "VIT attendance tracker",
    "VIT timetable application",
    "student productivity tools",
    "VIT Chennai software download",
    "open source education app",
    "electron VIT app",
  ],
  openGraph: {
    title: "Deskly - Free VIT Chennai VTOP Desktop App with Real-Time Sync",
    description:
      "Download Deskly for Windows, macOS, and Linux. Open-source desktop app with automatic attendance tracking, real-time VTOP sync, and secure session management.",
    url: "https://deskly.vishaldev.space",
    type: "website",
    images: [
      {
        url: "/app-logo.png",
        width: 512,
        height: 512,
        alt: "Deskly Desktop Application Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deskly - Free VIT Chennai VTOP Desktop App",
    description:
      "Open-source desktop app with automatic attendance tracking, real-time VTOP sync, and secure session management for VIT Chennai students.",
    images: ["/app-logo.png"],
  },
  alternates: {
    canonical: "https://deskly.vishaldev.space",
  },
};

export default function Page() {
  return <PageContent />;
}
