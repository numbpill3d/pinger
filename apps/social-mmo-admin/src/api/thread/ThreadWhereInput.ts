import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type ThreadWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
  forum?: ForumWhereUniqueInput;
  posts?: PostListRelationFilter;
  creator?: StringNullableFilter;
};
