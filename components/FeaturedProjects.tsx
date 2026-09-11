import Link from "next/link";
import Reveal from "./Reveal";
import { PROJECTS } from "@/lib/projects";

export default function FeaturedProjects() {
  const project = PROJECTS[0];

  return (
    <section className="bg-sage py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-4">Active Projects</p>
          <h2 className="font-grotesk font-medium text-ink text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.03em] max-w-xl">
            What we&rsquo;re marketing right now.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-14 items-center">
            <Link
              href={`/projects/${project.slug}`}
              className="group block md:col-span-6"
            >
              <div className="aspect-[4/3] relative overflow-hidden rounded-sm">
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

            <div className="md:col-span-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-grotesk font-medium text-ink text-2xl md:text-3xl">
                  {project.name}
                </h3>
                <span className="font-archivo text-[11px] uppercase tracking-caps text-slate whitespace-nowrap">
                  {project.location}
                </span>
              </div>
              <p className="font-archivo font-light text-slate text-[15px] leading-[1.8] mt-4 max-w-md">
                {project.teaser}
              </p>
              <div className="flex items-center gap-6 mt-5 font-archivo text-[11px] uppercase tracking-caps text-slate/70">
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
