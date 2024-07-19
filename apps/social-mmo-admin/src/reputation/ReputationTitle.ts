import { Reputation as TReputation } from "../api/reputation/Reputation";

export const REPUTATION_TITLE_FIELD = "id";

export const ReputationTitle = (record: TReputation): string => {
  return record.id?.toString() || String(record.id);
};
