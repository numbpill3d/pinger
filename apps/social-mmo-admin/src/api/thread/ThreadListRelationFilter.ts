import { ThreadWhereInput } from "./ThreadWhereInput";

export type ThreadListRelationFilter = {
  every?: ThreadWhereInput;
  some?: ThreadWhereInput;
  none?: ThreadWhereInput;
};
