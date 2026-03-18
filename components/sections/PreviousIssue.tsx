import { Placeholder } from "@/components/ui/Placeholder";
import { Unknown } from "@/components/ui/Unknown";

export function PreviousIssue() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">See It First</p>
          <h2 className="text-3xl font-bold text-gray-950 mb-6">
            See a Previous Issue
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Want to see what The Carrot looks like before you commit? Browse or download
            the previous edition — designed and produced by Benson High students.
          </p>

          <Unknown note="PDF needed: drop the previous issue PDF into /public/carrot-issue-2.pdf and update the href below" block />

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="/carrot-issue-2.pdf"
              className="inline-flex items-center gap-2 bg-gray-950 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Issue 2 (PDF)
            </a>
          </div>
        </div>

        <Placeholder
          label="IMAGE: Cover of The Carrot Issue 2 — place scan or photo here"
          className="h-96"
        />
      </div>
    </section>
  );
}
