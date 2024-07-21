import { Reward } from "../reward/Reward";

export type Quest = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  reputationRequired: number | null;
  reward?: Reward | null;
  name: string | null;
  questName: string | null;
  questDescription: string | null;
};
