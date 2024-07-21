import { Quest } from "../quest/Quest";

export type Reward = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  value: number | null;
  quests?: Array<Quest>;
  name: string | null;
  typeField?: "Option1" | null;
};
