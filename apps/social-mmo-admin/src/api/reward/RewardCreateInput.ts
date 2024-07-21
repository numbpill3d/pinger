import { QuestCreateNestedManyWithoutRewardsInput } from "./QuestCreateNestedManyWithoutRewardsInput";

export type RewardCreateInput = {
  description?: string | null;
  value?: number | null;
  quests?: QuestCreateNestedManyWithoutRewardsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
