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
    <section className="border-y border-white/[0.04] bg-[#0a0a0a] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          Connect the software you already use — no rip &amp; replace.
        </p>
        <div className="logo-marquee-mask overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-3">
            {tickerItems.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="tb-card flex items-center gap-2.5 px-4 py-2.5"
                style={{ borderRadius: 12 }}
              >
                <span className="tb-icon-tile !h-7 !w-7 !rounded-md">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-4 w-4 object-contain opacity-90"
                  />
                </span>
                <span className="text-[12px] font-medium tracking-[-0.01em] text-white/75">
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
