import { useEffect, useState } from "react";
import { profile } from "../data/profile";
import { DEFAULT_SUBJECT, mailto } from "../lib/mail";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: the last section whose top has passed the header is active.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const onScroll = () => {
      const line = window.scrollY + 140;
      let current = "";
      for (const section of sections) {
        if (section.offsetTop <= line) current = section.id;
      }
      // pin the final section once the page bottom is reached
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 40) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            AL
          </span>
          <span className="nav__brandText">
            {profile.name}
            <span className="nav__brandRole">{profile.role}</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? "is-active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href={mailto(profile.email, DEFAULT_SUBJECT)}>
          Hire me
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="nav__drawerCta"
          href={mailto(profile.email, DEFAULT_SUBJECT)}
          onClick={() => setOpen(false)}
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
