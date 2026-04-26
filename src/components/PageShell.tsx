import { ReactNode } from "react";
import { CountdownBar } from "@/components/CountdownBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <CountdownBar />
      <SiteHeader />
      <section className="bg-gradient-to-br from-nysc-green-dark to-nysc-green text-white py-14">
        <div className="mx-auto max-w-[1200px] px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">{title}</h1>
          {subtitle && <p className="mt-3 text-white/90 max-w-2xl">{subtitle}</p>}
        </div>
      </section>
      <main className="mx-auto max-w-[1200px] px-4 py-12">{children}</main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
