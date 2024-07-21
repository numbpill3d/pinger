import { AvatarWhereUniqueInput } from "../avatar/AvatarWhereUniqueInput";

export type ClothingItemUpdateInput = {
  name?: string | null;
  typeField?: "Option1" | null;
  rarity?: "Option1" | null;
  avatar?: AvatarWhereUniqueInput | null;
};
