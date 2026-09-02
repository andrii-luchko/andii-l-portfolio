import { skillGroups } from "../data/profile";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="shell">
        <SectionHead
          index="02"
          title="Skills & tooling"
          lead="The stack I reach for across production mobile work."
        />

        <div className="skills">
          {skillGroups.map((group, i) => (
            <div
              className="skillGroup"
              key={group.label}
              data-reveal
              style={{ transitionDelay: `${i * 55}ms` }}
            >
              <h3 className="skillGroup__label">{group.label}</h3>
              <ul className="skillGroup__tags">
                {group.items.map((item) => (
                  <li className="tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
