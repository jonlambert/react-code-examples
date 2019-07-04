import * as React from 'react';
import { Post } from '../../models/post.interface';
import { SinglePost } from './SinglePost.component';

interface PostsProps {
  posts: Post[];
}

export const Posts = ({ posts }: PostsProps) => {
  return (
    <React.Fragment>
      {posts.map(post => (
        <SinglePost title={post.title} body={post.body} key={post.id} />
      ))}
    </React.Fragment>
  );
};
