// Single source of truth for studio details.
// Anything marked TODO must be replaced with real, verified details before launch.

export const site = {
  name: 'Warutere Studio',
  tagline: 'Make things happen.',
  explanation: 'From ideas to real-world results.',
  description:
    'An independent solutions studio helping Kenyan individuals, businesses and institutions solve problems, build solutions and deliver results through strategy, technology and practical execution.',
  location: 'Nairobi · Working across Kenya',
  url: 'https://warutere.studio', // TODO: confirm domain
  contact: {
    email: 'hello@warutere.studio', // TODO: confirm address
    phoneDisplay: '+254 700 000 000', // TODO: real Kenyan number
    phoneHref: 'tel:+254700000000',
    whatsapp: '254700000000', // TODO: WhatsApp Business number, digits only
  },
  business: {
    // Shown in the footer and on the About page. Fill in once registered.
    registeredName: 'Warutere Studio', // TODO: registered business name
    kraPin: 'Available on request',
    odpc: 'Registration in progress', // TODO: ODPC registration number once issued
  },
};

export const whatsappLink = (text = "Hi, I'd like to talk about a project.") =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '/solutions/', label: 'Solutions' },
  { href: '/who-we-serve/', label: 'Who we serve' },
  { href: '/work/', label: 'Our work' },
  { href: '/how-we-work/', label: 'How we work' },
  { href: '/about/', label: 'About' },
  { href: '/insights/', label: 'Insights' },
];
