import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  value?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
};
