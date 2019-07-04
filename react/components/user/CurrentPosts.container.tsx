import * as React from 'react';
import { useRootStore } from '../../stores/useRootStore.hook';
import { Observer } from 'mobx-react-lite';
import { Posts } from './Posts.component';

interface CurrentPostsContainerProps {}

export const CurrentPostsContainer = (props: CurrentPostsContainerProps) => {
  const {postStore} = useRootStore();

  return <Observer render={() => <Posts posts={postStore.posts} />} />;
}