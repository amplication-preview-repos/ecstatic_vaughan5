import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
  text?: string | null;
};
