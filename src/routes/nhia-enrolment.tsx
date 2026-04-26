import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/nhia-enrolment")({
  head: () => ({
    meta: [
      { title: "NHIA Enrolment — NYSC" },
      { name: "description", content: "National Health Insurance Authority enrolment for NYSC corps members." },
    ],
  }),
  component: NHIA,
});

function NHIA() {
  return (
    <PageShell title="NHIA Enrolment" subtitle="Health insurance coverage for serving corps members.">
      <div className="prose max-w-none text-neutral-700 space-y-4">
        <p>All serving corps members are enrolled in the National Health Insurance Authority (NHIA) scheme to ensure access to quality healthcare throughout the service year.</p>
        <h2 className="text-2xl font-bold text-nysc-green-dark">Enrolment Steps</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Visit your Place of Primary Assignment (PPA) or local government inspector.</li>
          <li>Complete the NHIA enrolment form provided.</li>
          <li>Select an accredited Health Maintenance Organisation (HMO).</li>
          <li>Receive your NHIA ID for medical access.</li>
        </ol>
      </div>
    </PageShell>
  );
}
