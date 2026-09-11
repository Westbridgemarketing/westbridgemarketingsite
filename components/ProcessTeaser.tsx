import Link from "next/link";
import Reveal from "./Reveal";

const STAGES = ["Acquisition", "Positioning", "Launch", "Sales", "Completion"];

export default function ProcessTeaser() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow-onink mb-4">Our Process</p>
              <h2 className="font-grotesk font-medium text-paper text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.03em]">
                We come in at acquisition, not after the site plan is
                already set.
              </h2>
              <p className="font-archivo font-light text-paper/70 text-[16px] md:text-[17px] leading-[1.75] mt-6 max-w-lg">
                Pricing and unit mix are easy to fix on paper and expensive
                to fix after a sales centre opens, so we&rsquo;d rather be
                in the room while the site plan is still a site plan. From
                there we stay through launch, through the sales program
                itself, and through completion, instead of handing off once
                the campaign is live.
              </p>
              <Link
                href="/process"
                className="inline-block mt-6 font-archivo text-[11px] uppercase tracking-caps border-b border-paper/40 text-paper pb-1 hover:border-paper transition-colors duration-300 ease-premium"
              >
                See the full process
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={100}>
              <div className="border-l border-paper/20 pl-6 space-y-5">
                {STAGES.map((s, i) => (
                  <div key={s} className="flex items-center gap-4">
                    <span className="font-grotesk font-medium text-fern-light text-sm w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-archivo text-[13px] uppercase tracking-caps text-paper/75">
                      {s}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
