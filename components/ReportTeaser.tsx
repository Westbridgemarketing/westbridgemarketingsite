import Link from "next/link";
import Reveal from "./Reveal";
import { REPORTS } from "@/lib/reports";

export default function ReportTeaser() {
  const items = REPORTS.slice(0, 2);
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">The Westbridge Report</p>
              <h2 className="font-grotesk font-medium text-ink text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.03em]">
                What we&rsquo;re seeing in the market.
              </h2>
            </div>
            <Link
              href="/report"
              className="font-archivo text-[11px] uppercase tracking-caps text-ink/70 border-b border-ink/30 pb-1 hover:text-ink hover:border-ink transition-colors duration-300 ease-premium whitespace-nowrap"
            >
              Read the Report
            </Link>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {items.map((r, i) => (
            <Reveal key={r.slug} delay={i * 100}>
              <Link
                href={`/report/${r.slug}`}
                className="group block border-t border-ink/15 pt-6"
              >
                <div className="flex items-center gap-3">
                  <span className="font-archivo text-[10px] uppercase tracking-caps text-fern">
                    {r.edition}
                  </span>
                  <span className="font-archivo text-[10px] uppercase tracking-caps text-slate/60">
                    {r.date}
                  </span>
                </div>
                <h3 className="font-grotesk font-medium text-ink text-xl mt-3 group-hover:text-fern transition-colors duration-300 ease-premium">
                  {r.title}
                </h3>
                <p className="font-archivo font-light text-slate text-[14px] leading-[1.7] mt-2">
                  {r.summary}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
