import { Link } from 'react-router-dom';
import { ClosingCta, SectionHead } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { ProgressGraphic } from '../components/ProgressGraphic';
import { WorkCard } from '../components/WorkCard';
import { capabilities, entryPaths, goals, kenyaPromise, problems, process, trust, work } from '../data/content';
import { site } from '../data/site';

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <p className="eyebrow">{site.location}</p>
            <h1>What are you trying to make happen?</h1>
            <p className="lede">
              We help individuals, businesses and institutions turn ideas, challenges and opportunities into
              practical results, from the first idea to implementation and beyond.
            </p>
            <div className="chips" role="list" aria-label="Choose your goal">
              {goals.map((g) => (
                <Link key={g.label} to={g.to} className="chip" role="listitem">
                  {g.label}
                </Link>
              ))}
            </div>
            <div className="actions">
              <Link to="/contact/" className="btn btn-primary">
                Start a conversation <Icon name="arrow" size={18} />
              </Link>
              <Link to="/work/" className="btn btn-ghost">
                Explore our work
              </Link>
            </div>
          </div>
          <ProgressGraphic />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Where clients start" title="Recognise any of these?">
            You don’t need to know whether you need software, strategy, research or something else. Bring the
            problem. We’ll help define the solution and see it through.
          </SectionHead>
          <div className="grid grid-3">
            {problems.map((p) => (
              <article key={p.title} className="card">
                <Icon name={p.icon} className="card-icon" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="What we bring" title="Strategy. Technology. Business. Data. Delivery.">
            Five connected capabilities, combined around your goal rather than sold as separate packages.
          </SectionHead>
          <div className="capabilities">
            {capabilities.map((c) => (
              <Link key={c.id} to={`/solutions/#${c.id}`} className="capability">
                <span className="capability-num">{c.num}</span>
                <Icon name={c.icon} className="card-icon" />
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHead eyebrow="Built for Kenya" title="Delivery is not the finish line. Your goal is.">
            We understand your people, your goal and the rules you work under, then deliver what gets you there
            and stay with you after.
          </SectionHead>
          <div className="grid grid-5">
            {kenyaPromise.map((k) => (
              <div key={k.title} className="promise">
                <Icon name={k.icon} className="card-icon" />
                <h3>{k.title}</h3>
                <p>{k.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Selected work" title="Work that makes a difference">
            The problem, the solution and what changed. Not a gallery of deliverables.
          </SectionHead>
          <div className="grid grid-3">
            {work.slice(0, 3).map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
          <Link to="/work/" className="text-link">
            See all work <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="How we work" title="From first conversation to finished solution" />
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

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Find your way in" title="Where would you like to start?" />
          <div className="grid grid-4">
            {entryPaths.map((p) => (
              <Link key={p.title} to={p.to} className="card card-link">
                <Icon name={p.icon} className="card-icon" />
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="text-link">
                  {p.cta} <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHead eyebrow="Why trust us" title="Ambitious in what we coordinate. Precise in what we promise." />
          <div className="grid grid-5">
            {trust.map((t) => (
              <div key={t.title} className="trust">
                <Icon name={t.icon} className="card-icon" />
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
