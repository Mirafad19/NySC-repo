import { ArrowRight, FileText, MapPin, Users, Award, ShieldCheck, HelpCircle } from "lucide-react";

const PORTALS = [
  {
    title: "Relocation/Deployment",
    desc: "Apply for relocation due to marital, health or security reasons.",
    icon: MapPin,
    color: "bg-blue-500",
  },
  {
    title: "Exclusion & Remobilization",
    desc: "Check eligibility for exclusion or apply for remobilization.",
    icon: FileText,
    color: "bg-emerald-500",
  },
  {
    title: "Verification Services",
    desc: "Verify NYSC certificates for organizations and employers.",
    icon: ShieldCheck,
    color: "bg-orange-500",
  },
  {
    title: "Skill Acquisition (SAED)",
    desc: "Access vocational training and business development tools.",
    icon: Award,
    color: "bg-purple-500",
  },
  {
    title: "Corp Member Login",
    desc: "Dashboard for active corps members to manage their profile.",
    icon: Users,
    color: "bg-nysc-green",
  },
  {
    title: "Help & Support",
    desc: "Access the knowledge base and common FAQs for service.",
    icon: HelpCircle,
    color: "bg-slate-700",
  },
];

export function KeyPortalsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[1300px] px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 font-display">Service Portals</h2>
            <p className="text-slate-500 mt-4 text-lg">
              Quick access to core NYSC digital services for prospective and active corps members.
            </p>
          </div>
          <button className="text-nysc-green font-bold flex items-center gap-2 hover:underline">
            View All Services <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTALS.map((portal) => (
            <a
              key={portal.title}
              href="#"
              className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-nysc-green/20 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${portal.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-inherit/20 group-hover:scale-110 transition-transform`}
              >
                <portal.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{portal.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{portal.desc}</p>
              <div className="flex items-center text-nysc-green font-bold text-sm group-hover:translate-x-1 transition-transform">
                Access Portal <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
