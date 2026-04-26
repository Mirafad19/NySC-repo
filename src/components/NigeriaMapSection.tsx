import { useState } from "react";
import data from "@/lib/nigeria-states.json";

type StateShape = { name: string; d: string; cx: number; cy: number };
const MAP = data as { viewBox: string; states: StateShape[] };

export function NigeriaMapSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          {/* Map */}
          <div>
            <svg
              viewBox={MAP.viewBox}
              className="w-full h-auto"
              role="img"
              aria-label="Interactive map of Nigeria states"
            >
              <g>
                {MAP.states.map((s) => (
                  <path
                    key={s.name}
                    d={s.d}
                    fill={active === s.name ? "var(--nysc-green-dark)" : "var(--nysc-green)"}
                    stroke="white"
                    strokeWidth={1.2}
                    strokeLinejoin="round"
                    className="cursor-pointer transition-colors hover:fill-[var(--nysc-green-dark)]"
                    onMouseEnter={() => setActive(s.name)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <title>{s.name}</title>
                  </path>
                ))}
              </g>
              <g>
                {MAP.states.map((s) => (
                  <text
                    key={`l-${s.name}`}
                    x={s.cx}
                    y={s.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none select-none"
                    fill="white"
                    fontSize={11}
                    fontWeight={700}
                    style={{
                      paintOrder: "stroke",
                      stroke: "rgba(0,0,0,0.35)",
                      strokeWidth: 0.6,
                    }}
                  >
                    {s.name}
                  </text>
                ))}
              </g>
            </svg>
          </div>

          {/* Right: title + copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Interactive <br />
              <span className="text-nysc-green-dark">Map of Nigeria</span>
            </h2>
            <p className="mt-6 text-neutral-700 text-base md:text-lg leading-relaxed">
              <span className="text-nysc-green-dark font-semibold">Explore</span> Nigeria
              interactively using the map.{" "}
              <span className="text-nysc-green-dark font-semibold">Click</span> on any state to see
              more information about the state.
            </p>
            {active && (
              <p className="mt-4 text-nysc-green-dark font-bold text-lg">{active} State</p>
            )}
            <a
              href="/locations"
              className="mt-8 inline-flex items-center justify-center border-2 border-nysc-green text-nysc-green-dark font-bold px-10 py-4 rounded-md hover:bg-nysc-green hover:text-white transition"
            >
              View All Camp Activities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
