"use client";

import { landingCopy } from "@/content/landingCopy";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { problem, what, how, why, pricing, cta, footer } = landingCopy;

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
};

function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;

    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
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
            const api: any = function () {
              p(api, arguments);
            };
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
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "dark",
      },
      calLink: "keithkatale/discoverycall",
    });

    win.Cal.ns.discoverycall("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#e1e0cc" } },
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

function SectionHeader({
  label,
  title,
  sub,
  centered = false,
}: {
  label: string;
  title: string;
  sub?: string;
  centered?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      <span className="tb-chip">{label}</span>
      <h2 className="max-w-3xl whitespace-pre-line text-[clamp(1.85rem,3.6vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[rgb(225,224,204)]">
        {title}
      </h2>
      {sub && (
        <p className="max-w-xl text-[15px] leading-relaxed text-white/55">
          {sub}
        </p>
      )}
    </motion.div>
  );
}

export function BelowMarqueeSections() {
  return (
    <div className="bg-[#0a0a0a]">
      {/* ─── PROBLEM ─── */}
      <section className="tb-section-glow border-t border-white/[0.04] py-24 sm:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 sm:px-6">
          <SectionHeader
            label={problem.label}
            title={problem.title}
            sub={problem.sub}
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {problem.items.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="tb-card tb-hover-lift p-6"
              >
                <span className="tb-icon-tile mb-5 text-xl">{item.icon}</span>
                <h3 className="mb-2 text-base font-medium tracking-[-0.01em] text-[rgb(225,224,204)]">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/55">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TERABITS IS ─── */}
      <section
        id="platform"
        className="border-t border-white/[0.04] py-24 sm:py-28"
      >
        <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div {...fadeUp} className="flex flex-col gap-5">
            <span className="tb-chip self-start">{what.label}</span>
            <h2 className="text-[clamp(1.6rem,3.1vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[rgb(225,224,204)]">
              {what.title}
            </h2>
            {what.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="text-[15px] leading-relaxed text-white/55"
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="tb-card-elevated p-5 sm:p-6"
          >
            {what.chat.map((bubble, i) => {
              const isUser = bubble.role === "user";
              return (
                <motion.div
                  key={bubble.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="tb-card mb-3 px-4 py-3.5 last:mb-0"
                  style={{
                    marginLeft: isUser ? "1.5rem" : 0,
                    marginRight: !isUser ? "1.5rem" : 0,
                    background: isUser
                      ? "linear-gradient(180deg, rgba(91,110,245,0.12), rgba(91,110,245,0.04))"
                      : "linear-gradient(180deg, rgba(225,224,204,0.07), rgba(225,224,204,0.02))",
                    borderColor: isUser
                      ? "rgba(91,110,245,0.18)"
                      : "rgba(225,224,204,0.14)",
                  }}
                >
                  <p
                    className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: isUser ? "#9aa8ff" : "#e1e0cc" }}
                  >
                    {bubble.label}
                  </p>
                  <p className="text-[13.5px] leading-relaxed text-white/85">
                    {bubble.message}
                  </p>
                </motion.div>
              );
            })}
            <div className="tb-chip tb-chip-accent mt-4">
              <span className="tb-pulse-dot" />
              {what.status}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how"
        className="tb-section-glow border-t border-white/[0.04] py-24 sm:py-28"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 sm:px-6">
          <SectionHeader label={how.label} title={how.title} />

          <div className="grid gap-4 lg:grid-cols-3">
            {how.steps.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="tb-card-elevated tb-hover-lift relative flex flex-col p-7"
              >
                <span
                  className="pointer-events-none absolute right-5 top-4 select-none font-bold leading-none text-white/[0.05]"
                  style={{ fontSize: "72px" }}
                  aria-hidden
                >
                  {step.num}
                </span>

                <div className="mb-5 flex items-center gap-3">
                  <span className="tb-icon-tile text-2xl">{step.icon}</span>
                  <span className="tb-step-num">{step.num}</span>
                </div>

                <h3 className="mb-3 text-lg font-medium tracking-[-0.015em] text-[rgb(225,224,204)]">
                  {step.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-white/55">
                  {step.body}
                </p>

                <ul className="space-y-2 border-t border-white/[0.06] pt-5">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/60"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        id="pricing"
        className="tb-section-glow border-t border-white/[0.04] py-24 sm:py-28"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-4 sm:px-6">
          <SectionHeader
            label={pricing.label}
            title={pricing.title}
            centered
          />

          <div className="grid gap-4 md:grid-cols-3">
            {pricing.tiers.map((tier, i) => {
              const featured = tier.featured;
              return (
                <motion.div
                  key={tier.name}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className={`${
                    featured ? "tb-card-featured" : "tb-card-elevated"
                  } tb-hover-lift relative flex flex-col p-8`}
                  style={featured ? { transform: "translateY(-6px)" } : undefined}
                >
                  {"badge" in tier && tier.badge && (
                    <span
                      className="tb-btn-primary absolute -top-3 left-1/2 -translate-x-1/2 !px-4 !py-1.5 !text-[10px]"
                      style={{
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {tier.badge}
                    </span>
                  )}
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {tier.tier}
                  </p>
                  <h3 className="mb-2 text-2xl font-medium tracking-[-0.02em] text-[rgb(225,224,204)]">
                    {tier.name}
                  </h3>
                  <p className="mb-7 flex-1 text-[13px] leading-relaxed text-white/55">
                    {tier.desc}
                  </p>

                  <div className="mb-7 border-y border-white/[0.06] py-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-medium tracking-[-0.03em] text-[rgb(225,224,204)]">
                        {tier.amount}
                      </span>
                      {tier.period && (
                        <span className="text-sm text-white/45">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-xs text-white/45">{tier.setup}</p>
                  </div>

                  <ul className="mb-8 space-y-2.5">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/65"
                      >
                        <span className="mt-0.5 inline-grid h-4 w-4 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#book-a-call"
                    className={featured ? "tb-btn-primary w-full" : "tb-btn-outline w-full"}
                  >
                    {tier.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY NOW ─── */}
      <section className="border-t border-white/[0.04] px-4 py-20 sm:px-6 sm:py-24">
        <motion.div
          {...fadeUp}
          className="tb-card-elevated relative mx-auto max-w-4xl overflow-hidden p-10 text-center sm:p-16"
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(225,224,204,0.08) 0%, transparent 65%)",
            }}
          />
          <span className="tb-chip tb-chip-accent mb-6">{why.label}</span>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.6rem,3.1vw,2.3rem)] font-medium leading-[1.15] tracking-[-0.025em] text-[rgb(225,224,204)]">
            {why.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/55">
            {why.body}
          </p>
          <a href={why.cta.href} className="tb-btn-primary tb-heartbeat mt-8">
            {why.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ─── BOOK A CALL ─── */}
      <section
        id="book-a-call"
        className="border-t border-white/[0.04] py-24 sm:py-28"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          >
            <h2 className="text-[clamp(1.85rem,3.6vw,2.85rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[rgb(225,224,204)]">
              {cta.title}{" "}
              <span className="text-primary">{cta.titleAccent}</span>
            </h2>
            <p className="text-base leading-relaxed text-white/55">
              {cta.sub}
            </p>
            <p className="text-xs text-white/40">{cta.note}</p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="tb-card-elevated mx-auto w-full max-w-4xl overflow-hidden p-1"
            style={{ minHeight: "600px" }}
          >
            <CalEmbed />
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/[0.04] bg-[#0a0a0a]">
        <div className="relative h-[80vh] w-full overflow-hidden">
          <img
            src="/PRndqcwxCbSbjj29BueQrof6Qw.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

          <div className="absolute inset-x-0 bottom-5 z-20 px-4 sm:px-8">
            <div className="tb-dock mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-3.5">
              <p className="text-xs text-white/45">{footer.copyright}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {footer.links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs font-medium text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 flex h-full items-end px-4 pb-28 sm:px-8 sm:pb-32">
            <motion.div
              {...fadeUp}
              className="flex items-center gap-3 sm:gap-5"
            >
              <img
                src="/Vector.svg"
                alt="TeraBits logo"
                className="h-[clamp(3.5rem,12vw,10rem)] w-auto drop-shadow-[0_8px_30px_rgba(225,224,204,0.15)]"
              />
              <h2
                className="text-[clamp(4rem,15vw,13rem)] font-medium leading-[0.86] tracking-[-0.04em] text-white"
                style={{ textShadow: "0 6px 40px rgba(0,0,0,0.7)" }}
              >
                TeraBits
              </h2>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}
