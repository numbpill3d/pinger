import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "author";

export const PostTitle = (record: TPost): string => {
  return record.author?.toString() || String(record.id);
};
