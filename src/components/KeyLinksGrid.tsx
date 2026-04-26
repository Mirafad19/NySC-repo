import {
  CalendarDays,
  UserPlus,
  Smartphone,
  BookOpen,
  MapPin,
  Building2,
  Headphones,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

const LINKS = [
  { icon: CalendarDays, title: "Mobilization Timetable", desc: "View upcoming batch schedules" },
  { icon: UserPlus, title: "Online Registration", desc: "Register as a prospective corps member" },
  { icon: Smartphone, title: "NYSC Mobile App", desc: "Download the official app" },
  { icon: BookOpen, title: "Service Year Overview", desc: "Understand the four cardinal stages" },
  { icon: MapPin, title: "Camp Address", desc: "Find your orientation camp" },
  { icon: Building2, title: "State Offices", desc: "Locate state secretariats" },
  { icon: Headphones, title: "Support Line", desc: "Get help & assistance" },
  { icon: FileText, title: "Guidelines", desc: "Read official policies" },
  { icon: ImageIcon, title: "DG's Gallery", desc: "Photos from the Director-General" },
];

export function KeyLinksGrid() {
  return (
    <section id="key-links" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-nysc-green-dark">Key Links</h2>
          <p className="text-neutral-600 mt-2">Everything you need, one click away.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LINKS.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#"
              className="group bg-white border border-neutral-200 rounded-xl p-6 hover:border-nysc-green hover:shadow-lg transition flex items-start gap-4"
            >
              <div className="bg-nysc-green/10 text-nysc-green p-3 rounded-lg group-hover:bg-nysc-green group-hover:text-white transition">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-nysc-green-dark group-hover:text-nysc-green">
                  {title}
                </h3>
                <p className="text-sm text-neutral-600 mt-1">{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
