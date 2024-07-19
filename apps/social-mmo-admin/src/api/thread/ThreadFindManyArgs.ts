import { ThreadWhereInput } from "./ThreadWhereInput";
import { ThreadOrderByInput } from "./ThreadOrderByInput";

export type ThreadFindManyArgs = {
  where?: ThreadWhereInput;
  orderBy?: Array<ThreadOrderByInput>;
  skip?: number;
  take?: number;
};
