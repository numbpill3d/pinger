import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReputationWhereInput = {
  id?: StringFilter;
  value?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
