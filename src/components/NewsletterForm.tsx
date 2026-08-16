"use client";

import { useState } from "react";

type Tone = "dark" | "light";

export default function NewsletterForm({
  tone = "light",
  source = "site",
  buttonLabel = "Subscribe",
  className = "",
}: {
  tone?: Tone;
  source?: string;
  buttonLabel?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot - humans leave this empty
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  const dark = tone === "dark";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("ok");
        setMessage(
          data.alreadySubscribed
            ? "You're already on the list. Thank you!"
            : "You're in. Look out for The Concierge this Sunday."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className={className}>
      <form
        onSubmit={onSubmit}
        className={`flex overflow-hidden rounded-full border ${
          dark ? "border-paper/25 bg-white/5" : "border-ink/20 bg-white"
        }`}
      >
        <label htmlFor={`nl-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`nl-${source}`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={`min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm focus:outline-none ${
            dark ? "text-paper placeholder:text-paper/40" : "text-ink placeholder:text-ink-muted"
          }`}
        />
        {/* honeypot: hidden from real users, catches bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`shrink-0 px-6 text-xs font-semibold uppercase tracking-widest transition-colors disabled:opacity-60 ${
            dark ? "bg-brass text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-brass-deep"
          }`}
        >
          {status === "loading" ? "…" : buttonLabel}
        </button>
      </form>
      {message && (
        <p
          role="status"
          className={`mt-2 text-xs ${
            status === "error" ? "text-red-600" : dark ? "text-brass" : "text-brass-deep"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
