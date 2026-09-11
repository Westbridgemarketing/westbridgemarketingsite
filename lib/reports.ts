// SAMPLE DATA — placeholder entries showing the intended cadence and format
// of The Westbridge Report. Replace with real editions once the first one
// is written.

export type Report = {
  slug: string;
  title: string;
  edition: string;
  date: string;
  category: string;
  summary: string;
  body: string[];
};

export const REPORTS: Report[] = [
  {
    slug: "fraser-valley-absorption-q3-2026",
    title: "Fraser Valley absorption, Q3 2026",
    edition: "Quarterly Read",
    date: "September 2026",
    category: "Absorption",
    summary:
      "Presale absorption across Coquitlam, Port Moody, and the Tri-Cities held steadier than Metro Vancouver's average this quarter, and the reason isn't price.",
    body: [
      "Presale absorption across Coquitlam, Port Moody, and the Tri-Cities held steadier than Metro Vancouver's average this quarter, and the reason isn't price. It's proximity to the Evergreen Line combined with a school-catchment story that resale can't easily compete with, since most of resale's detached inventory in the same catchments sits well above what a young family can actually finance.",
      "Three of the six active concrete projects in the sub-market moved through Stage One inside 90 days. The three that didn't shared one trait: pricing set against a citywide comparable set instead of the immediate walking radius. That's the mistake worth watching for on anything launching into this corridor over the next two quarters.",
    ],
  },
  {
    slug: "reading-a-deposit-structure",
    title: "What a deposit structure is actually telling you",
    edition: "Field Note",
    date: "August 2026",
    category: "Deal Structure",
    summary:
      "A developer's deposit schedule says more about how confident they are in their own construction timeline than their marketing materials ever will.",
    body: [
      "A developer's deposit schedule says more about how confident they are in their own construction timeline than their marketing materials ever will. A steep, front-loaded structure, most or all of the deposit due inside the first year, usually means the project is financed in a way that needs that capital moving early, not that the building itself is riskier.",
      "The structures worth a second look are the ones stretched unusually thin toward completion. That can be a genuine buyer-friendly choice. It can also mean the project's financing depends on presale revenue arriving on a schedule the construction timeline hasn't caught up to yet. Worth a direct question before it's worth a decision.",
    ],
  },
];

export function getReport(slug: string) {
  return REPORTS.find((r) => r.slug === slug);
}
