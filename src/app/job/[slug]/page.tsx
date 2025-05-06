"use client";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Job Page</h1>
      <p>Slug: {params.slug}</p>
      <h2>Aplică pentru acest job</h2>
      <form
        name="job-application"
        method="POST"
        data-netlify="true"
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
    </div>
  );
}
