import { SortOrder } from "../../util/SortOrder";

export type ClothingItemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  rarity?: SortOrder;
  avatarId?: SortOrder;
};
