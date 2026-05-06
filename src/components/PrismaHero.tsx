"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ---------------- Navbar ---------------- */
const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Platform", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Book a Call", href: "#book-a-call" },
];

/* ---------------- Hero ---------------- */
export function PrismaHero() {
  return (
    <section className="min-h-screen w-full bg-black px-1 py-1 sm:px-2 sm:py-2">
      <div className="mx-auto max-w-[99vw]">
        {/* Embedded desktop viewport */}
        <div className="relative min-h-[98vh] overflow-hidden rounded-2xl border border-white/10">
          <img
            src="/PRndqcwxCbSbjj29BueQrof6Qw.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          {/* Minimal top nav (on top of wallpaper) */}
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
                {navItems.map((item, i) => (
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
                href="#book-a-call"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs font-medium text-white/75 transition-colors hover:text-white"
              >
                Book a Call
              </motion.a>
            </div>
          </nav>

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[98vh] flex-col items-center justify-center px-4 pb-24 text-center sm:pb-28">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl font-medium leading-[0.9] tracking-[-0.04em] text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Fully Autonomous
              <br />
              AI Employees.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base text-white/70 sm:text-lg"
            >
              TeraBits handles the repetitive work your team shouldn&apos;t —
              <br className="hidden sm:block" />
              to make your department 55x faster within weeks.
            </motion.p>

            <motion.a
              href="#book-a-call"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
            >
              Book a Call
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
