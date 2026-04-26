import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import logo from "@/assets/nysc-logo.png";

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

        <nav className="hidden lg:flex items-center gap-1.5 ml-20">
          <Link
            to="/"
            className="bg-nysc-green hover:bg-nysc-green-dark text-white px-3 py-2 rounded flex items-center justify-center"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="bg-nysc-green hover:bg-nysc-green-dark text-white px-3 py-2 rounded text-[13px] font-semibold flex items-center gap-1.5 whitespace-nowrap">
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block min-w-[200px] z-50">
                  <div className="bg-white border border-neutral-200 rounded shadow-lg py-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-nysc-green/10 hover:text-nysc-green"
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
                className="bg-nysc-green hover:bg-nysc-green-dark text-white px-3 py-2 rounded text-[13px] font-semibold whitespace-nowrap"
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
