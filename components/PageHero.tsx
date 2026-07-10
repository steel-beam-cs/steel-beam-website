import Link from "next/link";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  text,
  primaryLabel = "Schedule Your Free Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: PageHeroProps) {
  const PrimaryTag = primaryHref.startsWith("http") ? "a" : Link;
  const primaryLinkProps = primaryHref.startsWith("http")
    ? { href: primaryHref, target: "_blank", rel: "noreferrer" }
    : { href: primaryHref };
  const SecondaryTag =
    secondaryHref && secondaryHref.startsWith("http") ? "a" : Link;
  const secondaryLinkProps =
    secondaryHref && secondaryHref.startsWith("http")
      ? { href: secondaryHref, target: "_blank", rel: "noreferrer" }
      : { href: secondaryHref ?? "/" };

  return (
    <section className="page-hero">
      <div className="blueprint-grid" aria-hidden="true" />
      <div className="container page-hero-inner">
        {eyebrow ? <p className="eyebrow dark">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="hero-actions">
          <PrimaryTag
            className="button button-primary button-large"
            {...primaryLinkProps}
          >
            {primaryLabel}
          </PrimaryTag>
          {secondaryLabel && secondaryHref ? (
            <SecondaryTag
              className="button button-secondary button-large"
              {...secondaryLinkProps}
            >
              {secondaryLabel}
            </SecondaryTag>
          ) : null}
        </div>
      </div>
    </section>
  );
}
