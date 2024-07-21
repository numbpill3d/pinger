import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReputationUpdateInput = {
  value?: number | null;
  user?: UserWhereUniqueInput | null;
  points?: number | null;
  reputationPoints?: number | null;
  reputationUser?: string | null;
};
