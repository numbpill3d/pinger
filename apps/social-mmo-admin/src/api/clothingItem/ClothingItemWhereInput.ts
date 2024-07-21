import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AvatarWhereUniqueInput } from "../avatar/AvatarWhereUniqueInput";

export type ClothingItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  rarity?: "Option1";
  avatar?: AvatarWhereUniqueInput;
};
