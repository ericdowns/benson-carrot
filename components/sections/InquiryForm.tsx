"use client";

import { useState } from "react";
import { Unknown } from "@/components/ui/Unknown";

const adOptions = [
  { value: "logo", label: "Logo Only — $100" },
  { value: "quarter-h", label: "Quarter Page Horizontal — $250 (6\" × 3\")" },
  { value: "quarter-v", label: "Quarter Page Vertical — $250 (3\" × 4.5\")" },
  { value: "half-h", label: "Half Page Horizontal — $500 (6\" × 4.5\")" },
  { value: "half-v", label: "Half Page Vertical — $500 (3\" × 9\")" },
  { value: "full", label: "Full Page — $1,000 (6\" × 9\")" },
  { value: "questions", label: "I have questions / not sure yet" },
];

type FormState = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }

      setState("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <section id="inquire" className="bg-gray-50 border-b border-gray-200 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 bg-gray-950 mx-auto mb-6 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-950 mb-4">You&apos;re on the list.</h2>
          <p className="text-gray-600 leading-relaxed">
            Thanks for your interest in advertising in The Carrot. Annie will be in touch
            with next steps soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="inquire" className="bg-gray-50 border-b border-gray-200 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Get Started</p>
        <h2 className="text-3xl font-bold text-gray-950 mb-3">Reserve Your Ad</h2>
        <p className="text-gray-600 mb-2">
          Fill out the form below and we&apos;ll be in touch to confirm your placement and next steps.
        </p>
        <Unknown note="Payment process: how will the advertiser be invoiced or asked to pay? Add a note here once confirmed." block />

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-950 mb-2">
                Your Name <span className="text-gray-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors"
                placeholder="Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="business" className="block text-sm font-semibold text-gray-950 mb-2">
                Business Name <span className="text-gray-400">*</span>
              </label>
              <input
                type="text"
                id="business"
                name="business"
                required
                className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors"
                placeholder="Your Business"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-950 mb-2">
                Email <span className="text-gray-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-950 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors"
                placeholder="(402) 555-0000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="adInterest" className="block text-sm font-semibold text-gray-950 mb-2">
              Ad Interest <span className="text-gray-400">*</span>
            </label>
            <select
              id="adInterest"
              name="adInterest"
              required
              className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors appearance-none"
            >
              <option value="">Select an option…</option>
              {adOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-950 mb-2">
              Message or Questions
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full border border-gray-300 px-4 py-3 text-gray-950 bg-white focus:outline-none focus:border-gray-950 transition-colors resize-none"
              placeholder="Any questions, special requests, or details you'd like to share…"
            />
          </div>

          {state === "error" && (
            <div className="border border-gray-400 border-dashed px-4 py-3 text-sm text-gray-700">
              {errorMsg || "Something went wrong. Please try again or email annie@bffomaha.org directly."}
            </div>
          )}

          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full bg-gray-950 text-white px-8 py-4 font-semibold hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state === "loading" ? "Sending…" : "Submit Inquiry"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            Ad deadline is <strong className="text-gray-600">April 1, 2026</strong>.
            Submissions received after this date cannot be guaranteed.
          </p>
        </form>
      </div>
    </section>
  );
}
