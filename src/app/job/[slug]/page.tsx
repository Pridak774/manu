"use client";

import { useState, useRef } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    }).then(() => {
      setSubmitted(true);
      form.reset();
    });
  };

  return (
    <div>
      <h1>Job Page</h1>
      <p>Slug: {params.slug}</p>
      <h2>Aplică pentru acest job</h2>
      {submitted ? (
        <div style={{ color: "green", margin: "16px 0" }}>
          Aplicația a fost trimisă cu succes!
        </div>
      ) : (
        <form
          ref={formRef}
          name="job-application"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{ maxWidth: 400, margin: "2rem auto" }}
        >
          <input type="hidden" name="form-name" value="job-application" />
          <input
            name="name"
            type="text"
            placeholder="Nume complet"
            required
            style={{
              display: "block",
              width: "100%",
              marginBottom: 8,
              padding: 8,
            }}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            style={{
              display: "block",
              width: "100%",
              marginBottom: 8,
              padding: 8,
            }}
          />
          <textarea
            name="message"
            placeholder="Mesaj (opțional)"
            rows={4}
            style={{
              display: "block",
              width: "100%",
              marginBottom: 8,
              padding: 8,
            }}
          />
          <button type="submit" style={{ padding: 10, width: "100%" }}>
            Trimite aplicația
          </button>
        </form>
      )}
    </div>
  );
}
