import { profile } from "../data/profile";
import { ArrowIcon, GithubIcon, MailIcon } from "./Icons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="shell">
        <div className="contact__card" data-reveal>
          <span className="contact__eyebrow">05 — Contact</span>
          <h2 className="contact__title">
            Have a mobile app to build?
            <span>Let’s talk about it.</span>
          </h2>
          <p className="contact__lede">
            Open to cross-platform Flutter work — new products from scratch, or joining
            an existing codebase that needs architecture and delivery.
          </p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <MailIcon className="btn__icon" />
              {profile.email}
              <ArrowIcon className="btn__icon btn__icon--trail" />
            </a>
            <a
              className="btn btn--ghost"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon className="btn__icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
