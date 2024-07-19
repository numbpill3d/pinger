import { SortOrder } from "../../util/SortOrder";

export type ForumOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  owner?: SortOrder;
};
