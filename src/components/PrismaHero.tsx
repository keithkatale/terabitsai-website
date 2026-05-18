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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <nav className="absolute left-0 right-0 top-0 z-20 px-3 py-2 sm:px-5 sm:py-3">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2.5 text-white"
              >
                <img
                  src="/Vector.svg"
                  alt="TeraBits logo"
                  className="h-7 w-auto sm:h-8"
                />
                <span className="text-2xl font-semibold tracking-[-0.02em]">
                  TeraBits
                </span>
              </motion.div>

              <div className="hidden items-center gap-6 md:flex">
                {nav.links.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="text-xs text-white/75 transition-colors hover:text-white"
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
                className="rounded-md bg-primary px-4 py-2 text-xs font-medium text-black transition-opacity hover:opacity-90"
              >
                {nav.cta.label}
              </motion.a>
            </div>
          </nav>

          <div className="relative z-10 flex min-h-[98vh] flex-col items-center justify-center px-4 pb-24 text-center sm:pb-28">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {hero.eyebrow}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl font-medium leading-[0.95] tracking-[-0.04em] text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {hero.title.line1}
              <br />
              <span className="text-primary">{hero.title.accent}</span>
              <br />
              <span className="text-white/50">{hero.title.dim}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base text-white/70 sm:text-lg"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href={hero.actions.primary.href}
                className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
              >
                {hero.actions.primary.label}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </span>
              </a>
              <a
                href={hero.actions.secondary.href}
                className="text-sm text-white/60 transition-colors hover:text-white sm:text-base"
              >
                {hero.actions.secondary.label} ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            >
              {hero.proof.map((stat, i) => (
                <div key={stat.label} className="contents">
                  {i > 0 && (
                    <div
                      className="hidden h-9 w-px bg-white/15 sm:block"
                      aria-hidden
                    />
                  )}
                  <div className="flex flex-col items-center sm:items-start">
                    <span className="text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-[11px] text-white/50 sm:text-xs">
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
