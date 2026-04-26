import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — NYSC State Offices" },
      {
        name: "description",
        content: "NYSC state offices and orientation camps across the 36 states and FCT.",
      },
    ],
  }),
  component: Locations,
});

const STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

function Locations() {
  return (
    <PageShell
      title="State Offices & Orientation Camps"
      subtitle="Locate NYSC presence across the federation."
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {STATES.map((s) => (
          <div
            key={s}
            className="border border-neutral-200 rounded-lg p-4 hover:border-nysc-green hover:bg-nysc-green/5 transition cursor-pointer"
          >
            <h3 className="font-bold text-nysc-green-dark">{s} State</h3>
            <p className="text-xs text-neutral-600 mt-1">State Secretariat • Orientation Camp</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
