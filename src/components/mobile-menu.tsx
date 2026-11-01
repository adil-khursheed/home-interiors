"use client";

import { useRef, type KeyboardEvent } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#studio", label: "Studio" },
  { href: "#enquire", label: "Enquire" },
];

export function MobileMenu() {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key !== "Escape" || !detailsRef.current?.open) return;
    detailsRef.current.open = false;
    summaryRef.current?.focus();
  }

  return (
    <details className="mobile-menu" onKeyDown={handleKeyDown} ref={detailsRef}>
      <summary ref={summaryRef}>Menu</summary>
      <nav aria-label="Mobile">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
      </nav>
    </details>
  );
}
