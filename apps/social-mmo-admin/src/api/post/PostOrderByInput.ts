import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  threadId?: SortOrder;
  userId?: SortOrder;
  author?: SortOrder;
  postContent?: SortOrder;
  postAuthor?: SortOrder;
  postThread?: SortOrder;
};
