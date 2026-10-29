import { ClosingCta, PageHero, SectionHead } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { engagements, process } from '../data/content';

const principles = [
  'Quotes in Kenyan shillings, with transparent scope and payment milestones.',
  'Fixed-fee discovery to reduce uncertainty before large projects.',
  'Milestone pricing for defined builds; recurring agreements for ongoing support.',
  'Licences, third-party costs, hosting and maintenance shown separately from implementation fees.',
  'Ownership of source code, data, intellectual property and accounts agreed in writing.',
  'Acceptance criteria and support responsibilities agreed before delivery starts.',
];

export function HowWeWork() {
  return (
    <>
      <PageHero eyebrow="How we work" title="A clear plan. The right solution. Delivery you can rely on." />

      <section className="section">
        <div className="container">
          <ol className="process">
            {process.map((s) => (
              <li key={s.step}>
                <span className="process-step">{s.step}</span>
                <Icon name={s.icon} className="card-icon" />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Engagement models" title="Discover. Build. Partner." />
          <div className="grid grid-3">
            {engagements.map((e) => (
              <article key={e.title} className="card">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <p className="muted">{e.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="Delivery model" title="A lean core studio with a trusted network." />
            <p>
              The core studio owns the client relationship, discovery, solution architecture, project management,
              quality and accountability. Developers, designers, researchers, data and security specialists, and
              delivery partners join as each project needs them.
            </p>
            <p>
              You get one accountable experience: clear scope, milestones, communication, quality checks, handover
              and support, whoever performs each specialist task. We’re open about who does what.
            </p>
          </div>
          <div className="card">
            <h3>Commercial principles</h3>
            <ul className="ticks">
              {principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
