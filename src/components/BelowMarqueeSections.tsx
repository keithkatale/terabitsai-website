"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagicBento from "@/components/MagicBento";

function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    // Cal.com official bootstrap — sets up queue before script loads
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    win.Cal("init", "discoverycall", { origin: "https://app.cal.com" });

    win.Cal.ns.discoverycall("inline", {
      elementOrSelector: "#my-cal-inline-discoverycall",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      calLink: "keithkatale/discoverycall",
    });

    win.Cal.ns.discoverycall("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#0f0e0e" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="my-cal-inline-discoverycall"
      style={{ width: "100%", height: "100%", minHeight: "580px", overflow: "auto" }}
    />
  );
}

/* ─────────────────────────────────────────────
   How It Works — Bento Card Data
   ───────────────────────────────────────────── */

const howItWorksCards = [
  {
    label: "Orchestrator",
    title: "One brain, infinite delegation",
    description:
      "You set the goal. The Orchestrator breaks it into structured directives, routes to the right agent, and monitors KPIs — never executes directly.",
    visual: (
      <div className="bento-visual-node-graph">
        <div className="bento-visual-node-graph__tier">
          <div className="bento-visual-node-graph__node bento-visual-node-graph__node--primary" />
        </div>
        <div className="bento-visual-node-graph__connector" />
        <div className="bento-visual-node-graph__tier">
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
        </div>
        <div className="bento-visual-node-graph__connector" />
        <div className="bento-visual-node-graph__tier">
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
        </div>
      </div>
    ),
  },
  {
    label: "Domain Agents",
    title: "Permanent, stateful experts",
    description:
      "Growth, Intel, Treasury, Ops — each owns a domain end-to-end with persistent memory and dedicated KPIs. No overlap, no confusion.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Growth</div>
          <div className="bento-visual-flow__line" />
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Intel</div>
          <div className="bento-visual-flow__line" />
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Treasury</div>
          <div className="bento-visual-flow__line" />
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Ops</div>
          <div className="bento-visual-flow__line" />
        </div>
      </div>
    ),
  },
  {
    label: "Task Workers",
    title: "Spawn, execute, destroy",
    description:
      "Stateless agents spawned on-demand for discrete tasks — browser automation, data extraction, doc generation. Cheap, fast, disposable.",
    visual: (
      <div className="bento-visual-processes">
        <div className="bento-visual-processes__cell bento-visual-processes__cell--running" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--done" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--spawning" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--running" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--done" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--running" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--done" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--spawning" />
        <div className="bento-visual-processes__cell" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--running" />
        <div className="bento-visual-processes__cell bento-visual-processes__cell--done" />
        <div className="bento-visual-processes__cell" />
      </div>
    ),
  },
  {
    label: "Intelligence Loop",
    title: "Gets smarter every day",
    description:
      "Daily reflection cycles: results flow back, patterns are captured, and winning approaches compound automatically into institutional memory.",
    visual: (
      <div className="bento-visual-loop">
        <div className="bento-visual-loop__ring">
          <div className="bento-visual-loop__orbit" />
          <div className="bento-visual-loop__trail" />
          <div className="bento-visual-loop__nodes">
            <div className="bento-visual-loop__node">RUN</div>
            <div className="bento-visual-loop__node">LEARN</div>
            <div className="bento-visual-loop__node">ADAPT</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Protocol",
    title: "3 message types. Zero ambiguity.",
    description:
      "Directive ↓ Result ↑ Signal ⚡ — every interaction in the system fits one structured format. Clean contracts, reliable coordination.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">DIRECTIVE ↓</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">RESULT ↑</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">SIGNAL ⚡</div>
        </div>
      </div>
    ),
  },
  {
    label: "Human Oversight",
    title: "You set thresholds, not tasks",
    description:
      "Agents act autonomously below your configured risk level. Above it — spending, communication, low-confidence decisions — they escalate to you.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Low risk → auto</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Med risk → log</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" style={{ background: "rgba(212, 208, 201, 0.7)" }} />
          <div className="bento-visual-flow__box" style={{ borderColor: "rgba(212, 208, 201, 0.25)" }}>High risk → escalate</div>
        </div>
      </div>
    ),
  },
];

/* ─────────────────────────────────────────────
   Features — Bento Card Data
   ───────────────────────────────────────────── */

const featuresCards = [
  {
    label: "Computer-Use",
    title: "Any software. Any workflow.",
    description:
      "Agents operate in cloud VMs — clicking, typing, navigating. If a human can use the software, so can the agent. No API required.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__box">VM</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Browser</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Action</div>
        </div>
      </div>
    ),
  },
  {
    label: "Company Brain",
    title: "One source of truth",
    description:
      "A living 4-layer memory structure — identity, strategy, episodes, and working context. Every agent reads from it. Only the Orchestrator writes.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Permanent</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Strategic</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Episodic</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__box">Working</div>
        </div>
      </div>
    ),
  },
  {
    label: "Self-Improvement",
    title: "Agents rewrite their own playbooks",
    description:
      "After 30+ days, the system proposes Role Card updates based on observed performance. You approve — agents permanently improve.",
    visual: (
      <div className="bento-visual-bars" style={{ position: "relative" }}>
        <div className="bento-visual-bars__baseline" />
        {[12, 18, 22, 30, 38, 48, 58, 68, 78, 88, 95].map((h, i) => (
          <div
            key={i}
            className={`bento-visual-bars__bar ${i >= 9 ? "bento-visual-bars__bar--active" : i >= 6 ? "bento-visual-bars__bar--accent" : ""}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "Durable Execution",
    title: "Crash-proof, resumable",
    description:
      "Every agent state is checkpointed. If a process fails mid-run — network drop, timeout — it resumes exactly where it stopped. Never from scratch.",
    visual: (
      <div className="bento-visual-durable">
        <div className="bento-visual-durable__track">
          <div className="bento-visual-durable__progress" />
        </div>
        <div className="bento-visual-durable__checkpoints">
          <div className="bento-visual-durable__checkpoint bento-visual-durable__checkpoint--saved" />
          <div className="bento-visual-durable__checkpoint bento-visual-durable__checkpoint--saved" />
          <div className="bento-visual-durable__checkpoint bento-visual-durable__checkpoint--saved" />
          <div className="bento-visual-durable__checkpoint" />
          <div className="bento-visual-durable__checkpoint" />
        </div>
        <div className="bento-visual-durable__track">
          <div className="bento-visual-durable__progress bento-visual-durable__progress--resumed" />
        </div>
        <div className="bento-visual-durable__label">checkpoint → interrupt → resume</div>
      </div>
    ),
  },
  {
    label: "Kanban Autopilot",
    title: "Schedule goals, not micromanagement",
    description:
      "Drop tasks into the board. The Orchestrator picks them up, assigns priority, delegates to the right agent, and reports back when done.",
    visual: (
      <div className="bento-visual-node-graph">
        <div className="bento-visual-node-graph__tier">
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node bento-visual-node-graph__node--primary" />
          <div className="bento-visual-node-graph__node" />
        </div>
        <div className="bento-visual-node-graph__connector" />
        <div className="bento-visual-node-graph__tier">
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node" />
          <div className="bento-visual-node-graph__node bento-visual-node-graph__node--primary" />
          <div className="bento-visual-node-graph__node" />
        </div>
      </div>
    ),
  },
  {
    label: "Audit Trail",
    title: "Full decision transparency",
    description:
      "Every directive, result, signal, and memory update is logged with reasoning. Enterprise-grade accountability for every action taken.",
    visual: (
      <div className="bento-visual-flow">
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Action</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Reason</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Log</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Action</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Reason</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Log</div>
        </div>
        <div className="bento-visual-flow__row">
          <div className="bento-visual-flow__dot" />
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Action</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Reason</div>
          <div className="bento-visual-flow__line" />
          <div className="bento-visual-flow__box">Log</div>
        </div>
      </div>
    ),
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

/* ─────────────────────────────────────────────
   Section 1: ROI — "A new standard for IT operations"
   ───────────────────────────────────────────── */

const metrics = [
  {
    stat: "55",
    unit: "x",
    label: "Efficiency",
    title: "Output vs. Manual Teams",
    description:
      "AI employees operate 24/7 with no downtime — delivering weeks of human output in hours.",
  },
  {
    stat: "90",
    unit: "%",
    label: "Reduction",
    title: "Operational Headcount Cost",
    description:
      "Replace full departments of repetitive work with autonomous agents at a fraction of the cost.",
  },
  {
    stat: "24",
    unit: "/7",
    label: "Always On",
    title: "Continuous Execution",
    description:
      "No shifts, no sick days, no context switching. Agents run around the clock and compound results daily.",
  },
];

export function BelowMarqueeSections() {
  return (
    <div style={{ background: "#141414" }}>
      {/* ─── ROI SECTION ─── */}
      <section
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          {/* Section label + heading */}
          <motion.div {...fadeUp} className="w-full text-center">
            <span
              className="mb-4 inline-flex items-center rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
              style={{
                background: "rgba(212, 208, 201, 0.1)",
                color: "rgba(212, 208, 201, 0.6)",
              }}
            >
              ROI
            </span>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              Replace headcount,
              <br className="hidden sm:block" /> not&nbsp;capability
            </h2>
          </motion.div>

          {/* Metric cards row */}
          <div className="grid w-full max-w-5xl gap-3 md:grid-cols-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="flex flex-col gap-4 overflow-hidden rounded-lg p-6"
                style={{
                  border: "1px solid rgba(212, 208, 201, 0.04)",
                  background:
                    "linear-gradient(180deg, rgba(212,208,201,0) 0%, rgba(212,208,201,0.04) 100%)",
                }}
              >
                {/* Big stat */}
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-[58px] font-light leading-none tracking-[-0.04em]"
                    style={{ color: "rgb(212, 208, 201)" }}
                  >
                    {m.stat}
                  </span>
                  <span
                    className="text-[28px] font-light"
                    style={{ color: "rgb(212, 208, 201)" }}
                  >
                    {m.unit}
                  </span>
                </div>
                {/* Label */}
                <p
                  className="text-xs uppercase tracking-[0.08em]"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {m.label}
                </p>
                {/* Title */}
                <h3
                  className="text-lg font-medium leading-tight"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {m.title}
                </h3>
                {/* Description */}
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Big outcome card */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className="w-full max-w-5xl overflow-hidden rounded-lg"
            style={{
              border: "1px solid rgba(212, 208, 201, 0.04)",
              background:
                "linear-gradient(180deg, rgba(212,208,201,0) 0%, rgba(212,208,201,0.04) 100%)",
            }}
          >
            <div className="grid gap-6 p-6 lg:grid-cols-2 lg:items-center lg:gap-8 lg:p-8">
              <div className="flex flex-col gap-4">
                <p
                  className="text-[10px] uppercase tracking-[0.08em]"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  Outcome-Driven
                </p>
                <h3
                  className="text-xl font-medium leading-tight lg:text-2xl"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  One goal in. Full execution out.
                </h3>
                <p
                  className="max-w-md text-xs leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  Set a moonshot target — TeraBits decomposes it into tasks,
                  delegates across domain agents, and delivers results while
                  you sleep. Human oversight only when it matters.
                </p>
              </div>
              <div
                className="relative aspect-[16/9] w-full overflow-hidden rounded-md"
                style={{ background: "rgba(212, 208, 201, 0.02)" }}
              >
                <div className="flex h-full flex-col justify-center gap-2.5 p-5">
                  {["Human team (5 ppl)", "Freelancers", "TeraBits fleet", "Outsourced agency"].map(
                    (name, i) => (
                      <div key={name} className="flex items-center gap-3">
                        <div
                          className="h-5 w-5 rounded-full"
                          style={{
                            background:
                              name === "TeraBits fleet"
                                ? "rgba(212, 208, 201, 0.3)"
                                : "rgba(212, 208, 201, 0.1)",
                          }}
                        />
                        <span
                          className="text-[11px]"
                          style={{
                            color:
                              name === "TeraBits fleet"
                                ? "rgb(212, 208, 201)"
                                : "rgba(212, 208, 201, 0.5)",
                          }}
                        >
                          {name}
                        </span>
                        <div className="flex-1">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width:
                                name === "TeraBits fleet"
                                  ? "95%"
                                  : `${30 + i * 12}%`,
                              background:
                                name === "TeraBits fleet"
                                  ? "rgb(212, 208, 201)"
                                  : "rgba(212, 208, 201, 0.15)",
                            }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS SECTION ─── */}
      <section
        id="platform"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          {/* Header */}
          <motion.div {...fadeUp} className="mx-auto w-full max-w-[84rem] px-3">
            <span
              className="mb-4 inline-flex items-center rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
              style={{
                background: "rgba(212, 208, 201, 0.1)",
                color: "rgba(212, 208, 201, 0.6)",
              }}
            >
              How it works
            </span>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              One orchestrator. Zero micromanagement.
            </h2>
            <p
              className="mt-4 max-w-2xl text-[15px] leading-relaxed"
              style={{ color: "rgba(212, 208, 201, 0.5)" }}
            >
              Set a goal — the system decomposes, delegates, executes, and
              learns. You only step in when it matters.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="w-full">
            <MagicBento
              cards={howItWorksCards}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="212, 208, 201"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURES SECTION — POWERED BY AI WORKER OS ─── */}
      <section
        id="features"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          {/* Header */}
          <motion.div {...fadeUp} className="mx-auto w-full max-w-[84rem] px-3">
            <span
              className="mb-4 inline-flex items-center rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
              style={{
                background: "rgba(212, 208, 201, 0.1)",
                color: "rgba(212, 208, 201, 0.6)",
              }}
            >
              Features
            </span>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              Powered by AI&nbsp;Worker&nbsp;OS
            </h2>
            <p
              className="mt-4 max-w-2xl text-[15px] leading-relaxed"
              style={{ color: "rgba(212, 208, 201, 0.5)" }}
            >
              The infrastructure layer for autonomous AI employees —
              computer-use, persistent memory, self-improvement, and
              enterprise-grade audit. Built to run a company.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }} className="w-full">
            <MagicBento
              cards={featuresCards}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={false}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="212, 208, 201"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CTA / BOOK A CALL SECTION ─── */}
      <section
        id="book-a-call"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-10">
          <motion.div {...fadeUp} className="flex flex-col items-center gap-4 text-center">
            <h2
              className="text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              Hire your first AI&nbsp;employee.
            </h2>
            <p
              className="text-base"
              style={{ color: "rgba(212, 208, 201, 0.6)" }}
            >
              Book a discovery call — we&apos;ll show you how TeraBits fits your team.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="w-full max-w-4xl overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(212, 208, 201, 0.06)",
              minHeight: "600px",
            }}
          >
            <CalEmbed />
          </motion.div>
        </div>
      </section>

      {/* ─── BRANDED HERO-STYLE FOOTER ─── */}
      <footer
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "0",
          background: "#141414",
        }}
      >
        <div className="w-full">
          <div className="relative h-screen w-full overflow-hidden border border-white/10">
            <img
              src="/PRndqcwxCbSbjj29BueQrof6Qw.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            {/* Bottom links */}
            <div className="absolute inset-x-0 bottom-5 z-20 px-4 sm:px-8">
              <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 rounded-xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-sm">
                {["Platform", "Use Cases", "Integrations", "Company", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-xs transition-colors hover:text-white"
                      style={{ color: "rgba(255, 255, 255, 0.72)" }}
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Big branding */}
            <div className="relative z-10 flex h-full items-end px-4 pb-20 sm:px-8 sm:pb-24">
              <motion.div {...fadeUp} className="flex items-center gap-2 sm:gap-4">
                <img
                  src="/Vector.svg"
                  alt="TeraBits logo"
                  className="h-[clamp(3.5rem,14vw,12rem)] w-auto"
                />
                <h2 className="font-medium leading-[0.86] tracking-[-0.04em] text-white text-[clamp(4rem,17vw,15rem)]">
                  TeraBits
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="px-3 py-2 sm:px-4">
            <p className="text-xs" style={{ color: "rgba(212, 208, 201, 0.32)" }}>
              &copy; 2026 TeraBits. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
