import Link from "next/link";
import Reveal from "./Reveal";
import { REPORTS } from "@/lib/reports";

export default function ReportIndex() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">The Westbridge Report</p>
            <h1 className="font-grotesk font-medium text-ink text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.03em]">
              What we&rsquo;re seeing across active projects.
            </h1>
            <p className="font-archivo font-light text-slate text-[16px] md:text-[17px] leading-[1.8] mt-6">
              Short, dated reads on absorption, pricing, and deal structure,
              built from what we're tracking across our own mandates, not a
              generic industry roundup. New entries land as there's
              something worth saying, not on a forced schedule.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 max-w-2xl divide-y divide-ink/10">
          {REPORTS.map((r, i) => (
            <Reveal key={r.slug} delay={i * 80}>
              <Link
                href={`/report/${r.slug}`}
                className="group block py-8 first:pt-0"
              >
                <div className="flex items-center gap-3">
                  <span className="font-archivo text-[10px] uppercase tracking-caps text-fern">
                    {r.edition}
                  </span>
                  <span className="font-archivo text-[10px] uppercase tracking-caps text-slate/60">
                    {r.date}
                  </span>
                  <span className="font-archivo text-[10px] uppercase tracking-caps text-slate/40">
                    {r.category}
                  </span>
                </div>
                <h2 className="font-grotesk font-medium text-ink text-2xl mt-3 group-hover:text-fern transition-colors duration-300 ease-premium">
                  {r.title}
                </h2>
                <p className="font-archivo font-light text-slate text-[15px] leading-[1.75] mt-2">
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
