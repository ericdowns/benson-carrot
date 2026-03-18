import { Placeholder } from "@/components/ui/Placeholder";

export function Hero() {
  return (
    <section className="border-b border-gray-200 py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
            <i className="fa-solid fa-carrot" aria-hidden="true" />
            Benson High School · Design &amp; Construction Academy
          </p>
          <h1 className="text-5xl font-bold text-gray-950 mb-6 leading-tight">
            Advertise in<br />The Carrot
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Support Benson High graphic design students while promoting your business to the
            people who live in, visit, and love the Benson neighborhood.
          </p>
          <a
            href="#inquire"
            className="inline-block bg-gray-950 text-white px-8 py-4 text-base font-semibold hover:bg-gray-700 transition-colors"
          >
            Reserve Your Ad
          </a>
        </div>
        <Placeholder
          label="IMAGE: Magazine cover or publication spread photo"
          className="h-80"
        />
      </div>
    </section>
  );
}
