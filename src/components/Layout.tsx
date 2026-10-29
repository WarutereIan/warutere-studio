import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { nav, site, whatsappLink } from '../data/site';
import { Icon } from './Icon';

function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label={`${site.name} home`}>
      <span className="wordmark-name">warutere</span>
      <span className="wordmark-dot" aria-hidden="true" />
      <span className="wordmark-kind">studio</span>
    </Link>
  );
}

export function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Close the mobile menu on navigation, and scroll to the top or to the anchor.
  useEffect(() => {
    setOpen(false);
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Wordmark />
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} />
            <span className="sr-only">Menu</span>
          </button>
          <nav id="site-nav" className={open ? 'site-nav open' : 'site-nav'} aria-label="Main">
            {nav.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact/" className="btn btn-primary btn-sm">
              Start a conversation
            </Link>
          </nav>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <p className="footer-line">{site.tagline}</p>
              <p className="muted-inverse">{site.description}</p>
            </div>
            <div className="footer-cols">
              <div>
                <h3>Studio</h3>
                {nav.map((item) => (
                  <Link key={item.href} to={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <div>
                <h3>Talk to us</h3>
                <a href={whatsappLink()} target="_blank" rel="noopener">
                  WhatsApp
                </a>
                <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                <Link to="/contact/">Project enquiry</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} {site.business.registeredName}
            </span>
            <span>{site.location}</span>
            <span>KRA PIN: {site.business.kraPin}</span>
            <span>ODPC: {site.business.odpc}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
