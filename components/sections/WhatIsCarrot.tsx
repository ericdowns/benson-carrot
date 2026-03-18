import { Placeholder } from "@/components/ui/Placeholder";

export function WhatIsCarrot() {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">About</p>
          <h2 className="text-3xl font-bold text-gray-950 mb-6">What Is The Carrot?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            The Carrot is a printed magazine and business directory designed, written, and
            produced entirely by graphic design students at Benson High School in Omaha,
            Nebraska.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            This is the <strong>third edition</strong>. Each issue celebrates Benson neighborhood businesses
            and showcases the next generation of designers — students who are building real
            skills in a real publication.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ad revenue helps cover printing costs so The Carrot can be distributed
            <strong> free of charge</strong> throughout the Benson community.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Placeholder
            label="IMAGE: Photo of a Carrot issue / spread"
            className="h-52"
          />
          <Placeholder
            label="IMAGE: Students designing or working on the publication"
            className="h-40"
          />
        </div>
      </div>
    </section>
  );
}
