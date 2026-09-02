import { education, languages } from "../data/profile";
import SectionHead from "./SectionHead";

export default function Background() {
  return (
    <section className="section section--alt" id="background">
      <div className="shell">
        <SectionHead index="04" title="Background" />

        <div className="background">
          <div className="panel" data-reveal>
            <h3 className="panel__label">Education</h3>
            <div className="panel__row">
              <strong className="panel__primary">{education.qualification}</strong>
              <span className="panel__secondary">{education.institution}</span>
            </div>
          </div>

          <div className="panel" data-reveal style={{ transitionDelay: "90ms" }}>
            <h3 className="panel__label">Languages</h3>
            <ul className="langs">
              {languages.map((lang) => (
                <li className="lang" key={lang.name}>
                  <div className="lang__top">
                    <strong>{lang.name}</strong>
                    <span className="lang__level">{lang.level}</span>
                  </div>
                  <span className="lang__detail">{lang.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
