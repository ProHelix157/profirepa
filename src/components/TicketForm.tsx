"use client";

import { useState } from "react";

const supportCategories = [
  "Sensor issue / chirping",
  "App or alerts",
  "Battery or warranty",
  "Moving / adding sensors",
  "Billing or paperwork",
  "Something else",
];

const urgencies = [
  ["normal", "Normal — within a few days"],
  ["soon", "Soon — within a day or two"],
  ["urgent", "Urgent — same day if possible"],
] as const;

export function TicketForm({ kind }: { kind: "support" | "consultation" }) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [ticketNumber, setTicketNumber] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setState("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong — please call us.");
        setState("idle");
        return;
      }
      setTicketNumber(json.ticketNumber);
      setState("done");
    } catch {
      setError("Couldn't reach the server — please try again or call us.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div style={{ background: "var(--surface)", border: "1px solid var(--divider)", padding: 40, display: "flex", flexDirection: "column", gap: 16 }}>
        <h3 style={{ fontSize: 26 }}>Got it. You&apos;re {ticketNumber}.</h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--n300)" }}>
          {kind === "consultation"
            ? "We'll call you shortly to set up your free evaluation. Keep that reference number handy."
            : "We'll get back to you within one business day. If you gave us an email, a confirmation is on its way."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ background: "var(--surface)", border: "1px solid var(--divider-soft)", padding: 40, display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
        <div className="field">
          <label htmlFor={`${kind}-name`}>Name</label>
          <input id={`${kind}-name`} name="name" className="input" required maxLength={200} autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor={`${kind}-phone`}>Phone</label>
          <input id={`${kind}-phone`} name="phone" type="tel" className="input" required maxLength={40} autoComplete="tel" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={`${kind}-email`}>Email (for your ticket confirmation)</label>
        <input id={`${kind}-email`} name="email" type="email" className="input" maxLength={320} autoComplete="email" />
      </div>
      {/* honeypot */}
      <input name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: -9999, height: 0, width: 0, opacity: 0 }} aria-hidden />
      {kind === "support" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 18 }}>
          <div className="field">
            <label htmlFor="ticket-category">What&apos;s this about?</label>
            <select id="ticket-category" name="category" className="input" defaultValue={supportCategories[0]}>
              {supportCategories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="ticket-urgency">Urgency</label>
            <select id="ticket-urgency" name="urgency" className="input" defaultValue="normal">
              {urgencies.map(([v, label]) => (
                <option key={v} value={v}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
      <div className="field">
        <label htmlFor={`${kind}-message`}>
          {kind === "consultation" ? "Tell us about your home (rooms, floors, anything you're worried about)" : "Tell us what's going on"}
        </label>
        <textarea id={`${kind}-message`} name="message" className="input" required maxLength={5000} />
      </div>
      {error && (
        <p role="alert" style={{ color: "var(--accent)", fontSize: 15, fontWeight: 600 }}>
          {error}
        </p>
      )}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: "var(--n500)" }}>
          {kind === "consultation" ? "No obligation, ever." : "We'll email you a ticket number right away."}
        </span>
        <button type="submit" className="btn btn-primary" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : kind === "consultation" ? "Request my free evaluation" : "Submit ticket"}
        </button>
      </div>
    </form>
  );
}
