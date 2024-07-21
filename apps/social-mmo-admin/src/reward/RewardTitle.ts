import { Reward as TReward } from "../api/reward/Reward";

export const REWARD_TITLE_FIELD = "name";

export const RewardTitle = (record: TReward): string => {
  return record.name?.toString() || String(record.id);
};
