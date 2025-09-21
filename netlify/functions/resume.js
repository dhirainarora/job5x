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
      resume: `Improve and optimize this resume: ${body.details || ""}`,
      mentor: `Give career guidance: ${body.text || ""}`,
      roadmap: `Roadmap for becoming ${body.job || "a software engineer"}`,
      interview: `Top interview questions for ${body.job || "developer"}`,
      insights: `Industry insights for ${body.job || "developer"}`,
      quiz: `Give me a short quiz on ${body.skill || "Python"}`,
      community: `Discussion ideas about ${body.topic || "career growth"}`,
      portfolio: `Suggest 3 portfolio projects for ${body.job || "developer"}`,
      coverLetter: `Write a cover letter for ${body.job || "developer"}`
    };

    const prompt = prompts[action] || `Say something useful about ${action}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      return { statusCode: response.status, body: JSON.stringify({ error: errText }) };
    }

    const data = await response.json();

    let aiReply = "";
    try {
      aiReply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        data?.candidates?.[0]?.content?.[0]?.text ||
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
