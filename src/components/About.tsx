import { competencies, profile } from "../data/profile";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell">
        <SectionHead
          index="01"
          title="About"
          lead="Full ownership of the mobile development lifecycle — architecture, delivery and release."
        />

        <div className="about">
          <div className="about__text" data-reveal>
            {profile.summary.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about__meta">
              <div>
                <span className="about__metaLabel">Based in</span>
                <span className="about__metaValue">{profile.location}</span>
              </div>
              <div>
                <span className="about__metaLabel">Focus</span>
                <span className="about__metaValue">Flutter · iOS &amp; Android</span>
              </div>
            </div>
          </div>

          <div className="about__competencies">
            {competencies.map((group, i) => (
              <div
                className="comp"
                key={group.label}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <h3 className="comp__label">{group.label}</h3>
                <ul className="comp__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
