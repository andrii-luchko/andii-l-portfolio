import portrait from "../assets/andrii.jpg";
import { profile } from "../data/profile";
import { ArrowIcon, DownloadIcon } from "./Icons";
import PhoneMock from "./PhoneMock";

const stats = [
  { value: `${profile.yearsExperience}+`, label: "Years with Flutter" },
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
          <div className="portrait">
            <span className="portrait__frame" aria-hidden="true" />
            <div className="portrait__media">
              <img
                src={portrait}
                alt={`${profile.name}, ${profile.role}`}
                width={760}
                height={1013}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="portrait__phone">
              <PhoneMock />
            </div>

            {/* full-size chips live here rather than inside the scaled phone,
                where they would render too small to read */}
            <span className="portrait__chip portrait__chip--1">Flutter</span>
            <span className="portrait__chip portrait__chip--2">BLoC</span>
            <span className="portrait__chip portrait__chip--3">Firebase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
