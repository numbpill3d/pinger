import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { ReputationListRelationFilter } from "../reputation/ReputationListRelationFilter";
import { AvatarListRelationFilter } from "../avatar/AvatarListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  posts?: PostListRelationFilter;
  reputations?: ReputationListRelationFilter;
  avatars?: AvatarListRelationFilter;
};
