import Image from "next/image";
import { EnquiryForm } from "@/components/enquiry-form";
import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";
import { StudyGallery } from "@/components/study-gallery";
import { Wordmark } from "@/components/wordmark";
import { materials, photoCredits, photos } from "@/lib/photography";
import { STUDIO_EMAIL } from "@/lib/studio";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <SiteMotion />
      <main id="main">
        <Hero />

        <StudyGallery />

        <section aria-labelledby="approach-title" className="section approach" id="approach">
          <div className="shell">
            <div className="section-head" data-reveal>
              <h2 id="approach-title" className="section-title">
                One line, from first measurement to handover.
              </h2>
              <p className="section-body">
                We do not hand over drawings and a list of contractors. The same
                studio stays with the home through design, procurement, and
                installation, so the finished room is the one we drew.
              </p>
            </div>

            <div className="sun-path-wrap" aria-hidden="true">
              <svg
                className="sun-path"
                viewBox="0 0 1200 90"
                preserveAspectRatio="none"
                focusable="false"
              >
                <path
                  data-sun-line
                  d="M0 72 C 210 72 330 18 600 18 C 870 18 990 72 1200 72"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="600" cy="18" r="4" />
              </svg>
              <div className="sun-path-hours">
                <span>06:00</span>
                <span>12:00</span>
                <span>20:00</span>
              </div>
            </div>

            <div className="process">
              <article className="process-step" data-reveal>
                <h3>Design</h3>
                <p>
                  We measure the home, agree the brief, and resolve the plan, the
                  light, and the materials before anything is ordered.
                </p>
              </article>
              <article className="process-step" data-reveal>
                <h3>Procure</h3>
                <p>
                  We hold the schedule, the samples, the suppliers, and the budget
                  in one place, so decisions do not drift between trades.
                </p>
              </article>
              <article className="process-step" data-reveal>
                <h3>Install</h3>
                <p>
                  We manage the site and the final dressing, then hand over a
                  finished home with nothing left for you to chase.
                </p>
              </article>
            </div>

            <div className="process-foot" data-reveal>
              <p>You should not have to project-manage your own home.</p>
              <ul>
                <li>One studio accountable from concept to handover.</li>
                <li>Materials and finishes approved in person.</li>
                <li>A single, clear point of contact throughout.</li>
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="studio-title" className="section studio" id="studio">
          <div className="shell studio-grid">
            <div className="studio-copy" data-reveal>
              <h2 id="studio-title" className="section-title">
                Taste is a material decision.
              </h2>
              <p className="studio-body">
                We keep the palette small and the detail precise. Stone, timber,
                plaster, leather and linen; chosen for how they age, how they feel
                in the hand, and how they hold the light. The register is the
                vocabulary, not a catalogue.
              </p>
              <a className="text-link" href="#enquire">
                Start a conversation <span aria-hidden="true">→</span>
              </a>
            </div>

            <div aria-label="Material register" className="materials" role="list">
              {materials.map((material) => (
                <div className="material-row" key={material.name} role="listitem">
                  <span
                    aria-hidden="true"
                    className="material-chip"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={material.photo.src}
                      alt=""
                      fill
                      sizes="88px"
                      style={{ objectPosition: material.position }}
                    />
                  </span>
                  <span className="material-name">{material.name}</span>
                  <span className="material-use">{material.use}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="closing-title" className="closing">
          <div className="closing-media" aria-hidden="true">
            <Image
              src={photos.bedroom.src}
              alt=""
              fill
              sizes="100vw"
              className="closing-image"
            />
            <div className="closing-scrim" />
            <div className="grain-layer" />
          </div>
          <div className="shell closing-inner">
            <h2 id="closing-title">The last decision is the one you live in.</h2>
            <p className="closing-credit">
              <span className="closing-index">Reference study / 19:20</span>
              <span>Photograph — {photos.bedroom.credit}</span>
            </p>
          </div>
        </section>

        <section aria-labelledby="enquire-title" className="section enquire" id="enquire">
          <div className="shell enquire-grid">
            <div className="enquire-copy" data-reveal>
              <h2 id="enquire-title" className="section-title">
                Tell us about the home you are imagining.
              </h2>
              <p className="enquire-body">
                A short call, a site visit, and a clear scope. If the fit is right,
                we will tell you how we would approach the project and what it
                needs from you.
              </p>
              <ul className="enquire-next">
                <li>A 30-minute call about the home and the brief.</li>
                <li>A site visit and a measured survey.</li>
                <li>A written scope and a clear next step.</li>
              </ul>
            </div>
            <div data-reveal>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell footer-inner">
          <div>
            <a aria-label="Atelier Aveline, back to top" href="#top">
              <Wordmark />
            </a>
            <p>Turnkey interior architecture for whole homes.</p>
          </div>
          <p>
            <a href={`mailto:${STUDIO_EMAIL}`}>{STUDIO_EMAIL}</a>
            <br />
            Studio name and contact are provisional.
          </p>
          <p>© 2026 Atelier Aveline</p>
        </div>
        <div className="shell footer-credits">
          <span>Reference photography</span>
          <p>
            {photoCredits.map((credit, index) => (
              <span key={credit.name}>
                <a href={credit.url} target="_blank" rel="noreferrer">
                  {credit.name}
                </a>
                {index < photoCredits.length - 1 ? ", " : ". "}
              </span>
            ))}
            Not client commissions.
          </p>
        </div>
      </footer>
    </div>
  );
}
