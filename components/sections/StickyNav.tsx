"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#students" },
  { label: "FAQ", href: "#faq" },
  { label: "Share", href: "/qr", external: false },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-3 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 font-bold text-gray-950 shrink-0">
          <i className="fa-solid fa-carrot text-base" aria-hidden="true" />
          The Carrot
        </a>

        {/* Right side: nav links + actions */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Nav links — hidden on small screens */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-500 hover:text-gray-950 transition-colors"
              >
                {link.label === "Share" ? (
                  <span className="flex items-center gap-1.5">
                    <i className="fa-light fa-share-nodes text-xs" aria-hidden="true" />
                    Share
                  </span>
                ) : link.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-gray-200 mx-2" />

          {/* Send Ad — secondary button */}
          {/* [?] Link target: ask client if this goes to email, a file upload portal, Dropbox, etc. */}
          <a
            href="mailto:annie@bffomaha.org?subject=Ad%20Submission%20—%20The%20Carrot"
            className="hidden sm:inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2 hover:border-gray-950 hover:text-gray-950 transition-colors"
          >
            <i className="fa-light fa-arrow-up-from-bracket text-sm" aria-hidden="true" />
            Send Ad
          </a>

          {/* Reserve — primary button */}
          <a
            href="#inquire"
            className="inline-flex items-center gap-2 bg-gray-950 text-white text-sm font-semibold px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            <i className="fa-solid fa-bookmark text-sm" aria-hidden="true" />
            Reserve an Ad
          </a>
        </div>
      </div>
    </nav>
  );
}
