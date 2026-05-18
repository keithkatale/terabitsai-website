"use client";

import { landingCopy } from "@/content/landingCopy";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { personas } = landingCopy;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
};

export function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 440, behavior: "smooth" });
  };

  return (
    <section
      id="who"
      className="tb-section-glow relative overflow-hidden border-t border-white/[0.04] bg-[#0a0a0a] py-24 sm:py-28"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 sm:px-6">
        <motion.div
          {...fadeUp}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="flex flex-col gap-4">
            <span className="tb-chip self-start">{personas.label}</span>
            <h2 className="max-w-2xl whitespace-pre-line text-[clamp(1.85rem,3.6vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[rgb(225,224,204)]">
              {personas.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            className="tb-icon-tile !h-11 !w-11 !rounded-full text-white/65 transition-colors hover:text-white"
            aria-label="Scroll to next persona"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="relative -mx-4 sm:-mx-6">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto px-4 pb-6 sm:px-6"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {personas.cards.map((persona, i) => (
              <motion.article
                key={persona.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="tb-card-elevated tb-hover-lift relative flex shrink-0 flex-col overflow-hidden p-7"
                style={{
                  width: "440px",
                  maxWidth: "85vw",
                  scrollSnapAlign: "start",
                }}
              >
                <span
                  className="pointer-events-none absolute -bottom-6 right-3 select-none font-bold leading-none text-white/[0.025]"
                  style={{ fontSize: "144px" }}
                  aria-hidden
                >
                  {persona.letter}
                </span>

                <span className="tb-chip tb-chip-accent mb-4 self-start">
                  {persona.role}
                </span>

                <h3 className="mb-2.5 text-xl font-medium leading-tight tracking-[-0.015em] text-[rgb(225,224,204)]">
                  {persona.name}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/55">
                  {persona.desc}
                </p>

                <div className="border-t border-white/[0.06] pt-5">
                  {persona.tasks.map((task) => (
                    <div
                      key={task}
                      className="mb-2.5 flex items-start gap-2.5 text-[13px] leading-relaxed text-white/65 last:mb-0"
                    >
                      <span className="mt-0.5 inline-grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">
                        ✓
                      </span>
                      {task}
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
