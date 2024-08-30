import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  authorId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
