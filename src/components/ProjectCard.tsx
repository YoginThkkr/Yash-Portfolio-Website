import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/portfolio";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <div className="rounded-3xl border border-line bg-card p-6 shadow-2xl shadow-black/40 sm:p-10">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-sm text-gray-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-line" />
            <span className="font-mono text-xs text-gray-500">{project.year}</span>
          </div>

          <h3 className="text-2xl font-medium text-gray-100 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{project.subtitle}</p>

          <p className="prose-copy mt-5 max-w-md text-sm text-gray-400 sm:text-base">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-xs text-gray-400"
              >
                {tech}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs uppercase tracking-wider text-gray-600">
            Role &middot; {project.role}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-gradient mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Live project
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0c0c0c]">
              <span className="chrome-text px-6 text-center text-2xl font-semibold leading-tight sm:text-3xl">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
