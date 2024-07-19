import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QuestListRelationFilter } from "../quest/QuestListRelationFilter";

export type RewardWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  value?: IntNullableFilter;
  quests?: QuestListRelationFilter;
};
