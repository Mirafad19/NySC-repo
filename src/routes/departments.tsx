import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — NYSC" },
      {
        name: "description",
        content: "Departments and units of the National Youth Service Corps.",
      },
    ],
  }),
  component: Departments,
});

const DEPTS = [
  "Corps Mobilisation",
  "Corps Welfare & Inspectorate",
  "Skill Acquisition & Entrepreneurship Development (SAED)",
  "Information & Communication Technology",
  "Finance & Accounts",
  "Press & Public Relations",
  "Procurement",
  "Internal Audit",
  "Legal Services",
  "Servicom",
  "Planning, Research & Statistics",
  "Human Resources",
];

function Departments() {
  return (
    <PageShell title="Departments" subtitle="The functional arms of the Scheme.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {DEPTS.map((d) => (
          <div
            key={d}
            className="border border-neutral-200 rounded-xl p-6 bg-white hover:border-nysc-green hover:shadow-md transition"
          >
            <div className="text-nysc-gold text-2xl mb-2">●</div>
            <h3 className="font-bold text-nysc-green-dark">{d}</h3>
            <p className="text-sm text-neutral-600 mt-2">
              A core department of the NYSC Directorate Headquarters.
            </p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
