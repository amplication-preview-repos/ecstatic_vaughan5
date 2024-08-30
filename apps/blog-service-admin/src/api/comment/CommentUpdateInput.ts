import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
  text?: string | null;
};
