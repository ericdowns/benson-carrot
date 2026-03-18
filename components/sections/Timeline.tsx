const milestones = [
  {
    icon: "fa-regular fa-calendar-xmark",
    date: "April 1, 2026",
    label: "Ad Reservation Deadline",
    description: "Last day to submit your ad inquiry and confirm your placement.",
    tag: "Deadline",
    featured: true,
  },
  {
    icon: "fa-regular fa-newspaper",
    date: "May 1, 2026",
    label: "Publication Available",
    description: "The Carrot goes out into the Benson neighborhood — free for everyone to pick up.",
    tag: "Publication",
    featured: false,
  },
];

export function Timeline() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Dates</p>
        <h2 className="text-3xl font-bold text-gray-950 mb-14">Key Dates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((m) => (
            <div
              key={m.date}
              className={`border p-8 ${m.featured ? "border-gray-950 bg-white" : "border-gray-200"}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <i className={`${m.icon} text-2xl text-gray-400`} aria-hidden="true" />
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  {m.tag}
                </p>
              </div>
              <p className="text-4xl font-bold font-mono text-gray-950 mb-2">{m.date}</p>
              <p className="font-semibold text-gray-950 mb-3">{m.label}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          The Carrot is published annually by Benson High School Design &amp; Construction Academy students.
        </p>
      </div>
    </section>
  );
}
