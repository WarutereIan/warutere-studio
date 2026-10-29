import type { IconName } from '../components/Icon';

export const capabilities: {
  id: string;
  num: string;
  title: string;
  icon: IconName;
  summary: string;
  items: string[];
}[] = [
  {
    id: 'strategy',
    num: '01',
    title: 'Strategy & Innovation',
    icon: 'lightbulb',
    summary: 'Research, advisory, feasibility, product discovery and solution design.',
    items: ['Business and product discovery', 'Feasibility and research', 'Costed plans and terms of reference', 'Solution design'],
  },
  {
    id: 'technology',
    num: '02',
    title: 'Technology & AI',
    icon: 'code',
    summary: 'Software, web and mobile, AI, automation, cloud and integrations.',
    items: ['Websites, MVPs and digital products', 'Web and mobile applications', 'AI assistants and automation', 'M-Pesa, eTIMS and system integrations'],
  },
  {
    id: 'business',
    num: '03',
    title: 'Business & Growth',
    icon: 'growth',
    summary: 'Digital commerce, business systems, customer experience and operational improvement.',
    items: ['Online sales and customer portals', 'Sales, stock and branch systems', 'Process automation', 'Customer experience'],
  },
  {
    id: 'data',
    num: '04',
    title: 'Data & Intelligence',
    icon: 'data',
    summary: 'Data platforms, analytics, reporting, research and programme intelligence.',
    items: ['Monitoring, evaluation and learning systems', 'Field data collection', 'Dashboards and reporting', 'Programme intelligence'],
  },
  {
    id: 'delivery',
    num: '05',
    title: 'Delivery & Transformation',
    icon: 'workflow',
    summary: 'Project implementation, systems integration, training, change management, maintenance and managed services.',
    items: ['Implementation and integration', 'Training and adoption', 'Maintenance and managed services', 'Change management'],
  },
];

export const goals = [
  { label: 'Start an idea', to: '/who-we-serve/#individuals' },
  { label: 'Grow a business', to: '/who-we-serve/#businesses' },
  { label: 'Solve a problem', to: '/solutions/' },
  { label: 'Transform an organisation', to: '/who-we-serve/#institutions' },
];

export const problems: { title: string; body: string; icon: IconName }[] = [
  { icon: 'spark', title: 'Starting something new', body: 'You have an idea and need to know what it takes to make it real, and what it will cost.' },
  { icon: 'paper', title: 'Replacing manual processes', body: 'Sales in notebooks, stock in spreadsheets, approvals over WhatsApp. It works until it doesn’t.' },
  { icon: 'link', title: 'Connecting disconnected systems', body: 'Payments, accounting, eTIMS and operations that don’t talk to each other.' },
  { icon: 'data', title: 'Making sense of data', body: 'Programme and business data that arrives late, lives in silos or can’t answer the questions that matter.' },
  { icon: 'people', title: 'Improving service delivery', body: 'Members, customers or citizens waiting too long for something that should be simple.' },
  { icon: 'shield', title: 'Meeting an obligation', body: 'eTIMS invoicing, data protection and donor reporting that need to work properly, not just on paper.' },
];

export const segments: {
  id: string;
  title: string;
  goal: string;
  message: string;
  icon: IconName;
  needs: string[];
  how: string;
}[] = [
  {
    id: 'individuals',
    title: 'Individuals & entrepreneurs',
    goal: 'The starting point: make an idea real.',
    message: 'You have the idea. Let’s make it happen.',
    icon: 'lightbulb',
    needs: ['Business and product discovery', 'Websites, MVPs and digital products', 'Technical advisory and prototyping', 'Digital setup for new ventures'],
    how: 'Start with a fixed-fee discovery session. Clear KES pricing, a fast first result and everything working on a phone.',
  },
  {
    id: 'businesses',
    title: 'SMEs & growing businesses',
    goal: 'The goal: run better and grow further.',
    message: 'Build a business that works better.',
    icon: 'store',
    needs: ['Websites, online sales and customer portals', 'Business process automation', 'Payments, inventory and operational systems', 'AI adoption and business intelligence'],
    how: 'From dukas to growing chains: M-Pesa and eTIMS built in, milestone payments and WhatsApp support.',
  },
  {
    id: 'organisations',
    title: 'NGOs, programmes & development organisations',
    goal: 'The goal: deliver better programmes and understand their impact.',
    message: 'Better systems for better outcomes.',
    icon: 'people',
    needs: ['Monitoring, evaluation and learning systems', 'Field data collection and reporting', 'Programme dashboards and data platforms', 'Research, digital transformation and technical advisory'],
    how: 'Systems your organisation owns and can afford to keep running after donors leave, aligned with your MEL framework and donor reporting.',
  },
  {
    id: 'institutions',
    title: 'Institutions & enterprises',
    goal: 'The goal: solve complex problems with confidence.',
    message: 'A capable partner for complex challenges.',
    icon: 'building',
    needs: ['Enterprise applications and integrations', 'Data infrastructure, security and AI systems', 'Digital transformation programmes', 'Technical specifications, implementation and support'],
    how: 'County governments, universities, SACCOs, schools and large businesses: procurement-ready documents, phased rollout, governance, training and service levels.',
  },
];

export const entryPaths: { title: string; body: string; icon: IconName; to: string; cta: string }[] = [
  { icon: 'lightbulb', title: 'I have an idea', body: 'Talk through feasibility and budget, and get guidance on the next step.', to: '/contact/?path=idea', cta: 'Discuss your idea' },
  { icon: 'store', title: 'I run a business', body: 'Practical solutions for sales, stock, payments and growth, with indicative pricing.', to: '/contact/?path=business', cta: 'Talk about your business' },
  { icon: 'building', title: 'I represent an organisation', body: 'Structured engagements, a capability statement and a request-for-proposal route.', to: '/contact/?path=organisation', cta: 'Request a proposal' },
  { icon: 'handshake', title: 'I want to collaborate', body: 'For specialists, agencies, consultants and organisations interested in joint delivery.', to: '/contact/?path=collaborate', cta: 'Partner with us' },
];

export const process: { step: string; title: string; body: string; icon: IconName }[] = [
  { step: '01', title: 'Discover', icon: 'search', body: 'Understand the problem, the people and the outcome you need.' },
  { step: '02', title: 'Define', icon: 'map', body: 'Agree on the solution, scope, budget and what success looks like.' },
  { step: '03', title: 'Deliver', icon: 'hammer', body: 'Build, configure, integrate or implement the agreed solution.' },
  { step: '04', title: 'Improve', icon: 'growth', body: 'Train users, support adoption, maintain and refine.' },
];

export const engagements = [
  {
    title: 'Discover',
    body: 'Consultation, requirements, research, assessment and a costed roadmap.',
    detail: 'A fixed-fee session or assessment for smaller clients. A formal inception phase with deliverables and procurement documentation for institutions.',
  },
  {
    title: 'Build',
    body: 'A defined solution, delivered against agreed scope, milestones and acceptance criteria.',
    detail: 'Priced in Kenyan shillings and paid in milestones, by M-Pesa or bank transfer.',
  },
  {
    title: 'Partner',
    body: 'Ongoing technical support, improvement, managed services or a longer-term delivery relationship.',
    detail: 'Recurring agreements with clear support responsibilities and service levels.',
  },
];

export const kenyaPromise: { title: string; body: string; icon: IconName }[] = [
  { icon: 'phone', title: 'Works how Kenya works', body: 'M-Pesa, WhatsApp, SMS and USSD, and offline when the network drops.' },
  { icon: 'shield', title: 'Compliant by design', body: 'eTIMS where tax applies, and Data Protection Act controls on personal data.' },
  { icon: 'key', title: 'Yours to keep', body: 'You own the code, data and accounts, with local hosting where it matters and running costs you can sustain.' },
  { icon: 'coins', title: 'Priced in shillings', body: 'Paid in milestones, by M-Pesa or bank transfer.' },
  { icon: 'pin', title: 'We come to you', body: 'On-site in Nairobi and in the counties for discovery, training and launch.' },
];

export const distinctions = [
  { title: 'Outcome-led, not service-led', body: 'We start with what you want to accomplish, not a list of things to sell you.' },
  { title: 'Multidisciplinary, not unfocused', body: 'We bring together the capabilities each project needs, rather than claiming every specialty.' },
  { title: 'Accessible, not small-minded', body: 'A focused engagement for an individual, or a structured, governed project for a major institution.' },
  { title: 'Accountable, not transactional', body: 'We define success, communicate clearly, deliver the agreed work and support adoption.' },
];

// Status must be confirmed per project before launch: the brand directive requires
// clearly distinguishing live deployments, prototypes, internal products and concepts.
// Leave `status` undefined to hide the badge until it is verified.
export type WorkStatus = 'Live' | 'Pilot' | 'Prototype' | 'Internal product' | 'Advisory';

export const work: {
  slug: string;
  solution: string;
  project: string;
  where?: string;
  capability: string;
  segment: string;
  summary: string;
  status?: WorkStatus;
}[] = [
  {
    slug: 'operations-hub',
    solution: 'Operations Hub',
    project: 'Milyfruits',
    where: 'Mwatate and Voi',
    capability: 'Business & Growth',
    segment: 'SMEs & growing businesses',
    summary: 'Sales, stock and branches in one system, with M-Pesa and eTIMS built in.',
  },
  {
    slug: 'programme-intelligence',
    solution: 'Programme Intelligence',
    project: 'DIMES',
    capability: 'Data & Intelligence',
    segment: 'NGOs & programmes',
    summary: 'Programme data the organisation owns and hosts, with reports in days and a system that stays sustainable after donors leave.',
  },
  {
    slug: 'marketplace',
    solution: 'Marketplace & Value Chain',
    project: 'OFSP Marketplace',
    where: 'Machakos',
    capability: 'Technology & AI',
    segment: 'Organisations & value chains',
    summary: 'Farmers and buyers connected, including on basic phones.',
  },
  {
    slug: 'portals',
    solution: 'Client & Member Portals',
    project: 'Imela, Smarta',
    capability: 'Technology & AI',
    segment: 'Businesses & institutions',
    summary: 'Bookings, members, tenants and payments, with private data kept private.',
  },
  {
    slug: 'knowledge-assistant',
    solution: 'Knowledge Assistant',
    project: 'LexCore',
    capability: 'Technology & AI',
    segment: 'Professionals & institutions',
    summary: 'Answers from Kenyan law or your own documents, with sources.',
  },
  {
    slug: 'field-operations',
    solution: 'Field & Logistics Operations',
    project: 'Msafiri, Dimes Collect',
    capability: 'Data & Intelligence',
    segment: 'Businesses & programmes',
    summary: 'Teams and vehicles tracked across counties, offline when the network drops.',
  },
  {
    slug: 'scoping',
    solution: 'Scoping & Strategy',
    project: 'AIKP, AATF, MEL',
    capability: 'Strategy & Innovation',
    segment: 'Institutions & programmes',
    summary: 'Costed plans and terms of reference for programmes and institutions.',
  },
];

export const compliance = {
  solution: 'Compliance Upgrade',
  summary: 'Bring existing systems up to eTIMS and Data Protection Act requirements.',
  why: 'Since 1 January 2026, KRA checks income and expenses declared in tax returns against eTIMS data. Expenses without a compliant eTIMS invoice risk being disallowed.',
};

export const voice = [
  'Tell us what you’re trying to achieve.',
  'We’ll help you work out what needs to happen.',
  'A clear plan. The right solution. Delivery you can rely on.',
  'From your first idea to the system your organisation depends on.',
  'Let’s solve the problem, not just add another tool.',
];

export const growthStages = [
  { title: 'Studio', body: 'One team, one brand and a flexible network of trusted collaborators.' },
  { title: 'Established company', body: 'Dedicated teams, defined service packages, repeatable delivery and specialist leads.' },
  { title: 'Solutions group', body: 'Product businesses, specialised divisions and ventures, all backed by the studio.' },
];

export const trust: { title: string; body: string; icon: IconName }[] = [
  { icon: 'pin', title: 'Local accessibility', body: 'A Kenyan number, responsive communication, practical payment arrangements and meetings where they’re needed.' },
  { icon: 'paper', title: 'Professional credibility', body: 'Proper contracts, formal proposals, clear invoices and procurement-ready documentation.' },
  { icon: 'shield', title: 'Responsible technology', body: 'Data protection, security controls and documented ownership, assessed against the requirements that apply to you.' },
  { icon: 'check', title: 'Evidence of delivery', body: 'Case studies, working demonstrations, references and clearly stated outcomes.' },
  { icon: 'handshake', title: 'Continuity', body: 'Documentation, training, handover and a clear plan for support after launch.' },
];
