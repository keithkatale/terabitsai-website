"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    label: "Growth",
    title: "Marketing & outreach on autopilot",
    description:
      "Your Growth agent runs campaigns, manages communities, publishes content, and tracks engagement — compounding results every day without prompting.",
    pain: "No more hiring freelancers for social, content, or outreach.",
    steps: ["Strategy from brief", "Content creation", "Scheduled publishing", "Engagement tracking", "Performance reporting"],
  },
  {
    label: "Computer-Use",
    title: "Any software. No API needed.",
    description:
      "Agents operate cloud VMs — clicking, typing, and navigating real applications just like a human would. If your team can use it, so can theirs.",
    pain: "Works with tools that have no API — ERPs, legacy portals, browsers.",
    steps: ["Open application", "Navigate UI", "Fill forms & click", "Extract data", "Report results"],
  },
  {
    label: "Orchestration",
    title: "One goal in. Full execution out.",
    description:
      "Drop a target into the kanban board. The Orchestrator decomposes it, assigns agents, manages dependencies, and reports back when it's done.",
    pain: "You manage goals, not individual tasks or people.",
    steps: ["Set moonshot goal", "Auto-decompose into OKRs", "Delegate to agents", "Monitor KPIs", "Daily brief to you"],
  },
  {
    label: "Intelligence",
    title: "24/7 market & competitor monitoring",
    description:
      "Intel agents watch your market around the clock — tracking competitors, analysing trends, and surfacing opportunities before anyone else sees them.",
    pain: "No more missing moves. Real-time signals, not weekly reports.",
    steps: ["Monitor sources", "Detect signals", "Score urgency", "Alert agents", "Update strategy"],
  },
  {
    label: "Operations",
    title: "Run back-office without the back-office",
    description:
      "Compliance checks, onboarding workflows, document generation, data entry — Ops agents handle the repetitive work your team shouldn't be doing.",
    pain: "Cut operational headcount by 90% without losing quality.",
    steps: ["Receive directive", "Execute workflow", "Verify compliance", "Log with reasoning", "Report completion"],
  },
];

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
    const cardWidth = 420 + 20;
    scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section
      id="capabilities"
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
        {/* Header */}
        <motion.div {...fadeUp} className="flex w-full items-end justify-between">
          <div className="flex flex-col gap-4">
            <div>
              <span
                className="inline-flex items-center rounded-full px-3 py-1.5 text-xs tracking-widest"
                style={{
                  background: "rgba(212, 208, 201, 0.1)",
                  color: "rgba(212, 208, 201, 0.6)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Capabilities
              </span>
            </div>
            <h2
              className="text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              Built for teams that want speed,{" "}
              <br className="hidden sm:block" />
              ready for work.
            </h2>
            <p
              className="max-w-lg text-[15px] leading-relaxed"
              style={{ color: "rgba(212, 208, 201, 0.6)" }}
            >
              AI employees that operate your tools, run your campaigns,
              and hit targets autonomously — while you focus on&nbsp;strategy.
            </p>
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
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        {/* Cards */}
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
            {capabilities.map((cap, i) => (
              <motion.article
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex shrink-0 flex-col justify-between overflow-hidden"
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
                {/* Top: Label */}
                <div className="flex flex-col gap-5">
                  <span
                    className="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.08em]"
                    style={{
                      background: "rgba(212, 208, 201, 0.08)",
                      color: "rgba(212, 208, 201, 0.55)",
                    }}
                  >
                    {cap.label}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-[17px] font-medium leading-tight"
                    style={{ color: "rgb(212, 208, 201)" }}
                  >
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "rgba(212, 208, 201, 0.6)" }}
                  >
                    {cap.description}
                  </p>

                  {/* Workflow steps */}
                  <div className="flex flex-col gap-2 pt-2">
                    {cap.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-medium"
                          style={{
                            background: "rgba(212, 208, 201, 0.08)",
                            color: "rgba(212, 208, 201, 0.5)",
                          }}
                        >
                          {idx + 1}
                        </div>
                        <span
                          className="text-[12px]"
                          style={{ color: "rgba(212, 208, 201, 0.5)" }}
                        >
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Pain point callout */}
                <div
                  className="mt-6 rounded-md px-4 py-3"
                  style={{
                    background: "rgba(212, 208, 201, 0.04)",
                    border: "1px solid rgba(212, 208, 201, 0.06)",
                  }}
                >
                  <p
                    className="text-[11px] italic leading-relaxed"
                    style={{ color: "rgba(212, 208, 201, 0.5)" }}
                  >
                    {cap.pain}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
