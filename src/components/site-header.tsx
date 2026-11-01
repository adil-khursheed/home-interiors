import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="shell header-inner">
        <a href="#top" aria-label="Atelier Aveline, back to top">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="site-nav">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#studio">Studio</a>
        </nav>
        <div className="header-side">
          <a className="header-link" href="#enquire">
            Enquire
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
