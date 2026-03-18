import { Unknown } from "@/components/ui/Unknown";

// [?] Ask Annie for actual inventory numbers per size.
// Replace `available` and `total` below once confirmed.
const adOptions = [
  {
    name: "Logo Only",
    price: 100,
    dimensions: null,
    description: "Your business name and logo listed in the directory.",
    ratio: null,
    available: null,
    total: null,
  },
  {
    name: "Quarter Page — Horizontal",
    price: 250,
    dimensions: '6" × 3"',
    description: "Great for landscape-oriented artwork, banners, and wide layouts.",
    ratio: { w: 6, h: 3 },
    available: 3,
    total: 4,
  },
  {
    name: "Quarter Page — Vertical",
    price: 250,
    dimensions: '3" × 4.5"',
    description: "Portrait format — works well for logos, portraits, and menus.",
    ratio: { w: 3, h: 4.5 },
    available: 2,
    total: 4,
  },
  {
    name: "Half Page — Horizontal",
    price: 500,
    dimensions: '6" × 4.5"',
    description: "More impact with a wider layout. Strong mid-page presence.",
    ratio: { w: 6, h: 4.5 },
    available: 2,
    total: 2,
  },
  {
    name: "Half Page — Vertical",
    price: 500,
    dimensions: '3" × 9"',
    description: "Tall and prominent — commands attention as a side column.",
    ratio: { w: 3, h: 9 },
    available: 1,
    total: 2,
  },
  {
    name: "Full Page",
    price: 1000,
    dimensions: '6" × 9"',
    description: "Maximum visibility. One page, entirely yours.",
    ratio: { w: 6, h: 9 },
    featured: true,
    available: 1,
    total: 1,
  },
];

function AvailabilityBadge({
  available,
  total,
}: {
  available: number;
  total: number;
}) {
  const isLow = available <= 1;
  const isSoldOut = available === 0;

  if (isSoldOut) {
    return (
      <span className="text-xs font-mono px-2 py-0.5 bg-gray-200 text-gray-500 uppercase tracking-wide">
        Sold Out
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 uppercase tracking-wide ${
        isLow
          ? "bg-gray-950 text-white"
          : "border border-gray-300 text-gray-500"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isLow ? "bg-white" : "bg-gray-400"
        }`}
      />
      {available} of {total} left
    </span>
  );
}

function AdSizeVisual({ ratio }: { ratio: { w: number; h: number } | null }) {
  if (!ratio) {
    return (
      <div className="w-10 h-10 border-2 border-gray-300 flex items-center justify-center">
        <span className="text-xs font-mono text-gray-400">L</span>
      </div>
    );
  }

  const maxSize = 60;
  const scale = Math.min(maxSize / ratio.w, maxSize / ratio.h);
  const width = Math.round(ratio.w * scale);
  const height = Math.round(ratio.h * scale);

  return (
    <div
      className="border-2 border-gray-400 bg-gray-100 shrink-0"
      style={{ width, height }}
    />
  );
}

export function AdOptions() {
  return (
    <section className="border-b border-gray-200 py-20 px-6">
      <div id="pricing" className="max-w-5xl mx-auto scroll-mt-20">
        <div className="mb-4 flex flex-col md:flex-row md:items-end gap-4 md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Ad Options</p>
            <h2 className="text-3xl font-bold text-gray-950">Choose Your Ad Size</h2>
          </div>
        </div>

        <div className="mb-10 flex items-start gap-2">
          <Unknown note="Inventory: replace the available/total numbers in AdOptions.tsx with real counts from Annie. Showing placeholder urgency numbers now." block />
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {adOptions.map((opt) => (
            <div
              key={opt.name}
              className={`flex items-center gap-6 py-6 ${opt.featured ? "bg-gray-50" : ""}`}
            >
              <div className="w-16 flex items-center justify-center shrink-0">
                <AdSizeVisual ratio={opt.ratio ?? null} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-bold text-gray-950">{opt.name}</h3>
                  {opt.dimensions && (
                    <span className="text-xs font-mono text-gray-400">{opt.dimensions}</span>
                  )}
                  {opt.featured && (
                    <span className="text-xs font-mono bg-gray-950 text-white px-2 py-0.5 uppercase tracking-wide">
                      Best Value
                    </span>
                  )}
                  {opt.available !== null && opt.total !== null && (
                    <AvailabilityBadge available={opt.available} total={opt.total} />
                  )}
                </div>
                <p className="text-sm text-gray-500">{opt.description}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-2xl font-bold text-gray-950 font-mono">
                  ${opt.price.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border border-dashed border-gray-300 p-4 bg-gray-50">
          <p className="text-sm text-gray-500 font-mono">
            <span className="font-bold text-gray-600">?</span> Payment process: How does a business pay after inquiring?
            <Unknown note="Invoice? Check? Online? Ask Annie to confirm so we can add it here." />
          </p>
          <p className="text-sm text-gray-500 font-mono mt-2">
            <span className="font-bold text-gray-600">?</span> Artwork: Does the business supply finished files, or do students help design the ad?
            <Unknown note="Could be a key selling point if students assist." />
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#inquire"
            className="inline-flex items-center gap-3 bg-gray-950 text-white px-8 py-4 text-base font-semibold hover:bg-gray-700 transition-colors"
          >
            <i className="fa-solid fa-bookmark" aria-hidden="true" />
            Reserve Your Ad
          </a>
        </div>
      </div>
    </section>
  );
}
