"use client";

import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Send } from "lucide-react";
import { defaultWhatsappMessage, siteConfig, whatsappLink } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  message: ""
};

export function ContactForm({ services }: { services: string[] }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState<Errors>({});

  const whatsappMessage = useMemo(() => {
    if (!form.name && !form.phone && !form.service && !form.message) {
      return defaultWhatsappMessage;
    }

    return [
      `Hello ${siteConfig.shortName}, I would like to request a service inquiry.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.service ? `Service: ${form.service}` : "",
      `Details: ${form.message}`
    ]
      .filter(Boolean)
      .join("\n");
  }, [form]);

  function validate(next: FormState) {
    const nextErrors: Errors = {};

    if (next.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    if (!/^[0-9+\-\s]{7,16}$/.test(next.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!next.service) {
      nextErrors.service = "Please select a service.";
    }

    if (next.message.trim().length < 10) {
      nextErrors.message = "Please add a few details about the work.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      window.open(whatsappLink(whatsappMessage), "_blank", "noopener,noreferrer");
      setForm(initialState);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-5 shadow-2xl shadow-black/5 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name}>
          <input
            className="focus-ring w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-black"
            value={form.name}
            onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
            autoComplete="name"
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone number" error={errors.phone}>
          <input
            className="focus-ring w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-black"
            value={form.phone}
            onChange={(event) => setForm((value) => ({ ...value, phone: event.target.value }))}
            autoComplete="tel"
            inputMode="tel"
            placeholder="98XXXXXXXX"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Service needed" error={errors.service}>
          <select
            className="focus-ring w-full rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-black"
            value={form.service}
            onChange={(event) => setForm((value) => ({ ...value, service: event.target.value }))}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Project details" error={errors.message}>
          <textarea
            className="focus-ring min-h-36 w-full resize-y rounded-2xl border border-black/10 bg-zinc-50 px-4 py-3 text-black"
            value={form.message}
            onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
            placeholder="Tell us the location, service, and preferred timing."
          />
        </Field>
      </div>

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#30e273] sm:w-auto"
      >
        <Send size={18} aria-hidden />
        Send Inquiry on WhatsApp
      </button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-black">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
