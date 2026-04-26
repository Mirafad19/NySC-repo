import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — NYSC" },
      { name: "description", content: "Frequently asked questions about the National Youth Service Corps." },
    ],
  }),
  component: Faqs,
});

const FAQS = [
  { q: "Who is eligible for NYSC?", a: "All Nigerian graduates of universities and polytechnics under 30 years of age at graduation." },
  { q: "How do I register online?", a: "Visit the official NYSC portal, create an account, and follow the step-by-step registration process." },
  { q: "Can I choose my state of deployment?", a: "Prospective corps members can indicate state preferences, but final deployment is at the discretion of the Scheme." },
  { q: "What is the duration of the service year?", a: "The NYSC service year is one (1) calendar year, including a three-week orientation course." },
  { q: "What allowances do corps members receive?", a: "Corps members receive a monthly federal allowance plus any state and PPA top-ups." },
  { q: "Is health insurance provided?", a: "Yes, corps members are enrolled in the NHIA scheme for the service year." },
];

function Faqs() {
  return (
    <PageShell title="Frequently Asked Questions" subtitle="Quick answers to common questions.">
      <Accordion type="single" collapsible className="max-w-3xl">
        {FAQS.map((f, i) => (
          <AccordionItem key={i} value={`q-${i}`}>
            <AccordionTrigger className="text-left text-nysc-green-dark font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-neutral-700">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </PageShell>
  );
}
