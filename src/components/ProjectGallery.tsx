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

export default function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
      <div className="mx-auto mb-10 max-w-2xl text-center">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            className={`group block overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-md outline-none transition duration-500 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
              index === 0 && filter === "all" ? "md:col-span-2 xl:col-span-2" : ""
            }`}
          >
            <div className="relative h-64 overflow-hidden md:h-72">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {categoryLabels[project.category]}
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
              <p className="line-clamp-3 text-[var(--text-secondary)]">{project.description}</p>
              <p className="mt-4 text-sm text-[var(--text-muted)]">{project.tools.join(" · ")}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    </section>
  );
}
