import { AudienceStrip } from "@/components/AudienceStrip";
import { BelowMarqueeSections } from "@/components/BelowMarqueeSections";
import { IconScroller } from "@/components/IconScroller";
import { PrismaHero } from "@/components/PrismaHero";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <PrismaHero />
      <IconScroller />
      <AudienceStrip />
      <SkillsSection />
      <BelowMarqueeSections />
    </main>
  );
}
