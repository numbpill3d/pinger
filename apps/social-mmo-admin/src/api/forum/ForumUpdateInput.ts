import { ThreadUpdateManyWithoutForumsInput } from "./ThreadUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  name?: string | null;
  description?: string | null;
  threads?: ThreadUpdateManyWithoutForumsInput;
  owner?: string | null;
  title?: string | null;
  forumTitle?: string | null;
  forumDescription?: string | null;
};
