import Link from "next/link";
import Reveal from "./Reveal";
import type { Report } from "@/lib/reports";

export default function ReportDetail({ report }: { report: Report }) {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-2xl">
            <Link
              href="/report"
              className="font-archivo text-[11px] uppercase tracking-caps text-slate/70 hover:text-ink transition-colors duration-300 ease-premium"
            >
              ← The Westbridge Report
            </Link>
            <div className="flex items-center gap-3 mt-6">
              <span className="font-archivo text-[10px] uppercase tracking-caps text-fern">
                {report.edition}
              </span>
              <span className="font-archivo text-[10px] uppercase tracking-caps text-slate/60">
                {report.date}
              </span>
            </div>
            <h1 className="font-grotesk font-medium text-ink text-[30px] md:text-[42px] leading-[1.1] tracking-[-0.03em] mt-4">
              {report.title}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 max-w-xl space-y-6 border-t border-ink/10 pt-10">
            {report.body.map((para, i) => (
              <p
                key={i}
                className="font-archivo font-light text-slate text-[16px] leading-[1.85]"
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 border-t border-ink/10 pt-10 max-w-xl">
            <p className="font-archivo font-light text-slate text-[15px] leading-[1.8]">
              Have a project this touches on? We're always glad to talk
              through what it means for a specific site.
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
