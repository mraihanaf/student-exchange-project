import { json } from "@sveltejs/kit";
import processAndStore from "$lib/server/processAndStore.js";

export async function POST({ request }) {
  const { text } = await request.json();

  if (!text) {
    return json({ error: "Text is required" }, { status: 400 });
  }

  const result = processAndStore(text)

  return json({ message: result });
}