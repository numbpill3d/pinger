import { InputJsonValue } from "../../types";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { ReputationCreateNestedManyWithoutUsersInput } from "./ReputationCreateNestedManyWithoutUsersInput";
import { AvatarCreateNestedManyWithoutUsersInput } from "./AvatarCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  posts?: PostCreateNestedManyWithoutUsersInput;
  reputations?: ReputationCreateNestedManyWithoutUsersInput;
  avatars?: AvatarCreateNestedManyWithoutUsersInput;
};
