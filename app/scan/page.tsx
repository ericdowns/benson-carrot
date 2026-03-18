"use client";

// This page exists solely to track QR code scans via Vercel Analytics.
// Every visit here = one QR code scan. The page immediately redirects to home.
// Check scan counts in your Vercel Analytics dashboard under the /scan path.

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ScanPage() {
  const router = useRouter();

  useEffect(() => {
    // Small delay so Vercel Analytics fires the page view before redirect
    const t = setTimeout(() => router.replace("/"), 50);
    return () => clearTimeout(t);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex items-center gap-3 text-gray-400 text-sm font-mono">
        <i className="fa-solid fa-carrot animate-pulse" aria-hidden="true" />
        Loading…
      </div>
    </div>
  );
}
