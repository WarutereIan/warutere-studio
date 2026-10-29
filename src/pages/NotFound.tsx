import { Link } from 'react-router-dom';
import { PageHero } from '../components/Blocks';

export function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page didn’t happen.">
      <p>
        <Link to="/">Back to the homepage</Link> or <Link to="/contact/">tell us what you were looking for</Link>.
      </p>
    </PageHero>
  );
}
