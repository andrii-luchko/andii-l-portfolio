import { profile } from "../data/profile";
import { GithubIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span className="footer__copy">
          © {new Date().getFullYear()} {profile.name} — {profile.role}
        </span>

        <div className="footer__links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon className="footer__icon" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
          >
            <GithubIcon className="footer__icon" />
          </a>
        </div>

        <a className="footer__top" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
