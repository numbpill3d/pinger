import { ThreadCreateNestedManyWithoutForumsInput } from "./ThreadCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  name?: string | null;
  description?: string | null;
  threads?: ThreadCreateNestedManyWithoutForumsInput;
  owner?: string | null;
  title?: string | null;
  forumTitle?: string | null;
  forumDescription?: string | null;
};
