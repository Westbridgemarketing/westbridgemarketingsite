import type { Metadata } from "next";
import ProjectsIndex from "@/components/ProjectsIndex";

export const metadata: Metadata = {
  title: "Active Projects | Westbridge Marketing",
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
