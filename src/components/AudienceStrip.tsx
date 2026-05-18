"use client";

import { landingCopy } from "@/content/landingCopy";
import { ArrowRight } from "lucide-react";

export function AudienceStrip() {
  const { cards } = landingCopy.audience;

  return (
    <section className="border-y border-[#D4D0C9]/[0.06] bg-[#0a0a0a]">
      <div className="grid md:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.headline}
            className="flex flex-col border-[#D4D0C9]/[0.06] p-8 transition-colors hover:bg-white/[0.02] md:p-10"
            style={{
              borderRight:
                index < cards.length - 1
                  ? "1px solid rgba(212, 208, 201, 0.06)"
                  : undefined,
              borderBottom: "1px solid rgba(212, 208, 201, 0.06)",
            }}
          >
            <span
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.08em]"
              style={{ color: card.tagColor }}
            >
              {card.tag}
            </span>
            <h3
              className="mb-3 text-lg font-medium leading-snug tracking-[-0.01em]"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {card.headline}
            </h3>
            <p
              className="flex-1 text-sm leading-relaxed"
              style={{ color: "rgba(212, 208, 201, 0.6)" }}
            >
              {card.body}
            </p>
            <a
              href="#book-a-call"
              className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium transition-[gap] hover:gap-2"
              style={{ color: "rgb(212, 208, 201)" }}
            >
              {card.cta}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
