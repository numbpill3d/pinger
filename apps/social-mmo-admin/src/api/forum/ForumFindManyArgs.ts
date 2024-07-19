import { ForumWhereInput } from "./ForumWhereInput";
import { ForumOrderByInput } from "./ForumOrderByInput";

export type ForumFindManyArgs = {
  where?: ForumWhereInput;
  orderBy?: Array<ForumOrderByInput>;
  skip?: number;
  take?: number;
};
