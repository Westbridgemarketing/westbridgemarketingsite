import Link from "next/link";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";

export default function ProjectsIndex() {
  const project = PROJECTS[0];

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Active Projects</p>
            <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em]">
              What we&rsquo;re marketing right now.
            </h1>
            <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.8] mt-6">
              One live mandate at a time, not a portfolio of everything
              we&rsquo;ve ever touched. It gets its own pricing strategy, its
              own buyer profile, and its own campaign, built around the site
              rather than pulled off a template.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 mt-16 items-center border-t border-ink/10 pt-16">
            <Link
              href={`/projects/${project.slug}`}
              className="group block md:col-span-7"
            >
              <div className="aspect-[16/11] relative overflow-hidden rounded-sm">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={`${project.name} exterior`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-premium group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 photo-placeholder transition-transform duration-500 ease-premium group-hover:scale-[1.03]">
                    Project photography
                  </div>
                )}
                <span className="absolute top-4 left-4 font-archivo text-[10px] uppercase tracking-caps bg-paper text-ink px-3 py-1.5">
                  {project.status}
                </span>
              </div>
            </Link>

            <div className="md:col-span-5">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-grotesk font-medium text-ink text-3xl md:text-4xl group-hover:text-fern transition-colors duration-300 ease-premium">
                  {project.name}
                </h2>
              </div>
              <span className="font-archivo text-[11px] uppercase tracking-caps text-slate whitespace-nowrap">
                {project.location}
              </span>
              <p className="font-archivo font-light text-slate text-[15px] leading-[1.8] mt-4 max-w-sm">
                {project.teaser}
              </p>
              <div className="flex flex-col gap-2 mt-5 font-archivo text-[11px] uppercase tracking-caps text-slate/70">
                <span>{project.typology}</span>
                <span>{project.units}</span>
                <span>{project.stage}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-7">
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-archivo text-[11px] uppercase tracking-caps text-ink border-b border-ink/30 pb-1 hover:text-fern hover:border-fern transition-colors duration-300 ease-premium"
                >
                  See the full profile
                </Link>
                <a
                  href={`https://${project.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-archivo text-[11px] uppercase tracking-caps text-slate border-b border-slate/30 pb-1 hover:text-ink hover:border-ink transition-colors duration-300 ease-premium"
                >
                  Visit {project.website} ↗
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
