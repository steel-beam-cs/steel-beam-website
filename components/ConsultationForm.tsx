"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/components/site-data";

const endpoint = "https://formspree.io/f/mqevrylw";

const servicesEn = [
  "Monthly Bookkeeping",
  "Catch-Up / Cleanup",
  "Payroll",
  "Job Costing",
  "QuickBooks Setup",
  "Contractor Business Foundation",
  "Financial Reports",
  "Not Sure Yet",
];

const servicesEs = [
  "Contabilidad Mensual",
  "Puesta al Dia / Limpieza",
  "Nomina",
  "Costos por Proyecto",
  "Configuracion de QuickBooks",
  "Base del Negocio Contratista",
  "Reportes Financieros",
  "No Estoy Seguro",
];

type ConsultationFormProps = {
  locale?: Locale;
};

export function ConsultationForm({ locale = "en" }: ConsultationFormProps) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const isSpanish = locale === "es";
  const services = isSpanish ? servicesEs : servicesEn;

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
      router.push(isSpanish ? "/es/gracias" : "/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <input
        type="hidden"
        name="_subject"
        value={
          isSpanish
            ? "Nueva solicitud de consulta Steel Beam"
            : "New Steel Beam consultation request"
        }
      />
      <div className="form-grid">
        <label>
          {isSpanish ? "Nombre completo" : "Full name"}
          <input type="text" name="name" />
        </label>
        <label>
          {isSpanish ? "Nombre de la empresa" : "Company name"}
          <input type="text" name="company" />
        </label>
        <label>
          {isSpanish ? "Correo electronico" : "Email address"}
          <input type="email" name="email" />
        </label>
        <label>
          {isSpanish ? "Telefono" : "Phone number"}
          <input type="tel" name="phone" />
        </label>
        <label>
          {isSpanish ? "Oficio de contratista" : "Contracting trade"}
          <select name="trade" defaultValue="">
            <option value="" disabled>
              {isSpanish ? "Seleccione uno" : "Select one"}
            </option>
            <option>{isSpanish ? "Contratista General" : "General Contractor"}</option>
            <option>{isSpanish ? "Electrico" : "Electrical"}</option>
            <option>{isSpanish ? "Plomeria" : "Plumbing"}</option>
            <option>HVAC</option>
            <option>{isSpanish ? "Techos" : "Roofing"}</option>
            <option>{isSpanish ? "Concreto" : "Concrete"}</option>
            <option>{isSpanish ? "Remodelacion" : "Remodeling"}</option>
            <option>
              {isSpanish ? "Oficio Especializado" : "Specialty Trade"}
            </option>
          </select>
        </label>
        <label>
          {isSpanish ? "Anos en el negocio" : "Years in business"}
          <select name="years" defaultValue="">
            <option value="" disabled>
              {isSpanish ? "Seleccione uno" : "Select one"}
            </option>
            <option>
              {isSpanish ? "Recien empezando" : "Just getting started"}
            </option>
            <option>{isSpanish ? "Menos de 1 ano" : "Less than 1 year"}</option>
            <option>{isSpanish ? "1-3 anos" : "1-3 years"}</option>
            <option>{isSpanish ? "4-10 anos" : "4-10 years"}</option>
            <option>{isSpanish ? "10+ anos" : "10+ years"}</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>{isSpanish ? "Como podemos ayudar?" : "How can we help?"}</legend>
        {services.map((item) => (
          <label className="check-label" key={item}>
            <input type="checkbox" name="services" value={item} />
            {item}
          </label>
        ))}
      </fieldset>

      <label>
        {isSpanish
          ? "Que le motivo a contactarnos hoy?"
          : "What prompted you to reach out today?"}
        <textarea name="message" rows={5} />
      </label>

      <label>
        {isSpanish
          ? "Como se veria el exito dentro de seis meses?"
          : "What would success look like six months from now?"}
        <textarea name="success" rows={4} />
      </label>

      <label className="check-label">
        <input type="checkbox" name="newsletter" />
        {isSpanish
          ? "Si, me gustaria recibir el Blueprint Brief."
          : "Yes, I would like to receive the Blueprint Brief."}
      </label>

      {status === "error" ? (
        <p className="form-message error">
          {isSpanish
            ? "Algo no se envio correctamente. Intente de nuevo o llame a Steel Beam al (972) 975-9445."
            : "Something did not go through. Please try again, or call Steel Beam at (972) 975-9445."}
        </p>
      ) : null}

      <button
        className="button button-primary button-large"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? isSpanish
            ? "Enviando..."
            : "Sending..."
          : isSpanish
            ? "Programar Mi Consulta Gratis"
            : "Schedule My Free Consultation"}
      </button>
    </form>
  );
}
