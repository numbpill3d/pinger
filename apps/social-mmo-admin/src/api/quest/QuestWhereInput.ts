import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";

export type QuestWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  reputationRequired?: IntNullableFilter;
  reward?: RewardWhereUniqueInput;
  name?: StringNullableFilter;
  questName?: StringNullableFilter;
  questDescription?: StringNullableFilter;
};
