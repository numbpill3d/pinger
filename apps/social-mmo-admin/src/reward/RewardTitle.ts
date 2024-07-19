import { Reward as TReward } from "../api/reward/Reward";

export const REWARD_TITLE_FIELD = "id";

export const RewardTitle = (record: TReward): string => {
  return record.id?.toString() || String(record.id);
};
