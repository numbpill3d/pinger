import { Thread } from "../thread/Thread";
import { User } from "../user/User";

export type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  thread?: Thread | null;
  user?: User | null;
  author: string | null;
  postContent: string | null;
  postAuthor: string | null;
  postThread: string | null;
};
