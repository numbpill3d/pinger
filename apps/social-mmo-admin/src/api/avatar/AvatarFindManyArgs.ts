import { AvatarWhereInput } from "./AvatarWhereInput";
import { AvatarOrderByInput } from "./AvatarOrderByInput";

export type AvatarFindManyArgs = {
  where?: AvatarWhereInput;
  orderBy?: Array<AvatarOrderByInput>;
  skip?: number;
  take?: number;
};
