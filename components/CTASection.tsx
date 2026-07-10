import Link from "next/link";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Let's Build Something Stronger Together.",
  text = "Whether you are starting out, catching up, or preparing for growth, Steel Beam is ready to help you build with confidence.",
}: CTASectionProps) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Start the conversation</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-primary button-large" href="/contact">
          Schedule Your Free Consultation
        </Link>
      </div>
    </section>
  );
}

