import Link from "next/link";
import Reveal from "./Reveal";

const SERVICES = [
  {
    title: "Market & Feasibility Advisory",
    body: "Before a site closes, we'll stress-test the pricing and unit mix assumptions in your pro forma against what the immediate sub-market can actually absorb, using the same data we track across every active project in the region, not a generic market report.",
  },
  {
    title: "Brand & Positioning",
    body: "Every project needs an answer to a simple question: why this building, for this buyer, in this location, right now. We work that out before a name or a rendering exists, and everything downstream, from the sales centre to the first ad, gets built to support that answer.",
  },
  {
    title: "Sales Strategy & Pricing",
    body: "Release sequencing, deposit structure, and pricing by floor plan all get set as a strategy, not a spreadsheet handed off once. We revisit pricing release by release against real absorption data, so the numbers stay grounded in what's actually selling.",
  },
  {
    title: "Marketing & Campaign Execution",
    body: "Pre-launch lead generation, paid media, the presentation centre experience, and everything printed or produced for the project, run as one campaign built around this specific building rather than a template reused across every mandate we've got.",
  },
  {
    title: "On-Site Sales Team",
    body: "A dedicated sales team lives in your presentation centre through the release schedule, trained on this project's specific story and objection points, not rotated in from whatever's available that week.",
  },
  {
    title: "Purchaser & Closing Care",
    body: "From firm deal to keys, we stay the point of contact for your purchasers, coordinating with your legal and construction teams so questions get answered and problems get caught before they become closing-day surprises.",
  },
];

export default function DeveloperServices() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Developer Services</p>
            <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[46px] leading-[1.1] tracking-[-0.03em]">
              What we actually do, end to end.
            </h1>
            <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.8] mt-6">
              Some of this you'll want from day one. Some of it only
              matters once you're closer to a launch date. Either way, it's
              one team carrying the project through, not a handoff between
              a research firm, an ad agency, and a sales brokerage.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-14 mt-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 80}>
              <div className="border-t border-ink/15 pt-6">
                <span className="font-archivo text-[10px] uppercase tracking-caps text-fern">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-grotesk font-medium text-ink text-xl mt-3">
                  {s.title}
                </h2>
                <p className="font-archivo font-light text-slate text-[15px] leading-[1.75] mt-3 max-w-md">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-ink/15 pt-10 max-w-2xl">
            <p className="font-archivo font-light text-slate text-[16px] leading-[1.8]">
              Not sure which of this you need yet? That's a normal place to
              start, and usually the acquisition or feasibility conversation
              answers it.
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
