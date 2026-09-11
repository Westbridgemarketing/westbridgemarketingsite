import Hero from "@/components/Hero";
import VisionTeaser from "@/components/VisionTeaser";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessTeaser from "@/components/ProcessTeaser";
import ReportTeaser from "@/components/ReportTeaser";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionTeaser />
      <FeaturedProjects />
      <ProcessTeaser />
      <ReportTeaser />
      <ContactCTA />
    </>
  );
}
