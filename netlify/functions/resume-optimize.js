// netlify/functions/resume-optimize.js
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const job = (body.jobDescription || "").toLowerCase();
    const resume = (body.resumeText || "").toLowerCase();

    // simple keyword extractor (fallback if AI key not set)
    const stop = new Set(['the','and','for','to','a','an','in','on','with','of','you','we','your','is','are','that']);
    const words = job.replace(/[\W_]+/g,' ').split(/\s+/).filter(Boolean);
    const counts = {};
    for (const w of words) {
      if (stop.has(w) || w.length < 3) continue;
      counts[w] = (counts[w] || 0) + 1;
    }
    const sorted = Object.keys(counts).sort((a,b)=>counts[b]-counts[a]).slice(0,10);
    const suggestionsFallback = sorted.filter(k => !resume.includes(k)).slice(0,5);

    // If GEMINI_API_KEY is set in Netlify env, try to call it
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        // Example placeholder for real AI call
        const resp = await fetch("https://api.example.com/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify({ prompt: `Extract 5 keywords from this job description:\n\n${job}` })
        });
        if (resp.ok) {
          const data = await resp.json();
          const keywords = data.keywords || data.result || [];
          const suggestions = keywords.filter(k => !resume.includes(k)).slice(0,5);
          return { statusCode: 200, body: JSON.stringify({ suggestions }) };
        }
      } catch (err) {
        console.error("AI call failed:", err);
      }
    }

    // fallback suggestions if no API
    return { statusCode: 200, body: JSON.stringify({ suggestions: suggestionsFallback }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
