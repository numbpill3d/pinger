import { Forum } from "../forum/Forum";
import { Post } from "../post/Post";

export type Thread = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  title: string | null;
  forum?: Forum | null;
  posts?: Array<Post>;
  creator: string | null;
};
