import dg from "@/assets/dg.png";
import { Link } from "@tanstack/react-router";

export function DirectorGeneralSection() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-nysc-gold rounded-xl -z-10" />
          <img
            src={dg}
            alt="NYSC Director-General"
            className="w-full rounded-xl shadow-xl object-cover"
          />
        </div>
        <div>
          <p className="uppercase tracking-widest text-nysc-green font-bold text-xs mb-2">
            Leadership
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-nysc-green-dark mb-4">
            Meet The Director-General
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            The Director-General of the National Youth Service Corps leads the Scheme's mission of
            fostering national unity, mobilising graduate youth for service, and advancing skill
            acquisition across the federation.
          </p>
          <p className="text-neutral-700 leading-relaxed mb-6">
            Under his stewardship, NYSC continues to evolve — embracing technology, expanding
            entrepreneurship programmes, and strengthening partnerships that empower corps members
            for life beyond the service year.
          </p>
          <Link
            to="/top-management"
            className="inline-block bg-nysc-green text-white font-semibold px-6 py-3 rounded-md hover:bg-nysc-green-dark transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
}
