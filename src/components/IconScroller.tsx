"use client";

const integrations = [
  { name: "Google Docs", icon: "/icons/docs.svg" },
  { name: "Dropbox", icon: "/icons/dropbox.png" },
  { name: "Brex", icon: "/icons/brex.png" },
  { name: "Zoom", icon: "/icons/zoom.png" },
  { name: "Notion", icon: "/icons/notion.png" },
  { name: "HubSpot", icon: "/icons/hubspot.png" },
  { name: "Salesforce", icon: "/icons/salesforce.png" },
  { name: "Jira", icon: "/icons/jira.png" },
  { name: "Monday", icon: "/icons/monday.png" },
];

const tickerItems = [...integrations, ...integrations];

export function IconScroller() {
  return (
    <section className="border-y border-[#D4D0C9]/[0.06] bg-[#0a0a0a] py-7">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-[#D4D0C9]/40">
          Connect the software you already use — no rip &amp; replace.
        </p>
        <div className="logo-marquee-mask overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-3">
            {tickerItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2 rounded-lg border border-[#D4D0C9]/[0.06] bg-[#D4D0C9]/[0.02] px-3 py-2"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-4 w-4 rounded-[3px] object-contain"
                />
                <span className="whitespace-nowrap text-xs text-[#D4D0C9]/65">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
