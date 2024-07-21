import { ClothingItemUpdateManyWithoutAvatarsInput } from "./ClothingItemUpdateManyWithoutAvatarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarUpdateInput = {
  name?: string | null;
  avatarUrl?: string | null;
  clothingItems?: ClothingItemUpdateManyWithoutAvatarsInput;
  user?: UserWhereUniqueInput | null;
};
