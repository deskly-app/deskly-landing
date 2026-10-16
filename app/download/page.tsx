"use client";

import React, { useState, useEffect } from "react";
import Component from "@/components/ui/gradient-bars-background";
import Footer from "@/components/ui/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { 
  Download, 
  Apple, 
  Monitor, 
  Terminal, 
  ArrowLeft,
  PlusIcon,
  Smartphone
} from "lucide-react";

interface ReleaseFile {
  name: string;
  size: string;
  checksum: string;
  url: string;
  platform: "mac" | "windows" | "linux" | "android";
  platformName: string;
}

const FALLBACK_RELEASE_VERSION = "v7.1.6";
const FALLBACK_PUBLISHED_AT = "2026-10-16T16:56:11Z";

const FALLBACK_FILES: ReleaseFile[] = [
  {
    name: "Deskly_7.1.6_aarch64.dmg",
    size: "4.97 MB",
    checksum: "d609bc73598764f52f57cd7650beec535a0f49cb76be00399fdf0cb273dc2b21",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_aarch64.dmg",
    platform: "mac",
    platformName: "macOS (Apple Silicon)"
  },
  {
    name: "Deskly.app.tar.gz",
    size: "4.21 MB",
    checksum: "d6befbe189ea42520e14e764480666a9d634c2c2686cb59eb76f196c44749838",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly.app.tar.gz",
    platform: "mac",
    platformName: "macOS (Intel/Portable)"
  },
  {
    name: "Deskly_7.1.6_x64_en-US.msi",
    size: "3.78 MB",
    checksum: "a5e99d37aa327b06f618ac21e3fd710fff8c11e749eb4d1d1d3d094ce66f6b60",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_x64_en-US.msi",
    platform: "windows",
    platformName: "Windows (MSI Installer)"
  },
  {
    name: "Deskly_7.1.6_x64-setup.exe",
    size: "2.94 MB",
    checksum: "b5a1892d064381c6c72c7759642640496da3fbc3870430dcfcb14322526f044e",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_x64-setup.exe",
    platform: "windows",
    platformName: "Windows (EXE Installer)"
  },
  {
    name: "Deskly_7.1.6_amd64.AppImage",
    size: "78.9 MB",
    checksum: "346f379371acb89d6a956843f4bdad4a1afc2569151d0a5a1e164bfebe4dc229",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_amd64.AppImage",
    platform: "linux",
    platformName: "Linux (AppImage)"
  },
  {
    name: "Deskly_7.1.6_amd64.deb",
    size: "4.31 MB",
    checksum: "1613a6b80427d7e945cf89ed1ff3c0f965409d9c4b44fa4fd047bfe88f1c3d51",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_amd64.deb",
    platform: "linux",
    platformName: "Linux (Debian/Deb)"
  },
  {
    name: "Deskly-7.1.6-1.x86_64.rpm",
    size: "4.31 MB",
    checksum: "0a1b8b4a232d165cfe5db372ce5a0161f5105f151a06526b2793353d21931bd1",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly-7.1.6-1.x86_64.rpm",
    platform: "linux",
    platformName: "Linux (Fedora/RPM)"
  },
  {
    name: "Deskly_7.1.6_arm64.apk",
    size: "9.88 MB",
    checksum: "9041db50a2c2bc0564514183cfea9ca3bc1f69c6b51264b42319cc74d117f800",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_arm64.apk",
    platform: "android",
    platformName: "Android (arm64-v8a • Modern Phones)"
  },
  {
    name: "Deskly_7.1.6_arm.apk",
    size: "7.39 MB",
    checksum: "ee2cf4798b375e221486c02c61a58714b8851339062e5a905390323fb20d834e",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_arm.apk",
    platform: "android",
    platformName: "Android (armeabi-v7a • 32-bit Devices)"
  },
  {
    name: "Deskly_7.1.6_x86_64.apk",
    size: "11.0 MB",
    checksum: "53d69f3be7bb1a349dfd3e2c680b600009b7edc52903c990f80393cc5743c4bf",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_x86_64.apk",
    platform: "android",
    platformName: "Android (x86_64 • Chromebooks & Emulators)"
  },
  {
    name: "Deskly_7.1.6_x86.apk",
    size: "10.5 MB",
    checksum: "5cc27b9edcea9311f28a7f3f04e9505b3df69165592552fec45ff9ed4623434b",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_x86.apk",
    platform: "android",
    platformName: "Android (x86 • 32-bit Emulators)"
  },
  {
    name: "Deskly_7.1.6_universal.apk",
    size: "32.2 MB",
    checksum: "aeb6b94ce66e3e4457752a354bf4cd248592bdbdcf7b95b91b6958bcde1d2f9f",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6_universal.apk",
    platform: "android",
    platformName: "Android (Universal APK • All-in-One Fallback)"
  },
  {
    name: "Deskly_7.1.6.aab",
    size: "17.7 MB",
    checksum: "dd72a2572dc52d26165f04ff93fda0a0ede84e75ce9a1f027759fedbf564a539",
    url: "https://github.com/deskly-app/deskly/releases/download/v7.1.6/Deskly_7.1.6.aab",
    platform: "android",
    platformName: "Android (Google Play Bundle • AAB)"
  }
];

const CHECKSUM_MAP: Record<string, string> = {
  "Deskly-7.1.6-1.x86_64.rpm": "0a1b8b4a232d165cfe5db372ce5a0161f5105f151a06526b2793353d21931bd1",
  "Deskly.app.tar.gz": "d6befbe189ea42520e14e764480666a9d634c2c2686cb59eb76f196c44749838",
  "Deskly_7.1.6_aarch64.dmg": "d609bc73598764f52f57cd7650beec535a0f49cb76be00399fdf0cb273dc2b21",
  "Deskly_7.1.6_amd64.AppImage": "346f379371acb89d6a956843f4bdad4a1afc2569151d0a5a1e164bfebe4dc229",
  "Deskly_7.1.6_amd64.deb": "1613a6b80427d7e945cf89ed1ff3c0f965409d9c4b44fa4fd047bfe88f1c3d51",
  "Deskly_7.1.6_x64-setup.exe": "b5a1892d064381c6c72c7759642640496da3fbc3870430dcfcb14322526f044e",
  "Deskly_7.1.6_x64_en-US.msi": "a5e99d37aa327b06f618ac21e3fd710fff8c11e749eb4d1d1d3d094ce66f6b60",
  "Deskly_7.1.6_arm64.apk": "9041db50a2c2bc0564514183cfea9ca3bc1f69c6b51264b42319cc74d117f800",
  "Deskly_7.1.6_arm.apk": "ee2cf4798b375e221486c02c61a58714b8851339062e5a905390323fb20d834e",
  "Deskly_7.1.6_x86_64.apk": "53d69f3be7bb1a349dfd3e2c680b600009b7edc52903c990f80393cc5743c4bf",
  "Deskly_7.1.6_x86.apk": "5cc27b9edcea9311f28a7f3f04e9505b3df69165592552fec45ff9ed4623434b",
  "Deskly_7.1.6_universal.apk": "aeb6b94ce66e3e4457752a354bf4cd248592bdbdcf7b95b91b6958bcde1d2f9f",
  "Deskly_7.1.6.aab": "dd72a2572dc52d26165f04ff93fda0a0ede84e75ce9a1f027759fedbf564a539"
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} Bytes`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

function parseChecksumFromBody(body: string, fileName: string): string {
  if (!body) return "";
  const escapedName = fileName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`${escapedName}[\\s\\S]*?([a-fA-F0-9]{64})`, "i");
  const match = body.match(regex);
  if (match) return match[1];
  return "";
}

function isInstallerFile(name: string): boolean {
  const lower = name.toLowerCase();
  return (
    lower.endsWith(".dmg") ||
    lower.endsWith(".msi") ||
    lower.endsWith(".exe") ||
    lower.endsWith(".appimage") ||
    lower.endsWith(".deb") ||
    lower.endsWith(".rpm") ||
    lower.endsWith(".apk") ||
    lower.endsWith(".aab") ||
    (lower.endsWith(".tar.gz") && lower.startsWith("deskly"))
  ) && !lower.endsWith(".sig");
}

export default function DownloadPage() {
  const [version, setVersion] = useState<string>(FALLBACK_RELEASE_VERSION);
  const [filesList, setFilesList] = useState<ReleaseFile[]>(FALLBACK_FILES);
  const [loading, setLoading] = useState<boolean>(true);
  const [detectedOS, setDetectedOS] = useState<"mac" | "windows" | "linux" | "android" | null>(null);
  const [recommendedFile, setRecommendedFile] = useState<ReleaseFile | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent.toLowerCase();
      let os: "mac" | "windows" | "linux" | "android" | null = null;
      if (ua.includes("android")) {
        os = "android";
      } else if (ua.includes("macintosh") || ua.includes("mac os x") || ua.includes("iphone") || ua.includes("ipad")) {
        os = "mac";
      } else if (ua.includes("windows") || ua.includes("win32") || ua.includes("win64")) {
        os = "windows";
      } else if (ua.includes("linux")) {
        os = "linux";
      }
      setDetectedOS(os);
    }
  }, []);

  useEffect(() => {
    if (detectedOS && filesList.length > 0) {
      let bestFile: ReleaseFile | null = null;
      if (detectedOS === "windows") {
        bestFile = filesList.find(f => f.name.endsWith(".exe")) || filesList.find(f => f.platform === "windows") || null;
      } else if (detectedOS === "mac") {
        bestFile = filesList.find(f => f.name.endsWith(".dmg")) || filesList.find(f => f.platform === "mac") || null;
      } else if (detectedOS === "linux") {
        bestFile = filesList.find(f => f.name.endsWith(".AppImage")) || filesList.find(f => f.platform === "linux") || null;
      } else if (detectedOS === "android") {
        bestFile = filesList.find(f => f.name.includes("arm64.apk")) || filesList.find(f => f.name.endsWith(".apk")) || filesList.find(f => f.platform === "android") || null;
      }
      setRecommendedFile(bestFile);
    }
  }, [detectedOS, filesList]);

  useEffect(() => {
    let active = true;
    async function fetchRelease() {
      try {
        const res = await fetch("https://api.github.com/repos/deskly-app/deskly/releases/latest");
        if (!res.ok) throw new Error("API Limit");
        const data = await res.json();
        if (!active) return;

        const latestVersion = data.tag_name || FALLBACK_RELEASE_VERSION;
        const releaseBody = data.body || "";
        const assets = data.assets || [];

        const installers: ReleaseFile[] = assets
          .filter((asset: any) => isInstallerFile(asset.name || ""))
          .map((asset: any) => {
            const name = asset.name || "";
            const sizeStr = formatSize(asset.size || 0);
            const url = asset.browser_download_url;

            let platform: "mac" | "windows" | "linux" | "android" = "windows";
            let platformName = "Windows Binary";
            if (name.includes("aarch64") || name.endsWith(".dmg") || name.includes("tar.gz")) {
              platform = "mac";
              platformName = name.includes("aarch64") ? "macOS (Apple Silicon)" : "macOS (Intel/Portable)";
            } else if (name.includes(".msi") || name.includes(".exe")) {
              platform = "windows";
              platformName = name.includes(".msi") ? "Windows (MSI Installer)" : "Windows (EXE Installer)";
            } else if (name.includes(".AppImage") || name.includes(".deb") || name.includes(".rpm")) {
              platform = "linux";
              if (name.includes(".AppImage")) platformName = "Linux (AppImage)";
              else if (name.includes(".deb")) platformName = "Linux (Debian/Deb)";
              else platformName = "Linux (Fedora/RPM)";
            } else if (name.endsWith(".apk") || name.endsWith(".aab")) {
              platform = "android";
              if (name.includes("arm64")) {
                platformName = "Android (arm64-v8a • Modern Phones)";
              } else if (name.includes("_arm.apk")) {
                platformName = "Android (armeabi-v7a • 32-bit Devices)";
              } else if (name.includes("x86_64")) {
                platformName = "Android (x86_64 • Chromebooks & Emulators)";
              } else if (name.includes("_x86.apk")) {
                platformName = "Android (x86 • 32-bit Emulators)";
              } else if (name.includes("universal")) {
                platformName = "Android (Universal APK • All-in-One Fallback)";
              } else if (name.endsWith(".aab")) {
                platformName = "Android (Google Play Bundle • AAB)";
              } else {
                platformName = "Android APK Package";
              }
            }

            let checksum = "";
            if (asset.digest && typeof asset.digest === "string" && asset.digest.startsWith("sha256:")) {
              checksum = asset.digest.replace("sha256:", "");
            }
            if (!checksum) {
              checksum = parseChecksumFromBody(releaseBody, name);
            }
            if (!checksum && CHECKSUM_MAP[name]) {
              checksum = CHECKSUM_MAP[name];
            }

            return { name, size: sizeStr, checksum, url, platform, platformName };
          });

        setVersion(latestVersion);
        if (installers.length > 0) {
          setFilesList(installers);
        }
        setLoading(false);
      } catch (err) {
        console.warn("Using fallback local release assets:", err);
        setLoading(false);
      }
    }
    fetchRelease();
    return () => { active = false; };
  }, []);

  const getPlatformIcon = (platform: "mac" | "windows" | "linux" | "android", className = "w-4 h-4 text-zinc-300") => {
    switch (platform) {
      case "mac": return <Apple className={className} />;
      case "windows": return <Monitor className={className} />;
      case "linux": return <Terminal className={className} />;
      case "android": return <Smartphone className={className} />;
    }
  };

  const renderDownloadSection = (title: string, subtitle: string, files: ReleaseFile[]) => {
    if (files.length === 0) return null;
    return (
      <div className="w-full mb-12">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span>{title}</span>
          <span className="text-xs font-normal text-zinc-500 font-mono">({subtitle})</span>
        </h2>
        <div className="relative w-full border-y border-white/10 bg-[radial-gradient(45%_80%_at_50%_0%,rgba(37,99,235,0.07),transparent)]">
          {/* Plus corner markers */}
          <PlusIcon className="absolute top-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />

          {/* Vertical side guides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px border-l border-white/10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px border-r border-white/10" />

          {/* Mobile Card-List View (Visible on mobile, hidden on desktop) */}
          <div className="block md:hidden divide-y divide-white/5 relative z-20">
            {files.map((file, idx) => (
              <div 
                key={idx} 
                className="p-5 flex flex-col gap-3 hover:bg-white/[0.01] transition-colors duration-150"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="shrink-0 p-1.5 rounded bg-white/[0.02] border border-white/5">
                      {getPlatformIcon(file.platform)}
                    </div>
                    <span className="text-xs font-semibold text-zinc-300 font-sans">
                      {file.platformName}
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded">
                    {file.size}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 mt-1">
                  <a 
                    href={file.url}
                    referrerPolicy="no-referrer"
                    className="text-white hover:text-blue-400 font-semibold text-xs font-mono truncate block flex-1 pr-2"
                    title={file.name}
                  >
                    {file.name}
                  </a>
                  <a
                    href={file.url}
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center p-2 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/20 transition-all cursor-pointer shrink-0"
                    title="Download File"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View (Hidden on mobile, visible on desktop) */}
          <div className="hidden md:block overflow-x-auto scrollbar-none">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.01]">
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans">Platform</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans">Installer File</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans text-right">Size</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans text-center">Download</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {files.map((file, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-white/[0.01] transition-colors duration-150"
                  >
                    {/* Platform Name and Icon */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 p-1.5 rounded bg-white/[0.02] border border-white/5">
                          {getPlatformIcon(file.platform)}
                        </div>
                        <span className="text-xs font-semibold text-zinc-300 font-sans whitespace-nowrap">
                          {file.platformName}
                        </span>
                      </div>
                    </td>

                    {/* Filename details */}
                    <td className="px-6 py-4 max-w-sm">
                      <div className="overflow-hidden">
                        <a 
                          href={file.url}
                          referrerPolicy="no-referrer"
                          className="text-white hover:text-blue-400 font-semibold text-xs font-mono truncate block"
                        >
                          {file.name}
                        </a>
                      </div>
                    </td>

                    {/* Size */}
                    <td className="px-6 py-4 text-right">
                      <span className="text-[11px] text-zinc-400 font-mono whitespace-nowrap bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded">
                        {file.size}
                      </span>
                    </td>

                    {/* Action Link */}
                    <td className="px-6 py-4 text-center">
                      <a
                        href={file.url}
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center justify-center p-2 rounded-full text-zinc-400 hover:text-white hover:bg-blue-600/10 border border-transparent hover:border-blue-500/20 transition-all cursor-pointer"
                        title="Download File"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  const desktopFiles = filesList.filter(file => file.platform !== "android");
  const mobileFiles = filesList.filter(file => file.platform === "android");

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-start">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        <Component
          numBars={22}
          gradientFrom="#2563eb"
          gradientTo="transparent"
          backgroundColor="#000000"
          animationDuration={5}
        />
      </div>

      {/* Navbar / Header */}
      <header className="absolute top-0 left-0 w-full z-50">
        <ScrollReveal duration={1000} delay={100} margin="0px">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 cursor-pointer">
              <img src="/app-logo.png" alt="Deskly Logo" className="h-7 md:h-8 w-auto" />
              <span className="text-white font-semibold text-sm md:text-base tracking-wider font-sans">Deskly</span>
            </a>

            <a
              href="/"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-xs font-medium transition-colors font-sans"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </a>
          </div>
        </ScrollReveal>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow pt-32 md:pt-40 pb-28 max-w-4xl mx-auto px-5 md:px-8 w-full flex flex-col items-center">
        
        {/* Title */}
        <ScrollReveal>
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3 font-header leading-tight">
              Download Deskly
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-normal max-w-lg mx-auto leading-relaxed">
              Academic tracking without the bloat. Zero lag, zero ads, and 100% offline-ready across Android, Windows, macOS, and Linux ({version}).
            </p>
          </div>
        </ScrollReveal>

        {/* Recommended Download */}
        {!loading && recommendedFile && (
          <ScrollReveal delay={100} className="w-full mb-12">
            <div className="relative w-full border-y border-white/10 bg-[radial-gradient(45%_80%_at_50%_0%,rgba(37,99,235,0.07),transparent)]">
              {/* Plus corner markers */}
              <PlusIcon className="absolute top-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
              <PlusIcon className="absolute top-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
              <PlusIcon className="absolute bottom-[-12px] left-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />
              <PlusIcon className="absolute bottom-[-12px] right-[-12px] z-10 size-6 text-blue-500/50" strokeWidth={1} />

              {/* Vertical side guides */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px border-l border-white/10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-px border-r border-white/10" />

              <div className="relative z-20 flex flex-col lg:flex-row lg:items-center justify-between p-6 gap-6">
                <div className="flex items-center gap-4 min-w-0 w-full lg:w-auto">
                  <div className="shrink-0 p-2.5 rounded bg-white/[0.02] border border-white/5 text-zinc-300">
                    {detectedOS && getPlatformIcon(detectedOS, "w-5 h-5 text-zinc-300")}
                  </div>
                  <div className="space-y-1 min-w-0 flex-1">
                    <span className="text-[9px] uppercase tracking-[0.15em] font-semibold text-blue-400 font-sans">
                      Recommended Release
                    </span>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      Deskly for {recommendedFile.platformName.split(" (")[0]}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 text-zinc-400 text-[11px] font-sans">
                      {detectedOS === "linux" ? (
                        <>
                          <span className="text-zinc-300">AppImage, DEB, and RPM installers</span>
                          <span>•</span>
                          <span className="shrink-0 text-zinc-400">{version.startsWith('v') ? version : `v${version}`}</span>
                        </>
                      ) : (
                        <>
                          <span className="font-mono truncate max-w-[180px] sm:max-w-[320px] inline-block text-zinc-300">{recommendedFile.name}</span>
                          <span>•</span>
                          <span className="shrink-0">{recommendedFile.size}</span>
                          <span>•</span>
                          <span className="shrink-0 text-zinc-400">{version.startsWith('v') ? version : `v${version}`}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {detectedOS === "linux" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full lg:w-auto lg:flex lg:flex-row lg:gap-3 shrink-0">
                    {filesList.filter(f => f.platform === "linux").map((file) => {
                      let typeLabel = "AppImage";
                      if (file.name.endsWith(".deb")) typeLabel = "DEB";
                      else if (file.name.endsWith(".rpm")) typeLabel = "RPM";
                      
                      return (
                        <a 
                          key={file.name}
                          href={file.url}
                          referrerPolicy="no-referrer"
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold whitespace-nowrap shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-150 cursor-pointer font-sans"
                        >
                          <span>Download .{typeLabel}</span>
                          <Download className="w-3.5 h-3.5" />
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <a 
                    href={recommendedFile.url}
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-[4px] text-xs font-semibold whitespace-nowrap shadow-lg shadow-blue-500/20 active:scale-95 transition-all duration-150 cursor-pointer font-sans shrink-0"
                  >
                    <span>Download for {detectedOS === "mac" ? "macOS" : detectedOS === "windows" ? "Windows" : detectedOS === "android" ? "Android" : "Linux"}</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Downloads List Table */}
        <ScrollReveal delay={150} className="w-full">
          {loading ? (
            <div className="w-full bg-[#0a0d16]/30 border border-white/5 rounded-lg p-8 backdrop-blur-md animate-pulse space-y-4">
              <div className="h-4 bg-white/10 rounded w-1/4"></div>
              <div className="h-10 bg-white/10 rounded"></div>
              <div className="h-10 bg-white/10 rounded"></div>
              <div className="h-10 bg-white/10 rounded"></div>
            </div>
          ) : (
            <div className="w-full">
              {renderDownloadSection("Desktop Client", "Windows 10/11, macOS 11+, Linux (~3MB)", desktopFiles)}
              {renderDownloadSection("Mobile Client", "Android 7.0+ up to Android 15 (~10MB arm64 • all formats supported)", mobileFiles)}
            </div>
          )}
        </ScrollReveal>

      </main>

      {/* Footer */}
      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>

    </div>
  );
}
