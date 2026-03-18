export function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Published by</p>
          <div className="flex items-center gap-2 mb-1">
            <i className="fa-solid fa-carrot text-gray-400" aria-hidden="true" />
            <p className="font-bold text-gray-950">Benson High School</p>
          </div>
          <p className="text-gray-600 text-sm">Design &amp; Construction Academy</p>
          <p className="text-gray-500 text-sm mt-1">Omaha, Nebraska</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Contact</p>
          <p className="font-bold text-gray-950">Annie Butler</p>
          <a
            href="mailto:annie@bffomaha.org"
            className="text-gray-700 text-sm hover:text-gray-950 underline underline-offset-2 transition-colors"
          >
            annie@bffomaha.org
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Prefer to reach out directly? Email Annie with questions.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">Key Dates</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <i className="fa-regular fa-calendar-xmark text-gray-400 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-gray-950 font-mono text-sm">April 1, 2026</p>
                <p className="text-xs text-gray-500">Ad reservation deadline</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <i className="fa-regular fa-newspaper text-gray-400 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-bold text-gray-950 font-mono text-sm">May 1, 2026</p>
                <p className="text-xs text-gray-500">Publication available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          <i className="fa-solid fa-carrot mr-1.5" aria-hidden="true" />
          The Carrot — Third Edition · 2026 · Benson High School Design &amp; Construction Academy
        </p>
      </div>
    </footer>
  );
}
