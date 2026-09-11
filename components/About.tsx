import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-4">About</p>
              <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[46px] leading-[1.08] tracking-[-0.03em]">
                We handle the numbers, the story, and the sales program
                behind a project, so developers can put their energy into
                building it.
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 space-y-6 max-w-xl">
                <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.85]">
                  Before ground breaks, we&rsquo;re already reading the
                  market: pricing and unit mix tested against what&rsquo;s
                  actually closing nearby, using data tracked across every
                  active project in the region. That&rsquo;s how a launch
                  gets priced right from day one instead of getting
                  corrected six months into sales.
                </p>
                <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.85]">
                  Every project needs a name, a story, and a buyer profile
                  before a single rendering exists. We build all three, then
                  carry them through the presentation centre, the campaign,
                  and every conversation our sales team has with a buyer. A
                  project needs one clear reason to win against the building
                  down the street, and finding it is our job.
                </p>
                <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.85]">
                  From acquisition through the last closing, we stay on a
                  project: adjusting pricing release by release, running the
                  sales team on-site, and coordinating with legal and
                  construction so purchasers never feel the gap between
                  them. That&rsquo;s what actually turns a site plan into a
                  sold-out building, and it&rsquo;s the part of the job we
                  take full ownership of.
                </p>
                <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.85]">
                  Our own name stays quiet through all of it, one typeface,
                  no symbol, the same understated lockup on everything we
                  touch, because a buyer&rsquo;s attention belongs to the
                  building, not to us. It&rsquo;s a deliberate choice, not a
                  smaller role.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={140}>
              <div className="bg-ink p-8 md:p-10 rounded-sm">
                <p className="eyebrow-onink mb-5">The Scope</p>
                <p className="font-archivo font-light text-paper/75 text-[15px] leading-[1.8]">
                  Every mandate is scoped to what a project actually needs:
                  a single feasibility read, a full sales program, or
                  everything in between. We work alongside your listing
                  brokerage and legal team throughout, so nothing falls in
                  the gap between them.
                </p>
                <Link
                  href="/services"
                  className="inline-block mt-6 font-archivo text-[11px] uppercase tracking-caps border-b border-paper/40 text-paper pb-1 hover:border-paper transition-colors duration-300 ease-premium"
                >
                  See what that looks like
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 border-t border-ink/15 pt-8">
                <p className="eyebrow mb-4">Get in Touch</p>
                <p className="font-archivo font-light text-slate text-[15px] leading-[1.8]">
                  The best time to talk is before a launch date is locked,
                  not after.
                </p>
                <Link
                  href="/contact"
                  className="btn inline-flex mt-5 font-archivo text-[11px] uppercase tracking-caps bg-ink text-paper px-7 py-3.5 hover:bg-fern"
                >
                  Start a Conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
