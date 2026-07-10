import type { MetadataRoute } from "next";

const baseUrl = "https://steel-beam.org";

const routes = [
  "/",
  "/about",
  "/how-we-help",
  "/client-journey",
  "/contractor-success-center",
  "/contractor-success-center/cash-flow-vs-revenue",
  "/contractor-success-center/markup-vs-margin-calculator",
  "/contractor-success-center/monthly-bookkeeping-checklist",
  "/answers",
  "/client-portal",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
