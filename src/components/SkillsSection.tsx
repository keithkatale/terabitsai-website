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
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
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
      className="relative overflow-hidden"
      style={{
        borderTop: "1px solid rgba(212, 208, 201, 0.08)",
        background: "#141414",
        padding: "112px 0",
      }}
    >
      <div
        className="mx-auto flex flex-col items-center gap-14"
        style={{ maxWidth: "1160px", padding: "0 24px" }}
      >
        <motion.div {...fadeUp} className="flex w-full items-end justify-between">
          <div className="flex flex-col gap-4">
            <span
              className="inline-flex w-fit items-center rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
              style={{
                background: "rgba(212, 208, 201, 0.1)",
                color: "rgba(212, 208, 201, 0.6)",
              }}
            >
              {personas.label}
            </span>
            <h2
              className="text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em] whitespace-pre-line"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {personas.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full sm:inline-flex"
            style={{
              border: "1px solid rgba(212, 208, 201, 0.08)",
              background: "rgba(212, 208, 201, 0.04)",
              color: "rgba(212, 208, 201, 0.6)",
            }}
            aria-label="Scroll to next persona"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-none"
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
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex shrink-0 flex-col overflow-hidden"
                style={{
                  width: "420px",
                  maxWidth: "85vw",
                  borderRadius: "10px",
                  border: "1px solid rgba(212, 208, 201, 0.06)",
                  background:
                    "linear-gradient(180deg, rgba(212,208,201,0.02) 0%, rgba(212,208,201,0.04) 100%)",
                  scrollSnapAlign: "start",
                  padding: "28px",
                }}
              >
                <span
                  className="pointer-events-none absolute -bottom-4 right-4 select-none font-bold leading-none"
                  style={{
                    fontSize: "120px",
                    color: "rgba(255,255,255,0.02)",
                  }}
                  aria-hidden
                >
                  {persona.letter}
                </span>

                <span
                  className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em]"
                  style={{ color: "rgba(212, 208, 201, 0.55)" }}
                >
                  {persona.role}
                </span>
                <h3
                  className="mb-2 text-[17px] font-medium leading-tight"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {persona.name}
                </h3>
                <p
                  className="mb-5 text-[13px] leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {persona.desc}
                </p>

                <div
                  className="mt-auto border-t pt-4"
                  style={{ borderColor: "rgba(212, 208, 201, 0.06)" }}
                >
                  {persona.tasks.map((task) => (
                    <p
                      key={task}
                      className="mb-2 flex gap-2 text-[12px] leading-relaxed last:mb-0"
                      style={{ color: "rgba(212, 208, 201, 0.55)" }}
                    >
                      <span style={{ color: "rgb(212, 208, 201)" }}>✓</span>
                      {task}
                    </p>
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
