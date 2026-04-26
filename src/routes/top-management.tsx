import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
const dg =
  "https://image2url.com/r2/default/images/1773694511718-c3a9a776-971b-4a08-801b-8bb966c8f78b.jpg";

export const Route = createFileRoute("/top-management")({
  head: () => ({
    meta: [
      { title: "Top Management — NYSC" },
      {
        name: "description",
        content:
          "Meet the Director-General and management team of the National Youth Service Corps.",
      },
    ],
  }),
  component: TopMgmt,
});

function TopMgmt() {
  return (
    <PageShell title="Top Management" subtitle="Leadership of the National Youth Service Corps.">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <img src={dg} alt="Director-General" className="rounded-xl shadow-lg w-full" />
        <div className="md:col-span-2 space-y-4 text-neutral-700">
          <h2 className="text-2xl font-bold text-nysc-green-dark">The Director-General</h2>
          <p>
            The Director-General is the chief executive of the Scheme, responsible for policy
            implementation, mobilisation and the overall welfare of corps members across the
            federation.
          </p>
          <p>
            The DG is supported by a team of seasoned Directors heading the various departments of
            the Scheme.
          </p>
        </div>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Director, Corps Mobilisation",
          "Director, Corps Welfare",
          "Director, SAED",
          "Director, Finance & Accounts",
          "Director, ICT",
          "Director, Press & PR",
        ].map((r) => (
          <div
            key={r}
            className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="h-16 w-16 rounded-full bg-nysc-green/15 mb-4" />
            <h3 className="font-bold text-nysc-green-dark">{r}</h3>
            <p className="text-sm text-neutral-600 mt-1">National Directorate Headquarters</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
