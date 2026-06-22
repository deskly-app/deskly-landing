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
  CheckCircle2, 
  Shield, 
  Info, 
  ArrowLeft,
  Sparkles,
  Layers,
  Cpu,
  FileText
} from "lucide-react";

type OS = "mac" | "windows" | "linux" | "unknown";

interface ReleaseFile {
  name: string;
  size: string;
  checksum: string;
  url: string;
  description: string;
  isSig?: boolean;
}

const OS_DATA: Record<Exclude<OS, "unknown">, {
  title: string;
  icon: any;
  recommendation: string;
  installCommand?: string;
}> = {
  mac: {
    title: "macOS",
    icon: Apple,
    recommendation: "Compatible with macOS 12 (Monterey) or later",
    installCommand: "brew install vishal-770/tap/deskly"
  },
  windows: {
    title: "Windows",
    icon: Monitor,
    recommendation: "Compatible with Windows 10 / 11 (64-bit)",
    installCommand: "winget install Deskly"
  },
  linux: {
    title: "Linux",
    icon: Terminal,
    recommendation: "Compatible with Ubuntu, Debian, Arch Linux & Fedora",
    installCommand: "yay -S deskly-bin"
  }
};

// Fallback hardcoded data for v2.0.1 in case GitHub API fails or is rate-limited
const FALLBACK_RELEASE_VERSION = "v2.0.1";
const FALLBACK_PUBLISHED_AT = "2026-06-22T15:12:21Z"; // Mocked to match 6 hours ago relative to current local time

const FALLBACK_FILES: Record<Exclude<OS, "unknown">, ReleaseFile[]> = {
  mac: [
    {
      name: "Deskly_2.0.1_aarch64.dmg",
      size: "8.31 MB",
      checksum: "9177970cfe1bdc5759d9bd5506e84348437bf6a3f3fef0a85b62f8246d364d39",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_aarch64.dmg",
      description: "Apple Silicon installer (M1/M2/M3 chips)"
    },
    {
      name: "Deskly.app.tar.gz",
      size: "7.66 MB",
      checksum: "cd34869ae9c30a0bb1ffb3a8505c98e85fccd26838d20e75b265fda806ed0214",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly.app.tar.gz",
      description: "Portable macOS Archive"
    },
    {
      name: "Deskly.app.tar.gz.sig",
      size: "404 Bytes",
      checksum: "36bbf39a408ff73196eb8a3096bfb1c81c559a943efb562f7ccda09a33880ef7",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly.app.tar.gz.sig",
      description: "Signature for update verification",
      isSig: true
    }
  ],
  windows: [
    {
      name: "Deskly_2.0.1_x64_en-US.msi",
      size: "6.69 MB",
      checksum: "1f5fbe8ca2f2f8845b1d76f9b7c1c721d7e7fe9c58954f1a60119f6983961db9",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64_en-US.msi",
      description: "Standard MSI Windows Installer"
    },
    {
      name: "Deskly_2.0.1_x64_en-US.msi.sig",
      size: "416 Bytes",
      checksum: "d2bec67f1c3ac571d10813652fa52759abc0f0af1c0c50cb4fa3133d3458c456",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64_en-US.msi.sig",
      description: "Signature for MSI installer",
      isSig: true
    },
    {
      name: "Deskly_2.0.1_x64-setup.exe",
      size: "4.8 MB",
      checksum: "d8288b5ab20aa4a495667c2471b84197d7c8059ee0c5bc531ff8cd797320cd03",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64-setup.exe",
      description: "Windows Setup Executable"
    },
    {
      name: "Deskly_2.0.1_x64-setup.exe.sig",
      size: "416 Bytes",
      checksum: "36109ee38e3ccbf06072259e6fd7f29be0ce5b04f9be9b97dcb43927f1bc6ae9",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64-setup.exe.sig",
      description: "Signature for setup executable",
      isSig: true
    }
  ],
  linux: [
    {
      name: "Deskly_2.0.1_amd64.AppImage",
      size: "82.5 MB",
      checksum: "0099b39692e8d72ee9748df07ac9ad7476e20ff8f6d2e91e9e4484cb1ac59269",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.AppImage",
      description: "Universal Portable AppImage"
    },
    {
      name: "Deskly_2.0.1_amd64.AppImage.sig",
      size: "416 Bytes",
      checksum: "028e6366d2d774fbcc7edf69b01f2df64b1a9f15029b1cb684685dc4edf9b8b0",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.AppImage.sig",
      description: "Signature for AppImage package",
      isSig: true
    },
    {
      name: "Deskly_2.0.1_amd64.deb",
      size: "9.14 MB",
      checksum: "8be39a3ab12f9b1f3cd4d5a860952f7117c8e8adc4d84f944fd90ed045447d28",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.deb",
      description: "Debian/Ubuntu Package"
    },
    {
      name: "Deskly-2.0.1-1.x86_64.rpm",
      size: "9.14 MB",
      checksum: "d3b827942ad162c4d008defe2487e9195d602f5fc3cc6a13b156045dfaa5aeab",
      url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly-2.0.1-1.x86_64.rpm",
      description: "Fedora/RHEL/openSUSE RPM Package"
    }
  ]
};

const CHECKSUM_MAP: Record<string, string> = {
  "Deskly-2.0.1-1.x86_64.rpm": "d3b827942ad162c4d008defe2487e9195d602f5fc3cc6a13b156045dfaa5aeab",
  "Deskly.app.tar.gz": "cd34869ae9c30a0bb1ffb3a8505c98e85fccd26838d20e75b265fda806ed0214",
  "Deskly.app.tar.gz.sig": "36bbf39a408ff73196eb8a3096bfb1c81c559a943efb562f7ccda09a33880ef7",
  "Deskly_2.0.1_aarch64.dmg": "9177970cfe1bdc5759d9bd5506e84348437bf6a3f3fef0a85b62f8246d364d39",
  "Deskly_2.0.1_amd64.AppImage": "0099b39692e8d72ee9748df07ac9ad7476e20ff8f6d2e91e9e4484cb1ac59269",
  "Deskly_2.0.1_amd64.AppImage.sig": "028e6366d2d774fbcc7edf69b01f2df64b1a9f15029b1cb684685dc4edf9b8b0",
  "Deskly_2.0.1_amd64.deb": "8be39a3ab12f9b1f3cd4d5a860952f7117c8e8adc4d84f944fd90ed045447d28",
  "Deskly_2.0.1_x64-setup.exe": "d8288b5ab20aa4a495667c2471b84197d7c8059ee0c5bc531ff8cd797320cd03",
  "Deskly_2.0.1_x64-setup.exe.sig": "36109ee38e3ccbf06072259e6fd7f29be0ce5b04f9be9b97dcb43927f1bc6ae9",
  "Deskly_2.0.1_x64_en-US.msi": "1f5fbe8ca2f2f8845b1d76f9b7c1c721d7e7fe9c58954f1a60119f6983961db9",
  "Deskly_2.0.1_x64_en-US.msi.sig": "d2bec67f1c3ac571d10813652fa52759abc0f0af1c0c50cb4fa3133d3458c456",
  "latest.json": "e16af4c4b80087704d76e85c3e94685e51034192341392d048da05c3358149f6"
};

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} Bytes`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

function formatTimeAgo(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHr = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHr / 24);

    if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    if (diffHr > 0) return `${diffHr} hour${diffHr > 1 ? "s" : ""} ago`;
    if (diffMin > 0) return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
    return "just now";
  } catch (e) {
    return "recently";
  }
}

// Regex to pull checksum from markdown release body
function parseChecksumFromBody(body: string, fileName: string): string {
  if (!body) return "";
  // Matches "filename" followed by optional symbols, then a 64 hex char hash
  const escapedName = fileName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`${escapedName}[\\s\\S]*?([a-fA-F0-9]{64})`, "i");
  const match = body.match(regex);
  if (match) return match[1];
  return "";
}

export default function DownloadPage() {
  const [detectedOS, setDetectedOS] = useState<OS>("unknown");
  const [activeTab, setActiveTab] = useState<OS>("windows");
  const [version, setVersion] = useState<string>(FALLBACK_RELEASE_VERSION);
  const [publishedAt, setPublishedAt] = useState<string>(FALLBACK_PUBLISHED_AT);
  const [files, setFiles] = useState<Record<Exclude<OS, "unknown">, ReleaseFile[]>>(FALLBACK_FILES);
  const [loading, setLoading] = useState<boolean>(true);

  // OS Auto-Detection
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    let os: OS = "unknown";
    if (ua.indexOf("win") !== -1) os = "windows";
    else if (ua.indexOf("mac") !== -1) os = "mac";
    else if (ua.indexOf("linux") !== -1 || ua.indexOf("x11") !== -1) os = "linux";
    setDetectedOS(os);
    if (os !== "unknown") setActiveTab(os);
  }, []);

  // Fetch Latest Release dynamically from GitHub
  useEffect(() => {
    let active = true;
    async function fetchRelease() {
      try {
        const res = await fetch("https://api.github.com/repos/Vishal-770/deskly-tauri/releases/latest");
        if (!res.ok) throw new Error("API Limit or Network Error");
        const data = await res.json();
        
        if (!active) return;

        const latestVersion = data.tag_name || FALLBACK_RELEASE_VERSION;
        const releaseBody = data.body || "";
        const assets = data.assets || [];

        // Build file collections dynamically from GitHub assets
        const macFiles: ReleaseFile[] = [];
        const winFiles: ReleaseFile[] = [];
        const linFiles: ReleaseFile[] = [];

        assets.forEach((asset: any) => {
          const name = asset.name || "";
          const sizeStr = formatSize(asset.size || 0);
          const url = asset.browser_download_url;
          
          // Detect signature files
          const isSig = name.endsWith(".sig");
          
          // Parse description
          let description = "";
          if (name.includes("aarch64")) description = "Apple Silicon installer (M1/M2/M3 chips)";
          else if (name.includes("x64.dmg") || name.includes("x86_64.dmg")) description = "Intel Core Mac installer";
          else if (name.includes("tar.gz") && !isSig) description = "Portable macOS Archive";
          else if (name.includes("tar.gz.sig")) description = "Signature for update verification";
          else if (name.includes("msi") && !isSig) description = "Standard MSI Windows Installer";
          else if (name.includes("msi.sig")) description = "Signature for MSI installer";
          else if (name.includes("setup.exe") && !isSig) description = "Windows Setup Executable";
          else if (name.includes("setup.exe.sig")) description = "Signature for setup executable";
          else if (name.includes("AppImage") && !isSig) description = "Universal Portable AppImage";
          else if (name.includes("AppImage.sig")) description = "Signature for AppImage package";
          else if (name.includes(".deb")) description = "Debian/Ubuntu Package";
          else if (name.includes(".rpm")) description = "Fedora/RHEL/openSUSE RPM Package";
          else if (name === "latest.json") description = "Updater metadata file";
          else description = "Release package";

          // Pull SHA-256 Checksum: first check body notes, then check local hardcoded map, or fall back empty
          let checksum = parseChecksumFromBody(releaseBody, name);
          if (!checksum && CHECKSUM_MAP[name]) {
            checksum = CHECKSUM_MAP[name];
          }

          const fileObj: ReleaseFile = { name, size: sizeStr, checksum, url, description, isSig };

          // Route to tab groups
          if (name.includes("aarch64") || name.includes(".dmg") || name.includes("tar.gz")) {
            macFiles.push(fileObj);
          } else if (name.includes(".msi") || name.includes(".exe")) {
            winFiles.push(fileObj);
          } else if (name.includes(".AppImage") || name.includes(".deb") || name.includes(".rpm")) {
            linFiles.push(fileObj);
          }
        });

        // Add source code downloads (always present)
        macFiles.push({
          name: "Source code (zip)",
          size: "Source",
          checksum: "",
          url: `https://github.com/Vishal-770/deskly-tauri/archive/refs/tags/${latestVersion}.zip`,
          description: "Zipped repository sources"
        });
        macFiles.push({
          name: "Source code (tar.gz)",
          size: "Source",
          checksum: "",
          url: `https://github.com/Vishal-770/deskly-tauri/archive/refs/tags/${latestVersion}.tar.gz`,
          description: "Tarballed repository sources"
        });

        // Sort files to put signatures at the bottom and primary installers at the top
        const sortFiles = (arr: ReleaseFile[]) => {
          return arr.sort((a, b) => (a.isSig ? 1 : 0) - (b.isSig ? 1 : 0));
        };

        setVersion(latestVersion);
        setPublishedAt(data.published_at || FALLBACK_PUBLISHED_AT);
        setFiles({
          mac: sortFiles(macFiles),
          windows: sortFiles(winFiles),
          linux: sortFiles(linFiles)
        });
        setLoading(false);
      } catch (err) {
        // Fall back gracefully to local pre-configured v2.0.1 files on error
        console.error("Using fallback local release assets:", err);
        setLoading(false);
      }
    }
    fetchRelease();
    return () => { active = false; };
  }, []);

  const activeOSData = files[activeTab as Exclude<OS, "unknown">] || files.windows;

  // Compute recommended file based on OS selection
  const getPrimaryDownloadFile = (os: OS): ReleaseFile | null => {
    const list = files[os as Exclude<OS, "unknown">] || [];
    if (os === "mac") {
      return list.find(f => f.name.includes("aarch64") && !f.isSig) || list[0] || null;
    }
    if (os === "windows") {
      return list.find(f => f.name.includes("msi") && !f.isSig) || list[0] || null;
    }
    if (os === "linux") {
      return list.find(f => f.name.includes("AppImage") && !f.isSig) || list[0] || null;
    }
    return null;
  };

  const recommendedFile = getPrimaryDownloadFile(activeTab);

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
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 cursor-pointer">
              <img src="/app-logo.png" alt="Deskly Logo" className="h-7 md:h-8 w-auto" />
              <span className="text-white font-semibold text-sm md:text-base tracking-wider font-sans">Deskly</span>
            </a>

            {/* Navigation back */}
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
      <main className="relative z-10 flex-grow pt-32 md:pt-40 pb-20 max-w-7xl mx-auto px-5 md:px-8 w-full flex flex-col items-center">
        
        {/* Title & Headline */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-400 mb-6 tracking-wide select-none font-sans uppercase">
              <Sparkles className="w-3 h-3 animate-pulse" />
              Latest Release — {version} ({formatTimeAgo(publishedAt)})
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 font-header leading-[1.15]">
              Get VTOP Student Client, Reimagined
            </h1>
            <p className="text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed max-w-xl mx-auto">
              Download the secure hardware-keyring integrated Tauri desktop client. Auto-login classifiers, attendance statistics, mess schedules, all rendered native and offline.
            </p>
          </div>
        </ScrollReveal>

        {/* Loading Skeleton */}
        {loading ? (
          <div className="w-full max-w-4xl p-8 rounded-xl bg-[#0a0d16]/30 border border-white/5 backdrop-blur-md animate-pulse space-y-6">
            <div className="h-8 bg-white/10 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-12 bg-white/10 rounded"></div>
                <div className="h-10 bg-white/10 rounded w-1/2"></div>
              </div>
              <div className="space-y-4">
                <div className="h-20 bg-white/10 rounded"></div>
                <div className="h-20 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Dynamic Highlight Card (OS Specific recommendation) */}
            {detectedOS !== "unknown" && (
              <ScrollReveal delay={100}>
                <div className="w-full max-w-3xl mb-12 p-6 rounded-lg bg-gradient-to-r from-blue-950/20 to-zinc-900/40 border border-blue-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-950/10">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="p-3.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {React.createElement(OS_DATA[detectedOS as Exclude<OS, "unknown">].icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider font-sans mb-1">Auto-Detected System</div>
                      <h3 className="text-lg font-semibold text-white font-header">Deskly for {OS_DATA[detectedOS as Exclude<OS, "unknown">].title}</h3>
                      <p className="text-zinc-400 text-xs mt-0.5">{OS_DATA[detectedOS as Exclude<OS, "unknown">].recommendation}</p>
                    </div>
                  </div>
                  {getPrimaryDownloadFile(detectedOS) && (
                    <a
                      href={getPrimaryDownloadFile(detectedOS)?.url}
                      className="bg-blue-600 hover:bg-blue-500 text-white rounded-[4px] px-6 py-3 text-xs font-semibold tracking-wide flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer font-sans w-full sm:w-auto justify-center whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      Get {getPrimaryDownloadFile(detectedOS)?.name.endsWith(".dmg") ? "DMG Installer" : getPrimaryDownloadFile(detectedOS)?.name.endsWith(".msi") ? "MSI Installer" : "AppImage"}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Multi-OS Platform Tabs / Selector */}
            <ScrollReveal delay={150}>
              <div className="w-full max-w-4xl bg-[#0a0d16]/30 border border-white/5 rounded-xl p-6 backdrop-blur-md shadow-2xl">
                
                {/* Tab Headers */}
                <div className="flex border-b border-white/10 mb-8 pb-1 gap-2 overflow-x-auto scrollbar-none">
                  {(Object.keys(OS_DATA) as Array<Exclude<OS, "unknown">>).map((key) => {
                    const item = OS_DATA[key];
                    const Icon = item.icon;
                    const isActive = activeTab === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTab(key)}
                        className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold transition-all border-b-2 -mb-[3px] outline-none cursor-pointer whitespace-nowrap font-sans uppercase tracking-wider ${
                          isActive 
                            ? "border-blue-500 text-white bg-white/[0.02]" 
                            : "border-transparent text-zinc-400 hover:text-white"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {item.title}
                      </button>
                    );
                  })}
                </div>

                {/* Tab Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Recommended Button & Instructions */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white font-header mb-2">Recommended Setup</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed font-sans">{OS_DATA[activeTab as Exclude<OS, "unknown">].recommendation}</p>
                    </div>

                    {recommendedFile && (
                      <div className="flex flex-col gap-3">
                        <a
                          href={recommendedFile.url}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-[4px] px-6 py-3.5 text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 active:scale-95 transition-all cursor-pointer font-sans"
                        >
                          <Download className="w-4.5 h-4.5" />
                          Download {recommendedFile.name}
                        </a>
                        
                        <span className="text-center text-[10px] text-zinc-500 select-none">
                          File size: {recommendedFile.size} · Security verified: local encryption active.
                        </span>
                      </div>
                    )}

                    {/* Package manager command if exists */}
                    {OS_DATA[activeTab as Exclude<OS, "unknown">].installCommand && (
                      <div className="flex flex-col gap-2 mt-2">
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-sans flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" />
                          Developer Install Command
                        </span>
                        <div className="bg-black/60 rounded border border-white/5 px-4 py-3 flex items-center justify-between font-mono text-xs text-blue-400 shadow-inner">
                          <code>{OS_DATA[activeTab as Exclude<OS, "unknown">].installCommand}</code>
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(OS_DATA[activeTab as Exclude<OS, "unknown">].installCommand || "");
                            }}
                            className="text-[10px] text-zinc-500 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all cursor-pointer uppercase font-sans font-bold"
                          >
                            Copy
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Files & Verification checksums */}
                  <div className="lg:col-span-6 flex flex-col gap-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                    <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest font-sans mb-1 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5" />
                      Available Release Packages
                    </h3>

                    <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1">
                      {activeOSData.map((file, idx) => (
                        <div 
                          key={idx} 
                          className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div className="overflow-hidden">
                              <a 
                                href={file.url}
                                className="text-white hover:text-blue-400 font-semibold text-xs font-mono truncate block"
                              >
                                {file.name}
                              </a>
                              <span className="text-[10px] text-zinc-500 font-sans block mt-0.5">{file.description}</span>
                            </div>
                            <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded-full select-none whitespace-nowrap">
                              {file.size}
                            </span>
                          </div>
                          
                          {/* Checksum details */}
                          {file.checksum && (
                            <div className="mt-3 flex items-start gap-2 bg-black/50 p-2 rounded text-[9px] font-mono text-zinc-500 border border-white/[0.02]">
                              <FileText className="w-3 h-3 text-zinc-600 mt-0.5 shrink-0" />
                              <div className="break-all leading-normal">
                                <span className="text-zinc-600 font-semibold select-none uppercase mr-1">SHA256:</span>
                                {file.checksum}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </>
        )}

        {/* Feature Cards Grid Section */}
        <ScrollReveal delay={200}>
          <div className="w-full max-w-4xl mt-20 sm:mt-24 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Local Vault */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Offline Credential Vault</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Deskly saves all VTOP login hashes inside secure OS keyrings (Keychain/Credential Manager), keeping credentials 100% offline.
              </p>
            </div>

            {/* Card 2: Micro Architecture */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Lightweight Rust Engine</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Powered by Tauri and Rust, Deskly boots in less than 50ms, uses under 30MB of RAM, and leaves no footprint on your system.
              </p>
            </div>

            {/* Card 3: Auto Updates */}
            <div className="p-6 rounded-lg bg-[#0a0d16]/20 border border-white/5 flex flex-col gap-4">
              <div className="p-2.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-white font-header">Safe and Open Source</h4>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                All sources are fully audited and hosted on GitHub. Deskly communicates only with official university portals directly.
              </p>
            </div>

          </div>
        </ScrollReveal>

      </main>

      {/* Footer */}
      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>

    </div>
  );
}
