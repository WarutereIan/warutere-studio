import type { work } from '../data/content';

export function WorkCard({ item }: { item: (typeof work)[number] }) {
  return (
    <article className="card work-card" id={item.slug}>
      <div className="work-meta">
        <span>{item.capability}</span>
        {item.status && <span className="badge">{item.status}</span>}
      </div>
      <h3>{item.solution}</h3>
      <p>{item.summary}</p>
      <p className="work-project">
        {item.project}
        {item.where && <span> · {item.where}</span>}
      </p>
    </article>
  );
}
