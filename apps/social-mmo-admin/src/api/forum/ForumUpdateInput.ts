import { ThreadUpdateManyWithoutForumsInput } from "./ThreadUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  name?: string | null;
  description?: string | null;
  threads?: ThreadUpdateManyWithoutForumsInput;
  owner?: string | null;
};
