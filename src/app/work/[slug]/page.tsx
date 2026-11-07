import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoGrid from "@/components/PhotoGrid";
import SiteLogo from "@/components/SiteLogo";
import ThemeToggle from "@/components/ThemeToggle";
import extras from "@/data/behance-extras.json";
import { categoryLabels, getProject, projects } from "@/data/projects";

type ProjectExtra = {
  tags?: string[];
  links?: { label: string; href: string }[];
  assets?: string[];
  videoUrl?: string;
};

const projectExtras = extras as Record<string, ProjectExtra>;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Absolon Designs`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://absolondesigns.com/work/${project.slug}/`,
      images: [{ url: project.image, alt: project.imageAlt }],
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const extra = projectExtras[project.slug];
  const assets = extra?.assets ?? [];
  const links = [
    ...(project.liveUrl ? [{ label: "Visit the live site", href: project.liveUrl }] : []),
    ...(extra?.links ?? []),
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--header-bg)] backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/#home" className="flex items-center gap-4">
            <SiteLogo priority />
            <span className="hidden text-lg font-bold sm:block">Absolon Designs</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/#projects" className="hover:text-[var(--primary)]">
              All projects
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main
        className={`container mx-auto flex-1 px-4 py-12 md:py-16 ${
          project.slug === "photography" ? "max-w-6xl" : "max-w-5xl"
        }`}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          {categoryLabels[project.category]}
        </p>
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">{project.title}</h1>
        {assets.length === 0 ? (
          <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--card-border)]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>
        ) : null}
        <p className="text-lg leading-relaxed text-[var(--text-secondary)]">{project.description}</p>
        <p className="mt-6 text-sm text-[var(--text-muted)]">{project.tools.join(" · ")}</p>
        {extra?.tags?.length ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {extra.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--card-border)] px-3 py-1 text-sm text-[var(--text-secondary)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {links.length ? (
          <div className="mt-8">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Links
            </h2>
            <ul className="flex flex-wrap gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-[var(--primary-fill)] px-5 py-2.5 text-white hover:brightness-90"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        {extra?.videoUrl ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--card-border)]">
            <iframe
              src={extra.videoUrl}
              title={`${project.title} video`}
              className="aspect-video w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : null}
        {assets.length ? (
          <section className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Project assets
            </h2>
            {project.slug === "photography" ? (
              <PhotoGrid assets={assets} title={project.title} />
            ) : (
              <div className="flex flex-col gap-6">
                {assets.map((src, assetIndex) => (
                  <a key={src} href={src} target="_blank" rel="noopener noreferrer">
                    {/* Full Behance modules, not cropped cards */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.title} asset ${assetIndex + 1}`}
                      className="w-full rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]"
                    />
                  </a>
                ))}
              </div>
            )}
          </section>
        ) : null}
        <div className="mt-8">
          <Link
            href={`/work/${next.slug}/`}
            className="inline-block rounded-full border border-[var(--card-border)] px-5 py-2.5 hover:bg-[var(--input-bg)]"
          >
            Next: {next.title}
          </Link>
        </div>
        {project.behanceUrl ? (
          <p className="mt-8 text-sm text-[var(--text-muted)]">
            Originally published on{" "}
            <a
              href={project.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--primary)]"
            >
              Behance
            </a>
            .
          </p>
        ) : null}
      </main>
    </div>
  );
}
