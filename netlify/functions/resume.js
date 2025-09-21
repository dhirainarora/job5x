// netlify/functions/resume.js

export const handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { action } = body;

    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_KEY) {
      return { statusCode: 500, body: JSON.stringify({ error: "Missing Gemini API Key" }) };
    }

    const prompts = {
      resume: `Create a polished professional resume in modern PDF-like layout based on:\n${body.details || ""}\nTarget Job: ${body.job || "Not specified"}.\nRate it from 0–100 and suggest improvements.`,
      mentor: `Act as a career mentor. Based on ${body.text || ""}, give actionable guidance.`,
      roadmap: `Roadmap to become ${body.job || "a software engineer"}. Current skills: ${body.details || "none"}.`,
      interview: `List top interview questions with answers for ${body.job || "developer"}.`,
      insights: `Give career insights and market demand for ${body.job || "developer"}.`,
      quiz: `Make a 5-question multiple choice quiz on ${body.skill || "Python"} with answers.`,
      community: `Suggest discussion topics for ${body.topic || "career growth"}.`,
      portfolio: `Suggest 3 modern project ideas for ${body.job || "developer"} with details.`,
      coverLetter: `Write a professional cover letter for ${body.job || "developer"} using:\n${body.details || ""}.`,
    };

    const prompt = prompts[action] || "Say something useful about careers.";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: response.status, body: JSON.stringify({ error: errText }) };
    }

    const data = await response.json();
    let aiReply = "";

    try {
      aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.output ||
        data?.output ||
        JSON.stringify(data);
    } catch (e) {
      aiReply = "Parsing error: " + JSON.stringify(data);
    }

    return { statusCode: 200, body: JSON.stringify({ aiReply }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
