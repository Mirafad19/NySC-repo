import { CountUp } from "@/components/CountUp";

export function AchievementsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-nysc-green-dark">Our Achievements</h2>
          <p className="text-neutral-600 mt-2">Milestones in service to the nation</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {["/achieve2.png", "/achieve3.png"].map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-white">
              <img src={src} alt={`Achievement ${i + 1}`} className="w-full h-72 object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: 50, suffix: "+", l: "Years of Service" },
            { n: 37, suffix: "", l: "States & FCT" },
            { n: 5, suffix: "M+", l: "Corps Alumni" },
            { n: 300, suffix: "K+", l: "Annually Mobilised" },
          ].map((s) => (
            <div key={s.l} className="bg-nysc-green text-white rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold">
                <CountUp end={s.n} suffix={s.suffix} />
              </div>
              <div className="text-sm mt-1 text-white/85">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
