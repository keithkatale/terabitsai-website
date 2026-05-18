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
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const labelStyle = {
  background: "rgba(212, 208, 201, 0.1)",
  color: "rgba(212, 208, 201, 0.6)",
};

const cardBorder = "1px solid rgba(212, 208, 201, 0.04)";
const cardBg =
  "linear-gradient(180deg, rgba(212,208,201,0) 0%, rgba(212,208,201,0.04) 100%)";

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

function SectionLabel({ children }: { children: string }) {
  return (
    <span
      className="mb-4 inline-flex items-center rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.08em]"
      style={labelStyle}
    >
      {children}
    </span>
  );
}

export function BelowMarqueeSections() {
  return (
    <div style={{ background: "#141414" }}>
      {/* Problem */}
      <section
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          <motion.div {...fadeUp} className="w-full max-w-3xl">
            <SectionLabel>{problem.label}</SectionLabel>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em] whitespace-pre-line"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {problem.title}
            </h2>
            <p
              className="mt-4 max-w-xl text-[15px] leading-relaxed"
              style={{ color: "rgba(212, 208, 201, 0.6)" }}
            >
              {problem.sub}
            </p>
          </motion.div>

          <div className="grid w-full max-w-5xl gap-3 sm:grid-cols-2">
            {problem.items.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="rounded-lg p-6"
                style={{ border: cardBorder, background: cardBg }}
              >
                <div className="mb-4 text-xl">{item.icon}</div>
                <h3
                  className="mb-2 text-base font-medium"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What TeraBits is */}
      <section
        id="platform"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto grid max-w-[1392px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div {...fadeUp}>
            <SectionLabel>{what.label}</SectionLabel>
            <h2
              className="mt-4 text-[clamp(1.5rem,3vw,2.4rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {what.title}
            </h2>
            {what.paragraphs.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-4 text-[15px] leading-relaxed"
                style={{ color: "rgba(212, 208, 201, 0.6)" }}
              >
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="rounded-xl p-6"
            style={{ border: cardBorder, background: cardBg }}
          >
            {what.chat.map((bubble) => (
              <div
                key={bubble.label}
                className="mb-3 rounded-lg border px-4 py-3 last:mb-0"
                style={{
                  marginLeft: bubble.role === "user" ? "2rem" : 0,
                  marginRight: bubble.role === "agent" ? "2rem" : 0,
                  borderColor:
                    bubble.role === "user"
                      ? "rgba(212, 208, 201, 0.12)"
                      : "rgba(212, 208, 201, 0.08)",
                  background:
                    bubble.role === "user"
                      ? "rgba(212, 208, 201, 0.06)"
                      : "rgba(212, 208, 201, 0.03)",
                }}
              >
                <p
                  className="mb-1 text-[10px] uppercase tracking-[0.08em]"
                  style={{ color: "rgba(212, 208, 201, 0.5)" }}
                >
                  {bubble.label}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {bubble.message}
                </p>
              </div>
            ))}
            <span
              className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
              style={{
                borderColor: "rgba(212, 208, 201, 0.15)",
                color: "rgb(212, 208, 201)",
                background: "rgba(212, 208, 201, 0.06)",
              }}
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              {what.status}
            </span>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          <motion.div {...fadeUp} className="w-full">
            <SectionLabel>{how.label}</SectionLabel>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em] whitespace-pre-line"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {how.title}
            </h2>
          </motion.div>

          <div className="grid w-full gap-3 lg:grid-cols-3">
            {how.steps.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-lg p-8"
                style={{ border: cardBorder, background: cardBg }}
              >
                <span
                  className="pointer-events-none absolute right-6 top-4 text-6xl font-bold leading-none"
                  style={{ color: "rgba(255,255,255,0.04)" }}
                  aria-hidden
                >
                  {step.num}
                </span>
                <div className="mb-4 text-2xl">{step.icon}</div>
                <h3
                  className="mb-3 text-lg font-medium"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {step.body}
                </p>
                <ul
                  className="mt-5 space-y-2 border-t pt-5"
                  style={{ borderColor: "rgba(212, 208, 201, 0.06)" }}
                >
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-[13px]"
                      style={{ color: "rgba(212, 208, 201, 0.55)" }}
                    >
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                        style={{ background: "rgb(212, 208, 201)" }}
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-14">
          <motion.div {...fadeUp} className="w-full text-center">
            <SectionLabel>{pricing.label}</SectionLabel>
            <h2
              className="mt-4 text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em] whitespace-pre-line"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {pricing.title}
            </h2>
          </motion.div>

          <div className="grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {pricing.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative flex flex-col rounded-xl p-8"
                style={{
                  border: tier.featured
                    ? "1px solid rgba(212, 208, 201, 0.25)"
                    : cardBorder,
                  background: tier.featured
                    ? "linear-gradient(180deg, rgba(212,208,201,0.04) 0%, rgba(212,208,201,0.08) 100%)"
                    : cardBg,
                }}
              >
                {"badge" in tier && tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black">
                    {tier.badge}
                  </span>
                )}
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: "rgba(212, 208, 201, 0.55)" }}
                >
                  {tier.tier}
                </p>
                <h3
                  className="mt-2 text-xl font-medium"
                  style={{ color: "rgb(212, 208, 201)" }}
                >
                  {tier.name}
                </h3>
                <p
                  className="mt-2 flex-1 text-xs leading-relaxed"
                  style={{ color: "rgba(212, 208, 201, 0.6)" }}
                >
                  {tier.desc}
                </p>
                <div className="my-6">
                  <span
                    className="text-3xl font-medium tracking-[-0.02em]"
                    style={{ color: "rgb(212, 208, 201)" }}
                  >
                    {tier.amount}
                  </span>
                  {tier.period && (
                    <span
                      className="text-sm"
                      style={{ color: "rgba(212, 208, 201, 0.5)" }}
                    >
                      {tier.period}
                    </span>
                  )}
                  <p
                    className="mt-1 text-xs"
                    style={{ color: "rgba(212, 208, 201, 0.5)" }}
                  >
                    {tier.setup}
                  </p>
                </div>
                <ul
                  className="mb-6 space-y-2 border-t pt-5"
                  style={{ borderColor: "rgba(212, 208, 201, 0.06)" }}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-xs leading-relaxed"
                      style={{ color: "rgba(212, 208, 201, 0.6)" }}
                    >
                      <span style={{ color: "rgb(212, 208, 201)" }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#book-a-call"
                  className={`block rounded-lg py-3 text-center text-sm font-medium transition-opacity hover:opacity-90 ${
                    tier.featured
                      ? "bg-primary text-black"
                      : "border text-[rgb(212,208,201)]"
                  }`}
                  style={
                    tier.featured
                      ? undefined
                      : { borderColor: "rgba(212, 208, 201, 0.12)" }
                  }
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "0 24px 112px",
        }}
      >
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl rounded-2xl px-8 py-16 text-center md:px-16"
          style={{ border: cardBorder, background: cardBg }}
        >
          <SectionLabel>{why.label}</SectionLabel>
          <h2
            className="mx-auto mt-6 max-w-2xl text-[clamp(1.5rem,3vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.02em]"
            style={{ color: "rgb(212, 208, 201)" }}
          >
            {why.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed"
            style={{ color: "rgba(212, 208, 201, 0.6)" }}
          >
            {why.body}
          </p>
          <a
            href={why.cta.href}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            {why.cta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* Book a call */}
      <section
        id="book-a-call"
        style={{
          borderTop: "1px solid rgba(212, 208, 201, 0.08)",
          padding: "112px 24px",
        }}
      >
        <div className="mx-auto flex max-w-[1392px] flex-col items-center gap-10">
          <motion.div {...fadeUp} className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2
              className="text-[clamp(1.7rem,3.4vw,2.7rem)] font-medium leading-[1.1] tracking-[-0.02em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {cta.title}{" "}
              <span className="text-primary">{cta.titleAccent}</span>
            </h2>
            <p className="text-base" style={{ color: "rgba(212, 208, 201, 0.6)" }}>
              {cta.sub}
            </p>
            <p className="text-xs" style={{ color: "rgba(212, 208, 201, 0.45)" }}>
              {cta.note}
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

      {/* Footer */}
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

            <div className="absolute inset-x-0 bottom-5 z-20 px-4 sm:px-8">
              <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 rounded-xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-sm">
                {footer.links.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-xs transition-colors hover:text-white"
                    style={{ color: "rgba(255, 255, 255, 0.72)" }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex h-full items-end px-4 pb-20 sm:px-8 sm:pb-24">
              <motion.div {...fadeUp} className="flex items-center gap-2 sm:gap-4">
                <img
                  src="/Vector.svg"
                  alt="TeraBits logo"
                  className="h-[clamp(3.5rem,14vw,12rem)] w-auto"
                />
                <h2 className="text-[clamp(4rem,17vw,15rem)] font-medium leading-[0.86] tracking-[-0.04em] text-white">
                  TeraBits
                </h2>
              </motion.div>
            </div>
          </div>

          <div className="px-3 py-2 sm:px-4">
            <p className="text-xs" style={{ color: "rgba(212, 208, 201, 0.32)" }}>
              {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
