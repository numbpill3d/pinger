import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReputationCreateInput = {
  value?: number | null;
  user?: UserWhereUniqueInput | null;
};
