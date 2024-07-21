import { Avatar as TAvatar } from "../api/avatar/Avatar";

export const AVATAR_TITLE_FIELD = "name";

export const AvatarTitle = (record: TAvatar): string => {
  return record.name?.toString() || String(record.id);
};
