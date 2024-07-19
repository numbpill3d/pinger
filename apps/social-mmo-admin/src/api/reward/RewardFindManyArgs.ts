import { RewardWhereInput } from "./RewardWhereInput";
import { RewardOrderByInput } from "./RewardOrderByInput";

export type RewardFindManyArgs = {
  where?: RewardWhereInput;
  orderBy?: Array<RewardOrderByInput>;
  skip?: number;
  take?: number;
};
