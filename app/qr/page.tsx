import QRCode from "qrcode";

const SCAN_URL = "https://the-carrot.vercel.app/scan";

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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-8 print:bg-white print:p-0">
      <div className="bg-white border-2 border-gray-950 p-10 flex flex-col items-center gap-6 w-full max-w-sm print:border-gray-950">

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

        {/* Divider */}
        <div className="w-full border-t border-gray-200" />

        {/* QR Code */}
        <div
          className="w-[280px] h-[280px]"
          dangerouslySetInnerHTML={{ __html: svgString }}
          aria-label={`QR code linking to ${SCAN_URL}`}
        />

        {/* Divider */}
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

      {/* Print hint — hidden when printing */}
      <p className="fixed bottom-6 text-xs text-gray-400 font-mono print:hidden">
        Tip: Use browser print (⌘P) to export as PDF for sticker printing
      </p>
    </main>
  );
}
