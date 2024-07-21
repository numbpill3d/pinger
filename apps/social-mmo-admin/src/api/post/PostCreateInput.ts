import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  content?: string | null;
  thread?: ThreadWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
  author?: string | null;
  postContent?: string | null;
  postAuthor?: string | null;
  postThread?: string | null;
};
