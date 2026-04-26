import { createFileRoute } from "@tanstack/react-router";
import { CountdownBar } from "@/components/CountdownBar";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HeroSection } from "@/components/HeroSection";
import { NigeriaMapSection } from "@/components/NigeriaMapSection";
import { AboutNyscSection } from "@/components/AboutNyscSection";
import { DirectorGeneralSection } from "@/components/DirectorGeneralSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { KeyLinksGrid } from "@/components/KeyLinksGrid";
import { NewsCards } from "@/components/NewsCards";
import { AchievementsSection } from "@/components/AchievementsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NYSC — National Youth Service Corps" },
      {
        name: "description",
        content:
          "Official portal of the National Youth Service Corps of Nigeria. Mobilization, registration, news and resources for corps members.",
      },
      { property: "og:title", content: "NYSC — National Youth Service Corps" },
      {
        property: "og:description",
        content: "Service & Humility — Empowering Nigerian Youth Through National Service.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <CountdownBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <NigeriaMapSection />
        <AboutNyscSection />
        <DirectorGeneralSection />
        <ObjectivesSection />
        <KeyLinksGrid />
        <NewsCards />
        <AchievementsSection />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
