import { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import type { Locale } from "./site-data";

export function PageShell({
  children,
  locale = "en",
  currentPath = "/",
}: {
  children: ReactNode;
  locale?: Locale;
  currentPath?: string;
}) {
  return (
    <>
      <SiteHeader locale={locale} currentPath={currentPath} />
      <main lang={locale}>{children}</main>
      <SiteFooter locale={locale} currentPath={currentPath} />
    </>
  );
}

