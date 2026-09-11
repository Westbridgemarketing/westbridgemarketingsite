import Link from "next/link";
import Reveal from "./Reveal";
import Wordmark from "./Wordmark";

export default function Hero() {
  return (
    <section className="relative bg-ink min-h-[92vh] flex items-end overflow-hidden -mt-[88px]">
      {/* the wordmark's own accent line is this surface's one fern element */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/hero.mp4"
        poster="/video/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="relative max-w-content mx-auto w-full px-6 md:px-10 pb-20 md:pb-28 pt-40">
        <Reveal>
          <Wordmark form="service" tone="paper" size="xl" />
        </Reveal>
        <Reveal delay={100}>
          <p className="font-archivo font-light text-paper/75 text-[17px] md:text-[19px] leading-[1.7] mt-8 max-w-lg">
            We plan and run the marketing and sales program behind new
            residential developments across Metro Vancouver, from the first
            pricing conversation through to the last unit closing.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex flex-wrap items-center gap-5 mt-10">
            <Link
              href="/contact"
              className="btn font-archivo text-[11px] uppercase tracking-caps bg-paper text-ink px-8 py-4 hover:bg-fern-light"
            >
              Talk to us about a launch
            </Link>
            <Link
              href="/projects"
              className="font-archivo text-[11px] uppercase tracking-caps text-paper/75 border-b border-paper/40 pb-1 hover:text-paper hover:border-paper transition-colors duration-300 ease-premium"
            >
              See active projects
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
