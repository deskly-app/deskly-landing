import { NextRequest } from "next/server";

const RELEASE_URL_PREFIX = "https://github.com/deskly-app/deskly/releases/download/";

function getAllowedReleaseUrl(value: string | null): URL | null {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (
      url.protocol !== "https:" ||
      url.origin !== "https://github.com" ||
      !url.pathname.startsWith(new URL(RELEASE_URL_PREFIX).pathname)
    ) {
      return null;
    }

    return url;
  } catch {
    return null;
  }
}

function getSafeFileName(value: string | null, sourceUrl: URL): string {
  const fallback = decodeURIComponent(sourceUrl.pathname.split("/").pop() || "deskly-download");
  const fileName = (value || fallback).replace(/[^a-zA-Z0-9._-]/g, "_");
  return fileName || "deskly-download";
}

export async function GET(request: NextRequest) {
  const sourceUrl = getAllowedReleaseUrl(request.nextUrl.searchParams.get("url"));
  if (!sourceUrl) {
    return Response.json({ error: "Invalid release asset URL" }, { status: 400 });
  }

  const range = request.headers.get("range");
  const upstream = await fetch(sourceUrl, {
    cache: "no-store",
    redirect: "follow",
    headers: range ? { Range: range } : undefined,
  });

  if (!upstream.ok || !upstream.body) {
    return Response.json({ error: "Unable to fetch release asset" }, { status: 502 });
  }

  const fileName = getSafeFileName(request.nextUrl.searchParams.get("filename"), sourceUrl);
  const responseHeaders = new Headers({
    "Content-Disposition": `attachment; filename="${fileName}"`,
    "Content-Type": upstream.headers.get("content-type") || "application/octet-stream",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });

  for (const headerName of ["accept-ranges", "content-length", "content-range", "etag", "last-modified"]) {
    const value = upstream.headers.get(headerName);
    if (value) responseHeaders.set(headerName, value);
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}
