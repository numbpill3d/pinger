import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ThreadListRelationFilter } from "../thread/ThreadListRelationFilter";

export type ForumWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  threads?: ThreadListRelationFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
  forumTitle?: StringNullableFilter;
  forumDescription?: StringNullableFilter;
};
