import { Thread } from "../thread/Thread";

export type Forum = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  threads?: Array<Thread>;
  owner: string | null;
  title: string | null;
  forumTitle: string | null;
  forumDescription: string | null;
};
