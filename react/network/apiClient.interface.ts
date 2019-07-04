import { Post } from "../models/post.interface";

export interface APIClient {
  getPosts: () => Promise<Post[]>;
}
