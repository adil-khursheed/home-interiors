import Image from "next/image";
import { HeroLight } from "@/components/hero-light";
import { photos } from "@/lib/photography";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-panel">
        <div className="hero-topline" data-hero-topline>
          <span>Whole-home interiors</span>
          <span>Reference study / 16:40</span>
        </div>

        <div className="hero-copy">
          <h1 className="hero-title" id="hero-title" data-hero-line>
            <span className="line">
              <span>A home,</span>
            </span>
            <span className="line">
              <span>resolved.</span>
            </span>
          </h1>
          <p className="hero-lede" data-hero-lede>
            Turnkey interior architecture for whole homes. One studio carries the
            plan, the making and the last light through the door.
          </p>
          <div className="hero-actions" data-hero-actions>
            <a className="button button-solid" href="#enquire">
              Start a project
            </a>
            <a className="text-link" href="#work">
              See the studies <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-footline" data-hero-footline>
          <span>Design · Procurement · Installation</span>
          <span>Reference photography, credited</span>
        </div>
      </div>

      <div className="hero-media" data-hero-media>
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          priority
          loading="eager"
          sizes="(max-width: 900px) 100vw, 54vw"
          className="hero-image"
        />
        <HeroLight />
        <div className="grain-layer" aria-hidden="true" />
        <div className="hero-media-caption">
          <span>Limewash, low sun</span>
        </div>
      </div>
    </section>
  );
}
