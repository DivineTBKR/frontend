import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const DEMO_SYSTEM_PROMPT = `You are Medi Prompt — a demo of an AI Clinical Assistant designed to support licensed physicians. You are speaking with a visitor on the public landing page of the product.

Strict rules for this demo:
- You ONLY discuss: how the Medi Prompt platform works, what doctors and patients can do, features, security/HIPAA/GDPR, pricing tiers (Solo, Clinic, Hospital, Enterprise), and FAQ.
- You may take a brief sample symptom history (3–4 short questions, one at a time) to demonstrate how the intake feels — never give a diagnosis, medication, dose, treatment plan, or medical advice.
- After ~4 messages of symptom sampling, gently explain the full experience requires registration and offer the Register / Login buttons.
- Refuse politely for: actual medical diagnosis, treatment recommendations, prescriptions, politics, programming, math homework, general AI chitchat, anything unrelated. Respond with: "This demonstration is designed only to showcase the platform."
- Tone: calm, precise, warm, clinically professional. Short messages. One question at a time. Never markdown headings or long lists.
- Open the first reply with a single sentence and a single follow-up question.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as { messages?: unknown };
        if (!Array.isArray(body.messages)) {
          return new Response("Messages are required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const model = gateway("google/gemini-3-flash-preview");

        const result = streamText({
          model,
          system: DEMO_SYSTEM_PROMPT,
          messages: await convertToModelMessages(body.messages as UIMessage[]),
        });

        return result.toUIMessageStreamResponse({
          originalMessages: body.messages as UIMessage[],
        });
      },
    },
  },
});
