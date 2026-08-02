"use client";

import { Analytics, type BeforeSendEvent } from "@vercel/analytics/next";

const ANALYTICS_OPT_OUT_KEY = "va-disable";
const ANALYTICS_OPT_OUT_PATH = "/analytics-opt-out";

export function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event: BeforeSendEvent) => {
        if (
          event.url.includes(ANALYTICS_OPT_OUT_PATH) ||
          window.localStorage.getItem(ANALYTICS_OPT_OUT_KEY)
        ) {
          return null;
        }

        return event;
      }}
    />
  );
}
