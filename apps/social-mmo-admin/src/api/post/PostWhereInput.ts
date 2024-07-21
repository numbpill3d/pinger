import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ThreadWhereUniqueInput } from "../thread/ThreadWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  thread?: ThreadWhereUniqueInput;
  user?: UserWhereUniqueInput;
  author?: StringNullableFilter;
  postContent?: StringNullableFilter;
  postAuthor?: StringNullableFilter;
  postThread?: StringNullableFilter;
};
