import type { CSSProperties } from "react";
import { projects, type Project } from "../data/profile";
import { AppleIcon, ArrowIcon, PlayIcon } from "./Icons";
import SectionHead from "./SectionHead";

function StoreLinks({ project }: { project: Project }) {
  const hasLinks = Boolean(project.appStore || project.googlePlay);

  if (!hasLinks) {
    return (
      <div className="project__stores">
        <span className="storeBadge storeBadge--muted">
          {project.status ?? "In development"}
        </span>
      </div>
    );
  }

  return (
    <div className="project__stores">
      {project.appStore && (
        <a
          className="storeBadge"
          href={project.appStore}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.name} on the App Store`}
        >
          <AppleIcon className="storeBadge__icon" />
          <span>
            <small>Download on the</small>
            App Store
          </span>
        </a>
      )}
      {project.googlePlay && (
        <a
          className="storeBadge"
          href={project.googlePlay}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${project.name} on Google Play`}
        >
          <PlayIcon className="storeBadge__icon" />
          <span>
            <small>Get it on</small>
            Google Play
          </span>
        </a>
      )}
      {project.website && (
        <a
          className="siteLink"
          href={project.website}
          target="_blank"
          rel="noreferrer noopener"
        >
          Visit site
          <ArrowIcon className="siteLink__icon" />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="project"
      data-reveal
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <div className="project__head">
        <span className="project__num">{String(index + 1).padStart(2, "0")}</span>
        <div className="project__titleWrap">
          <h3 className="project__name">{project.name}</h3>
          <span className="project__role">{project.role}</span>
        </div>
        {project.status && <span className="project__status">{project.status}</span>}
      </div>

      <p className="project__summary">{project.summary}</p>

      <div className="project__body">
        <div className="project__col">
          <h4 className="project__colLabel">What I built</h4>
          <ul className="project__highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <div className="project__col project__col--side">
          <h4 className="project__colLabel">Outcome</h4>
          <p className="project__result">{project.result}</p>

          <h4 className="project__colLabel">Stack</h4>
          <ul className="project__tech">
            {project.tech.map((t) => (
              <li className="tag tag--sm" key={t}>
                {t}
              </li>
            ))}
          </ul>

          <StoreLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="shell">
        <SectionHead
          index="03"
          title="Selected work"
          lead="Production apps taken from architecture through to store release."
        />

        <div className="projects">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
