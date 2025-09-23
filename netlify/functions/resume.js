// netlify/functions/resume.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const resumeText = body.resumeText || "";

    if (!resumeText) {
      return { statusCode: 400, body: JSON.stringify({ error: "resumeText required" }) };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: "GEMINI_API_KEY not set" }) };
    }

    const payload = {
      contents: [{ parts: [{ text: `Optimize this resume for ATS and clarity:\n\n${resumeText}` }] }]
    };

    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await resp.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, data }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
