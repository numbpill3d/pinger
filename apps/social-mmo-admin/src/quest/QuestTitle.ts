import { Quest as TQuest } from "../api/quest/Quest";

export const QUEST_TITLE_FIELD = "name";

export const QuestTitle = (record: TQuest): string => {
  return record.name?.toString() || String(record.id);
};
