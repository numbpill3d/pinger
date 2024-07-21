import { Reputation as TReputation } from "../api/reputation/Reputation";

export const REPUTATION_TITLE_FIELD = "reputationUser";

export const ReputationTitle = (record: TReputation): string => {
  return record.reputationUser?.toString() || String(record.id);
};
