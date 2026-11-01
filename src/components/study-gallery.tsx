"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { studies } from "@/lib/photography";

export function StudyGallery() {
  const [active, setActive] = useState(0);
  const entries = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const middle = window.innerHeight / 2;
      let match = 0;
      let closest = Number.POSITIVE_INFINITY;

      entries.current.forEach((entry, index) => {
        if (!entry) return;
        const rect = entry.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - middle);
        if (distance < closest) {
          closest = distance;
          match = index;
        }
      });

      setActive(match);
    };

    const schedule = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <div className="section-head" data-reveal>
          <h2 id="work-title" className="section-title">
            Three rooms, three hours, one standard.
          </h2>
          <p className="section-body">
            Each study is a reference room caught at the hour that decides it.
            These are reference photographs, not client commissions; the standard
            they describe is the point.
          </p>
        </div>

        <div className="study-layout">
          <div className="study-list">
            {studies.map((study, index) => (
              <article
                key={study.id}
                ref={(element) => {
                  entries.current[index] = element;
                }}
                className={`study-entry${active === index ? " is-active" : ""}`}
              >
                <div className="study-entry-head">
                  <span className="study-hour-inline">{study.hour}</span>
                </div>

                <h3 className="study-title">{study.title}</h3>
                <p className="study-description">{study.description}</p>

                <dl className="study-meta">
                  <div>
                    <dt>Light</dt>
                    <dd>{study.light}</dd>
                  </div>
                  <div>
                    <dt>Materials</dt>
                    <dd>{study.materials}</dd>
                  </div>
                </dl>

                <p className="study-credit">
                  Reference photograph — {study.photo.credit}
                </p>

                <div className="study-inline-media">
                  <Image
                    src={study.photo.src}
                    alt={study.photo.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 0px"
                  />
                  <span className="study-tag">Reference study</span>
                  <span className="study-hour">{study.hour}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="study-stage" aria-hidden="true">
            {studies.map((study, index) => (
              <figure
                key={study.id}
                className={`study-frame${active === index ? " is-active" : ""}`}
              >
                <Image
                  src={study.photo.src}
                  alt=""
                  fill
                  sizes="(min-width: 900px) 44vw, 0px"
                />
                <figcaption>
                  <span>Reference study</span>
                  <strong>{study.hour}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
