import { Unknown } from "@/components/ui/Unknown";

const reasons = [
  {
    number: "01",
    icon: "fa-light fa-heart",
    title: "Support Local Students",
    body: "Your ad directly helps fund printing, giving students a real-world publishing experience and keeping The Carrot free for readers.",
  },
  {
    number: "02",
    icon: "fa-light fa-location-dot",
    title: "Reach the Benson Community",
    body: null,
    unknown: "Circulation TBD — ask Annie: how many copies are printed per issue?",
  },
  {
    number: "03",
    icon: "fa-light fa-bullhorn",
    title: "Promote Your Business Locally",
    body: "Get in front of customers who are already in Benson — people who shop local, eat local, and support the neighborhood.",
  },
  {
    number: "04",
    icon: "fa-light fa-people-group",
    title: "Be Part of Benson Culture",
    body: "Join a neighborhood publication that celebrates the businesses and people that make Benson worth showing up for.",
  },
];

export function WhyAdvertise() {
  return (
    <section className="border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Why Advertise</p>
          <h2 className="text-3xl font-bold text-gray-950">
            Good for your business.<br />Great for the neighborhood.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.number} className="border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-5">
                <i className={`${r.icon} text-2xl text-gray-400`} aria-hidden="true" />
                <span className="text-xs font-mono text-gray-300">{r.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">{r.title}</h3>
              {r.body && (
                <p className="text-gray-600 leading-relaxed">{r.body}</p>
              )}
              {r.unknown && (
                <>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Distributed to readers throughout the Benson neighborhood —
                  </p>
                  <Unknown note={r.unknown} />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 border border-dashed border-gray-300 p-6 bg-gray-50">
          <p className="text-sm text-gray-500 font-mono mb-2">
            <span className="font-bold text-gray-600">?</span> Open question — does a student help design the ad, or does the business supply artwork?
          </p>
          <p className="text-xs text-gray-400">
            If students assist with ad design, this is a major selling point and should be prominently featured here.
          </p>
        </div>
      </div>
    </section>
  );
}
