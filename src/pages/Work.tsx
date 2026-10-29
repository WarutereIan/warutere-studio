import { ClosingCta, PageHero } from '../components/Blocks';
import { WorkCard } from '../components/WorkCard';
import { work } from '../data/content';

export function Work() {
  return (
    <>
      <PageHero eyebrow="Our work" title="Show what changed.">
        <p>
          Real projects across Kenya: the problem, the solution and the outcome. Each one is labelled for what it
          is, whether a live deployment, a pilot, a prototype or advisory work.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {work.map((w) => (
              <WorkCard key={w.slug} item={w} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
