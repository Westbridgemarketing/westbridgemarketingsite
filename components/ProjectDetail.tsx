import Link from "next/link";
import Reveal from "./Reveal";
import Wordmark from "./Wordmark";
import type { Project } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <>
      <section className="relative bg-ink -mt-[88px] pt-[160px] pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 h-[3px] w-32 bg-fern-light" />
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} exterior`}
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
        ) : (
          <div className="absolute inset-0 photo-placeholder text-[10px] opacity-60">
            Project photography
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

        <div className="relative max-w-content mx-auto px-6 md:px-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-archivo text-[10px] uppercase tracking-caps bg-paper text-ink px-3 py-1.5">
                {project.status}
              </span>
              <span className="font-archivo text-[11px] uppercase tracking-caps text-paper/60">
                {project.location}
              </span>
            </div>
            <h1 className="font-grotesk font-medium text-paper text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.03em]">
              {project.name}
            </h1>
            <p className="font-archivo font-light text-paper/70 text-[16px] md:text-[18px] leading-[1.7] mt-5 max-w-xl">
              {project.teaser}
            </p>
            <a
              href={`https://${project.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-7 font-archivo text-[11px] uppercase tracking-caps text-paper border-b border-fern-light pb-1 hover:border-paper transition-colors duration-300 ease-premium"
            >
              Visit {project.website} ↗
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">The Story</p>
              <div className="space-y-6 max-w-xl">
                {project.summary.map((para, i) => (
                  <p
                    key={i}
                    className="font-archivo font-light text-slate text-[16px] leading-[1.85]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={100}>
              <div className="bg-sage p-8 rounded-sm">
                <p className="eyebrow mb-5">At a Glance</p>
                <dl className="space-y-4">
                  {[
                    ["Typology", project.typology],
                    ["Homes", project.units],
                    ["Stage", project.stage],
                    ["Positioning", project.positioning],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="border-t border-ink/10 pt-4 first:border-t-0 first:pt-0"
                    >
                      <dt className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
                        {k}
                      </dt>
                      <dd className="font-grotesk text-ink text-[15px] mt-1 leading-snug">
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <a
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-6 flex items-center justify-center font-archivo text-[11px] uppercase tracking-caps bg-ink text-paper px-7 py-3.5 hover:bg-fern"
              >
                Visit the Project Website ↗
              </a>

              <div className="mt-8 flex items-center gap-3">
                <span className="font-archivo text-[10px] uppercase tracking-caps text-slate/60">
                  Marketed by
                </span>
                <Wordmark form="short" tone="ink" size="sm" />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="max-w-content mx-auto px-6 md:px-10 mt-16 pt-10 border-t border-ink/10">
          <Link
            href="/projects"
            className="font-archivo text-[11px] uppercase tracking-caps text-ink/70 border-b border-ink/30 pb-1 hover:text-ink hover:border-ink transition-colors duration-300 ease-premium"
          >
            ← All active projects
          </Link>
        </div>
      </section>
    </>
  );
}
