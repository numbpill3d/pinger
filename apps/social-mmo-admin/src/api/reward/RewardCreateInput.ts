import { QuestCreateNestedManyWithoutRewardsInput } from "./QuestCreateNestedManyWithoutRewardsInput";

export type RewardCreateInput = {
  description?: string | null;
  value?: number | null;
  quests?: QuestCreateNestedManyWithoutRewardsInput;
};
