"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const context = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".site-header", { y: -14, opacity: 0, duration: 0.8 })
        .from(
          "[data-hero-media]",
          { clipPath: "inset(100% 0% 0% 0%)", duration: 1.5, ease: "expo.out" },
          0.08,
        )
        .from(
          "[data-hero-media] .hero-image",
          { scale: 1.08, duration: 1.9, ease: "expo.out" },
          0.08,
        )
        .from(
          "[data-hero-topline] > *",
          { y: 12, opacity: 0, duration: 0.8, stagger: 0.08 },
          0.3,
        )
        .from(
          "[data-hero-line] .line > span",
          { yPercent: 118, duration: 1.15, stagger: 0.12 },
          0.24,
        )
        .from("[data-hero-lede]", { y: 20, opacity: 0, duration: 0.9 }, 0.52)
        .from("[data-hero-actions]", { y: 16, opacity: 0, duration: 0.9 }, 0.64)
        .from(
          "[data-hero-footline] > *",
          { y: 10, opacity: 0, duration: 0.8, stagger: 0.08 },
          0.74,
        );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.from(".material-row", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: "power3.out",
        scrollTrigger: { trigger: ".materials", start: "top 80%", once: true },
      });

      gsap.from(".closing-inner > *", {
        y: 26,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: ".closing", start: "top 72%", once: true },
      });

      gsap.utils.toArray<HTMLElement>(".study-entry").forEach((entry) => {
        const parts = entry.querySelectorAll<HTMLElement>(
          ".study-entry-head, .study-title, .study-description, .study-meta, .study-credit, .study-inline-media",
        );
        if (!parts.length) return;
        gsap.from(parts, {
          y: 22,
          opacity: 0,
          duration: 0.85,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: entry, start: "top 78%", once: true },
        });
      });

      const closingImage = document.querySelector<HTMLElement>(".closing-image");
      if (closingImage) {
        gsap.fromTo(
          closingImage,
          { yPercent: -5 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: ".closing",
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }

      const sunLine = document.querySelector<SVGPathElement>("[data-sun-line]");
      if (sunLine) {
        const length = sunLine.getTotalLength();
        gsap.set(sunLine, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(sunLine, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".sun-path-wrap",
            start: "top 84%",
            end: "bottom 36%",
            scrub: 0.6,
          },
        });
      }

      const refresh = () => ScrollTrigger.refresh();
      if (document.fonts?.ready) document.fonts.ready.then(refresh);
      window.addEventListener("load", refresh);
      return () => window.removeEventListener("load", refresh);
    });

    return () => context.revert();
  }, []);

  return null;
}
