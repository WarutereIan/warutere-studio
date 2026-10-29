import { Link } from 'react-router-dom';
import { ClosingCta, PageHero, SectionHead } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { capabilities, compliance, engagements, work } from '../data/content';

export function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="What we help you accomplish, and how.">
        <p>
          We don’t sell every capability as a standalone service. We assemble the right combination for your
          problem, and coordinate trusted specialists where a project needs them.
        </p>
      </PageHero>

      <section className="section">
        <div className="container stack">
          {capabilities.map((c) => (
            <article key={c.id} id={c.id} className="capability-row">
              <div>
                <span className="capability-num">{c.num}</span>
                <Icon name={c.icon} className="card-icon" />
                <h2>{c.title}</h2>
                <p className="lede">{c.summary}</p>
              </div>
              <ul className="ticks">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Solutions, tuned for Kenya" title="Ready starting points">
            Proven patterns we adapt to your context, so you’re not paying to reinvent the basics.
          </SectionHead>
          <div className="table-wrap">
            <table className="solutions-table">
              <thead>
                <tr>
                  <th scope="col">Solution</th>
                  <th scope="col">What it does</th>
                  <th scope="col">Where we’ve done it</th>
                </tr>
              </thead>
              <tbody>
                {work.map((w) => (
                  <tr key={w.slug}>
                    <th scope="row">{w.solution}</th>
                    <td>{w.summary}</td>
                    <td>
                      <Link to={`/work/#${w.slug}`}>{w.project}</Link>
                    </td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">
                    {compliance.solution} <span className="badge">New</span>
                  </th>
                  <td>{compliance.summary}</td>
                  <td className="muted">New offer</td>
                </tr>
              </tbody>
            </table>
          </div>
          <aside className="callout">
            <Icon name="shield" className="card-icon" />
            <div>
              <h3>Why compliance can’t wait</h3>
              <p>{compliance.why}</p>
              <p className="muted">
                We define compliance responsibilities and validate requirements for each client. We don’t promise
                blanket compliance from a checklist.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Ways to work with us" title="Three simple ways to engage">
            The same three models for a first-time founder and a national institution. What changes is the scale
            and the paperwork.
          </SectionHead>
          <div className="grid grid-3">
            {engagements.map((e, i) => (
              <article key={e.title} className="card engagement">
                <span className="capability-num">0{i + 1}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <p className="muted">{e.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
