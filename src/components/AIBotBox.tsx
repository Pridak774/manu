"use client";

import { useState } from "react";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" +
  process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export default function AIBotBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! I am your AI assistant. Ask me anything about this website.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const getPageContext = () => {
    // Get page title
    const title = document.title;
    // Get all visible headings (h1, h2, h3)
    const headings = Array.from(document.querySelectorAll("h1, h2, h3"))
      .map((h) => h.textContent?.trim())
      .filter(Boolean)
      .join(" | ");
    // Get a summary of visible text (first 500 chars)
    const bodyText = document.body.innerText
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 500);
    return `Title: ${title}\nHeadings: ${headings}\nSummary: ${bodyText}`;
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: input + "\n\nWebsite context:\n" + getPageContext() },
              ],
            },
          ],
        }),
      });
      const data = await res.json();
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't get a response.";
      setMessages((msgs) => [...msgs, { role: "ai", text: aiText }]);
    } catch {
      setMessages((msgs) => [
        ...msgs,
        { role: "ai", text: "Error connecting to AI service." },
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
      {open ? (
        <div
          style={{
            width: 320,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 16px #0002",
            padding: 16,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 8 }}>AI Copilot</div>
          <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 8 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  margin: "8px 0",
                  color: m.role === "ai" ? "#2563eb" : "#222",
                }}
              >
                <b>{m.role === "ai" ? "AI:" : "You:"}</b> {m.text}
              </div>
            ))}
            {loading && <div style={{ color: "#888" }}>AI is typing...</div>}
          </div>
          <form onSubmit={sendMessage} style={{ display: "flex", gap: 4 }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              style={{
                flex: 1,
                padding: 8,
                borderRadius: 6,
                border: "1px solid #ddd",
              }}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{ padding: "8px 12px" }}
            >
              Send
            </button>
          </form>
          <button
            onClick={() => setOpen(false)}
            style={{ marginTop: 8, fontSize: 12, color: "#888" }}
          >
            Close
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "#2563eb",
            color: "#fff",
            borderRadius: "50%",
            width: 56,
            height: 56,
            fontSize: 28,
            border: "none",
            boxShadow: "0 2px 8px #0002",
          }}
        >
          🤖
        </button>
      )}
    </div>
  );
}
