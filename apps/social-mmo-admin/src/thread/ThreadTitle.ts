import { Thread as TThread } from "../api/thread/Thread";

export const THREAD_TITLE_FIELD = "title";

export const ThreadTitle = (record: TThread): string => {
  return record.title?.toString() || String(record.id);
};
