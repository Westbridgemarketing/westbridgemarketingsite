// PROJECT DATA — Luxora is a real, active mandate (Pacific New Homes,
// Central Port Coquitlam, liveatluxora.ca). Every fact below is pulled from
// confirmed project documentation: location, developer, floorplan count and
// square footage range, and positioning line. Storey count and total unit
// count are deliberately left out because neither is confirmed anywhere in
// that documentation — don't infer or add them. Photography is still a
// placeholder (see .photo-placeholder in globals.css) until real renderings
// or site photos are supplied.

export type ProjectStatus = "Now Selling" | "Coming Soon" | "Sold Out";

export type Project = {
  slug: string;
  name: string;
  location: string;
  typology: string;
  status: ProjectStatus;
  stage: string;
  units: string;
  teaser: string;
  summary: string[];
  positioning: string;
  website: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "luxora",
    name: "Luxora",
    location: "Central Port Coquitlam, BC",
    typology: "Studio to three-bedroom homes",
    status: "Coming Soon",
    stage: "Pre-launch",
    units: "13 floorplans",
    teaser:
      "Studio to three-bedroom homes opposite Elks Park in Central Port Coquitlam, built by Pacific New Homes.",
    summary: [
      "Luxora sits directly across from Elks Park in Central Port Coquitlam, close enough that the park functions as a daily amenity instead of a rendering backdrop. Pacific New Homes brought us on early, and we built the positioning around that one geographic fact rather than a generic lifestyle pitch.",
      "Thirteen floorplans run from a 533 square foot studio to a 908 square foot three-bedroom, a range wide enough to cover a first-time buyer and a family staying in the same building. We're building the pre-launch list around that mix now, through the neighbourhood itself and referrals, ahead of a public campaign.",
    ],
    positioning: "Parkside living, adjacent to Elks Park.",
    website: "liveatluxora.ca",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
