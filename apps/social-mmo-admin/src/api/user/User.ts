import { JsonValue } from "type-fest";
import { Post } from "../post/Post";
import { Reputation } from "../reputation/Reputation";
import { Avatar } from "../avatar/Avatar";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  posts?: Array<Post>;
  reputations?: Array<Reputation>;
  avatars?: Array<Avatar>;
};
