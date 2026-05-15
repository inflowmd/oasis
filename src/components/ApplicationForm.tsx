"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  fontSize: 15,
  fontFamily: "inherit",
  color: "var(--td)",
  background: "#fff",
  border: "1px solid rgba(28,53,56,0.15)",
  borderRadius: 12,
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--gd)",
  marginBottom: 8,
};

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend wired — placeholder local-state submit.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(201,169,110,0.3)",
          borderRadius: 20,
          padding: "44px 40px",
          textAlign: "center",
          boxShadow: "0 24px 60px rgba(28,53,56,0.06)",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--gold-pale)",
            border: "1px solid rgba(201,169,110,0.3)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--gold)" />
          </svg>
        </div>
        <h3 className="fd" style={{ fontSize: 26, fontWeight: 700, color: "var(--td)", marginBottom: 12 }}>
          Application received.
        </h3>
        <p style={{ fontSize: 16, color: "var(--tm)", lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
          Dr. Mehta personally reviews every application. A member of our team will be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{
        background: "#fff",
        border: "1px solid rgba(232,237,232,0.7)",
        borderRadius: 20,
        padding: "36px 36px 32px",
        boxShadow: "0 24px 60px rgba(28,53,56,0.06)",
      }}
    >
      <div style={{ display: "grid", gap: 20 }}>
        <div>
          <label style={labelStyle} htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" required style={inputStyle} />
        </div>
        <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" required style={inputStyle} />
          </div>
        </div>
        <div>
          <label style={labelStyle} htmlFor="goals">What are your primary health goals?</label>
          <textarea id="goals" name="goals" rows={5} style={{ ...inputStyle, resize: "vertical" }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="source">How did you hear about us?</label>
          <select id="source" name="source" style={inputStyle} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Google Search</option>
            <option>Referral from Physician</option>
            <option>Referral from Friend or Family</option>
            <option>Social Media</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="btn-gold"
        style={{ marginTop: 28, padding: "16px 32px", fontSize: 12, width: "100%", justifyContent: "center" }}
      >
        Request to Join
      </button>

      <p
        style={{
          fontSize: 12,
          color: "var(--ts)",
          lineHeight: 1.65,
          marginTop: 18,
          textAlign: "center",
        }}
      >
        This is not a medical intake form. Please do not include protected health information. A member of our team
        will contact you within 2 business days.
      </p>
    </form>
  );
}
