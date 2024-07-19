import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { PostCreateNestedManyWithoutThreadsInput } from "./PostCreateNestedManyWithoutThreadsInput";

export type ThreadCreateInput = {
  content?: string | null;
  title?: string | null;
  forum?: ForumWhereUniqueInput | null;
  posts?: PostCreateNestedManyWithoutThreadsInput;
  creator?: string | null;
};
