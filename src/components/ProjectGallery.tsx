"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  categoryLabels,
  projects,
  type ProjectCategory,
} from "@/data/projects";

const filters: Array<ProjectCategory | "all"> = [
  "all",
  "web",
  "brand",
  "print",
  "motion",
  "photo",
];

const mixOrder: ProjectCategory[] = ["web", "brand", "print", "motion"];

function mixProjects(list: typeof projects) {
  const buckets = new Map<ProjectCategory, typeof projects>();
  for (const project of list) {
    const bucket = buckets.get(project.category) ?? [];
    bucket.push(project);
    buckets.set(project.category, bucket);
  }

  const mixed: typeof projects = [];
  let tookOne = true;
  while (tookOne) {
    tookOne = false;
    for (const category of mixOrder) {
      const next = buckets.get(category)?.shift();
      if (next) {
        mixed.push(next);
        tookOne = true;
      }
    }
  }

  for (const bucket of buckets.values()) {
    mixed.push(...bucket);
  }
  return mixed;
}

export default function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = useMemo(
    () =>
      filter === "all"
        ? mixProjects(projects)
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="overflow-x-clip py-8 md:py-12">
      <div className="container mx-auto px-4">
      <div className="mx-auto mb-6 max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          Portfolio
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Work you can read here</h2>
        <p className="text-[var(--text-secondary)]">
          Websites, campaigns, print, and motion. Open any piece for the full description — you stay on this site.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects">
        {filters.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(key)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active
                  ? "bg-[var(--primary)] text-white"
                  : "border border-[var(--card-border)] text-[var(--text-secondary)] hover:bg-[var(--input-bg)]"
              }`}
            >
              {categoryLabels[key]}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-6 xl:grid-cols-3">
        {visible.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            className={`group block overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-md outline-none transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
              index === 0 && filter === "all" ? "md:col-span-2 xl:col-span-2" : ""
            }`}
          >
            <div className="relative h-32 overflow-hidden sm:h-48 md:h-72">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                {categoryLabels[project.category]}
              </span>
            </div>
            <div className="p-3 sm:p-6">
              <h3 className="mb-1 text-sm font-bold sm:mb-2 sm:text-xl">{project.title}</h3>
              <p className="hidden line-clamp-3 text-[var(--text-secondary)] sm:block">{project.description}</p>
              <p className="mt-2 line-clamp-1 text-xs text-[var(--text-muted)] sm:mt-4 sm:text-sm">{project.tools.join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
