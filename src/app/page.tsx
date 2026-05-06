import { PrismaHero } from "@/components/PrismaHero";
import { IconScroller } from "@/components/IconScroller";
import { SkillsSection } from "@/components/SkillsSection";
import { BelowMarqueeSections } from "@/components/BelowMarqueeSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <PrismaHero />
      <IconScroller />
      <SkillsSection />
      <BelowMarqueeSections />
    </main>
  );
}
