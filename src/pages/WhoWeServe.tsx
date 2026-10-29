import { Link } from 'react-router-dom';
import { ClosingCta, PageHero } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { segments } from '../data/content';

const ctas: Record<string, { label: string; path: string }> = {
  individuals: { label: 'Discuss your idea', path: 'idea' },
  businesses: { label: 'Talk about your business', path: 'business' },
  organisations: { label: 'Start a programme conversation', path: 'organisation' },
  institutions: { label: 'Request a proposal', path: 'organisation' },
};

export function WhoWeServe() {
  return (
    <>
      <PageHero eyebrow="Who we serve" title="One studio. Four kinds of goal.">
        <p>
          A founder with a small budget and a procurement officer at a large institution shouldn’t have to take
          the same path. Find yours.
        </p>
      </PageHero>

      <nav className="container jump" aria-label="Client groups">
        {segments.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="chip">
            {s.title}
          </a>
        ))}
      </nav>

      <section className="section">
        <div className="container stack">
          {segments.map((s) => (
            <article key={s.id} id={s.id} className="segment">
              <div className="segment-head">
                <Icon name={s.icon} className="card-icon" size={32} />
                <h2>{s.title}</h2>
                <p className="muted">{s.goal}</p>
                <p className="segment-message">{s.message}</p>
              </div>
              <div>
                <h3>What we help with</h3>
                <ul className="ticks">
                  {s.needs.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
                <h3>How we work with you</h3>
                <p>{s.how}</p>
                <Link to={`/contact/?path=${ctas[s.id].path}`} className="btn btn-primary">
                  {ctas[s.id].label} <Icon name="arrow" size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
