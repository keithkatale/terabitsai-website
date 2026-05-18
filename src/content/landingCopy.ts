export const landingCopy = {
  meta: {
    title: "TeraBits AI — Your AI Operations Assistant",
    description:
      "TeraBits gives you an AI operations assistant that works through your software autonomously — all day, every day. Brief it in the morning. It handles the rest.",
  },

  nav: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Who it's for", href: "#who" },
      { label: "Pricing", href: "#pricing" },
    ],
    cta: { label: "Book a demo", href: "#book-a-call" },
  },

  hero: {
    eyebrow: "AI Operations — Now Live",
    title: {
      line1: "Your business",
      accent: "runs itself.",
      dim: "You lead it.",
    },
    sub: "TeraBits gives you an AI operations assistant that works through your software autonomously — all day, every day. Brief it in the morning. It handles the rest.",
    actions: {
      primary: { label: "Book a demo", href: "#book-a-call" },
      secondary: { label: "See how it works", href: "#how" },
    },
    proof: [
      { value: "24/7", label: "Autonomous execution" },
      { value: "72hrs", label: "From call to live agent" },
      { value: "Any", label: "Software. No API needed." },
    ],
  },

  marquee: {
    label: "Connect the software you already use — no rip & replace.",
  },

  audience: {
    cards: [
      {
        tag: "Already looking",
        tagColor: "#5B6EF5",
        headline: "Ready to automate. Not sure who to trust.",
        body: "You've evaluated the tools. You know what you need. TeraBits is the team that builds it, runs it, and stands behind it — not another SaaS subscription.",
        cta: "Get live in 72 hours",
      },
      {
        tag: "Know you need it",
        tagColor: "#00C98D",
        headline:
          "You know automation is the answer. You just don't know where to start.",
        body: "Tell us your biggest time sink. We'll map your workflow, identify what to automate first, and set it up — no technical knowledge needed on your end.",
        cta: "Start with a free workflow audit",
      },
      {
        tag: "Not yet aware",
        tagColor: "#F0A500",
        headline: "You're doing manually what an AI should handle.",
        body: "Most businesses lose 3–5 hours a day to tasks that are repetitive, predictable, and completely automatable. We'll show you exactly which ones — and what changes when you get that time back.",
        cta: "See what's possible",
      },
    ],
  },

  problem: {
    label: "The problem",
    title: "You didn't start a business\nto spend it in your inbox.",
    sub: "The most expensive thing in your business isn't software. It's smart people doing repetitive work that shouldn't require a smart person.",
    items: [
      {
        icon: "📥",
        title: "Following up on leads — manually",
        desc: "Every lead that doesn't get a follow-up within 24 hours is a lead that goes cold. Your best opportunities are leaving through the cracks.",
      },
      {
        icon: "📊",
        title: "Updating records and spreadsheets",
        desc: "Someone on your team is spending hours each week moving data from one place to another. That's not a job. That's a workflow waiting to be automated.",
      },
      {
        icon: "📋",
        title: "Compiling reports by hand",
        desc: "Pulling numbers from three tools, formatting a doc, and sending it every Friday. The information exists. The assembly is just friction.",
      },
      {
        icon: "🔁",
        title: "Repeating the same onboarding steps",
        desc: "Every new client or employee gets the same 12-step process. It's documented. It's predictable. It should run itself.",
      },
      {
        icon: "🌐",
        title: "Monitoring portals and dashboards",
        desc: "Someone has to check the supplier portal, the delivery status, the ad performance. It's not hard — it's just time, every single day.",
      },
      {
        icon: "📅",
        title: "Scheduling, booking, and coordinating",
        desc: "Back-and-forth emails to find a meeting time. Manually booking travel. Sending calendar invites. The calendar shouldn't need a human to manage it.",
      },
    ],
  },

  what: {
    label: "What TeraBits is",
    title: "Think of it as a virtual employee — without the overhead.",
    paragraphs: [
      "TeraBits connects to the software you already use. You give it tasks in plain language — through WhatsApp, a web chat, or a task board. It works through them autonomously on a cloud computer. When it's done, it reports back.",
      "No new tools to learn. No technical setup on your side. No managing a person. Just tell it what you need done — and it does it.",
    ],
    chat: [
      {
        role: "user" as const,
        label: "You — 8:14 AM",
        message:
          "Follow up with all leads from yesterday, update the CRM, and send me a summary of responses by 5pm.",
      },
      {
        role: "agent" as const,
        label: "TeraBits Agent",
        message:
          "On it. I'll work through yesterday's 14 leads, update the pipeline in HubSpot, and have your summary ready by 5pm. I'll flag any hot responses immediately.",
      },
      {
        role: "agent" as const,
        label: "TeraBits Agent — 4:47 PM",
        message:
          "Done. 14 leads contacted, 6 replies received — 2 marked hot (David, Clara). CRM updated. Summary in your inbox now.",
      },
    ],
    status: "Agent active — 3 tasks running",
  },

  how: {
    label: "How it works",
    title: "Three steps.\nThen it runs itself.",
    steps: [
      {
        num: "01",
        icon: "🔗",
        title: "Connect your tools",
        body: "We map your workflow and connect the agent to the software you already use — your CRM, email, browser, spreadsheets, portals. No switching tools. No ripping and replacing.",
        details: [
          "CRM (HubSpot, Salesforce, Zoho)",
          "Email, calendar, WhatsApp",
          "Any browser-based software",
          "Spreadsheets, docs, portals",
        ],
      },
      {
        num: "02",
        icon: "💬",
        title: "Brief it in plain language",
        body: "Talk to your agent on WhatsApp, a web dashboard, or a task board — whatever fits your workflow. No command syntax. No technical prompting. Just tell it what you need, the way you'd tell a team member.",
        details: [
          '"Follow up with yesterday\'s leads"',
          '"Compile this week\'s report"',
          '"Book travel for next Thursday"',
          '"Update inventory from today\'s orders"',
        ],
      },
      {
        num: "03",
        icon: "⚡",
        title: "It works. You lead.",
        body: "The agent runs on a cloud computer, operating your software exactly as a person would — clicking, typing, navigating, extracting. It runs while you're in meetings, with clients, or asleep. Reports back when done.",
        details: [
          "24/7 autonomous execution",
          "Real-time status updates",
          "Escalates when it needs you",
          "Full audit log of every action",
        ],
      },
    ],
  },

  personas: {
    label: "Who it's for",
    title: "Built for people who\nrun things.",
    cards: [
      {
        letter: "S",
        role: "Solo operator / Consultant",
        name: "The one-person powerhouse",
        desc: "You do the work of three people. Admin, follow-up, reporting, and client delivery — all on you. TeraBits handles the operational layer so you can stay in your zone of genius.",
        tasks: [
          "Send personalised outreach while you're with a client",
          "Log calls and update the CRM automatically",
          "Compile proposals, reports, and invoices on command",
        ],
      },
      {
        letter: "B",
        role: "SMB Owner / Founder",
        name: "The business that's growing fast",
        desc: "Your team is stretched. Hiring takes time. Scaling operations manually doesn't. TeraBits lets you expand output without expanding headcount.",
        tasks: [
          "Handle customer enquiries across WhatsApp and email",
          "Reconcile inventory and flag low-stock automatically",
          "Keep financial records updated without a full-time bookkeeper",
        ],
      },
      {
        letter: "A",
        role: "Agency / Creative Studio",
        name: "The team that should be creating",
        desc: "Your team's value is in strategy, creativity, and delivery. Not in pulling reports, updating trackers, or chasing approvals. Let the agent run the operations. Your team runs the work.",
        tasks: [
          "Pull performance data and build client reports automatically",
          "Schedule and publish content across platforms",
          "Track project status and surface blockers in real time",
        ],
      },
      {
        letter: "E",
        role: "Executive / Ops Manager",
        name: "The leader who needs leverage",
        desc: "You have visibility across the whole business — and that means you're constantly context-switching. TeraBits surfaces what matters, handles what's routine, and frees you to think at the level you're paid to think.",
        tasks: [
          "Aggregate team updates and KPIs into one daily brief",
          "Monitor supplier portals, dashboards, and delivery statuses",
          "Manage calendar, travel, and scheduling end-to-end",
        ],
      },
    ],
  },

  why: {
    label: "Why this matters now",
    title:
      "The gap between businesses that scale and those that plateau is operational — not strategic.",
    body: "The leaders who win the next decade are the ones who stopped doing manually what machines can do. The opportunity isn't in having a better idea. It's in having a faster, leaner machine to execute it. TeraBits is that machine.",
    cta: { label: "Let's build yours", href: "#book-a-call" },
  },

  pricing: {
    label: "Pricing",
    title: "Less than a part-time hire.\nMore capable than a full team.",
    tiers: [
      {
        tier: "Starter",
        name: "Solo Agent",
        desc: "One agent, your most important workflow. The fastest path from idea to execution.",
        amount: "$200",
        period: "/ mo",
        setup: "+ $400 one-time setup",
        features: [
          "1 interface (WhatsApp or web dashboard)",
          "Up to 3 tool integrations",
          "Standard task library (up to 10 task types)",
          "Daily activity report",
          "Email support",
        ],
        cta: "Get started",
        featured: false,
      },
      {
        tier: "Business",
        name: "Full Ops Agent",
        desc: "A complete AI operations layer for your business — built around how you actually work.",
        amount: "$450",
        period: "/ mo",
        setup: "+ $800 one-time setup",
        badge: "Most popular",
        features: [
          "Multiple interfaces (WhatsApp + web + task board)",
          "Up to 8 tool integrations",
          "Custom task library — built from your workflow",
          "Real-time task status and escalations",
          "Priority support + monthly review call",
        ],
        cta: "Book a demo",
        featured: true,
      },
      {
        tier: "Enterprise",
        name: "Agent Fleet",
        desc: "Multiple agents, full orchestration, team-wide deployment. Built for organisations that need to move at scale.",
        amount: "Custom",
        period: "",
        setup: "Starting from $1,500 / mo",
        features: [
          "Unlimited agents and integrations",
          "Orchestrator layer — agents coordinate with each other",
          "Computer-use across any software",
          "Team-wide deployment and onboarding",
          "Dedicated account manager + SLA",
        ],
        cta: "Talk to us",
        featured: false,
      },
    ],
  },

  cta: {
    title: "The gap between where you are and where you want to be is operational.",
    titleAccent: "Let's close it.",
    sub: "Book a 30-minute discovery call. We'll map your biggest operational bottleneck and show you what an agent would do with it — for free, no commitment.",
    note: "No sales pitch. Just 30 minutes and a clear plan.",
  },

  footer: {
    links: [
      { label: "How it works", href: "#how" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#book-a-call" },
    ],
    copyright: "© 2026 TeraBits. All rights reserved.",
  },
} as const;
