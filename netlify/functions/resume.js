// netlify/functions/resume.js
import fetch from "node-fetch";

export async function handler(event) {
  try {
    const { details, job } = JSON.parse(event.body);

    // Call Gemini API
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a career AI. Based on these details:
                  User details: ${details}
                  Target job: ${job}

                  1. Improve the resume text.
                  2. Give missing skills.
                  3. Rate resume out of 100.
                  4. Suggest roadmap to get the job.`
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ aiReply: data.candidates[0].content.parts[0].text }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
