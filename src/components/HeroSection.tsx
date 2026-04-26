import type { ReactNode } from "react";
import hero1 from "../assets/hero-1.png";
import hero2 from "../assets/hero-2.png";
import hero3 from "../assets/hero-3.png";
import { CountUp } from "@/components/CountUp";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-white to-emerald-50/60 pt-0 pb-10 md:pb-12">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="bg-white rounded-3xl shadow-sm border border-neutral-100 px-8 md:px-12 py-8 md:py-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
            {/* Image collage — appears FIRST on mobile, RIGHT on desktop */}
            <div className="relative h-[380px] sm:h-[460px] md:h-[460px] order-1 lg:order-2">
              <img
                src={hero1}
                alt="NYSC ceremony"
                className="absolute left-0 top-0 w-[60%] h-[55%] object-cover rounded-2xl shadow-lg"
              />
              <span className="absolute left-[56%] top-[1%] w-6 h-6 bg-cyan-400 rounded-md rotate-12" />
              <img
                src={hero2}
                alt="NYSC mobile clinic"
                className="absolute right-0 top-[8%] w-[34%] h-[38%] object-cover rounded-2xl shadow-lg"
              />
              <span className="absolute right-[32%] top-[4%] w-7 h-7 bg-purple-400 rounded-md -rotate-12" />
              <img
                src={hero3}
                alt="Corps members"
                className="absolute left-[8%] bottom-0 w-[44%] h-[42%] object-cover rounded-2xl shadow-lg"
              />
              <span className="absolute right-[10%] bottom-[36%] w-3 h-3 bg-cyan-500 rounded-full" />
              <span className="absolute right-[2%] bottom-[6%] w-14 h-14 bg-nysc-green/80 rounded-md rotate-45" />
            </div>

            {/* Text — appears SECOND on mobile, LEFT on desktop */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.05] tracking-tight text-slate-900">
                Empowering Nigerian Youth Through National Service
              </h1>
              <p className="mt-5 text-neutral-600 text-base md:text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
                The National Youth Service Corps (NYSC) is committed to fostering unity,
                development, and leadership among Nigerian graduates through structured
                community service and skill development programs.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center justify-center lg:justify-start">
                <a
                  href="#about-nysc"
                  className="inline-flex items-center justify-center bg-nysc-green-dark hover:bg-nysc-green text-white font-bold px-8 py-3.5 rounded-md transition shadow"
                >
                  Learn More
                </a>
                <a
                  href="https://portal.nysc.org.ng"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white border-2 border-nysc-green text-nysc-green-dark font-bold px-8 py-3.5 rounded-md hover:bg-nysc-green/5 transition"
                >
                  Registration Portal
                </a>
              </div>
            </div>
          </div>

          {/* Stats — stack vertically on mobile, 3-col on desktop */}
          <div className="mt-14 flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-6 max-w-3xl mx-auto">
            <Stat top="Deployed Over" big={<><CountUp end={6.4} decimals={1} suffix="M+" /></>} sub="Corps Members Since Inception" />
            <Stat top="Across All" big={<CountUp end={36} />} sub="States + FCT" divider />
            <Stat top="For" big={<CountUp end={52} />} sub="Years" divider />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  top,
  big,
  sub,
  divider,
}: {
  top: string;
  big: ReactNode;
  sub: string;
  divider?: boolean;
}) {
  return (
    <div className={`text-center px-4 ${divider ? "md:border-l border-neutral-200" : ""}`}>
      <div className="text-sm text-neutral-600">{top}</div>
      <div className="text-5xl md:text-5xl font-extrabold text-nysc-green-dark mt-2 leading-tight">
        {big}
      </div>
      <div className="text-sm text-neutral-600 mt-2">{sub}</div>
    </div>
  );
}
