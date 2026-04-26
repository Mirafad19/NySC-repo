import { useEffect, useState } from "react";

const END_TARGET = new Date("2026-05-24T00:00:00").getTime();
const BEGIN_TARGET = new Date("2026-05-12T00:00:00").getTime();

function calc(target: number, now: number) {
  const diff = Math.max(0, target - now);
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

type T = { d: number; h: number; m: number; s: number };

export function CountdownBar() {
  const [end, setEnd] = useState<T | null>(null);
  const [begin, setBegin] = useState<T | null>(null);

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      setEnd(calc(END_TARGET, now));
      setBegin(calc(BEGIN_TARGET, now));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-nysc-green text-white text-[12px] font-semibold overflow-hidden">
      <div className="relative flex w-full py-2">
        <div className="flex animate-marquee-single whitespace-nowrap shrink-0 items-center gap-16 pl-[100%]">
          <CountdownBlock
            label="Countdown To The End Of 2026 Batch 'A' Stream II Orientation Course:"
            t={end}
          />
          <CountdownBlock
            label="Countdown To The Beginning Of 2026 Batch 'A' Stream II Orientation Course In Enugu And Osun:"
            t={begin}
          />
        </div>
      </div>
    </div>
  );
}

function CountdownBlock({ label, t }: { label: string; t: T | null }) {
  return (
    <div className="flex items-center gap-4">
      <span>{label}</span>
      <div className="flex items-center gap-2 font-mono" suppressHydrationWarning>
        <Unit n={t?.d ?? 0} l="Days" />
        <Unit n={t?.h ?? 0} l="Hrs" />
        <Unit n={t?.m ?? 0} l="Mins" />
        <Unit n={t?.s ?? 0} l="Secs" />
      </div>
    </div>
  );
}

function Unit({ n, l }: { n: number; l: string }) {
  return (
    <span className="flex flex-col items-center leading-none" suppressHydrationWarning>
      <span className="text-base font-bold tabular-nums" suppressHydrationWarning>
        {String(n).padStart(2, "0")}
      </span>
      <span className="text-[9px] uppercase opacity-90 mt-0.5">{l}</span>
    </span>
  );
}
