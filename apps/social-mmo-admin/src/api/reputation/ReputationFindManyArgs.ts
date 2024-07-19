import { ReputationWhereInput } from "./ReputationWhereInput";
import { ReputationOrderByInput } from "./ReputationOrderByInput";

export type ReputationFindManyArgs = {
  where?: ReputationWhereInput;
  orderBy?: Array<ReputationOrderByInput>;
  skip?: number;
  take?: number;
};
