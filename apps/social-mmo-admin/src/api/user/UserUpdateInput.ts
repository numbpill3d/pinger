import { InputJsonValue } from "../../types";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ReputationUpdateManyWithoutUsersInput } from "./ReputationUpdateManyWithoutUsersInput";
import { AvatarUpdateManyWithoutUsersInput } from "./AvatarUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  posts?: PostUpdateManyWithoutUsersInput;
  reputations?: ReputationUpdateManyWithoutUsersInput;
  avatars?: AvatarUpdateManyWithoutUsersInput;
};
