import Link from "next/link";
import Reveal from "./Reveal";

export default function VisionTeaser() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">How We Work</p>
            <h2 className="font-grotesk font-medium text-ink text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.03em]">
              We price the launch, build the story, and run the sales
              program, so a project sells on schedule instead of sitting.
            </h2>
            <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.75] mt-6">
              Every project gets its own pricing model, its own name, and
              its own campaign, built from the data we track across the
              market, not a template pulled from the last mandate.
              That&rsquo;s the work our own brand stays quiet for, so buyers
              are looking at the building, not us.
            </p>
            <Link
              href="/about"
              className="inline-block mt-5 font-archivo text-[11px] uppercase tracking-caps border-b border-ink text-ink pb-1 hover:text-fern hover:border-fern transition-colors duration-300 ease-premium"
            >
              Read our approach
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
