import Groq from "groq-sdk"

const groq = new Groq({apiKey: ""});

async function main() {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: JSON.stringify({
              instruction:
                "Generate a structured citizen report in JSON format with the following constraints:\n\n- `report_category`: One of [\"infrastructure\", \"health\", \"environment\", \"safety\", \"transportation\", \"education\", \"sanitation\", \"water_supply\", \"electricity\", \"others\"].\n- `report_priority`: One of [\"critical\", \"medium\", \"low\"].\n- `report_summary`: A brief description of the issue (max 300 characters).\n- `report_false_indicator`: Can be null or a brief explanation if suspected to be false.\n- `report_verdict`: One of [\"legit\", \"false\"].\n\n### IMPORTANT: \n- Return **ONLY** a valid JSON object. \n- Do **NOT** include code blocks (e.g., no triple backticks). \n- Do **NOT** add markdown, explanations, or any other text.",
              output_format: "JSON",
              example_response: {
                report_category: "infrastructure",
                report_priority: "critical",
                report_summary:
                  "A streetlight near the main square has fallen after last night’s storm. Wires are exposed, and it's blocking the road.",
                report_false_indicator: null,
                report_verdict: "legit",
              },
              user: "Saya melapor saya melihat kecelakaan di jalan sudirman no 7",
            }),
          },
        ],
        model: "llama-3.3-70b-versatile",
        temperature: 1,
        max_completion_tokens: 1024,
        top_p: 1,
      });
      let response = chatCompletion.choices[0].message.content
      response = response.replace(/^\s*```(?:json)?|```$/g, "");

  console.log(response);
}

main();
