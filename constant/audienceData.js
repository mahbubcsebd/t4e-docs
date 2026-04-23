export const audienceDetailsData = {
  independent: {
    id: 'independent',
    overline: 'INDEPENDENT DEVELOPERS',
    title:
      "The fastest path from idea to working system -<br class='hidden md:block' /> without the team, tools or overhead.",
    realityCards: [
      {
        id: 1,
        title: 'Team of one; output of many',
        description:
          "Design, architect, code, test, deploy - all on your shoulders. No team to delegate to, and hiring isn't an option.",
        statHtml:
          "Context switching is the #1 productivity drain, costing developers <span class='text-[#e11d48] font-bold'>5-15 hrs/wk</span>",
      },
      {
        id: 2,
        title: 'Constant toggle between tools',
        description:
          'Docs, architecture, frontend, backend, APIs — all separate tools. More switching, more time, more cost.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>23%</span> of dev time lost to context switching",
      },
      {
        id: 3,
        title: 'Rework kills margins',
        description:
          'As projects grow, dependencies multiply. One change can break three others. Late fixes eat time and profit.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>38%</span> of dev time lost to rework",
      },
    ],
    checklist: [
      {
        title: 'Build Full Systems, Not Just Code',
        desc: 'Generate architecture, frontend, backend, APIs, data models, and deployment flows in one connected workflow.',
      },
      {
        title: 'Eliminate Tool Toggle with One Unified Platform',
        desc: 'Design, code, test, and deploy in one place — faster, simpler, and at lower cost.',
      },
      {
        title: 'Ship Faster with Production-Ready Output',
        desc: 'Move from idea to deployable systems in hours, not weeks of patching tools together.',
      },
    ],
    ctaHref: '/checkout/indie-devs',
    videoLabel: 'See how it works for indie devs',
  },
  saas: {
    id: 'saas',
    overline: 'SOFTWARE AND SAAS FIRMS',
    title:
      "Ship at the speed of your ambition — without<br class='hidden md:block' /> the complicated tech stack slowing you down.",
    realityCards: [
      {
        id: 1,
        title: 'Too many tools slow down the build and add unnecessary cost',
        description:
          'Every sprint touches Figma, GitHub, Cursor, Postman, Vercel and more — each one a context switch, a licence, an integration to maintain — and time not spent shipping.',
        statHtml:
          "The average SaaS company runs <span class='text-[#e11d48] font-bold'>42-112 tools</span> — and over half go unused within <span class='text-[#e11d48] font-bold'>30 days</span>",
      },
      {
        id: 2,
        title: 'Technical debt is the tax on every release',
        description:
          'Fast-moving SaaS teams make architectural tradeoffs to hit sprint goals. Those tradeoffs compound until the codebase slows the roadmap more than the team does.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>42%</span> of engineering time consumed by technical debt and bad code vs new features",
      },
      {
        id: 3,
        title: 'Every release is a regression risk',
        description:
          'As the product scales, a change to one service breaks three others no one mapped. Bugs reach customers before QA catches them and hotfixes become the sprint.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>45%</span> of bugs shipped to production are previously fixed defects — rebroken by the next change",
      },
    ],
    checklist: [
      {
        title: 'A Multi-Agent SDLC Platform',
        desc: 'A platform that designs, builds and deploys production-ready systems — accelerating time to market and decreasing cost.',
      },
      {
        title: 'Ship Features Without Breaking Stability',
        desc: 'Full dependency mapping and QA validation on every change — catch regressions before they reach customers.',
      },
      {
        title: 'Multiply Output Without Multiplying Headcount',
        desc: 'AI agents handle the work that usually requires more engineers — so a lean team ships at the velocity of one twice its size, without the coordination overhead.',
      },
    ],
    videoLabel: 'See how it works for SaaS teams',
    ctaHref: '/contact-us',
  },
  integrators: {
    id: 'integrators',
    overline: 'SYSTEMS INTEGRATORS / CONSULTANTS',
    title:
      'Deliver projects faster, with less risk — and<br class=\'hidden md:block\' /> more margin per engagement.',
    realityCards: [
      {
        id: 1,
        title: 'Complex, shifting requirements make projects slow and costly',
        description:
          'Each engagement starts with unique business needs, stakeholder input, legacy constraints and changing priorities. Discovery takes time before delivery begins.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>37%</span> of project failures tied to unclear requirements and objectives",
      },
      {
        id: 2,
        title: 'Hidden system dependencies turn changes into costly rework',
        description:
          'What seems like one enhancement often impacts workflows, data, integrations and downstream systems. Without clear dependency visibility, teams underestimate effort, delay delivery and absorb rework.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>11%</span> of project investment is wasted through rework",
      },
      {
        id: 3,
        title: 'Legacy systems are slowing and limiting AI acceleration',
        description:
          'Clients want to deploy agents, workbenches and AI strategy but unclear legacy systems and processes stall engagements and drive up cost. Manual discovery eats the budget before AI monetization happens.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>43%</span> of overruns from underestimated complexity",
      },
    ],
    checklist: [
      {
        title: 'AI-Assisted Requirements Gathering',
        desc: 'AI Agents capture and guide requirements capture to produce client-ready specs in a fraction of the time.',
      },
      {
        title: 'Full and Dynamic Systems Dependency Mapping',
        desc: 'Real-time architecture blueprints across services and integrations, that evolve as client needs do.',
      },
      {
        title: 'Scale Delivery Without Scaling Headcount',
        desc: 'One platform replaces your fragmented toolchain — deliver more engagements, faster, with a leaner team.',
      },
    ],
    videoLabel: 'See how it works for consultants',
    ctaHref: '/contact-us',
  },
  enterpriseIT: {
    id: 'enterpriseIT',
    overline: 'ENTERPRISE LOB & IT TEAMS',
    title:
      "Map your systems. Modernize safely.<br class='hidden md:block' /> Deploy AI with confidence.",
    realityCards: [
      {
        id: 1,
        title: "No one knows what's really connected to what",
        description:
          'Decades of organic growth leave systems tangled — undocumented integrations, shadow dependencies, and tribal knowledge that slows progress and exacerbates risk.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>73%</span> of enterprise IT leaders say lack of system visibility is their top modernization blocker<br/><span class='text-[#e11d48] font-bold'>85%</span> of IT leaders have serious concerns about whether their current tech estate can support AI",
      },
      {
        id: 2,
        title:
          'Every change is costly, risky and takes far too long to implement',
        description:
          'Touching one legacy component risks cascading failures across services nobody fully mapped. Teams take months to scope projects and size impacts.',
        statHtml:
          "Nearly <span class='text-[#e11d48] font-bold'>1 in 3</span> changes to legacy systems requires a rollback or emergency fix<br/>Technical debt grows <span class='text-[#e11d48] font-bold'>20%</span> annually",
      },
      {
        id: 3,
        title: 'Legacy systems are slowing and limiting AI acceleration',
        description:
          'Every enterprise is under pressure to deploy AI — but without a clear map of what exists and what it connects to, initiatives stall before they scale.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>60%</span> of AI leaders say legacy system integration is their primary barrier to deploying agentic AI<br/><span class='text-[#e11d48] font-bold'>85%</span> of enterprise leaders have serious concerns about whether their current tech estate can support AI",
      },
    ],
    checklist: [
      {
        title: 'Full system and dependency mapping',
        desc: 'Automatically discover and visualize every connection, integration, and dependency across legacy systems.',
      },
      {
        title: 'Impact Simulation Before Any Change Goes Live',
        desc: 'See full system impacts before you make a single change so modernization proceeds with pace and precision.',
      },
      {
        title: 'Build and Scale AI Capabilities With Full Control',
        desc: 'With a complete map of your legacy landscape, AI agents design, build and deploy new capabilities into your existing systems — human approved at every stage, nothing moves without your sign-off.',
      },
    ],
    videoLabel: 'See how it works for enterprise IT',
    ctaHref: '/contact-us',
  },
  modernizeIntegrators: {
    id: 'modernizeIntegrators',
    overline: 'SYSTEMS INTEGRATORS / CONSULTANTS',
    title: 'Modernize client systems, Accelerate AI delivery.',
    realityCards: [
      {
        id: 1,
        title: 'Client legacy landscapes are undocumented and opaque',
        description:
          'Every engagement starts with weeks of discovery across undocumented systems and shadow integrations — burning budget before transformation begins.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>73%</span> of IT leaders say lack of system visibility is their top modernization blocker",
      },
      {
        id: 2,
        title:
          'Modernization changes cascade unpredictably across client systems',
        description:
          'Migrating one service or refactoring a monolith triggers hidden dependencies — turning scoped engagements into runaway projects with blown margins.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>20-40%</span> avg margin reduction for fixed-fee engagements",
      },
      {
        id: 3,
        title: 'Legacy opacity is blocking client AI acceleration',
        description:
          'Clients want to deploy agents, workbenches and AI strategy but unclear legacy systems and processes stall engagements and drive up cost. Manual discovery eats the budget before AI monetization happens.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>60%</span> of AI leaders say legacy system integration is their primary barrier to deploying agentic AI",
      },
    ],
    checklist: [
      {
        title: 'Instant Client System Discovery & Dependency Mapping',
        desc: "Automatically map your client's entire legacy landscape — every service, integration, and hidden dependency — in hours instead of weeks of manual discovery.",
      },
      {
        title: 'Impact Simulation Before Every Migration Step',
        desc: "Simulated the blast radius of every proposed change across your client's systems — so you scope accurately, avoid surprises, and protect your margins.",
      },
      {
        title: 'Map Systems and Build AI Agents — All in One Platform',
        desc: 'Maps systems and dependencies - then builds AI agents, workflows and integrations needed to modernize and deploy production-ready systems - without the overhead.',
      },
    ],
    videoLabel: 'See how it works for modernization partners',
    ctaHref: '/contact-us',
  },
  startups: {
    id: 'startups',
    overline: 'START-UPS & NEW VENTURES',
    title:
      'Go from pitch deck to production — with start-up speed and a full stack built-in technical co-founder.',
    realityCards: [
      {
        id: 1,
        title: 'Turning ideas into technical scope takes months',
        description:
          'Founders spend valuable time defining features, workflows, architecture, priorities and MVP scope before real building even starts.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>70%</span> of early-stage startups fail due to premature scaling or slow time-to-market",
      },
      {
        id: 2,
        title: 'Early architecture decisions create long-term debt',
        description:
          'What you hack together at seed stage becomes the codebase you fight at Series A. Bad early choices cost months of refactoring later.',
        statHtml:
          "<span class='text-[#e11d48] font-bold'>60%</span> of Series A teams cite technical debt from MVP as their biggest blocker to scale",
      },
      {
        id: 3,
        title: 'Hiring engineers is slow, expensive, and risky',
        description:
          "A single senior hire can cost $200K+ annually — and take 3-6 months to find. For early-stage teams, that's runway you don't have.",
        statHtml:
          "<span class='text-[#e11d48] font-bold'>4-6 months</span> average time-to-hire for senior engineering talent",
      },
    ],
    checklist: [
      {
        title: 'MVP to Production in Weeks, Not Quarters',
        desc: 'Turn your pitch deck vision into a deployable, production-grade system — fast enough to validate with real customers before your next funding round.',
      },
      {
        title: 'Architected to Scale From Day One',
        desc: 'AI-generated architecture that’s built on best practices — so the system you ship at seed still holds up at Series B. No costly re-platforming.',
      },
      {
        title: 'Ship Like a 10-Person Team With a Founding Team of 2',
        desc: 'AI agents design, build, and deploy — so founders can focus on customers, fundraising, and product strategy instead of hiring sprints.',
      },
    ],
    videoLabel: 'See how it works for startups',
    ctaHref: '/contact-us',
  },
};
