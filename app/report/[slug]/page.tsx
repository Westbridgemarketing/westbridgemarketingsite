import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { REPORTS, getReport } from "@/lib/reports";
import ReportDetail from "@/components/ReportDetail";

export function generateStaticParams() {
  return REPORTS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReport(slug);
  return {
    title: report
      ? `${report.title} | The Westbridge Report`
      : "The Westbridge Report",
  };
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReport(slug);
  if (!report) notFound();
  return <ReportDetail report={report} />;
}
