"use client";

import { landingCopy } from "@/content/landingCopy";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
};

export function AudienceStrip() {
  const { cards } = landingCopy.audience;

  return (
    <section className="border-y border-white/[0.04] bg-[#0a0a0a] py-14">
      <div className="mx-auto grid max-w-[1200px] gap-4 px-4 sm:px-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.article
            key={card.headline}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="tb-card tb-hover-lift group flex flex-col p-7"
          >
            <span
              className="tb-chip mb-4 self-start"
              style={{ color: card.tagColor, borderColor: `${card.tagColor}33` }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: card.tagColor, boxShadow: `0 0 8px ${card.tagColor}aa` }}
              />
              {card.tag}
            </span>

            <h3 className="mb-3 text-lg font-medium leading-snug tracking-[-0.01em] text-[rgb(225,224,204)]">
              {card.headline}
            </h3>

            <p className="mb-5 flex-1 text-sm leading-relaxed text-white/55">
              {card.body}
            </p>

            <a
              href="#book-a-call"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-[gap] hover:gap-2.5"
            >
              {card.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
