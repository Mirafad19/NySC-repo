import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { MapPin, Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NYSC" },
      {
        name: "description",
        content: "Get in touch with the National Youth Service Corps headquarters.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 text-nysc-green shrink-0" />
            <div>
              <h3 className="font-bold text-nysc-green-dark">Headquarters</h3>
              <p className="text-neutral-700">
                NYSC Directorate Headquarters, Plot 416, Tafawa Balewa Way, Area 3, Garki, Abuja.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="h-6 w-6 text-nysc-green shrink-0" />
            <div>
              <h3 className="font-bold text-nysc-green-dark">Phone</h3>
              <p className="text-neutral-700">+234 (0) 700-CALL-NYSC</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="h-6 w-6 text-nysc-green shrink-0" />
            <div>
              <h3 className="font-bold text-nysc-green-dark">Email</h3>
              <p className="text-neutral-700">info@nysc.gov.ng</p>
            </div>
          </div>
        </div>
        <form className="bg-white border border-neutral-200 rounded-xl p-6 space-y-4">
          <input
            className="w-full border border-neutral-300 rounded px-3 py-2"
            placeholder="Full name"
          />
          <input
            className="w-full border border-neutral-300 rounded px-3 py-2"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full border border-neutral-300 rounded px-3 py-2"
            placeholder="Subject"
          />
          <textarea
            className="w-full border border-neutral-300 rounded px-3 py-2 min-h-32"
            placeholder="Message"
          />
          <button
            type="button"
            className="bg-nysc-green text-white font-semibold px-6 py-2.5 rounded hover:bg-nysc-green-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </PageShell>
  );
}
