import { Unknown } from "@/components/ui/Unknown";
import { Placeholder } from "@/components/ui/Placeholder";

const locations = [
  { label: "Benson restaurants, bars, and coffee shops", confirmed: true },
  { label: "Local retail shops throughout the neighborhood", confirmed: true },
  { label: "Street newspaper dispenser", confirmed: false, note: "Location TBD — confirm with Annie" },
  { label: "Community spaces and gathering spots", confirmed: false, note: "Confirm specific locations with Annie" },
];

// [?] Replace PRINT_RUN with the actual number from Annie.
// The reach estimates below recalculate automatically.
const PRINT_RUN: number | null = null; // e.g., 500
const PASS_ALONG_RATE = 3; // avg readers per copy for local community publications
const DISPLAY_BONUS = 200; // estimated additional impressions from display exposure in businesses

function ReachEstimate() {
  if (!PRINT_RUN) {
    return (
      <div className="mt-10 border border-gray-200 p-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Estimated Reach</p>
        <Unknown
          note="Print run needed: once Annie confirms how many copies are printed, the reach estimate below calculates automatically."
          block
        />
        <div className="mt-4 grid grid-cols-2 gap-4 opacity-40">
          <div>
            <p className="text-3xl font-bold font-mono text-gray-950">???</p>
            <p className="text-xs text-gray-500 mt-1">Direct readers</p>
          </div>
          <div>
            <p className="text-3xl font-bold font-mono text-gray-950">???</p>
            <p className="text-xs text-gray-500 mt-1">Total estimated impressions</p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Calculated as: copies printed × {PASS_ALONG_RATE} avg readers per copy (industry standard
          for community publications), plus estimated display exposure at business locations.
        </p>
      </div>
    );
  }

  const directReaders = PRINT_RUN * PASS_ALONG_RATE;
  const totalImpressions = directReaders + DISPLAY_BONUS;

  return (
    <div className="mt-10 border border-gray-200 p-6">
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Estimated Reach</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-3xl font-bold font-mono text-gray-950">
            {directReaders.toLocaleString()}+
          </p>
          <p className="text-xs text-gray-500 mt-1">Direct readers</p>
        </div>
        <div>
          <p className="text-3xl font-bold font-mono text-gray-950">
            {totalImpressions.toLocaleString()}+
          </p>
          <p className="text-xs text-gray-500 mt-1">Total estimated impressions</p>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 leading-relaxed">
        Based on {PRINT_RUN.toLocaleString()} copies × {PASS_ALONG_RATE} avg readers per copy —
        the standard pass-along rate for local community publications. Copies displayed at
        restaurants, coffee shops, and businesses are seen by additional visitors over the
        magazine&apos;s distribution window.
      </p>
    </div>
  );
}

export function Distribution() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Distribution</p>
          <h2 className="text-3xl font-bold text-gray-950 mb-6">
            Where The Carrot Goes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            The Carrot is distributed free of charge throughout the Benson neighborhood,
            available at the places people already go.
            <Unknown note="Confirm exact distribution list and print run with Annie" />
          </p>

          <ul className="space-y-4">
            {locations.map((loc) => (
              <li key={loc.label} className="flex items-start gap-3">
                <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 block" />
                <span className="text-gray-700">
                  {loc.label}
                  {!loc.confirmed && loc.note && (
                    <Unknown note={loc.note} />
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-gray-200 p-6">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Print Run</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gray-950 font-mono">
                {PRINT_RUN ? PRINT_RUN.toLocaleString() : "???"}
              </span>
              <span className="text-gray-500 text-sm">copies per issue</span>
            </div>
            {!PRINT_RUN && (
              <Unknown note="Print run: ask Annie — this is the most important number for the page" block />
            )}
          </div>

          <ReachEstimate />
        </div>

        <Placeholder
          label="IMAGE: Map or visual showing Benson neighborhood distribution area"
          className="h-96"
        />
      </div>
    </section>
  );
}
