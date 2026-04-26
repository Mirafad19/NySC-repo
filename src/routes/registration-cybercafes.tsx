import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/registration-cybercafes")({
  head: () => ({
    meta: [
      { title: "Registration CyberCafes — NYSC" },
      { name: "description", content: "Accredited NYSC online registration cybercafes nationwide." },
    ],
  }),
  component: Cyber,
});

function Cyber() {
  return (
    <PageShell title="Registration CyberCafes" subtitle="Find an accredited cybercafe near you for online registration.">
      <div className="bg-nysc-green/5 border border-nysc-green/20 rounded-xl p-6 mb-8">
        <p className="text-neutral-700">Prospective corps members are advised to use only NYSC-accredited cybercafes to complete their online registration. This guarantees data integrity and protects against fraud.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="border border-neutral-200 rounded-lg p-5 bg-white">
            <h3 className="font-bold text-nysc-green-dark">Accredited CyberCafe #{i + 1}</h3>
            <p className="text-sm text-neutral-600 mt-1">Sample address line, Local Govt Area, State.</p>
            <p className="text-xs text-nysc-green mt-2 font-semibold">VERIFIED</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
