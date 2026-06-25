import type { Project } from "@/data/projects";
import { SkillBadge } from "./SkillBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bento-card flex h-full flex-col p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          {project.type ? (
            <p className="text-sm font-semibold text-teal-300">{project.type}</p>
          ) : null}
          <h2 className="mt-2 text-2xl font-bold leading-tight text-white">{project.title}</h2>
        </div>
        {project.link ? (
          <a href={project.link} className="secondary-button shrink-0 px-4 py-2">
            查看链接
          </a>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <SkillBadge key={tech} label={tech} />
        ))}
      </div>

      <p className="mt-5 leading-7 text-slate-300">{project.description}</p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-line bg-slate-950/38 p-4">
          <h3 className="font-semibold text-white">核心功能</h3>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.highlights ? (
          <div className="rounded-lg border border-line bg-slate-950/38 p-4">
            <h3 className="font-semibold text-white">项目亮点</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}