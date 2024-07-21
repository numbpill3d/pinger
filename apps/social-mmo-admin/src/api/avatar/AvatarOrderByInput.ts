import { SortOrder } from "../../util/SortOrder";

export type AvatarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  avatarUrl?: SortOrder;
  userId?: SortOrder;
};
