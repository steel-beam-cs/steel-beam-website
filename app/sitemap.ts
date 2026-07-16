import type { MetadataRoute } from "next";
import { routeMap } from "@/components/site-data";

const baseUrl = "https://steel-beam.org";

const routes = [
  "/",
  "/about",
  "/how-we-help",
  "/cleanup-bookkeeping",
  "/client-journey",
  "/contractor-success-center",
  "/contractor-success-center/cash-flow-vs-revenue",
  "/contractor-success-center/clean-books-readiness-checklist",
  "/contractor-success-center/job-costing-basics",
  "/contractor-success-center/markup-vs-margin-calculator",
  "/contractor-success-center/monthly-bookkeeping-checklist",
  "/contractor-success-center/payroll-readiness-checklist",
  "/contractor-success-center/what-to-send-your-bookkeeper",
  "/answers",
  "/client-portal",
  "/contact",
  ...Object.values(routeMap.es),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
