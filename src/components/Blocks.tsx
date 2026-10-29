import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { whatsappLink } from '../data/site';
import { Icon } from './Icon';

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <div className="lede">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow?: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="section-head">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="lede">{children}</p>}
    </div>
  );
}

export function ClosingCta() {
  return (
    <section className="section closing">
      <div className="container closing-inner">
        <h2>You don’t need to have all the answers yet.</h2>
        <p>Tell us what you’re trying to achieve. We’ll help you work out the next step.</p>
        <div className="actions">
          <Link to="/contact/" className="btn btn-accent">
            Discuss your project <Icon name="arrow" size={18} />
          </Link>
          <a href={whatsappLink()} className="btn btn-ghost-inverse" target="_blank" rel="noopener">
            <Icon name="whatsapp" size={18} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
