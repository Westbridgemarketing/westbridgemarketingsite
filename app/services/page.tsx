import type { Metadata } from "next";
import DeveloperServices from "@/components/DeveloperServices";

export const metadata: Metadata = {
  title: "Developer Services | Westbridge Marketing",
};

export default function ServicesPage() {
  return <DeveloperServices />;
}
