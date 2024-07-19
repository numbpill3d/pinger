import { Quest as TQuest } from "../api/quest/Quest";

export const QUEST_TITLE_FIELD = "title";

export const QuestTitle = (record: TQuest): string => {
  return record.title?.toString() || String(record.id);
};
