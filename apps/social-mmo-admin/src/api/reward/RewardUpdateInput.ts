import { QuestUpdateManyWithoutRewardsInput } from "./QuestUpdateManyWithoutRewardsInput";

export type RewardUpdateInput = {
  description?: string | null;
  value?: number | null;
  quests?: QuestUpdateManyWithoutRewardsInput;
  name?: string | null;
  typeField?: "Option1" | null;
};
