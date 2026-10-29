import { Link } from 'react-router-dom';
import { ClosingCta, PageHero } from '../components/Blocks';

// Planned topics drawn from the brand directive. Replace with published articles as they are written.
const topics = [
  { tag: 'Tax', title: 'eTIMS in 2026: what KRA’s expense validation means for your business' },
  { tag: 'Data protection', title: 'ODPC registration: who needs it and what your suppliers should show you' },
  { tag: 'Programmes', title: 'Owning your programme data after donor funding changes' },
  { tag: 'Business', title: 'M-Pesa, WhatsApp and the systems small businesses actually need' },
];

export function Insights() {
  return (
    <>
      <PageHero eyebrow="Insights & resources" title="Practical guides for Kenyan businesses and organisations.">
        <p>Plain-language thinking on the rules, systems and decisions our clients face. First articles coming soon.</p>
      </PageHero>
      <section className="section">
        <div className="container grid grid-2">
          {topics.map((t) => (
            <article key={t.title} className="card">
              <div className="work-meta">
                <span>{t.tag}</span>
                <span className="badge">Coming soon</span>
              </div>
              <h3>{t.title}</h3>
              <p className="muted">
                Want this sooner? <Link to="/contact/">Ask us directly.</Link>
              </p>
            </article>
          ))}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
