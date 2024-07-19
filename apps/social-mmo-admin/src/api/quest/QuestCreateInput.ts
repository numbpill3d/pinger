import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";

export type QuestCreateInput = {
  title?: string | null;
  description?: string | null;
  reputationRequired?: number | null;
  reward?: RewardWhereUniqueInput | null;
};
