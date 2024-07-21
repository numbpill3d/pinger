import { SortOrder } from "../../util/SortOrder";

export type QuestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  reputationRequired?: SortOrder;
  rewardId?: SortOrder;
  name?: SortOrder;
  questName?: SortOrder;
  questDescription?: SortOrder;
};
