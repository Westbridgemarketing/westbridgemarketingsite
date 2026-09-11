"use client";

import { useState } from "react";

const STAGES = [
  "Still at acquisition",
  "Site secured, pre-design",
  "Approaching a launch date",
  "Actively selling",
  "Nearing completion",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stage, setStage] = useState(STAGES[0]);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New project inquiry — ${company || name || "Westbridge site"}`;
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Project stage: ${stage}`,
      `Project location: ${location}`,
      "",
      "Message:",
      message,
    ].join("\n");
    window.location.href = `mailto:studio@westbridge.co?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full bg-transparent border-b border-ink/20 font-archivo font-light text-ink text-[15px] py-3 outline-none focus:border-fern transition-colors duration-300 ease-premium placeholder:text-slate/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid sm:grid-cols-2 gap-7">
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Company
          </label>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
            placeholder="Development company"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-7">
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Phone
          </label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-7">
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Where&rsquo;s the project at
          </label>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className={`${inputClass} appearance-none`}
          >
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
            Project location
          </label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={inputClass}
            placeholder="City or neighbourhood"
          />
        </div>
      </div>

      <div>
        <label className="font-archivo text-[10px] uppercase tracking-caps text-slate/70">
          Tell us about it
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Site, timeline, what you're looking for help with"
        />
      </div>

      <button
        type="submit"
        className="btn font-archivo text-[11px] uppercase tracking-caps bg-ink text-paper px-8 py-4 hover:bg-fern"
      >
        Send it over
      </button>
    </form>
  );
}
