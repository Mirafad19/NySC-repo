import objImg from "@/assets/objectives-corps.png";

const OBJECTIVES = [
  "To inculcate discipline in Nigerian youths by instilling in them a tradition of industry at work, and of patriotic and loyal service to Nigeria in any situation they may find themselves.",
  "To raise the moral tone of the Nigerian youths by giving them the opportunity to learn about higher ideals of national achievement, social and cultural improvemen.",
  "To develop in the Nigerian youths the attitudes of mind, acquired through shared experience and suitable training. which will make them more amenable to mobilisation in the national interest.",
  "To enable Nigerian youths acquire the spirit of self reliance by encouraging them to develop skills for self employment.",
  "To contribute to the accelerated growth of the national economy.",
  "To develop common ties among the Nigerian youths and promote national unity and integration.",
];

export function ObjectivesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="text-center mb-14">
          <h2 className="inline-block text-4xl md:text-5xl font-extrabold text-slate-900 relative">
            Our <span className="text-nysc-green-dark">Objectives</span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-nysc-green-dark rounded-full" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h3 className="text-2xl md:text-[28px] font-extrabold text-nysc-green-dark leading-snug">
              The objectives of the National Youth Service Corps Scheme are clearly spelt out in
              Decree No.51 of 16th June 1993 as follows:
            </h3>
            <ol className="mt-8 space-y-4 text-neutral-700 leading-relaxed">
              {OBJECTIVES.map((o, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-neutral-700 font-semibold shrink-0">{i + 1}.</span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
            <a
              href="/about"
              className="mt-10 inline-flex items-center justify-center bg-gradient-to-b from-nysc-green to-nysc-green-dark text-white font-bold px-10 py-3 rounded-full hover:brightness-110 transition shadow-lg"
            >
              Read More
            </a>
          </div>
          <div>
            <img
              src={objImg}
              alt="NYSC corps members"
              className="rounded-3xl shadow-xl w-full h-[560px] object-cover border-2 border-nysc-green/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
