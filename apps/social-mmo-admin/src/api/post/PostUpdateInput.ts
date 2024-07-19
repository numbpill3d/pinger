import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  content?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
