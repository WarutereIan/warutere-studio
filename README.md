# Warutere Studio

Website for Warutere Studio, an independent solutions studio in Kenya. **Make things happen.**

Built with React, React Router and Vite. Pages follow the brand directive's sitemap: Home, Solutions,
Who we serve, Our work, How we work, About, Insights and Contact.

## Develop

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the static site to `dist/`. Because it is a single-page app,
the host must serve `index.html` for every route (`public/_redirects` covers Netlify, `vercel.json` covers Vercel).

## Where things live

- `src/data/site.ts`: name, contact details, business registration, navigation
- `src/data/content.ts`: capabilities, client groups, process, engagement models, work, trust signals
- `src/pages/`: one component per page
- `src/styles.css`: the visual system (forest green, warm ivory, lime, with an orange accent)

## Before launch

- [ ] Real phone, WhatsApp Business number, email and domain in `src/data/site.ts`
- [ ] Registered business name and ODPC registration in `src/data/site.ts`
- [ ] Confirm each project's status (Live / Pilot / Prototype / Internal product / Advisory) in `src/data/content.ts`
- [ ] Add outcomes, client permissions and testimonials to the work items
- [ ] Choose a form backend if enquiries shouldn't go through WhatsApp or email
- [ ] Publish the first Insights articles
