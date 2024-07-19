import { User } from "../user/User";

export type Reputation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  value: number | null;
  user?: User | null;
};
