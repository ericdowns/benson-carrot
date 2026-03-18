import { Placeholder } from "@/components/ui/Placeholder";
import { Unknown } from "@/components/ui/Unknown";

export function AboutStudents() {
  return (
    <section id="students" className="border-b border-gray-200 py-20 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Placeholder
          label="IMAGE: Students working — designing, reviewing layouts, or presenting work"
          className="h-96 order-last md:order-first"
        />
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">The Students</p>
          <h2 className="text-3xl font-bold text-gray-950 mb-6">
            Real Students.<br />Real Work.
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            The Carrot is produced by students enrolled in the Design &amp; Construction Academy
            at Benson High School in Omaha, Nebraska. Every page — every layout, headline, and
            photograph — is created by a student.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            When you advertise in The Carrot, you&apos;re not just reaching customers. You&apos;re
            investing in a young designer&apos;s education and giving them the experience of
            producing a real, published piece of work.
          </p>
          <Unknown note="Student quotes: ask Annie if we can get a quote or two from students about the project" block />
          <Unknown note="Advisor or teacher credit: who should be acknowledged as the faculty lead?" block />
        </div>
      </div>
    </section>
  );
}
