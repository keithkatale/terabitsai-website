"use client";

import { landingCopy } from "@/content/landingCopy";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const { nav, hero } = landingCopy;

export function PrismaHero() {
  return (
    <section className="min-h-screen w-full bg-black px-1 py-1 sm:px-2 sm:py-2">
      <div className="mx-auto max-w-[99vw]">
        <div className="relative min-h-[98vh] overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/PRndqcwxCbSbjj29BueQrof6Qw.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* Floating glassy nav (keithkatale dock + topbar pattern) */}
          <nav className="absolute left-1/2 top-4 z-30 w-[min(96%,1100px)] -translate-x-1/2 px-3">
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
                className="tb-btn-primary !py-2 !px-4 !text-xs sm:!text-sm"
              >
                {nav.cta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </nav>

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[98vh] flex-col items-center justify-center px-4 pb-24 text-center sm:pb-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="tb-chip tb-chip-accent mb-7"
            >
              <span className="tb-pulse-dot" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.05), 0 30px 60px rgba(0,0,0,0.5)",
              }}
            >
              {hero.title.line1}
              <br />
              <span
                className="text-primary"
                style={{ textShadow: "0 0 60px rgba(225,224,204,0.25)" }}
              >
                {hero.title.accent}
              </span>
              <br />
              <span className="text-white/45">{hero.title.dim}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={hero.actions.primary.href}
                className="tb-btn-primary tb-heartbeat !text-sm sm:!text-base"
              >
                {hero.actions.primary.label}
                <span className="grid h-7 w-7 place-items-center rounded-full bg-black sm:h-8 sm:w-8">
                  <ArrowRight className="h-3.5 w-3.5 text-primary" />
                </span>
              </a>
              <a
                href={hero.actions.secondary.href}
                className="tb-btn-outline !text-sm sm:!text-base"
              >
                {hero.actions.secondary.label}
                <span className="text-primary">↓</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="tb-card mt-14 flex flex-wrap items-stretch justify-center gap-0 overflow-hidden rounded-2xl px-2 py-2 sm:gap-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,20,20,0.65), rgba(10,10,10,0.55))",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              {hero.proof.map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  {i > 0 && (
                    <div className="hidden h-10 w-px bg-white/10 sm:block" aria-hidden />
                  )}
                  <div className="flex flex-col items-center px-5 py-2 sm:px-7">
                    <span className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-[26px]">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-white/55 sm:text-[11px]">
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
