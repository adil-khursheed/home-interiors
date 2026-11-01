"use client";

import { useState } from "react";
import { STUDIO_EMAIL } from "@/lib/studio";

export function EnquiryForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const scope = String(data.get("scope") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Location: ${location || "Not yet shared"}`,
      `Project: ${scope}`,
      "",
      message,
    ].join("\n");

    setStatus(
      `Your email app should open with this enquiry. If it does not, write to ${STUDIO_EMAIL}.`,
    );

    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      `Project enquiry — ${name || "New home"}`,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      action={`mailto:${STUDIO_EMAIL}`}
      className="form"
      encType="text/plain"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input autoComplete="name" id="name" name="name" required type="text" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input autoComplete="email" id="email" name="email" required type="email" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="location">Where is the home?</label>
          <input autoComplete="address-level2" id="location" name="location" type="text" />
        </div>
        <div className="field">
          <label htmlFor="scope">Project scope</label>
          <select defaultValue="" id="scope" name="scope" required>
            <option disabled value="">
              Select one
            </option>
            <option value="Whole home">Whole home</option>
            <option value="Apartment">Apartment</option>
            <option value="Renovation">Renovation</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="message">What are you imagining?</label>
        <textarea
          id="message"
          name="message"
          placeholder="The rooms, the feeling, the timing — a few lines are enough."
          required
          rows={4}
        />
      </div>
      <div className="form-foot">
        <p className="form-note" id="form-note">
          This prepares an email in your own app. Nothing is sent from this page.
        </p>
        <button className="button" type="submit">
          Open email draft
        </button>
      </div>
      <p aria-live="polite" className="form-status" id="form-status" role="status">
        {status}
      </p>
    </form>
  );
}
