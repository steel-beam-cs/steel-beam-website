"use client";

import { useEffect, useState } from "react";

const ANALYTICS_OPT_OUT_KEY = "va-disable";

type AnalyticsStatus = "checking" | "disabled" | "enabled" | "error";

export function AnalyticsOptOutControl() {
  const [status, setStatus] = useState<AnalyticsStatus>("checking");

  useEffect(() => {
    try {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      setStatus("disabled");
    } catch {
      setStatus("error");
    }
  }, []);

  function disableAnalytics() {
    try {
      window.localStorage.setItem(ANALYTICS_OPT_OUT_KEY, "1");
      setStatus("disabled");
    } catch {
      setStatus("error");
    }
  }

  function enableAnalytics() {
    try {
      window.localStorage.removeItem(ANALYTICS_OPT_OUT_KEY);
      setStatus("enabled");
    } catch {
      setStatus("error");
    }
  }

  const statusMessage = {
    checking: "Applying your analytics preference…",
    disabled: "Analytics are disabled on this browser.",
    enabled: "Analytics are enabled on this browser.",
    error: "This browser would not save the analytics preference.",
  }[status];

  return (
    <div className="mt-8 rounded-xl border border-[#d1d5db] bg-white p-6 shadow-sm md:p-8">
      <p
        aria-live="polite"
        className="m-0 text-xl font-extrabold text-[#071827]"
      >
        {statusMessage}
      </p>
      <p className="mt-3 max-w-2xl text-base leading-7 text-[#4b5563]">
        This setting applies only to this browser profile. Clearing browser data,
        using a different browser, or switching devices requires visiting this
        page again.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="button button-primary"
          disabled={status === "checking" || status === "disabled"}
          onClick={disableAnalytics}
          type="button"
        >
          Disable analytics
        </button>
        <button
          className="button button-secondary"
          disabled={status === "checking" || status === "enabled"}
          onClick={enableAnalytics}
          type="button"
        >
          Re-enable analytics
        </button>
      </div>
    </div>
  );
}
