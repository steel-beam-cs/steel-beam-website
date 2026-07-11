"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const endpoint = "https://formspree.io/f/mqevrylw";

const services = [
  "Monthly Bookkeeping",
  "Catch-Up / Cleanup",
  "Payroll",
  "Job Costing",
  "QuickBooks Setup",
  "Contractor Business Foundation",
  "Financial Reports",
  "Not Sure Yet",
];

export function ConsultationForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New Steel Beam consultation request" />
      <div className="form-grid">
        <label>
          Full name
          <input type="text" name="name" />
        </label>
        <label>
          Company name
          <input type="text" name="company" />
        </label>
        <label>
          Email address
          <input type="email" name="email" />
        </label>
        <label>
          Phone number
          <input type="tel" name="phone" />
        </label>
        <label>
          Contracting trade
          <select name="trade" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>General Contractor</option>
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>HVAC</option>
            <option>Roofing</option>
            <option>Concrete</option>
            <option>Remodeling</option>
            <option>Specialty Trade</option>
          </select>
        </label>
        <label>
          Years in business
          <select name="years" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Just getting started</option>
            <option>Less than 1 year</option>
            <option>1-3 years</option>
            <option>4-10 years</option>
            <option>10+ years</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>How can we help?</legend>
        {services.map((item) => (
          <label className="check-label" key={item}>
            <input type="checkbox" name="services" value={item} />
            {item}
          </label>
        ))}
      </fieldset>

      <label>
        What prompted you to reach out today?
        <textarea name="message" rows={5} />
      </label>

      <label>
        What would success look like six months from now?
        <textarea name="success" rows={4} />
      </label>

      <label className="check-label">
        <input type="checkbox" name="newsletter" />
        Yes, I would like to receive the Blueprint Brief.
      </label>

      {status === "error" ? (
        <p className="form-message error">
          Something did not go through. Please try again, or call Steel Beam at
          (972) 975-9445.
        </p>
      ) : null}

      <button
        className="button button-primary button-large"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Schedule My Free Consultation"}
      </button>
    </form>
  );
}
