import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClothingItemListRelationFilter } from "../clothingItem/ClothingItemListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  clothingItems?: ClothingItemListRelationFilter;
  user?: UserWhereUniqueInput;
};
