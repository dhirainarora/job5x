// netlify/functions/autopilot-apply.js
exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body || "{}");
    const jobs = body.jobs || [];
    const threshold = Number(body.threshold ?? 30);

    const results = jobs.map(job => {
      const ats = Number(job.atsScore || 0);
      const ok = ats >= threshold;
      return {
        id: job.id,
        title: job.title,
        company: job.company,
        applied: ok,
        reason: ok ? "Applied (simulation)" : "Skipped — ATS too low",
        appliedAt: ok ? new Date().toISOString() : null
      };
    });

    return { statusCode: 200, body: JSON.stringify({ results }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: String(err) }) };
  }
};
