import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReputationWhereInput = {
  id?: StringFilter;
  value?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  points?: IntNullableFilter;
  reputationPoints?: IntNullableFilter;
  reputationUser?: StringNullableFilter;
};
