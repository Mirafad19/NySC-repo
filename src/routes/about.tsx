import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
const objectives =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NYSC — National Youth Service Corps" },
      {
        name: "description",
        content: "History, vision, mission, and objectives of the National Youth Service Corps.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell title="About NYSC" subtitle="History, Vision, Mission and Objectives of the Scheme.">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-nysc-green-dark">History</h2>
          <p>
            The National Youth Service Corps (NYSC) was established by Decree No. 24 of 22nd May,
            1973 to involve Nigerian graduates in the development of the country.
          </p>
          <h2 className="text-2xl font-bold text-nysc-green-dark mt-6">Vision</h2>
          <p>
            To be a world-class national mobilisation, development and empowerment scheme that
            fosters national unity and integration.
          </p>
          <h2 className="text-2xl font-bold text-nysc-green-dark mt-6">Mission</h2>
          <p>
            To deploy Nigerian graduates for service in unfamiliar parts of the country, building
            national cohesion through shared experience and skill development.
          </p>
        </div>
        <img src={objectives} alt="NYSC objectives" className="rounded-xl shadow-lg w-full" />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-nysc-green-dark mb-4">Objectives</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {[
            "To inculcate discipline in Nigerian youth",
            "To raise the moral tone of Nigerian youth",
            "To develop common ties among Nigerian youth",
            "To remove prejudices and ignorance",
            "To develop skills for self-reliance",
            "To enable acquisition of practical experience",
          ].map((o) => (
            <li key={o} className="bg-neutral-50 border-l-4 border-nysc-green p-4 rounded">
              {o}
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
