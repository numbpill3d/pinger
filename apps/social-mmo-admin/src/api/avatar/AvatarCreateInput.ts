import { ClothingItemCreateNestedManyWithoutAvatarsInput } from "./ClothingItemCreateNestedManyWithoutAvatarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AvatarCreateInput = {
  name?: string | null;
  avatarUrl?: string | null;
  clothingItems?: ClothingItemCreateNestedManyWithoutAvatarsInput;
  user?: UserWhereUniqueInput | null;
};
