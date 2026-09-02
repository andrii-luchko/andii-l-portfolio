import { profile, projects } from "../data/profile";
import { ArrowIcon, DownloadIcon } from "./Icons";
import PhoneMock from "./PhoneMock";

const shipped = projects.filter((p) => p.appStore || p.googlePlay).length;

const stats = [
  { value: `${profile.yearsExperience}+`, label: "Years with Flutter" },
  { value: `${shipped}`, label: "Apps live on stores" },
  { value: "iOS · Android", label: "Cross-platform" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__grid" />
      </div>

      <div className="shell hero__inner">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__badgeDot" />
            Available for new projects
          </span>

          <h1 className="hero__title">
            {profile.name}
            <span className="hero__titleAccent">{profile.role}</span>
          </h1>

          <p className="hero__lede">
            {profile.yearsExperience} years of commercial experience building
            cross-platform mobile applications with Flutter and Dart — shipped from
            MVP to App Store and Google Play release.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#work">
              View my work
              <ArrowIcon className="btn__icon" />
            </a>
            <a className="btn btn--ghost" href={profile.cvUrl} download>
              <DownloadIcon className="btn__icon" />
              Download CV
            </a>
          </div>

          <ul className="hero__stats">
            {stats.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <PhoneMock />
        </div>
      </div>
    </section>
  );
}
