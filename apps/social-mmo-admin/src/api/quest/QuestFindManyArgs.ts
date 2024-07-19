import { QuestWhereInput } from "./QuestWhereInput";
import { QuestOrderByInput } from "./QuestOrderByInput";

export type QuestFindManyArgs = {
  where?: QuestWhereInput;
  orderBy?: Array<QuestOrderByInput>;
  skip?: number;
  take?: number;
};
