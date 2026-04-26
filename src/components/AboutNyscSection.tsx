export function AboutNyscSection() {
  return (
    <section id="about-nysc" className="bg-neutral-50 py-16 md:py-20 border-t-2 border-nysc-green/30">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              About <span className="text-nysc-green-dark">The NYSC</span>
            </h2>
            <p className="mt-8 text-neutral-700 leading-relaxed text-base md:text-lg">
              <span className="text-nysc-green-dark font-bold">The NYSC scheme</span> was
              created in a bid to reconstruct, reconcile and rebuild the country after the
              Nigerian Civil war. The unfortunate antecedents in our national history gave
              impetus to the establishment of the National Youth Service Corps by decree{" "}
              <strong className="text-slate-900">No.24 of 22nd May 1973</strong> which stated
              that the NYSC is being established &quot;with a view to the proper
              encouragement and development of common ties among the youths of Nigeria and
              the promotion of national unity&quot;.
            </p>
            <a
              href="/about"
              className="mt-8 inline-flex items-center justify-center bg-gradient-to-b from-nysc-green to-nysc-green-dark text-white font-bold px-8 py-3 rounded-full hover:brightness-110 transition shadow"
            >
              Read More
            </a>
          </div>
          <div>
            <img
              src="/about-corps.png"
              alt="NYSC corps members on parade"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
