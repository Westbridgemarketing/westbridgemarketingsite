import type { Metadata } from "next";
import ReportIndex from "@/components/ReportIndex";

export const metadata: Metadata = {
  title: "The Westbridge Report | Westbridge Marketing",
};

export default function ReportPage() {
  return <ReportIndex />;
}
