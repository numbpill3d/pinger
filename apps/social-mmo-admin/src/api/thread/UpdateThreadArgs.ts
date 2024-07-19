import { ThreadWhereUniqueInput } from "./ThreadWhereUniqueInput";
import { ThreadUpdateInput } from "./ThreadUpdateInput";

export type UpdateThreadArgs = {
  where: ThreadWhereUniqueInput;
  data: ThreadUpdateInput;
};
