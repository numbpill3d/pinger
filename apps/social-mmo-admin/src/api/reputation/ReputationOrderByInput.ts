import { SortOrder } from "../../util/SortOrder";

export type ReputationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
  userId?: SortOrder;
  points?: SortOrder;
  reputationPoints?: SortOrder;
  reputationUser?: SortOrder;
};
