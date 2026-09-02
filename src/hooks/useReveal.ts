import { useEffect } from "react";

/**
 * Adds `.is-visible` to every `[data-reveal]` element once it scrolls into
 * view. Elements are observed once and then released, so this stays cheap on
 * long pages. Re-runs when `deps` change so late-mounted nodes get picked up.
 */
export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
