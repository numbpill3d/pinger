import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";

export type QuestUpdateInput = {
  title?: string | null;
  description?: string | null;
  reputationRequired?: number | null;
  reward?: RewardWhereUniqueInput | null;
  name?: string | null;
  questName?: string | null;
  questDescription?: string | null;
};
