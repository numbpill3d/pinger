import { Avatar as TAvatar } from "../api/avatar/Avatar";

export const AVATAR_TITLE_FIELD = "id";

export const AvatarTitle = (record: TAvatar): string => {
  return record.id?.toString() || String(record.id);
};
