import QRCode from "qrcode";

const SCAN_URL = "https://the-carrot.vercel.app/scan";
const SHARE_URL = "https://the-carrot.vercel.app";

const FACEBOOK_SHARE = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`;
const LINKEDIN_SHARE = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`;

export const metadata = {
  title: "QR Code — The Carrot",
};

export default async function QRPage() {
  const svgString = await QRCode.toString(SCAN_URL, {
    type: "svg",
    margin: 2,
    width: 280,
    color: {
      dark: "#111111",
      light: "#ffffff",
    },
    errorCorrectionLevel: "H",
  });

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-8 p-8 print:bg-white print:p-0 print:gap-0">

      {/* Back link */}
      <a
        href="/"
        className="absolute top-5 left-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-950 transition-colors print:hidden"
      >
        <i className="fa-regular fa-arrow-left text-xs" aria-hidden="true" />
        Back to site
      </a>

      {/* Card */}
      <div className="bg-white border-2 border-gray-950 p-10 flex flex-col items-center gap-6 w-full max-w-sm">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-mono">
            Benson High School
          </p>
          <div className="flex items-center justify-center gap-2 mb-1">
            <i className="fa-solid fa-carrot text-gray-950 text-lg" aria-hidden="true" />
            <h1 className="text-2xl font-bold text-gray-950 tracking-tight">The Carrot</h1>
          </div>
          <p className="text-sm text-gray-500 leading-snug">
            Advertise with us and support<br />Benson High design students.
          </p>
        </div>

        <div className="w-full border-t border-gray-200" />

        {/* QR Code */}
        <div
          className="w-[280px] h-[280px]"
          dangerouslySetInnerHTML={{ __html: svgString }}
          aria-label={`QR code linking to ${SCAN_URL}`}
        />

        <div className="w-full border-t border-gray-200" />

        {/* Footer */}
        <div className="text-center space-y-1">
          <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
            Scan to learn more
          </p>
          <p className="text-xs text-gray-400 font-mono">
            the-carrot.vercel.app
          </p>
        </div>
      </div>

      {/* Social share — hidden when printing */}
      <div className="flex flex-col items-center gap-3 print:hidden">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-mono">Share with friends</p>
        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_SHARE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 hover:border-gray-950 hover:text-gray-950 transition-colors"
          >
            <i className="fa-brands fa-linkedin text-base" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={FACEBOOK_SHARE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 hover:border-gray-950 hover:text-gray-950 transition-colors"
          >
            <i className="fa-brands fa-facebook text-base" aria-hidden="true" />
            Facebook
          </a>
        </div>
      </div>

      {/* Print hint */}
      <p className="text-xs text-gray-400 font-mono print:hidden">
        Tip: Use browser print (⌘P) to export as PDF for sticker printing
      </p>

    </main>
  );
}
