import Link from "next/link";
import Reveal from "./Reveal";

type Stage = {
  title: string;
  body: string;
  proof?: { text: string; href: string };
};

const STAGES: Stage[] = [
  {
    title: "Acquisition & feasibility",
    body: "The earlier we're in the room, the more of the launch we can actually shape. We test pricing assumptions and unit mix against what the immediate market will absorb before a site closes, not after, because a feasibility model built on the wrong comparables is expensive to unwind once construction financing depends on it.",
  },
  {
    title: "Positioning & product",
    body: "Every project gets its own name, its own story, and its own buyer profile, worked out before a single rendering is produced. We'll push back on a floor plan mix or an amenity list if it doesn't match who we think is actually going to buy, because that conversation is far cheaper now than it is once the presentation centre is built.",
  },
  {
    title: "Pre-launch",
    body: "Most of Stage One's list is built before the public ever hears the project's name, through the sub-market's own buyer pool, referrals off other active projects, and a geofenced campaign around the site itself. By the time we open the doors, we already know roughly who's walking through them.",
    proof: {
      text: "See this in motion on our current mandate",
      href: "/projects/luxora",
    },
  },
  {
    title: "Launch",
    body: "Opening weekend is where a strong pre-launch list either converts or it doesn't, so pricing, incentives, and the release sequence all get locked well before the doors open, not adjusted on the fly once the first offers start coming in.",
  },
  {
    title: "Sales & absorption",
    body: "The sales program doesn't stop being ours once the launch numbers are in. We stay on-site through the release schedule, adjusting pricing release by release against what's actually selling instead of what the original model assumed, and reporting back to the developer on absorption in real terms, not just gross sales.",
  },
  {
    title: "Completion & handoff",
    body: "Closing brings its own version of the same job: coordinating with the developer's legal and construction teams so purchasers aren't the ones absorbing delays or surprises, and closing out the marketing story so the finished building matches what we sold people on eighteen months earlier.",
  },
];

export default function OurProcess() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Our Process</p>
            <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[46px] leading-[1.1] tracking-[-0.03em]">
              We stay on a project from acquisition through the last
              closing.
            </h1>
            <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.8] mt-6">
              Most marketing partners get brought in once the site plan is
              already fixed and the only job left is filling a sales
              centre. We'd rather be part of the decisions that happen
              before that, because pricing and unit mix are far easier to
              get right on paper than they are to fix once people are
              already walking through the doors.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          {STAGES.map((s, i) => {
            const isLast = i === STAGES.length - 1;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-ink text-paper font-grotesk font-medium text-sm flex items-center justify-center">
                      {i + 1}
                    </div>
                    {!isLast && (
                      <div className="w-px flex-1 bg-ink/15 mt-2" />
                    )}
                  </div>
                  <div className={isLast ? "pb-0" : "pb-10"}>
                    <h2 className="font-grotesk font-medium text-ink text-lg">
                      {s.title}
                    </h2>
                    <p className="font-archivo font-light text-slate text-[15px] leading-[1.75] mt-2">
                      {s.body}
                    </p>
                    {s.proof && (
                      <Link
                        href={s.proof.href}
                        className="inline-block mt-3 font-archivo text-[12px] uppercase tracking-caps text-fern border-b border-fern/40 pb-0.5 hover:text-ink hover:border-ink transition-colors duration-300 ease-premium"
                      >
                        {s.proof.text}
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-6 border-t border-ink/15 pt-10 max-w-2xl">
            <p className="font-archivo font-light text-slate text-[16px] leading-[1.8]">
              Have a site that's still a few months from a launch date?
              That's exactly the point in the process to start talking.
            </p>
            <Link
              href="/contact"
              className="btn inline-flex mt-5 font-archivo text-[11px] uppercase tracking-caps bg-ink text-paper px-8 py-4 hover:bg-fern"
            >
              Start a Conversation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
