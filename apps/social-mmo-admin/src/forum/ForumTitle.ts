import { Forum as TForum } from "../api/forum/Forum";

export const FORUM_TITLE_FIELD = "name";

export const ForumTitle = (record: TForum): string => {
  return record.name?.toString() || String(record.id);
};
