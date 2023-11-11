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
