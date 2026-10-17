import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download Deskly for Windows, macOS, Linux & Android",
  description:
    "Download the free Deskly student app for VIT attendance, timetables, marks, and VTOP access on Windows, macOS, Linux, and Android.",
  alternates: {
    canonical: `${SITE_URL}/download`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/download`,
    siteName: SITE_NAME,
    title: "Download Deskly for Windows, macOS, Linux & Android",
    description:
      "Download the free Deskly student app for VIT attendance, timetables, marks, and VTOP access on Windows, macOS, Linux, and Android.",
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
    title: "Download Deskly for Windows, macOS, Linux & Android",
    description:
      "Download the free Deskly student app for VIT attendance, timetables, marks, and VTOP access on Windows, macOS, Linux, and Android.",
    images: ["/main.png"],
  },
};

export default function DownloadLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
