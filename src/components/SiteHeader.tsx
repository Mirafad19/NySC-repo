import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "../assets/nysc-logo.png";
import { Home, ChevronDown, Menu, X } from "lucide-react";

const NAV: { label: string; to?: string; children?: { label: string; to: string }[] }[] = [
  {
    label: "About Us",
    children: [
      { label: "About NYSC", to: "/about" },
      { label: "Top Management", to: "/top-management" },
    ],
  },
  { label: "Top Management", to: "/top-management" },
  {
    label: "Departments",
    children: [{ label: "All Departments", to: "/departments" }],
  },
  {
    label: "Locations",
    children: [{ label: "State Offices", to: "/locations" }],
  },
  { label: "NHIA Enrolment", to: "/nhia-enrolment" },
  { label: "Publications", to: "/publications" },
  { label: "Registration of CyberCafes", to: "/registration-cybercafes" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/faqs" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-neutral-50 border-b border-neutral-200 sticky top-0 z-40">
      <div className="mx-auto max-w-[1400px] px-4 py-2 flex items-center gap-3">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="NYSC" className="h-20 w-20 object-contain" />
        </Link>

        <nav className="hidden xl:flex items-center gap-1 ml-12">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="text-slate-600 hover:text-nysc-green px-4 py-2 text-sm font-bold flex items-center gap-1 transition-colors">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block min-w-[240px] z-50">
                  <div className="bg-white border border-slate-100 rounded-xl shadow-2xl py-2 overflow-hidden">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-5 py-3 text-[13px] font-semibold text-slate-600 hover:bg-nysc-green/5 hover:text-nysc-green transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className="text-slate-600 hover:text-nysc-green px-4 py-2 text-sm font-bold transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          className="lg:hidden p-2 ml-auto text-nysc-green-dark"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded hover:bg-nysc-green/10"
            >
              Home
            </Link>
            {NAV.flatMap((item) =>
              item.children
                ? [
                    <div
                      key={item.label}
                      className="px-3 pt-2 pb-1 text-xs font-bold uppercase text-neutral-500"
                    >
                      {item.label}
                    </div>,
                    ...item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm rounded hover:bg-nysc-green/10"
                      >
                        {c.label}
                      </Link>
                    )),
                  ]
                : [
                    <Link
                      key={item.to}
                      to={item.to!}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 text-sm font-medium rounded hover:bg-nysc-green/10"
                    >
                      {item.label}
                    </Link>,
                  ],
            )}
          </div>
        </div>
      )}
    </header>
  );
}
