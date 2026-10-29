import { ClosingCta, PageHero, SectionHead } from '../components/Blocks';
import { distinctions, growthStages } from '../data/content';
import { site } from '../data/site';

const values = [
  { title: 'Practical', body: 'Clear about what will be done and why it matters.' },
  { title: 'Intelligent', body: 'Technically capable, without unnecessary jargon.' },
  { title: 'Ambitious', body: 'Focused on possibilities and progress, not limitations.' },
  { title: 'Approachable', body: 'As comfortable with a first-time founder as with a senior executive.' },
  { title: 'Accountable', body: 'Specific about scope, responsibilities, timelines and results.' },
];

export function About() {
  return (
    <>
      <PageHero eyebrow="About the studio" title="Kenya is where we start. The possibilities are much bigger.">
        <p>
          {site.name} is an independent solutions studio helping individuals, businesses and institutions turn
          ideas, challenges and opportunities into practical results. We bring together strategic thinking,
          technology, creativity and execution to solve problems, build solutions and help our clients move
          forward.
        </p>
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="Why we exist" title="Between the need and the result." />
            <p>
              Developers build software. Consultants write recommendations. Agencies run campaigns. Contractors
              implement projects. Each offers a piece of the solution.
            </p>
            <p>
              We work in the space between identifying a need and achieving the result. You bring the problem; we
              help define the solution, assemble the right capabilities and see the work through.
            </p>
          </div>
          <dl className="facts card">
            <div>
              <dt>Purpose</dt>
              <dd>Help people and organisations move from intention to achievement.</dd>
            </div>
            <div>
              <dt>Promise</dt>
              <dd>We don’t stop at ideas, plans or deliverables. We help you reach the outcome you came for.</dd>
            </div>
            <div>
              <dt>Market</dt>
              <dd>Kenya first, with the capability to serve clients and partners beyond Kenya.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="What sets us apart" title="Broad in what we solve. Specific in how we prove it." />
          <div className="grid grid-4">
            {distinctions.map((d) => (
              <article key={d.title} className="card">
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How we show up" title="Our values" />
          <div className="grid grid-5">
            {values.map((v) => (
              <div key={v.title} className="trust">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Where we’re going" title="Built to grow without reinventing itself." />
          <ol className="stages">
            {growthStages.map((s, i) => (
              <li key={s.title}>
                <span className="process-step">Stage {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionHead eyebrow="For institutional buyers" title="Procurement-ready." />
            <p>
              Request our capability statement, company profile and procurement documentation, including KRA PIN
              and data protection registration details.
            </p>
          </div>
          <dl className="facts card">
            <div>
              <dt>Registered name</dt>
              <dd>{site.business.registeredName}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>KRA PIN</dt>
              <dd>{site.business.kraPin}</dd>
            </div>
            <div>
              <dt>ODPC</dt>
              <dd>{site.business.odpc}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
