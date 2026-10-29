import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/Blocks';
import { Icon } from '../components/Icon';
import { site, whatsappLink } from '../data/site';

const paths: Record<string, string> = {
  idea: 'I have an idea',
  business: 'I run a business',
  organisation: 'I represent an organisation',
  collaborate: 'I want to collaborate',
};

const helpTypes = ['Not sure yet', 'Strategy & Innovation', 'Technology & AI', 'Business & Growth', 'Data & Intelligence', 'Delivery & Transformation', 'Compliance (eTIMS / data protection)'];
const budgets = ['Prefer not to say', 'Under KES 100,000', 'KES 100,000 – 500,000', 'KES 500,000 – 2M', 'Over KES 2M', 'Formal procurement / tender'];

// The site is static, so an enquiry is handed to WhatsApp or email, pre-filled.
// Swap this for a form backend when one is chosen.
export function Contact() {
  const [params] = useSearchParams();
  const initialPath = paths[params.get('path') ?? ''] ?? paths.idea;
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const lines = [
      `Enquiry: ${get('path')}`,
      `Name: ${get('name')}`,
      get('organisation') && `Organisation: ${get('organisation')}`,
      `What I'm trying to achieve: ${get('goal')}`,
      `Help I think I need: ${get('help')}`,
      `Budget: ${get('budget')}`,
      get('timeline') && `Timeline: ${get('timeline')}`,
      get('phone') && `Phone: ${get('phone')}`,
    ].filter(Boolean);
    const body = lines.join('\n');
    const url =
      get('method') === 'Email'
        ? `mailto:${site.contact.email}?subject=${encodeURIComponent(`Project enquiry: ${get('name')}`)}&body=${encodeURIComponent(body)}`
        : whatsappLink(body);
    window.open(url, '_blank', 'noopener');
    setSent(true);
  }

  return (
    <>
      <PageHero eyebrow="Start a conversation" title="Let’s work out what you need.">
        <p>Tell us what you’re trying to achieve, in your own words. We’ll help identify the right approach.</p>
      </PageHero>

      <section className="section">
        <div className="container contact-grid">
          <form className="card form" onSubmit={onSubmit}>
            <label>
              <span>I’m getting in touch because</span>
              <select name="path" defaultValue={initialPath}>
                {Object.values(paths).map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <label>
                <span>Your name</span>
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                <span>
                  Organisation <em>(optional)</em>
                </span>
                <input name="organisation" autoComplete="organization" />
              </label>
            </div>
            <label>
              <span>What are you trying to achieve?</span>
              <textarea name="goal" rows={5} required placeholder="Describe the goal or the problem. No jargon needed." />
            </label>
            <div className="form-row">
              <label>
                <span>Type of help, if you know</span>
                <select name="help">
                  {helpTypes.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>
                  Approximate budget <em>(optional)</em>
                </span>
                <select name="budget">
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                <span>
                  Timeline <em>(optional)</em>
                </span>
                <input name="timeline" placeholder="e.g. by March, before the next audit" />
              </label>
              <label>
                <span>
                  Phone <em>(optional)</em>
                </span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <fieldset>
              <legend>Send my enquiry by</legend>
              <label className="radio">
                <input type="radio" name="method" value="WhatsApp" defaultChecked /> WhatsApp
              </label>
              <label className="radio">
                <input type="radio" name="method" value="Email" /> Email
              </label>
            </fieldset>
            <button className="btn btn-primary" type="submit">
              Send enquiry <Icon name="arrow" size={18} />
            </button>
            {sent && (
              <p className="form-note" role="status">
                Your enquiry has opened in a new window. Press send there and we’ll reply within one working day.
              </p>
            )}
          </form>

          <aside className="contact-side">
            <h2>Prefer to talk?</h2>
            <a className="contact-link" href={whatsappLink()} target="_blank" rel="noopener">
              <Icon name="whatsapp" /> WhatsApp us
            </a>
            <a className="contact-link" href={site.contact.phoneHref}>
              <Icon name="phone" /> {site.contact.phoneDisplay}
            </a>
            <a className="contact-link" href={`mailto:${site.contact.email}`}>
              <Icon name="mail" /> {site.contact.email}
            </a>
            <p className="muted">
              <Icon name="pin" size={18} /> {site.location}. On-site in Nairobi and the counties for discovery,
              training and launch.
            </p>
            <div className="card">
              <h3>Institutions & tenders</h3>
              <p>
                Need a capability statement, company profile or procurement documents? Choose “I represent an
                organisation” and tell us what your process requires.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
