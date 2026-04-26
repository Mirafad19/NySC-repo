import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: "Publications — NYSC" },
      { name: "description", content: "Official NYSC publications, reports, guidelines and downloads." },
    ],
  }),
  component: Publications,
});

const PUBS = [
  "NYSC Bye-Laws","Corps Member Handbook","Annual Report 2023","SAED Manual",
  "NDPR Audit Report 2023","Mobilisation Guidelines","Allowances Schedule","Code of Conduct",
];

function Publications() {
  return (
    <PageShell title="Publications" subtitle="Reports, guidelines and downloadable resources.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PUBS.map((p) => (
          <a key={p} href="#" className="flex items-start gap-4 p-5 bg-white border border-neutral-200 rounded-xl hover:border-nysc-green hover:shadow-md transition">
            <FileText className="h-8 w-8 text-nysc-green shrink-0" />
            <div>
              <h3 className="font-bold text-nysc-green-dark">{p}</h3>
              <p className="text-xs text-neutral-500 mt-1">PDF Document</p>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
