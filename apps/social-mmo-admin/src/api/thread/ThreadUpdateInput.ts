import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { PostUpdateManyWithoutThreadsInput } from "./PostUpdateManyWithoutThreadsInput";

export type ThreadUpdateInput = {
  content?: string | null;
  title?: string | null;
  forum?: ForumWhereUniqueInput | null;
  posts?: PostUpdateManyWithoutThreadsInput;
  creator?: string | null;
};
