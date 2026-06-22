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
  Sparkles,
  FileText,
  Copy,
  Check
} from "lucide-react";

interface ReleaseFile {
  name: string;
  size: string;
  checksum: string;
  url: string;
  platform: "mac" | "windows" | "linux" | "other";
  isSig: boolean;
}

const FALLBACK_RELEASE_VERSION = "v2.0.1";
const FALLBACK_PUBLISHED_AT = "2026-06-22T15:12:21Z";

const FALLBACK_FILES: ReleaseFile[] = [
  {
    name: "Deskly_2.0.1_aarch64.dmg",
    size: "8.31 MB",
    checksum: "9177970cfe1bdc5759d9bd5506e84348437bf6a3f3fef0a85b62f8246d364d39",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_aarch64.dmg",
    platform: "mac",
    isSig: false
  },
  {
    name: "Deskly.app.tar.gz",
    size: "7.66 MB",
    checksum: "cd34869ae9c30a0bb1ffb3a8505c98e85fccd26838d20e75b265fda806ed0214",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly.app.tar.gz",
    platform: "mac",
    isSig: false
  },
  {
    name: "Deskly.app.tar.gz.sig",
    size: "404 Bytes",
    checksum: "36bbf39a408ff73196eb8a3096bfb1c81c559a943efb562f7ccda09a33880ef7",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly.app.tar.gz.sig",
    platform: "mac",
    isSig: true
  },
  {
    name: "Deskly_2.0.1_x64_en-US.msi",
    size: "6.69 MB",
    checksum: "1f5fbe8ca2f2f8845b1d76f9b7c1c721d7e7fe9c58954f1a60119f6983961db9",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64_en-US.msi",
    platform: "windows",
    isSig: false
  },
  {
    name: "Deskly_2.0.1_x64_en-US.msi.sig",
    size: "416 Bytes",
    checksum: "d2bec67f1c3ac571d10813652fa52759abc0f0af1c0c50cb4fa3133d3458c456",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64_en-US.msi.sig",
    platform: "windows",
    isSig: true
  },
  {
    name: "Deskly_2.0.1_x64-setup.exe",
    size: "4.8 MB",
    checksum: "d8288b5ab20aa4a495667c2471b84197d7c8059ee0c5bc531ff8cd797320cd03",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64-setup.exe",
    platform: "windows",
    isSig: false
  },
  {
    name: "Deskly_2.0.1_x64-setup.exe.sig",
    size: "416 Bytes",
    checksum: "36109ee38e3ccbf06072259e6fd7f29be0ce5b04f9be9b97dcb43927f1bc6ae9",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_x64-setup.exe.sig",
    platform: "windows",
    isSig: true
  },
  {
    name: "Deskly_2.0.1_amd64.AppImage",
    size: "82.5 MB",
    checksum: "0099b39692e8d72ee9748df07ac9ad7476e20ff8f6d2e91e9e4484cb1ac59269",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.AppImage",
    platform: "linux",
    isSig: false
  },
  {
    name: "Deskly_2.0.1_amd64.AppImage.sig",
    size: "416 Bytes",
    checksum: "028e6366d2d774fbcc7edf69b01f2df64b1a9f15029b1cb684685dc4edf9b8b0",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.AppImage.sig",
    platform: "linux",
    isSig: true
  },
  {
    name: "Deskly_2.0.1_amd64.deb",
    size: "9.14 MB",
    checksum: "8be39a3ab12f9b1f3cd4d5a860952f7117c8e8adc4d84f944fd90ed045447d28",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly_2.0.1_amd64.deb",
    platform: "linux",
    isSig: false
  },
  {
    name: "Deskly-2.0.1-1.x86_64.rpm",
    size: "9.14 MB",
    checksum: "d3b827942ad162c4d008defe2487e9195d602f5fc3cc6a13b156045dfaa5aeab",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/Deskly-2.0.1-1.x86_64.rpm",
    platform: "linux",
    isSig: false
  },
  {
    name: "latest.json",
    size: "2.33 KB",
    checksum: "e16af4c4b80087704d76e85c3e94685e51034192341392d048da05c3358149f6",
    url: "https://github.com/Vishal-770/deskly-tauri/releases/download/v2.0.1/latest.json",
    platform: "other",
    isSig: false
  }
];

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

function parseChecksumFromBody(body: string, fileName: string): string {
  if (!body) return "";
  const escapedName = fileName.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const regex = new RegExp(`${escapedName}[\\s\\S]*?([a-fA-F0-9]{64})`, "i");
  const match = body.match(regex);
  if (match) return match[1];
  return "";
}

export default function DownloadPage() {
  const [version, setVersion] = useState<string>(FALLBACK_RELEASE_VERSION);
  const [publishedAt, setPublishedAt] = useState<string>(FALLBACK_PUBLISHED_AT);
  const [filesList, setFilesList] = useState<ReleaseFile[]>(FALLBACK_FILES);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function fetchRelease() {
      try {
        const res = await fetch("https://api.github.com/repos/Vishal-770/deskly-tauri/releases/latest");
        if (!res.ok) throw new Error("API Network Limit");
        const data = await res.json();
        if (!active) return;

        const latestVersion = data.tag_name || FALLBACK_RELEASE_VERSION;
        const releaseBody = data.body || "";
        const assets = data.assets || [];

        const dynamicFiles: ReleaseFile[] = assets.map((asset: any) => {
          const name = asset.name || "";
          const sizeStr = formatSize(asset.size || 0);
          const url = asset.browser_download_url;
          const isSig = name.endsWith(".sig");

          let platform: "mac" | "windows" | "linux" | "other" = "other";
          if (name.includes("aarch64") || name.endsWith(".dmg") || name.includes("tar.gz")) {
            platform = "mac";
          } else if (name.includes(".msi") || name.includes(".exe")) {
            platform = "windows";
          } else if (name.includes(".AppImage") || name.includes(".deb") || name.includes(".rpm")) {
            platform = "linux";
          }

          let checksum = parseChecksumFromBody(releaseBody, name);
          if (!checksum && CHECKSUM_MAP[name]) {
            checksum = CHECKSUM_MAP[name];
          }

          return { name, size: sizeStr, checksum, url, platform, isSig };
        });

        // Append GitHub default source codes
        dynamicFiles.push({
          name: "Source code (zip)",
          size: "Source",
          checksum: "",
          url: `https://github.com/Vishal-770/deskly-tauri/archive/refs/tags/${latestVersion}.zip`,
          platform: "other",
          isSig: false
        });
        dynamicFiles.push({
          name: "Source code (tar.gz)",
          size: "Source",
          checksum: "",
          url: `https://github.com/Vishal-770/deskly-tauri/archive/refs/tags/${latestVersion}.tar.gz`,
          platform: "other",
          isSig: false
        });

        // Sort files to put signatures at the bottom and primary packages at the top
        const sorted = dynamicFiles.sort((a, b) => {
          if (a.isSig !== b.isSig) return a.isSig ? 1 : -1;
          return a.name.localeCompare(b.name);
        });

        setVersion(latestVersion);
        setPublishedAt(data.published_at || FALLBACK_PUBLISHED_AT);
        setFilesList(sorted);
        setLoading(false);
      } catch (err) {
        console.warn("Using local release assets:", err);
        setLoading(false);
      }
    }
    fetchRelease();
    return () => { active = false; };
  }, []);

  const handleCopyChecksum = (name: string, hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedId(name);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPlatformIcon = (platform: "mac" | "windows" | "linux" | "other", name: string) => {
    if (name.includes(".sig")) return <FileText className="w-4 h-4 text-zinc-500" />;
    switch (platform) {
      case "mac": return <Apple className="w-4 h-4 text-zinc-300" />;
      case "windows": return <Monitor className="w-4 h-4 text-zinc-300" />;
      case "linux": return <Terminal className="w-4 h-4 text-zinc-300" />;
      default: return <FileText className="w-4 h-4 text-zinc-300" />;
    }
  };

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
      <main className="relative z-10 flex-grow pt-32 md:pt-40 pb-28 max-w-5xl mx-auto px-5 md:px-8 w-full flex flex-col items-center">
        
        {/* Title */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-400 mb-6 tracking-wide select-none font-sans uppercase">
              <Sparkles className="w-3 h-3 animate-pulse" />
              Latest Release — {version} ({formatTimeAgo(publishedAt)})
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-header leading-tight">
              Downloads
            </h1>
            <p className="text-zinc-400 text-xs sm:text-sm font-sans font-normal max-w-md mx-auto">
              Get the latest build of the Deskly Desktop Client. Direct downloads, package sizes, and hashes.
            </p>
          </div>
        </ScrollReveal>

        {/* Downloads List Table */}
        <ScrollReveal delay={150}>
          {loading ? (
            <div className="w-full bg-[#0a0d16]/30 border border-white/5 rounded-lg p-8 backdrop-blur-md animate-pulse space-y-4">
              <div className="h-4 bg-white/10 rounded w-1/4"></div>
              <div className="h-10 bg-white/10 rounded"></div>
              <div className="h-10 bg-white/10 rounded"></div>
              <div className="h-10 bg-white/10 rounded"></div>
              <div className="h-10 bg-white/10 rounded"></div>
            </div>
          ) : (
            <div className="w-full bg-[#0a0d16]/30 border border-white/5 rounded-xl backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.01]">
                      <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans">File Name</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans text-right">Size</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans hidden md:table-cell">SHA-256 Checksum</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-zinc-500 uppercase tracking-widest font-sans text-center">Download</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filesList.map((file, idx) => (
                      <tr 
                        key={idx} 
                        className={`hover:bg-white/[0.01] transition-colors duration-150 ${file.isSig ? "opacity-60" : ""}`}
                      >
                        {/* Filename with Platform Icon */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0 p-1.5 rounded bg-white/[0.02] border border-white/5">
                              {getPlatformIcon(file.platform, file.name)}
                            </div>
                            <div className="overflow-hidden">
                              <a 
                                href={file.url}
                                className="text-white hover:text-blue-400 font-semibold text-xs font-mono truncate block"
                              >
                                {file.name}
                              </a>
                            </div>
                          </div>
                        </td>

                        {/* Size */}
                        <td className="px-6 py-4 text-right">
                          <span className="text-[11px] text-zinc-400 font-mono whitespace-nowrap bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded">
                            {file.size}
                          </span>
                        </td>

                        {/* SHA256 Hash with Copy */}
                        <td className="px-6 py-4 hidden md:table-cell max-w-xs">
                          {file.checksum ? (
                            <div className="flex items-center gap-2">
                              <code className="text-[10px] text-zinc-500 font-mono truncate select-all">
                                {file.checksum}
                              </code>
                              <button
                                onClick={() => handleCopyChecksum(file.name, file.checksum)}
                                className="shrink-0 p-1 rounded hover:bg-white/5 hover:text-white text-zinc-600 transition-all cursor-pointer"
                                title="Copy Checksum"
                              >
                                {copiedId === file.name ? (
                                  <Check className="w-3 h-3 text-green-400" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          ) : (
                            <span className="text-[10px] text-zinc-600 italic">No checksum</span>
                          )}
                        </td>

                        {/* Action Link */}
                        <td className="px-6 py-4 text-center">
                          <a
                            href={file.url}
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
