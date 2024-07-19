import { SortOrder } from "../../util/SortOrder";

export type ThreadOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
  forumId?: SortOrder;
  creator?: SortOrder;
};
