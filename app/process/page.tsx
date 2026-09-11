import type { Metadata } from "next";
import OurProcess from "@/components/OurProcess";

export const metadata: Metadata = {
  title: "Our Process | Westbridge Marketing",
};

export default function ProcessPage() {
  return <OurProcess />;
}
