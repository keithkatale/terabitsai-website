"use client";

import { landingCopy } from "@/content/landingCopy";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { nav, hero } = landingCopy;

export function PrismaHero() {
  return (
    <section className="min-h-dvh w-full bg-black px-1 py-1 sm:px-2 sm:py-2">
      <div className="mx-auto h-[calc(100dvh-8px)] max-w-[99vw] sm:h-[calc(100dvh-16px)]">
        <div className="relative h-full min-h-0 overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/PRndqcwxCbSbjj29BueQrof6Qw.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Scrim layers — slightly stronger to keep text legible */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/65" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/55 to-transparent" />

          {/* Floating glassy nav */}
          <nav className="absolute left-1/2 top-4 z-30 w-[min(96%,1100px)] -translate-x-1/2 px-3 sm:top-5">
            <div className="tb-dock flex items-center justify-between rounded-full px-4 py-2 sm:px-5 sm:py-2.5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 text-white"
              >
                <img
                  src="/Vector.svg"
                  alt="TeraBits logo"
                  className="h-6 w-auto sm:h-7"
                />
                <span className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                  TeraBits
                </span>
              </motion.div>

              <div className="hidden items-center gap-1 md:flex">
                {nav.links.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="rounded-full px-3 py-1.5 text-xs font-medium text-white/65 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href={nav.cta.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="tb-btn-primary !py-1.5 !px-3.5 !text-xs sm:!text-[13px]"
              >
                {nav.cta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </nav>

          {/* Hero content — centered in full viewport below nav */}
          <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-4 pb-10 pt-28 text-center sm:pb-12 sm:pt-32">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tb-chip tb-chip-accent mb-5"
            >
              <span className="tb-pulse-dot" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium leading-[1.02] tracking-[-0.035em] text-white"
              style={{
                fontSize: "clamp(2rem, 5.2vw, 4.5rem)",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.06), 0 16px 40px rgba(0,0,0,0.55)",
              }}
            >
              {hero.title.line1}{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 50px rgba(225,224,204,0.3)" }}
              >
                {hero.title.accent}
              </span>{" "}
              <span className="text-white/55">{hero.title.dim}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[520px] text-[14px] leading-relaxed text-white/75 sm:text-[15px]"
              style={{ textShadow: "0 1px 14px rgba(0,0,0,0.7)" }}
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
            >
              <a
                href={hero.actions.primary.href}
                className="tb-btn-primary tb-heartbeat group !py-2.5 !px-5 !text-[13px] sm:!text-sm"
              >
                {hero.actions.primary.label}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={hero.actions.secondary.href}
                className="tb-btn-outline !py-2.5 !px-5 !text-[13px] sm:!text-sm"
              >
                {hero.actions.secondary.label}
                <span className="text-primary">↓</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 flex items-center overflow-hidden rounded-full border border-white/10 bg-black/35 px-1 py-0.5 backdrop-blur-md"
            >
              {hero.proof.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="mx-0.5 hidden h-5 w-px bg-white/12 sm:block"
                      aria-hidden
                    />
                  )}
                  <div className="flex flex-col items-center px-2.5 py-1 sm:px-3.5">
                    <span className="text-[13px] font-semibold tracking-[-0.02em] text-white sm:text-sm">
                      {stat.value}
                    </span>
                    <span className="mt-px max-w-[88px] text-center text-[7px] font-medium uppercase leading-tight tracking-[0.08em] text-white/45 sm:max-w-none sm:text-[8px]">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
