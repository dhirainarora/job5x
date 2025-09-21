import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const { action, details, job, text, skill, topic } = JSON.parse(event.body);
    const promptMap = {
      resume: `Improve this resume for the job ${job}. Resume details:\n${details}\nReturn JSON with improved_summary, missing_skills, score, suggestions.`,
      mentor: `Act as a career mentor. Answer clearly: ${text}`,
      roadmap: `Create a 5-step roadmap to become a ${job}. Return JSON array of steps.`,
      interview: `Give top 10 interview questions for ${job} with difficulty.`,
      insights: `Show salary trends, demand, and top companies hiring for ${job}.`,
      quiz: `Make a short quiz (5 MCQs) for ${skill}. Return JSON with question, options, answer.`,
      community: `Write 3 discussion posts in a job seekers community about ${topic}.`,
      portfolio: `Suggest 3 portfolio project ideas for ${job || 'tech career'}.`,
      coverLetter: `Write a professional cover letter for the role ${job}.`
    };

    const prompt = promptMap[action] || "Say hello";
    const GEMINI_KEY = process.env.GEMINI_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_KEY}`;

    const aiRes = await fetch(url, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ contents:[{ parts:[{ text: prompt }] }] })
    });
    const data = await aiRes.json();

    let aiReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";
    return {
      statusCode: 200,
      body: JSON.stringify({ aiReply })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}
