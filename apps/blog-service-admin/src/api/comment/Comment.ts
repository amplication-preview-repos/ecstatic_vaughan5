import { Author } from "../author/Author";
import { Post } from "../post/Post";

export type Comment = {
  author?: Author | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  text: string | null;
  updatedAt: Date;
};
