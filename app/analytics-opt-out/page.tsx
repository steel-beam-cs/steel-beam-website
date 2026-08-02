import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { AnalyticsOptOutControl } from "./AnalyticsOptOutControl";

export const metadata: Metadata = {
  title: "Analytics Opt-Out",
  description: "Private browser controls for Steel Beam website analytics.",
  alternates: {
    canonical: "/analytics-opt-out",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AnalyticsOptOutPage() {
  return (
    <PageShell currentPath="/analytics-opt-out">
      <section className="section" aria-labelledby="analytics-opt-out-heading">
        <div className="container narrow py-16 md:py-24">
          <p className="eyebrow dark">Private browser setting</p>
          <h1
            className="m-0 max-w-4xl text-4xl leading-tight tracking-tight text-[#071827] md:text-6xl"
            id="analytics-opt-out-heading"
          >
            Exclude this browser from analytics
          </h1>
          <div className="mt-6 max-w-2xl text-lg leading-8 text-[#4b5563]">
            <p>
              Opening this page automatically excludes future visits from this
              browser profile from Vercel Web Analytics.
            </p>
            <p className="mt-4">
              Existing analytics records are unchanged. Use the controls below
              to confirm the setting or re-enable analytics.
            </p>
          </div>
          <AnalyticsOptOutControl />
          <div className="mt-8">
            <Link className="button button-secondary" href="/">
              Return to Steel Beam
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
