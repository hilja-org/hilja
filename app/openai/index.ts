import OpenAI from "openai";

export const assistantId = process.env.OPENAI_ASSISTANT_ID as string;
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// The existing run statuses are:
//     'queued' 'in_progress''requires_action''cancelling''cancelled''failed''completed''expired';

export enum OpenAIRunStatus {
  QUEUED = "queued",
  IN_PROGRESS = "in_progress",
  REQUIRES_ACTION = "requires_action",
  CANCELLING = "cancelling",
  CANCELLED = "cancelled",
  FAILED = "failed",
  COMPLETED = "completed",
  EXPIRED = "expired",
}
